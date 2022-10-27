import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,
    Col
} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Filter from '../components/Filter'
import { listProducts } from '../actions/productActions'

const TheBestScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const{ loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

    return (
        <>
        <h1>TÜM ÜRÜNLER</h1> 
        <Filter/>
        {loading ? (
        <Loader />
        ) : error ? (
        <Message variant='danger'>{error}</Message> 
        ) : ( 
            <Row>
            {products.filter(product => product).sort((a,b) => a.rating<b.rating ? 1 : -1).map((filteredProduct) => (
                <Col key={filteredProduct._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={filteredProduct} />
                </Col>
            ))}
        </Row>    
        )}</>
    
)}

export default TheBestScreen
