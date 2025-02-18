document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    // Projeler için veri
    const projects = {
        "1": {
            title: "Fabrika Otomasyon Projesi",
            description: "Tam otomatik üretim hattı kurulumu ve elektrik altyapısı.",
            sections: [
                {
                    heading: "Elektrik Altyapı Çalışmaları",
                    text: "Modern Plaza İnşaatı projesinde elektrik altyapı çalışmaları, güvenli ve verimli bir sistem kurmak amacıyla gerçekleştirilmiştir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Isıtma Sistemleri",
                    text: "Modern Plaza'nın ısıtma sistemleri, enerji verimliliği sağlamak için tasarlanmıştır.",
                    image: "images/leo2.jpg"
                },
                {
                    heading: "Yangın Güvenlik Sistemleri",
                    text: "Projeye entegre edilen yangın güvenlik sistemleri, bina sakinlerinin güvenliğini sağlamak için kurulmuştur.",
                    image: "images/leo3.jpg"
                },
                {
                    heading: "Akıllı Bina Sistemleri",
                    text: "Proje, akıllı bina otomasyonu ile tüm sistemlerin merkezi olarak kontrol edilmesini sağlar.",
                    image: "images/leo4.jpg"
                },
                {
                    heading: "Akıllı Tarım Sistemleri",
                    text: "Sulama, gübreleme ve sıcaklık kontrol sistemleri, proje kapsamında entegre edilmiştir.",
                    image: "images/leo5.jpg"
                }
            ]
        },
        "2": {
            title: "Solar Enerji Santrali",
            description: "5MW güneş enerjisi santrali kurulumu.",
            sections: [
                {
                    heading: "Panel Kurulum Çalışmaları",
                    text: "Güneş panellerinin kurulum çalışmaları, optimum verim elde etmek için yerleşim planına göre yapılmıştır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Enerji Dönüşüm Sistemi",
                    text: "Yüksek verimli inverter sistemleri ile güneş enerjisinin elektriğe dönüştürülmesi sağlanmıştır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Depolama Sistemleri",
                    text: "Güneş enerjisi depolama sistemleri, enerji üretiminin gece saatlerinde de kullanılabilmesini sağlamak için kurulmuştur.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Veri İzleme ve Kontrol Sistemi",
                    text: "Proje kapsamında, sistem performansının izlenmesi ve yönetilmesi için gelişmiş veri izleme yazılımları kullanılmıştır.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Sürdürülebilir Enerji Yönetimi",
                    text: "Enerji verimliliği ve çevre dostu enerji üretim sistemleri sayesinde projenin sürdürülebilirliği artırılmıştır.",
                    image: "images/leo1.jpg"
                }
            ]
        },
        "3": {
            title: "Plaza Otomasyon Sistemi",
            description: "Akıllı bina kontrol ve otomasyon sistemleri.",
            sections: [
                {
                    heading: "Işıklandırma Sistemi",
                    text: "Bina içindeki aydınlatma sistemleri, enerji tasarrufu sağlamak için sensörlü otomasyon ile kontrol edilmektedir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Güvenlik Sistemleri",
                    text: "Bina güvenliği, entegre CCTV kameralar, hareket sensörleri ve akıllı giriş kontrol sistemleri ile sağlanmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Klima ve Havalandırma Kontrolü",
                    text: "Havalandırma ve klima sistemleri, enerji verimliliği için merkezi olarak izlenip kontrol edilmektedir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Yangın Alarm Sistemi",
                    text: "Otomatik yangın algılama ve alarm sistemi, güvenliği sağlamak amacıyla tüm binaya entegre edilmiştir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Veri İzleme ve Yönetim",
                    text: "Bina içindeki tüm sistemler, merkezi bir yazılım ile izlenmekte ve verimli bir şekilde yönetilmektedir.",
                    image: "images/leo1.jpg"
                }
            ]
        },
        "4": {
            title: "Akıllı Bina Yönetim Sistemi",
            description: "Bina içindeki tüm sistemlerin uzaktan izlenmesi ve yönetilmesi.",
            sections: [
                {
                    heading: "Otomatik Aydınlatma Sistemi",
                    text: "Bina içindeki tüm ışıklar, hareket sensörleri ile otomatik olarak kontrol edilmekte ve enerji tasarrufu sağlanmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Sıcaklık ve Nem Kontrolü",
                    text: "Sıcaklık ve nem düzeyi sensörleri ile bina içindeki hava kalitesi sürekli izlenmektedir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Akıllı Güvenlik Sistemleri",
                    text: "Bina güvenliği, akıllı kilitler, yüz tanıma sistemleri ve alarm mekanizmaları ile sağlanmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Yapay Zeka Destekli İklim Kontrolü",
                    text: "Yapay zeka algoritmaları, bina içindeki hava koşullarına göre enerji tasarruflu iklim kontrolü yapmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Veri Analizi ve Raporlama",
                    text: "Sistem, bina içindeki verileri analiz ederek yöneticilere raporlar sunmaktadır, bu sayede verimli bir yönetim sağlanmaktadır.",
                    image:"images/leo1.jpg"
                }
            ]
        },
        "5": {
            title: "Akıllı Tarım Sistemi",
            description: "Sulama, gübreleme ve sıcaklık kontrolü ile verimli tarım uygulamaları.",
            sections: [
                {
                    heading: "Otomatik Sulama Sistemi",
                    text: "Toprak nem seviyeleri ölçülerek sulama işlemleri otomatik olarak yapılmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Akıllı Gübreleme",
                    text: "Toprak analizi ile bitkiler için gerekli gübre miktarları tespit edilip otomatik olarak uygulanmaktadır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Sıcaklık ve Hava Durumu İzleme",
                    text: "Sıcaklık sensörleri ve hava durumu verileri ile tarım alanı şartları sürekli izlenmektedir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Veri Tabanlı Tarım Yönetimi",
                    text: "Tüm veriler, tarım yöneticileri tarafından uzaktan izlenebilir ve yönetilebilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Sürdürülebilir Tarım Uygulamaları",
                    text: "Çevre dostu gübreler ve doğal su kaynakları kullanılarak tarım işlemleri sürdürülebilir bir şekilde yapılmaktadır.",
                    image:"images/leo1.jpg"
                }
            ]
        },
        "6": {
            title: "Akıllı Trafik Yönetim Sistemi",
            description: "Trafik yoğunluğunu izleyen ve yönlendiren akıllı sistem.",
            sections: [
                {
                    heading: "Yoğunluk Tespiti",
                    text: "Trafik kameraları ve sensörlerle, trafik yoğunluğu anlık olarak izlenir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Yol Durum Bilgisi",
                    text: "Hava durumu ve yol durumu verileri toplanarak sürücülere anında bilgi verilir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Otomatik Trafik Işıkları",
                    text: "Trafik yoğunluğuna göre ışıklar otomatik olarak yönlendirilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Veri Analizi ve Raporlama",
                    text: "Trafik verileri toplanır ve analiz edilir, böylece daha iyi planlamalar yapılabilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Entegre Ulaşım Yönetimi",
                    text: "Toplu taşıma sistemleri ile entegre bir şekilde çalışarak trafik yönetimi yapılır.",
                    image: "images/leo1.jpg"
                }
            ]
        },
        "7": {
            title: "E-ticaret Sistemi",
            description: "Online satış ve ödeme sistemlerini içeren platform.",
            sections: [
                {
                    heading: "Ürün Yönetimi",
                    text: "Sistemde, ürün ekleme, düzenleme ve silme işlemleri kolayca yapılabilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Kullanıcı Yönetimi",
                    text: "Kullanıcılar, hesap oluşturabilir ve profil bilgilerini düzenleyebilir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Ödeme Sistemi",
                    text: "Kredi kartı ve diğer ödeme yöntemleri ile güvenli ödeme işlemleri yapılabilir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Sipariş Takibi",
                    text: "Kullanıcılar siparişlerini anlık olarak takip edebilir.",
                    image:"images/leo1.jpg"
                },
                {
                    heading: "Veri Güvenliği",
                    text: "Tüm kullanıcı verileri ve ödeme bilgileri, şifreleme yöntemleri ile güvence altına alınır.",
                    image:"images/leo1.jpg"
                }
            ]
        },
        "8": {
            title: "Akıllı Su Yönetimi Sistemi",
            description: "Su kullanımını izleyen ve optimize eden sistem.",
            sections: [
                {
                    heading: "Su Tüketimi Takibi",
                    text: "Su tüketimi sensörlerle izlenir ve gereksiz su kullanımının önüne geçilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Su Tasarrufu Uyarıları",
                    text: "Kullanıcılara su tasarrufu sağlamak amacıyla uyarılar gönderilir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Su Kaynakları İzleme",
                    text: "Su kaynaklarının durumu ve seviyeleri sürekli izlenir.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Otomatik Sulama Sistemi",
                    text: "Bitkilerin ihtiyacına göre otomatik sulama yapılır.",
                    image: "images/leo1.jpg"
                },
                {
                    heading: "Veri Analizi ve Raporlama",
                    text: "Su tüketimi ve verimliliği hakkında raporlar oluşturulur.",
                    image:"images/leo1.jpg"
                }
            ]
        }
        
    };

    // Eğer geçerli bir proje ID'si varsa
    if (projectId && projects[projectId]) {
        const project = projects[projectId];
        
        // Başlık
        document.querySelector(".project-title").textContent = project.title;

        // Proje kısımlarını yerleştirme
        const descriptionsDiv = document.querySelectorAll(".project-description");
        project.sections.forEach((section, index) => {
            if (descriptionsDiv[index]) {
                descriptionsDiv[index].querySelector(".project-text").innerHTML = `<h2>${section.heading}</h2><p>${section.text}</p>`;
                descriptionsDiv[index].querySelector(".project-image").innerHTML = `<img src="${section.image}" alt="${section.heading}">`;
            }
        });
    } else {
        document.querySelector(".project-title").textContent = "Proje bulunamadı!";
        document.querySelector(".project-description").textContent = "Bu projeye ait detaylar mevcut değil.";
    }
     // Geçerli ürün ID'sine göre veriyi al ve sayfaya yerleştir
    if (productId && products[productId]) {
        const product = products[productId];

        // Ürün Başlığı
        document.querySelector(".product-title").textContent = product.title;

        // Ürün Görseli
        document.querySelector(".product-image").setAttribute("src", product.image);
        document.querySelector(".product-image").setAttribute("alt", product.title);

        // Ürün Fiyatı
        document.querySelector(".product-price").textContent = product.price;

        // Ürün Açıklaması
        document.querySelector(".product-description").textContent = product.description;

        // Ürün Özellikleri
        const featuresList = document.querySelector(".features-list");
        product.features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } else {
        document.querySelector(".product-title").textContent = "Ürün Bulunamadı!";
        document.querySelector(".product-description").textContent = "Bu ürüne ait detaylar mevcut değil.";
    }
});
