import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

import { USER_CREATE_FAVORITE_RESET } from '../constants/userConstants'

const Product = ({ product, match }) => {
    const [favorite,setFavorite] =useState(false)
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
/* 
    useEffect(() => {
        if(!userInfo){
           dispatch(redirect)
        }
        
    }, [dispatch])
 */
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image}/>
            </Link>
        
        <Card.Body> 
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} görüntüleme`}
                />
            </Card.Text>

            <Card.Text as='h4'>${product.price}</Card.Text>
        
        </Card.Body>     
    </Card>
    )
}

export default Product
