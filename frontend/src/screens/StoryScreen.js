import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Row,
    Col,
} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Story from '../components/Story'
import { listProductStories } from '../actions/productActions'


const StoryScreen = ({ match }) => {

    const dispatch = useDispatch()

    const productStory = useSelector(state => state.productStory)
    const{ loading, error, stories } = productStory

    useEffect(() => {
        dispatch(listProductStories())
    },[dispatch])

    return (
        <>
        <h1>HİKAYELER</h1> 
        {loading ? (
        <Loader />
        ) : error ? (
        <Message variant='danger'>{error}</Message> 
        ) : ( 
            <Row>
            {stories.map((story) => (
                <Col key={story._id} sm={12} md={6} lg={4} xl={3}>
                <Story story={story} />
                </Col>
            ))}
        </Row>     
        )}</>
    
)}

export default StoryScreen
