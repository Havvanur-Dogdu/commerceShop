import React from 'react'
import { Button, Row, Col, Jumbotron,Image } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import bgimage from '../components/bg.jpg'

const AboutUsScreen = () => {
  
    return <>
            <Jumbotron style={{ backgroundImage: `url(${bgimage})` , width:'2000px', height:'400px', marginTop: '30px'}}>
            <strong><h1 style={{color:'white', marginTop:'25px'}}>LOGO GROUP HAKKINDA</h1></strong>
            <strong style={{color:'white'}}>
            Moda ve tasarımı herkes için erişilebilir kılmak, insanlar, gezegen ve endüstrimiz için iyi bir şekilde sorumlu olmak anlamına gelir. 
            <br />Sürdürülebilirlik performans Raporumuzda, daha iyi iş yapmak ve sektörümüzde anlamlı değişikliklere ilham vermek için ilerlememizi, zorluklarımızı ve öğrenmelerimizi açık ve şeffaf bir şekilde rapor ediyoruz.
            </strong>
            <p>
                <Button  href="/" style={{ marginTop:'40px' }} variant="primary">ÜRÜNLERİ İNCELE</Button>
            </p>
            </Jumbotron>
            <FormContainer>
        
            <h1>&emsp; &emsp; &emsp; &emsp; HAKKIMIZDA</h1>
            <div>
                <strong>
                &emsp; &emsp;&emsp;We are a family of brands, driven by our desire to make great &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; design available to everyone in a sustainable way. 
                <br />&emsp; &emsp;&emsp;Together we offer fashion, design and services, that enable people &emsp; &emsp; &emsp; &emsp; &emsp; to be inspired and to express their own personal style, 
                <br />&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;making it easier to live in a more circular way.<br /><br /><br />
                </strong>
            </div>
            </FormContainer>
            <div style={{ margin:'10px' }}>
                <Row>
                <Col><Image style={{width: 350, height: 450}} src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" rounded /></Col>
                <Col><Image style={{width: 350, height: 450}} src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" rounded /></Col>
                
                <Col><Image style={{width: 350, height: 450}}  src="https://images.unsplash.com/photo-1530225112781-56a123a8f1d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" rounded /></Col>
                <Col><Image style={{width: 350, height: 450}}  src="https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" rounded /></Col>
                </Row>
                </div> <br /><br /><br />
            
        

        
</>
}
export default AboutUsScreen