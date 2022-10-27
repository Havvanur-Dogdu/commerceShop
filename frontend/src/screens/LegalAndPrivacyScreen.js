import React from 'react'
import { Card, Breadcrumb,Accordion} from 'react-bootstrap'

const LegalAndPrivacyScreen = () => {

    return <>
        
            <Breadcrumb>
            <Breadcrumb.Item href="/">Başlangıç Sayfası</Breadcrumb.Item>
            <Breadcrumb.Item active>Yasal Kurallar & Gizlilik</Breadcrumb.Item>
            </Breadcrumb>
            <h1>LOGO GRUP GİZLİLİK BİLDİRİMİ</h1>
            <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    ONLİNE'DA VE MAĞAZADA SATIN ALIM
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <h6 style={{ fontWeight: 900 }}>
                        Kişisel verilerinizi neden kullanıyoruz?
                        </h6><br />
                    Kişisel verilerinizi, size talep ettiğiniz bilgiyi, ürünleri ve hizmetleri sunmak için online’daki veya mağazadaki satın alım işlemlerinde kullanıyoruz. Bu bağlamda kişisel verilerinizi, siparişinizi ve ödeme işlemlerinizi işleyebilmek ve teslimatlarınızı, taleplerinizi, iadelerinizi ve geri ödemelerinizi güvenli ve etkili bir şekilde yönetmek için kullanıyoruz.
                    <br /><br />Yukarıdaki amaçlar için toplanan satın alma emri ve ödeme verileri, pazarlama, iş geliştirme ve analiz amacıyla, çevrimiçi ve çevrimdışı satışlarla bağlantılı dolandırıcılık ve hırsızlıkları tespit etmek ve yürürlükteki yasalara uymak için belirli koşullar ve sınırlamalara tabi olarak da kullanılacaktır. 

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}> Kişisel verilerinizi nasıl kullanıyoruz?</h6><br />
                    Sizden bir sipariş verirken veya ödeme yaparken aldığımız kişisel veriler, yalnızca bu siparişi işlemek ve talep edilen ürün ve hizmetleri sunmak için gereken ölçüde kullanılacaktır. 

                    <br /><br />Bir sipariş verdiğinizde, bir ödeme yaptığınızda, bir ürünü iade etmek istediğinizde veya finansal bir hizmet için abone olduğunuzda kişisel verilerinizi kullanarak kimliğinizi ve fiil ehliyetinizi, bize sunduğunuz finansal bilgilerin doğruluğunu, kredi notunuzu, karşılıksız çek kullanımını veya diğer yasa dışı faaliyetleri önlemek için teyit ediyoruz.

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}> Kişisel verilerinize kim erişebilir?</h6><br />
                    Kişisel verilerinizi hedeflenen amacı yerine getirmek için gerektiğinde LOGO Group bünyesinde paylaşıyoruz. Aynı nedenle kişisel veriler bizim için sipariş tamamlama ve ödeme işleme gibi belirli görevleri yerine getiren tedarikçilerle de paylaşılır. LOGO, tedarikçilerle ilgili tüm sorumlulukları üstlenir. 

                    <br /><br />Kişisel verileri zaman zaman elektronik iletişim sağlayıcıları, bankalarve finansal hizmet sağlayıcıları ve posta hizmetleri gibi bağımsız üçüncü taraflarla da paylaşabiliriz. Bu alıcıların çoğunun kişisel verilerinizi kendi haklarıyla işlemek için bağımsız bir hak veya yükümlülüğü olduğunu aklınızda bulundurun.

                    <br /><br />Burada açıkça belirtilmediği sürece verilerinizi üçüncü taraflara asla aktarmayız, satmayız veya takas etmeyiz.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    REKLAM VE PROMOSYONLAR
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <h6 style={{ fontWeight: 900 }}>
                        Kişisel verilerinizi neden kullanıyoruz?
                        </h6><br />
                    Kişisel verilerinizi stil ve alışveriş önerileri, bildirimler, bilgiler, anketler ve davetiyeler de dahil olmak üzere reklam ve promosyonlar oluşturmak ve göndermek için kullanacağız.  

                    <br /><br />Reklamlar, promosyonlar ve diğer doğrudan pazarlama iletişimleri tercihlerinize göre elektronik posta, kısa mesaj, telefon görüşmeleri veya posta yoluyla iletilecek ve mobil uygulamada, sosyal medya kanallarında veya web tarayıcınızda görüntülenecektir. 

                    <br /><br />Çevrimiçi müşteri deneyimini optimize etmek için size algoritmik analiz ve tercihleriniz, ilgi alanlarınız ve davranışlarınız ile ilgili tahminlere dayalı olarak kişiselleştirilmiş reklamlar ve promosyonlar sunarız.   

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}>Kişisel bilgilerinizi nasıl kullanıyoruz?</h6><br />
                    Yalnızca hesabınızı oluşturduğunuzda, bizimle alışveriş yaptığınızda, üyelik açtığınızda, bültenlere abone olduğunuzda veya bizimle başka bir şekilde etkileşimde bulunduğunuzda sizden doğrudan alınmış verileri kullanırız.    

                    <br /><br />Açıkça belirtmediğimiz sürece, veri sağlayıcılar veya diğer harici kaynaklardan gelen kişisel verileri asla edinmez, kullanmaz, depolamaz ve bu tür verilere pazarlama amaçlı olarak erişmeyiz.

                    <br /><br />LOGO, sosyal ağlarda reklam yapmak için Facebook, Instagram, Snapchat, Pinterest ve YouTube gibi reklam ortaklarıyla ve Google Ads ve Google Marketing Platform gibi dijital reklam ağları için Google ile işbirliği yapar.

                    <br /><br />Reklam ortakları, tercihlerinizi ve ilgi alanlarınızı tahmin etmek için tarafımızdan sağlanan ve çerezlerden ve diğer teknolojilerden toplanan verileri kullanır ve çevrimiçi reklam ağları üzerinden aracılık edilen reklam alanlarındaki reklamları seçerken dikkate alır. Bu, sektörde standart bir uygulamadır ve genelde "yeniden hedefleme" olarak bilinir. Yeniden hedefleme, sizinle mümkün olduğunca alakalı reklam kampanyaları yürütmemize, reklam materyallerinin verimliliği ve erişimi ile reklam ortaklarının kampanyaların performansını ve verimliliğini ölçmemize olanak tanır. 

                    <br /> <br />Reklam ortakları, cihazınızda veya uygulamalarınızda depolanan verilere erişerek web sitelerimizi ve hizmetlerimizi kullanımınızı izlemek için çerezler ve benzer teknolojiler kullanır.

                    <br /><br />Bu Gizlilik Bildirimi'nin Çerezler bölümünden çerezler ve diğer izleme teknolojileri hakkında daha fazla bilgi edinebilirsiniz. 

                    <br /><br />Her reklam ortağı, kişisel verilerin uluslararası transferleri de dahil olmak üzere, denetleyici olarak işlenmesinde kendi katkılarından sorumludur.

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}>Kişisel verilerinize kim erişebilir?</h6><br />
                    Kişisel verilerinizi, işlenme amacına uygun şekilde gerektiğinde LOGO Group içinde paylaşabiliriz. Aynı nedenle kişisel veriler, veri analizi ve pazarlama içeriği oluşturma gibi, yalnızca bizim adımıza belirli görevleri yerine getiren tedarikçilerle de paylaşılır. LOGO tedarikçilerinden her zaman tam olarak sorumludur. 

                    <br /><br />Kişisel verileri zaman zaman Reklam Ortakları, medya ajansları ve elektronik iletişim sağlayıcıları gibi bağımsız üçüncü taraflarla da paylaşabiliriz. Bu alıcıların çoğunun kişisel verilerinizi denetleyici olarak işlemek için bağımsız bir hak veya yükümlülüğü olduğunu aklınızda bulundurun. 

                    <br /><br />Burada açıkça belirtilmedikçe, verilerinizi hiçbir zaman üçüncü taraflarla paylaşmayız, onlara satmayız veya takas etmeyiz.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    LOGO HESABI
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <h6 style={{ fontWeight: 900 }}>Kişisel verilerinize kim erişebilir?</h6><br />
                    Kişisel verilerinizi hedeflenen işleme amacını yerine getirmek için gerektiğinde LOGO Group bünyesinde paylaşabiliriz. Aynı nedenle kişisel veriler bizim için veri analizi ve pazarlama içeriği üretmek gibi belirli görevleri yerine getiren tedarikçilerle de paylaşılır. LOGO, tedarikçilerle ilgili tüm sorumlulukları üstlenir. 

                    <br /><br />Örneğin mesajlar ve bildirimler göndermek gibi elektronik iletişimler veya başka herhangi bir nedenle size ulaşan bağımsız üçüncü taraflarla kişisel verileri zaman zaman paylaşabiliriz, lütfen bu alıcı üçüncü tarafların çoğunun kişisel verilerinizi kendileri adına işlemek için bağımsız bir hak veya yükümlülüğe sahip olduğunu unutmayın. 

                    <br /><br />Burada açıkça belirtilmediği sürece verilerinizi üçüncü taraflara asla aktarmayız, satmayız veya takas etmeyiz.

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}>Kişisel verilerinizin işlenmesinin yasal dayanağı nedir?</h6><br />
                    Hesabınız için kişisel verilerinizin işlenmesi, LOGO hesabınızı oluşturduğunuzda verdiğiniz onaya dayanır.

                    <br /><br />Size ürün önerileri gibi kişiselleştirilmiş bir online deneyim sunmak için kişisel verilerinizin işlenmesinin temeli meşru menfaatimize dayanmaktadır.  

                    <br /><br /> Onayınızı geri çekme hakkı:
                    <br />İstediğiniz zaman rızanızı geri çekerek hesabınızı sonlandırma hakkına sahipsiniz. Rızanızı geri çekmeye karar verirseniz kişisel verilerinizin işlenmesi hemen durdurulacaktır. Artık bir LOGO Hesabı kullanıcısı olmanın avantajlarından yararlanamayacaksınız. 

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}>Rızanızı nasıl geri çekebilirsiniz?</h6>
                    <br /> Hesabım sekmesinden hesap ayarlarınızı değiştirerek rızanızı kendiniz geri çekebilir veya customerservice.tr@hm.com adresinden Müşteri Hizmetleriyle iletişime geçebilirsiniz.  

                    <br /><br />
                    <h6 style={{ fontWeight: 900 }}>Verilerinizi ne kadar süreyle saklıyoruz?</h6>
                    <br /> Kişisel verilerinizi hesabı kullanabilmeniz için gerekenden daha uzun süre kullanmayacağız.  

                    <br /><br />  Size yalnızca bir LOGO hesabı sağlamak amacıyla toplanan ve kullanılan kişisel veriler sonlandırma gerçekleştiği anda silinecektir.

                    <br /><br />  Bununla birlikte, henüz yerine getirmediğimiz yükümlülüklerimiz sebebiyle veya başka herhangi bir nedenle, örneğin aktif bir siparişiniz veya ödenmemiş bir borcunuz varsa, verilerinizi tutmaya ve kullanmaya devam edebiliriz.

                    <br /><br />  Verilerinizin işlenmesine itiraz etme hakkınız:
                    <br /> LOGO’in meşru menfaatiyle ilgili olarak kişisel verilerinizin işlenmesine itiraz etme hakkına sahipsiniz, bunun için dataprotection.tr@hm.com adresiyle iletişime geçebilirsiniz. Sonrasında hesabınız silinecek ve artık size hizmetlerimizi devam ettiremeyeceğiz.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    GÜVENLİK VE EMNİYET
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    <h6 style={{ fontWeight: 900 }}>Kişisel verilerinizi neden kullanıyoruz?</h6><br />
                        Müşterilerimizi, kullanıcılarımızı, ziyaretçilerimizi, varlıklarımızı ve işletmemizi şiddet, dolandırıcılık, hırsızlık, kötüye kullanım ve diğer kötü niyetli faaliyetlere karşı korumak için LOGO, güvenlik ve emniyet amacıyla bir dizi farklı önlem aldı. Bu önlemlerden bazıları kişisel verilerin toplanmasını ve işlenmesini gerektirecektir.

                        <br /><br />
                        <h6 style={{ fontWeight: 900 }}>Verilerinizi nasıl kullanıyoruz?</h6>
                        <br />Verilerinizi nasıl işlediğimiz ve hangi kişisel verileri kullandığımız uygulama ve kullanım alanına göre farklılık gösterir. Örneğin, online kayıp veya dolandırıcılığı tespit etmek için sipariş geçmişinizi, ödeme verilerinizi ve alışveriş davranışınızı kullanabiliriz.

                        <br /><br />İnternet tanımlama bilgilerinden, piksellerden, eklentilerden veya diğer internet izleme teknolojilerinden aldığımız kişisel verileri aynı amaçlarla kullanabiliriz.

                        <br /><br />Bu Gizlilik Bildiriminin özel Tanımlama Bilgileri bölümünden daha fazla bilgi edinebilirsiniz. 

                        <br /><br />Kişisel verilerinizi hedeflenen amacı yerine getirmek için gerektiğinde LOGO Group bünyesinde paylaşabiliriz. 

                        <br /><br />Kişisel verilerinizi güvenlik ve emniyet amacıyla üçüncü taraflarla da paylaşabiliriz. Örneğin, verilerinizi olası dolandırıcılık ve hırsızlıkları tespit etmemize ve önlememize yardımcı olan şirketlerle paylaşacağız. 

                        <br /><br />İlgili bilgileri hak talebinin ele alınması için sigorta şirketleriyle ve yasal zorunluluk gereği bunu yapmaya mecbur bırakıldığımız sürece kanun uygulayıcı kurumlarla paylaşabiliriz. 

                        <br /><br />Bu tür üçüncü taraf alıcılar, kişisel verilerinizi kendi çıkarları doğrultusunda veya yasal bir zorunluluk uyarınca işleme konusunda bağımsız bir hak veya yükümlülüğe sahiptir. 

                        <br /><br />
                        <h6 style={{ fontWeight: 900 }}>Kişisel verilerinizin işlenmesinin yasal dayanağı nedir?</h6>
                        <br />Her amaç için yalnızca gereken süre boyunca kişisel verilerinizi saklayacağız.

                        <br /><br />Yasalar veya kamu otoritesi uyarınca verileri daha uzun süre tutmak ve/veya işlemek zorunda olmadığımız sürece güvenlik kamerası görüntülerini maksimum 30 gün süreyle saklayacağız.

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
</>
}
export default LegalAndPrivacyScreen