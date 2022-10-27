import React from 'react'
import { Card, Breadcrumb,Accordion} from 'react-bootstrap'

const TeslimatScreen = () => {

    return <>
        
            <Breadcrumb>
            <Breadcrumb.Item href="/">Başlangıç Sayfası</Breadcrumb.Item>
            <Breadcrumb.Item href="/customer-service">Müşteri Hizmetleri</Breadcrumb.Item>
            <Breadcrumb.Item active>Teslimat</Breadcrumb.Item>
            </Breadcrumb>
            <h1>TESLİMAT</h1>
            Siparişiniz 2 - 4 iş günü içerisinde sizlere teslim edilecektir.<br /><br />
            <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    SİPARİŞİM HANGİ KARGO FİRMASI İLE TESLİM EDİLECEK?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Siparişiniz, anlaşmalı olduğumuz Yurtiçi Kargo firması ile teslim edilecektir. Bazı durumlarda siparişlerin teslimatı HepsiJet ile de yapılabilmektedir. Bu durumda siparişinizin hangi kargo şirketi ile sevk edileceği konusunda sizleri bilgilendireceğiz.

                    <br /><br />Teslimatlar için standart gönderi seçeneği sunulmaktadır. Siparişleriniz, hesabınızda veya ödemeye devam ederken belirlediğiniz adrese teslim edilmektedir.

                    <br /><br />Siparişinizin farklı bir adrese teslim edilmesini dilerseniz, siparişinizi oluşturmadan önce hesabınızdaki ayarlar üzerinden yeni adres bilgisi girebilirsiniz.
                     </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    TESLİMAT ÜCRETİ NE KADAR?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    100 TL ve üzeri siparişlerde kargo ücretsizdir. Standart gönderi ücreti 10.00  TL'dir. Sipariş tutarı, siparişinizin boyutu ve ağırlığını gözetmeksizin sabit kalacaktır.
                    <br /><br />Siparişinizi tek kargo ile gönderemememiz ve birkaç paket halinde kargolamamız durumunda ekstra gönderi ücretine tabi tutulmayacaksınız. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    EVE TESLİMAT DENEMELERİ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    Kargo firmaları, siparişinizi teslim etmek için kargo paketinizi bir kez dağıtıma çıkaracaklardır. Adresinizde kimse olmaması durumunda kargo paketinizi 6 gün içerisinde Yurtiçi Kargo şubesinden teslim alabilirsiniz. 

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            
            </Accordion>
</>
}
export default TeslimatScreen