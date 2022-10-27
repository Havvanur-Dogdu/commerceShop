import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Stories from 'react-insta-stories'
import { WithSeeMore } from 'react-insta-stories'

const Story = ({ story, action }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/story/${story._id}`}>
                <Card.Img variant="top" src={story.url}/>
            </Link>
        
        <Card.Body> 
            <Link to={`/story/${story._id}`}>
                <Card.Title aas='div'>
                <strong>{story.url}</strong>
                </Card.Title>
            </Link>

    <Card.Text as='h3'>${story.heading}</Card.Text>
    <Card.Text as='h3'>${story.subheading}</Card.Text>
        </Card.Body>   
    </Card>   
    )
}

export default Story
