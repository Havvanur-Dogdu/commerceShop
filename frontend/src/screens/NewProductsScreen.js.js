import React, { useState, useEffect} from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import {
    Row,
    Col
} from 'react-bootstrap'
import Product from '../components/Product'
//import { listProducts } from '../actions/productActions'
import axios from 'axios'

const NewProductsScreen = ({ match }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            const { data } = await axios.get(`/api/products/${match.params.brand}`)

            setProducts(data)
        }

        fetchProducts()
    },[match])

    //const products = []
    return (
        <>
        <h1>YENİ ÜRÜNLER</h1> 
            <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
            ))}
        </Row>    
        </>
    )
}

export default NewProductsScreen
