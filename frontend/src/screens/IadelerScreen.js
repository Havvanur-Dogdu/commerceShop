import React from 'react'
import { Card, Breadcrumb,Accordion} from 'react-bootstrap'

const IadelerScreen = () => {

    return <>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Başlangıç Sayfası</Breadcrumb.Item>
            <Breadcrumb.Item href="/customer-service">Müşteri Hizmetleri</Breadcrumb.Item>
            <Breadcrumb.Item active>İadeler</Breadcrumb.Item>
            </Breadcrumb>
            <h1>İADELER</h1>
            Siparişinizi iade etmeye karar vermeniz durumunda, lütfen iade formunu doldurup, iade etmek istediğiniz ürünlerle birlikte bize geri gönderin.
            <br /><br /><h5>İADE SEÇENEKLERİMİZ :</h5>
            <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    STANDART İADE SÜRESİ
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Siparişinizi iade etmek için 30 gün süreniz bulunmaktadır.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    İADE NASIL YAPILIR?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    Aşağıdaki adımları izleyerek kolaylıkla iadenizi gerçekleştirebilirsiniz:

                    <br /><br />1. İade sebebinizi en iyi açıklayan iade kodunu faturanızın ön yüzünde bulunan "iade kodu" alanına yazın.

                    <br /><br />2. Faturanızı, iade etmek istediğiniz ürünler ile beraber siparişinizin gönderildiğine benzer bir poşet veya kutuya yerleştirin.

                    <br /><br /><h6>KARGO ŞUBESİNE TESLİM İADE SEÇENEĞİ</h6>

                    Adres niteliği taşıyan alıcı firma kodumuzu 555 olarak paketin üzerine yazın. İade paketinizi herhangi bir Yurtiçi Kargo şubesine teslim edebilirsiniz.

                    <br /><br /><h6>EVDEN TESLİM İADE SEÇENEĞİ</h6>

                    İade paketinizin üzerine LOGO yazın ve sipariş numaranızı ekleyin. İadenizi teslim alabilmeleri için Yurtiçi Kargo'yu 444 99 99 numaralı hattan arayarak kurye talebinde bulunabilirsiniz.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    İADEMİ FARKLI BİR KARGO FİRMASI İLE GÖNDEREBİLİR MİYİM?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    İadelerinizi, sizlere sunmuş olduğumuz kargo firması aracılığıyla yapmanızı öneririz.
                    <br /><br />İadelerinizi, farklı kargo firmaları ile yapmamanızı öneririz. İade prosedürümüz için yalnızca Yurtiçi Kargo ile iade seçeneği sunulmaktadır. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    İADEMİ İÇİN KARGO ÜCRETİ ÖDEYECECK MİYİM?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    İadelerinizi, firmamız tarafından sunulan ve önerilen kargo şirketi ile yapmanız durumunda kargo ücreti ödememektesiniz. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            
            </Accordion>
</>
}
export default IadelerScreen