import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import slugify from 'slugify'
import express from 'express'

// @desc  Fetch all products
// @route GET/api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword && req.query.category
    ? {
        category: req.query.category,
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : req.query.category
    ? {
      category: req.query.category
      }
    : req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      }
    } : {}

  const count = await Product.countDocuments({ ...keyword })

  const filter = req.query.filter
  
  const filterValue = filter === 'fiyat-artan' ? 1 : filter === 'fiyat-azalan' ? -1 : filter === 'en-favoriler' ? -1 : 0
 
  const products = filter && filter === 'en-favoriler'
  ? await Product.find({ ...keyword }).sort({ rating: filterValue }).limit(pageSize).skip(pageSize * (page -1))
  : filter
  ? await Product.find({ ...keyword }).sort({ price: filterValue }).limit(pageSize).skip(pageSize * (page -1))
  : await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page -1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc  Fetch single product
// @route GET/api/products/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc  Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Ürün silindi' })
  } else {
    res.status(404)
    throw new Error('Ürün bulunamadı')
  }
})

// @desc  Create a product
// @route POST /api/products
// @access Private/Admin

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    offer,
    category,
    countInStok,
  } = req.body

  const product = new Product({
    name,
    price,
    user: req.user._id,
    image,
    brand,
    offer,
    category,
    countInStok,
    numReviews: 0,
    description,
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc  Update a product
// @route PUT /api/products/:id
// @access Private/Admin

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    offer,
    category,
    countInStok,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.offer = offer
    product.category = category
    product.countInStok = countInStok

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Ürün bulunamadı')
  }
})

// @desc  Create new review
// @route POST /api/products/:id/reviews
// @access Private

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())

    if(alreadyReviewed) {
      res.status(400)
      throw new Error('Ürünü zaten yorumladınız.')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0)/product.reviews.length;

    await product.save()
    res.status(201).json({ message: 'Yorum eklendi' })
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Ürün bulunamadı')
  }
})


// @desc  Get top rated products
// @route GET /api/products/top
// @access Private

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(5)
  
  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}
