import React, {useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'

const ContactScreen = ({ location, history }) => {

    const [text, setText] = useState('')
    const [sent, setSent] = useState(false)


    const userLogin = useSelector(state => state.userLogin)
    const { loading, error } = userLogin


    const handleSend = async() => {
        setSent(true)
        try{
            await axios.post("http://localhost:5000/send_mail", {
                  text
              })
            } catch(error) {
                console.log(error)
              }
        }


    return <>
        <FormContainer>
            <div style={{ marginTop: '60px' }}>
            <h1>İLETİŞİM</h1>
            </div>
            
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            {!sent ? (
                <Form onSubmit={handleSend}>
                <Form.Group controlId='text'>
                    <Form.Label>Bize E-mail Gönderin</Form.Label>
                    <Form.Control
                    type='text'
                    as='textarea'
                    rows={10}
                    placeholder='Mesajınızı yazınız.. '
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button style={{ marginBottom:'80px' }} type='submit' variant='primary' block>
                    Gönder
                </Button>
                <Form.Group controlId='adres'>
                    <Form.Label><i className="fas fa-map-marker-alt"></i>   Yalı Mahallesi 6523. Sokak No: 32B İç Kapı No: 602 Karşıyaka/İZMİR</Form.Label>
                </Form.Group>
                <Form.Group controlId='telefon'>
                    <Form.Label><i className="fas fa-phone-alt"></i>    +90 555 55 55</Form.Label>
                </Form.Group>
                <Form.Group controlId='mail'>
                    <Form.Label style={{ marginBottom:'100px' }}><i className="fas fa-envelope"></i>   info@logo.com.tr</Form.Label>
                </Form.Group>
            </Form>
            ) : (
                <Message variant="success">Mesajınız tarafımıza iletilmiştir.Geri bildiriminiz için teşekkür ederiz.</Message>
            )}
            

        </FormContainer>
</>
}
export default ContactScreen