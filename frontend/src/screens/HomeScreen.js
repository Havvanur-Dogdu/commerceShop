import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Filter from '../components/Filter'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {

  const filter = match.params.filter

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, filter))
  }, [dispatch, keyword, pageNumber, filter])

  return (
    <>
    {!keyword && !filter && pageNumber === 1 && <ProductCarousel />}
      <br />
      <Breadcrumb>
        <Breadcrumb.Item active>ALL PRODUCTS</Breadcrumb.Item>
      </Breadcrumb>
      <Filter/>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
         <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
    
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
            filter={filter}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
