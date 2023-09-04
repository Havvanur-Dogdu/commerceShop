import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,
    Col
} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Product from '../components/Product'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import Filter from '../components/Filter'
import { listProducts } from '../actions/productActions'


const ProductByCategoryScreen = ({ match }) => {

    const filter = match.params.filter

    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const category = match.params.category

    const isAdmin = match.params.isAdmin

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    console.log(products.length)
  
    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber, category, filter))
    }, [dispatch, keyword, pageNumber, category, filter])

    return (
        <>
        <Breadcrumb style={{ marginTop: '20px' }}>
          <Breadcrumb.Item href="/">ALL PRODUCTS</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {category.toUpperCase()}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Filter/>
       {loading ? (
        <Loader />
        ) : error ? (
        <Message variant='danger'>{error}</Message> 
        ) : ( 
           <>
            <Row>
            {products.map((filteredProduct) => (
                <Col key={filteredProduct._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={filteredProduct} />
                </Col>
            ))}
        </Row>
        <>
        <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
            category={category}
            filter={filter}
          />
        </>
           </>  
        )} 
          </>
    
)}

export default ProductByCategoryScreen
