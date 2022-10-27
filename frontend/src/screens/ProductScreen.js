import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { listProducts } from '../actions/productActions'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productList = useSelector((state) => state.productList)
  const { loadingList, errorList, products } = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert('Yorum gönderildi!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(match.params.id))
    dispatch(listProducts())
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Geri
      </Link>
      {loading && loadingList ? (
        <Loader />
      ) : error && errorList ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flash'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} görüntüleme`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Fiyat: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Açıklama: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Fiyat:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Stok Durumu:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'Stokta var' : 'Stokta yok'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Adet</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Karta Ekle
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Yorumlar</h2>
              {product.reviews.length === 0 && (
                <Message>Ürüne henüz yorum yapılmadı</Message>
              )}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} text={`${product.numReviews} reviews`} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Ürün için kullanıcı deneyimi yazın</h2>
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Seciniz...</option>
                          <option value='1'>1 - Çok kötü</option>
                          <option value='2'>2 - Kötü</option>
                          <option value='3'>3 - İyi</option>
                          <option value='4'>4 - Çok iyi</option>
                          <option value='5'>5 - Mükemmel</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Yorum</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type='submit' variant='primary'>
                        Gönder
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Ürünü yorumlamak için lütfen{' '}
                      <Link to='/login'>oturum açın</Link>
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
      
          <Row style={{ marginTop:'10px' }}>
          <h2>Bu Ürün Kategorisinde Bulunan Ürünler</h2>
          </Row>
          {(product.category === 'Kadın' && product.subCategory ==='woman-ust-giyim') ? 
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Kadın" && p.subCategory ==='woman-ust-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row>
          : null }
          {(product.category === 'Kadın' && product.subCategory ==='woman-dis-giyim') ? 
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Kadın" && p.subCategory ==='woman-dis-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row> : (product.category === 'Kadın' && product.subCategory ==='woman-alt-giyim') ? 
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Kadın" && p.subCategory ==='woman-alt-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row> : null}

          {(product.category === 'Erkek' && product.subCategory ==='man-alt-giyim') ? <>
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Erkek" && p.subCategory ==='man-alt-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row>
          </> : null}

          {(product.category === 'Erkek' && product.subCategory ==='man-dis-giyim') ? <>
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Erkek" && p.subCategory ==='man-dis-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row>
          </> : null}

          {(product.category === 'Erkek' && product.subCategory ==='man-ust-giyim') ? <>
          <Row>
              {products.filter(p => (p._id !== product._id && p.category === "Erkek" && p.subCategory ==='man-ust-giyim')).map((filteredPd) => (
                  <Col key={filteredPd._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${filteredPd._id}`}>
                        <Card.Title as='div'>
                        <strong>{filteredPd.name}</strong>
                        </Card.Title>
                    </Link>
                <Card.Body> 
                <Link to={`/product/${filteredPd._id}`}>
                        <Card.Img variant="top" src={filteredPd.image}/>
                    </Link>

                    <Card.Text style={{ marginTop:'10px' }} as='h4'>${filteredPd.price}</Card.Text>
                      
                  </Card.Body>     
              </Card>
              </Col> 
              ))}
          </Row>
          </> : null}

        


          
        </>
      )}
    </>
  )
}

export default ProductScreen
