import express from 'express'
const router = express.Router()
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProductStories,
  getProducts,
  getProductsByCategory,
  updateProduct,
  createProductReview,
  getTopProducts
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
router.route('/stories').get(getProductStories)
router.route('/:id/reviews').post(protect, createProductReview)
//router.route('/:category').get(getProductsByCategory)

export default router
