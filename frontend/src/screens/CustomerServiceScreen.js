import React from 'react'
import {Row, Col, Breadcrumb,Tab} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

const CustomerServiceScreen = () => {

    return <>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Başlangıç Sayfası</Breadcrumb.Item>
            <Breadcrumb.Item active>Müşteri Hizmetleri</Breadcrumb.Item>
            </Breadcrumb>
            <h1>SİZE NASIL YARDIMCI OLABİLİRİZ?</h1><br /><br />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link4">
                    <Row>
                        <Col sm={4}>
                        <ListGroup>
                        <Row>
                            <Col sm={1}><i className="fas fa-truck" style={{ marginTop:'15px' }} ></i></Col>
                            <Col sm={11}>
                                <ListGroup.Item action href="/teslimat">
                                Teslimat
                                </ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}><i className="fas fa-undo-alt" style={{ marginTop:'15px' }} ></i></Col>
                            <Col sm={11}>
                                <ListGroup.Item action href="/iadeler">
                                İadeler
                                </ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}><i className="fas fa-phone" style={{ marginTop:'15px' }} ></i></Col>
                            <Col sm={11}>
                                <ListGroup.Item action href="#link4">
                                Bize Ulaşın
                                </ListGroup.Item>
                            </Col>
                        </Row>
                        </ListGroup>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link4">
                            <h1>BİZE ULAŞIN</h1><br />
                            Beklenenin üzerinde bir yoğunluk yaşamaktayız, bu nedenle size yanıt verme süremiz uzayabilir. Online mağazamızla alakalı bir bilgi arıyorsanız lütfen buradan müşteri hizmetleri sayfamızı ziyaret ediniz.

                            <br /><br />
                            <h6>BİZE ULAŞIN</h6>
                            İstediğiniz zaman bize ulaşabilirsiniz.<br /><br />

                            <h6>ÇALIŞMA SAATLERI</h6>
                            Pazartesi - Cuma: 09:00 - 21: 00<br />
                            Cumartesi - Pazar: 09:00 - 17: 00<br />
                            Resmi Tatiller: 09:00 - 17:00<br /><br />

                            <h6>TELEFON</h6>
                            0850 55 55 555 <br />
                            
                            <h6>E-POSTA ADRESI</h6>
                            musterihizmetleri.tr@logo.com<br />
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
            
</>
}
export default CustomerServiceScreen