import React, {useState ,useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Nav, Form, Container, Button, Row,Modal } from 'react-bootstrap'

const Footer = ({match, history}) => {
    const [text, setText] = useState('')
    const [sent, setSent] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

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

        function MyVerticallyCenteredModal(props) {
            return (
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    KVKK
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                  Bu beyan logo.com.tr  gizlilik politikasını içerir. Logo.com.tr web sitesini ziyaret ederek aşağıdaki şartları ve kuralları uygulamayı kabul etmiş sayılmaktasınız.

                <br /><br />logo.com.tr  üyelik aşamasında ve daha sonrasında sizden bazı kişisel bilgilerinizi talep eder. Kişisel bilgilerinizin korunması ve gizliliğinizin sürdürülebilmesi, logo.com.tr olarak birinci önceliğimizdir. Bu nedenle vermiş olduğunuz bilgiler, Üyelik Sözleşmesi’nde belirtilen kurallar ve amaçlar dışında herhangi bir kapsamda kullanılmayacak, üçüncü şahıslarla paylaşılmayacaktır.

                <br /><br />Sistemle ilgili sorunların tespiti ve söz konusu sorunların en hızlı şekilde giderilebilmesi için,logo.com.tr, gerektiğinde kullanıcıların IP adresini tespit etmekte ve bunu kullanmaktadır. IP adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı demografik bilgi toplamak amacıyla da kullanılabilir.

                <br /><br />Sitemizdeki kayıt formları, sipariş formları, anketler ve yarışmalarda, irtibat bilgilerinizi (adınız, soyadınız, email adresiniz, telefon numaralarınız ve posta adresiniz) vermeniz talep edilmektedir. Ayrıca, satın alma formunda kredi kartı bilgilerinizi vermeniz gerekmektedir. Yukarıda bahsedilen kişisel bilgileriniz; siparişlerinizi almak, ürün ve hizmetlerimizi sunmak, ödemelerinizi gerçekleştirmek, siparişlerinizi ulaştırmak ve siparişleriniz ile ilgili bilgi vermek, ürünler ve hizmetler hakkında pazarlama amacıyla sizinle irtibata geçmek, bilgilerinizi güncellemek, üyeliğinizi yönetmek ve sürdürmek, ilginizi çekebilecek ürün ve hizmetleri önermek ve 3. şahısların teknik, lojistik ve benzeri diğer işlevlerini bizim adımıza yerine getirmelerini sağlamak amacıyla kullanılmaktadır.

                <br /><br />logo.com.tr üyesi olduğunuz andan itibaren, aksi tarafınızdan talep edilmediği sürece, bilgilendirme emailleri, e-mail adresinize gönderilecektir. Dilediğiniz zaman bu e-maillerle ilgili değişiklik yapma, hizmetten vazgeçme ve yeniden başlatma hakkınız bulunmaktadır. Bu e-maillerin içeriği; satın almış olduğunuz ürün veya ürünlerle ilgili bilgiler, ilgileneceğinizi düşündüğümüz diğer ürünler, 3. kişilerin reklamlarını ve benzeri bilgileri içerebilir. Demografik bilgiler, sitemizi kullanıcılarımızın ilgi alanlarına göre uyarlamak için kullanılmaktadır. Bu bilgiler, reklamların hedef kitleye uyarlanabilmesini temin etmek maksadıyla ve yalnızca diğer kullanıcılara ait bilgilerle birlikte olmak üzere, reklam verenlerle paylaşılabilir. Bu bilgilerde herhangi bir şekilde kişisel bilgi verilmez, sadece grup olarak kullanıcı eğilimleri ile ilgili bir takım çıkarımlar yapmak ve segmentasyon amacıyla kullanılır. Toplanan mali bilgiler satın aldığınız ürün ve hizmetleri size fatura etmek için kullanılmaktadır. Sitemizde bir satın alma yaptığınızda size ait mali bilgilerin, işleminizi gerçekleştirmek için gerekli 3. şahıslara (bankalar, kredi kartı şirketleri vb.) verilmesini kabul etmektesiniz. Paylaşılacak bilgiler; kredi kartı numarası, son kullanma tarihi, CVV2 de dahil olmak üzere gerekli tüm mali bilgileri içerir.

                <br /><br />Tüm kredi kartı ve kişisel bilgileriniz, internet güvenlik standardı olan SSL Secure sistemi ile 2048 bit şifrelenmiştir. Bu şekilde, internet üzerindeki dolaşımları sırasında herhangi bir şekilde bu bilgilerinizin istenilmeyen kişi veya kurumlar tarafından ele geçirilmesi önlenmiştir. Gizlilik politikamız ile ilgili her türlü soru ve öneriniz için sitemizdeki iletişim bölümünden bize email gönderebilirsiniz.
                </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Kapat</Button>
                </Modal.Footer>
              </Modal>
            );
          }
    
    return (

      <footer className="bg-dark text-center text-white">
            <Container><br /><br /><br />
            <Row>
                <Col>
                    <Row><p className="text-light">ONLİNE ALIŞVERİŞ</p></Row>
                    <Row><a href="woman" ><button type="button" className="btn btn-link text-light">KADIN</button></a></Row>
                    <Row><a href="man" ><button type="button" className="btn btn-link text-light">ERKEK</button></a></Row>
                    <Row><a href="child" ><button type="button" className="btn btn-link text-light">ÇOCUK</button></a></Row>
                    <Row><a href="outlet" ><button type="button" className="btn btn-link text-light">OUTLET</button></a></Row>
                </Col>
                <Col>
                    <Row><p className="text-light">KURUMSAL BİLGİLER</p></Row>
                    <Row><a href="about-us" ><button type="button" className="btn btn-link text-light">LOGO Hakkında</button></a></Row>
                    <Row><a href="iadeler" ><button type="button" className="btn btn-link text-light">İade Şartları</button></a></Row>
                    <Row><a href="teslimat" ><button type="button" className="btn btn-link text-light">Kargo ve Teslimat</button></a></Row>
                    <Row><button type="button"  onClick={() => setModalShow(true)} className="btn btn-link text-light">KVKK</button></Row>
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}
      />
                
                </Col>
                <Col>
                    <Row><p className="text-light">YARDIM VE HIZLI ERİŞİM</p></Row>
                    <Row><a href="customer-service" ><button type="button" className="btn btn-link text-light">Müşteri Hizmetleri</button></a></Row>
                    <Row>{userInfo ? (<a href="profile"><button type="button" className="btn btn-link text-light">Hesabım</button></a>) : (<a href="register"><button type="button" className="btn btn-link text-light">Hesap Oluştur</button></a>) }</Row>                    
                    <Row><a href="legal-and-privacy" ><button type="button" className="btn btn-link text-light">Yasal Kurallar & Gizlilik</button></a></Row>
                    <Row><a href="contact" ><button type="button" className="btn btn-link text-light">İletişim</button></a></Row>
                </Col>
                <Col>
                    <Row><p className="text-light">Haber Bültenine Abone Ol</p></Row>
                    <>
                    {!sent ? (
                        <Form onSubmit={handleSend}>
                        <Form.Group controlId='text'>
                            <Form.Control
                            type='email'
                            placeholder='Email '
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                        Abone Ol
                        </Button>
                    </Form>
                    ) : (
                            <h5>Haber bültenimize abone oldunuz🥳</h5>
                    )}
                    </><br /><br />
                    <Row>
                        <Col><i className="fab fa-instagram"></i></Col>
                        <Col><i className="fab fa-twitter"></i></Col>
                        <Col><i className="fab fa-facebook"></i></Col>
                        <Col><i className="fab fa-youtube"></i></Col>
                    </Row>
                    </Col>
            </Row><br /><br />
            <Row>
                <Col className='text-center py-3'>Copyright &copy; LOGO.</Col>
            </Row>
            </Container>
            </footer>
            
    
   )
}

export default Footer
