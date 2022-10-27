import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET, PRODUCT_DETAILS_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id
  const [name, setName] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStok, setCountInStok] = useState(0)
  const [offer, setOffer] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      dispatch({ type: PRODUCT_DETAILS_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setOffer(product.offer)
        setCategory(product.category)
        setCountInStok(product.countInStok)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        offer,
        category,
        description,
        countInStok,
      })
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Geri
      </Link>
      
      <FormContainer>
        <h1>Ürün Düzenle</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>İsim</Form.Label>
              <Form.Control
                type='name'
                placeholder='İsim '
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Fiyat</Form.Label>
              <Form.Control
                type='number'
                placeholder='Fiyat '
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                as='select'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=''>Seciniz...</option>
                <option value='Kadın'>Kadın</option>
                <option value='Erkek'>Erkek</option>
                <option value='Elektronik'>Elektronik</option>
                <option value='4'></option>
                <option value='5'></option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Fotoğraf</Form.Label>
              <Form.Control
                type='text'
                placeholder='Fotoğraf URL '
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File id='image file' label='Dosya seç' custom onChange={uploadFileHandler} ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Marka</Form.Label>
              <Form.Control
                type='text'
                placeholder='Marka '
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStok'>
              <Form.Label>Stok Adeti</Form.Label>
              <Form.Control
                type='number'
                placeholder='Ürün adeti '
                value={countInStok}
                onChange={(e) => setCountInStok(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Açıklama</Form.Label>
              <Form.Control
                type='text'
                placeholder='Açıklama '
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Güncelle
            </Button>
          </Form>
          </>
        )}
      </FormContainer>
    </>
  )
}
export default ProductEditScreen
