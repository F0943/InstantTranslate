var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// lang
const trans = {
  en: {
    title: "Simultaneous translation from English, French and German to Arabic and vice versa",
    des: "Simultaneous interpretation services are provided between English, German and French into Arabic and vice versa. Whether you need to translate videos, emails, articles, or any other text, I can provide accurate and efficient translation.",
    span: "Why choose my service:-",
    w1: "1- Professionalism: Thanks to my language skills and deep understanding of different cultures, I provide a professional translation service that meets your needs accurately and quickly.",
    w2: "2- Fast Delivery:  I recognize the importance of time in the translation process and am committed to delivering results as quickly as possible.",
    w3: "3- Competitive Prices: Our service is available at a fantastic price! High quality at an affordable cost.",
    w4: "4-Confidentiality and security: I care about the confidentiality of your information and data. Make sure that all content is processed with strict confidentiality and high security.",
    contact: "Get in touch with me"
  },
  ar: {
    title: "ترجمة فوريه من الانجليزية،الفرنسية والالمانية الى العربية والعكس",
    des: "تقدم خدمتي الترجمة الفورية بين اللغات الإنجليزية، الألمانية والفرنسيةالى اللغة العربية والعكس. سواء كنت تحتاج إلى ترجمة مقاطع فيديو، رسائل البريد الإلكتروني، مقالات، أو أي نصوص أخرى، يمكنني توفير ترجمة دقيقة وفعالة.",
    span: " لماذا تختار خدمتي :- ",
    w1: "1- الاحترافية: بفضل مهاراتي اللغوية وفهمي العميق للثقافات المختلفة، أقدم خدمة ترجمة احترافية تلبي احتياجاتك بدقة وسرعة.",
    w2: "2- سرعة التسليم:  فأنا أدرك أهمية الوقت في عملية الترجمة وألتزم بتقديم النتائج بأسرع وقت ممكن",
    w3: "3- أسعار تنافسية: خدمتنا متاحة بسعر رائع! جودة عالية بتكلفة مناسبة",
    w4: "4- السرية والأمان: أهتم بسرية المعلومات والبيانات الخاصة بك.تأكد من أن كل المحتوى يتم معالجته بسرية تامة وأمان عالي.",
    contact: "تواصل معي"
  }
}

const lanBtn = document.querySelectorAll('.lang-btn');
const ar = document.getElementById('arBtn');
const en = document.getElementById('enBtn');
lanBtn.forEach(i => i.addEventListener('click', function (e) {

  console.log(i.value);
  if (i.value == "ar") {
    ar.style.display = "none";
    en.style.display = "block";
  } else {
    ar.style.display = "block";
    en.style.display = "none";
  }
  setLang(i.value)
}))

function setLang(lang) {
  const eles = document.querySelectorAll('[data-il8n]');
  eles.forEach(ele => {
    const keys = ele.getAttribute("data-il8n");
    ele.textContent = trans[lang][keys];
  })
  if (lang == "en") {
    document.dir = "ltr";
    document.querySelectorAll("ul").forEach(i => i.dir = "ltr");
    document.querySelectorAll(".contact").forEach(i => i.dir = "ltr");
    eles.forEach(i => i.dir = "ltr");
  }
  else {
    document.dir = "rtl";
    document.querySelectorAll("ul").forEach(i => i.dir = "rtl");
    document.querySelectorAll(".contact").forEach(i => i.dir = "rtl");
    eles.forEach(i => i.dir = "rtl");
  
  }
}