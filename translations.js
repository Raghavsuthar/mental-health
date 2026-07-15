/* ============================================================
   translations.js
   All site copy in English (en), Hindi (hi), and Gujarati (gu).
   Edit the text here to change what appears on the site —
   you never need to touch index.html for wording changes.
   ============================================================ */

const translations = {

  en: {
    meta: { title: "Dr. [Your Name] — Mental Health Awareness", desc: "A public mental health awareness resource by a practising psychiatrist in Gujarat." },
    nav: { home:"Home", about:"About", services:"Services", topics:"Topics", resources:"Resources", blog:"Blog", contact:"Contact", bookConsultation:"Book a Consultation" },
    hero: {
      eyebrow:"Mental Health Awareness · Gujarat",
      title1:"It's okay to not be okay.",
      title2:"Let's talk about it, together.",
      subtitle:"A space for honest, judgement-free information on mental health — created by a practising psychiatrist to help you understand, cope, and know when and how to seek help.",
      ctaLearn:"Learn More", ctaBook:"Book a Consultation", ctaResources:"Find Resources"
    },
    about: {
      eyebrow:"About", title:"About the Doctor",
      bioLine1:"Dr. [Your Name] is a psychiatrist practising in Gujarat, with a special interest in making mental healthcare understandable and accessible to everyone — not just those already familiar with it.",
      bioLine2:"This website exists because so much of the suffering around mental illness comes from silence, not the illness itself. Awareness, accurate information, and a little courage to talk can change that.",
      missionTitle:"Our Mission",
      missionText:"To reduce stigma, spread accurate mental health awareness, and help people in Gujarat and beyond recognise when it's time to seek professional support."
    },
    services: {
      eyebrow:"What We Offer", title:"Services", subtitle:"Support at every stage — from a first conversation to ongoing care.",
      items:[
        {title:"Consultation", desc:"One-on-one psychiatric consultation for assessment, diagnosis, and a personalised care plan."},
        {title:"Therapy & Counselling", desc:"Structured talk therapy and counselling sessions for individuals and families."},
        {title:"Workshops", desc:"Interactive sessions for schools, colleges, and communities on stress, emotional wellbeing, and resilience."},
        {title:"Corporate Talks", desc:"Mental health awareness sessions and wellness programmes designed for workplaces."}
      ]
    },
    topics: {
      eyebrow:"Learn", title:"Common Mental Health Topics", subtitle:"Understanding is the first step. Tap a card to read more.",
      items:[
        {title:"Depression", desc:"More than sadness — a persistent low mood that affects daily life, and is treatable."},
        {title:"Anxiety", desc:"When worry becomes constant, physical, and hard to switch off."},
        {title:"Stress & Burnout", desc:"How chronic stress affects the mind and body, and ways to recover."},
        {title:"Bipolar Disorder", desc:"Understanding mood episodes — from depression to mania — and long-term management."},
        {title:"OCD", desc:"Intrusive thoughts and repetitive behaviours — a real, treatable condition, not a personality quirk."},
        {title:"Addiction", desc:"Substance use and dependence, and the path towards recovery."},
        {title:"Child & Adolescent Mental Health", desc:"Recognising emotional and behavioural concerns early in young people."},
        {title:"Suicide Prevention", desc:"Warning signs, how to start the conversation, and where to get urgent help."}
      ]
    },
    resources: {
      eyebrow:"Resources", title:"Resources & Self-Help", subtitle:"Free, confidential support is available right now.",
      helplinesTitle:"National Helplines (India)",
      helplines:[
        {name:"Tele-MANAS", number:"14416", desc:"Government of India 24x7 mental health helpline, multilingual."},
        {name:"KIRAN", number:"1800-599-0019", desc:"National mental health rehabilitation helpline, 24x7."},
        {name:"iCall", number:"9152987821", desc:"Psychosocial helpline by TISS, Mon–Sat."},
        {name:"Vandrevala Foundation", number:"1860-2662-345", desc:"24x7 mental health support helpline."},
        {name:"AASRA", number:"9820466726", desc:"24x7 helpline for those in distress or suicidal."}
      ],
      tipsTitle:"Everyday Self-Help",
      tips:["Talk to someone you trust about how you feel","Maintain a regular sleep and meal routine","Limit alcohol and avoid self-medicating","Try slow breathing when anxiety rises","Seek professional help early — it works"],
      disclaimer:"If you or someone you know is in immediate danger, please call a helpline above or go to the nearest emergency room."
    },
    blog: {
      eyebrow:"Read", title:"Awareness Articles", subtitle:"Short reads on mental health, written for everyone.",
      posts:[
        {tag:"Stigma", title:"Why we need to stop whispering about mental illness", excerpt:"Silence protects stigma, not people. Here's why open conversation matters."},
        {tag:"Anxiety", title:"Is it normal worry, or an anxiety disorder?", excerpt:"A simple guide to telling the difference — and what to do next."},
        {tag:"Family", title:"How to support a loved one without saying the wrong thing", excerpt:"Practical, gentle ways to be there for someone who's struggling."},
        {tag:"Youth", title:"Spotting the signs in teenagers", excerpt:"What's typical teenage moodiness, and what needs attention."}
      ],
      readMore:"Read More"
    },
    testimonials: {
      eyebrow:"Voices", title:"What People Say",
      quotes:[
        {text:"I didn't know what I was feeling had a name — and that it could get better. This helped me take the first step.", author:"Anonymous, 27"},
        {text:"Reading about my condition in plain language, without judgement, made it easier to finally ask for help.", author:"Anonymous, 34"},
        {text:"The helpline list alone helped a friend of mine on a very hard night.", author:"Anonymous, 22"}
      ],
      disclaimer:"Shared with permission. Identifying details removed to protect privacy."
    },
    contact: {
      eyebrow:"Get in Touch", title:"Contact & Appointments", subtitle:"Have a question, or want to book a consultation? Reach out below.",
      formName:"Full Name", formEmail:"Email Address", formLanguage:"Preferred Language", formMessage:"Message",
      formSubmit:"Send Message", formNote:"This form is for general queries. If this is an emergency, please call a helpline instead.",
      clinicTitle:"Clinic", clinicAddressNote:"Address and map will appear here.", phoneLabel:"Phone / WhatsApp", emailLabel:"Email",
      formSuccess:"Thank you — your message has been noted. We'll get back to you soon."
    },
    footer: {
      about:"A public mental health awareness initiative by a practising psychiatrist in Gujarat.",
      quickLinks:"Quick Links", disclaimerTitle:"Disclaimer",
      disclaimerText:"This website is for general awareness and educational purposes only. It is not a substitute for professional diagnosis or treatment. Please consult a qualified mental health professional for personal medical advice.",
      copyright:"All rights reserved.", madeWith:"Made with care."
    }
  },

  hi: {
    meta: { title:"डॉ. [आपका नाम] — मानसिक स्वास्थ्य जागरूकता", desc:"गुजरात में एक प्रैक्टिसिंग मनोचिकित्सक द्वारा सार्वजनिक मानसिक स्वास्थ्य जागरूकता संसाधन।" },
    nav: { home:"होम", about:"परिचय", services:"सेवाएँ", topics:"विषय", resources:"संसाधन", blog:"ब्लॉग", contact:"संपर्क", bookConsultation:"परामर्श बुक करें" },
    hero: {
      eyebrow:"मानसिक स्वास्थ्य जागरूकता · गुजरात",
      title1:"ठीक न होना भी ठीक है।",
      title2:"आइए, इस बारे में मिलकर बात करें।",
      subtitle:"मानसिक स्वास्थ्य पर ईमानदार, बिना किसी पूर्वाग्रह वाली जानकारी का एक स्थान — एक प्रैक्टिसिंग मनोचिकित्सक द्वारा बनाया गया, ताकि आप समझ सकें, सामना कर सकें, और जान सकें कि कब और कैसे मदद लें।",
      ctaLearn:"अधिक जानें", ctaBook:"परामर्श बुक करें", ctaResources:"संसाधन खोजें"
    },
    about: {
      eyebrow:"परिचय", title:"डॉक्टर के बारे में",
      bioLine1:"डॉ. [आपका नाम] गुजरात में प्रैक्टिस करने वाले मनोचिकित्सक हैं, जिनकी विशेष रुचि मानसिक स्वास्थ्य देखभाल को हर किसी के लिए समझने योग्य और सुलभ बनाने में है — न कि केवल उन लोगों के लिए जो पहले से इससे परिचित हैं।",
      bioLine2:"यह वेबसाइट इसलिए बनाई गई है क्योंकि मानसिक बीमारी से जुड़ा अधिकांश कष्ट चुप्पी से आता है, बीमारी से नहीं। जागरूकता, सटीक जानकारी और थोड़ी सी हिम्मत इसे बदल सकती है।",
      missionTitle:"हमारा लक्ष्य",
      missionText:"कलंक (स्टिग्मा) को कम करना, सटीक मानसिक स्वास्थ्य जागरूकता फैलाना, और गुजरात व अन्य जगहों के लोगों को यह पहचानने में मदद करना कि कब पेशेवर सहायता लेने का समय है।"
    },
    services: {
      eyebrow:"हम क्या प्रदान करते हैं", title:"सेवाएँ", subtitle:"हर चरण में सहयोग — पहली बातचीत से लेकर निरंतर देखभाल तक।",
      items:[
        {title:"परामर्श", desc:"आकलन, निदान और व्यक्तिगत देखभाल योजना के लिए एक-से-एक मनोचिकित्सा परामर्श।"},
        {title:"थेरेपी और काउंसलिंग", desc:"व्यक्तियों और परिवारों के लिए संरचित टॉक थेरेपी और काउंसलिंग सत्र।"},
        {title:"कार्यशालाएँ", desc:"स्कूलों, कॉलेजों और समुदायों के लिए तनाव, भावनात्मक स्वास्थ्य और लचीलेपन पर इंटरैक्टिव सत्र।"},
        {title:"कॉर्पोरेट सत्र", desc:"कार्यस्थलों के लिए डिज़ाइन किए गए मानसिक स्वास्थ्य जागरूकता सत्र और वेलनेस कार्यक्रम।"}
      ]
    },
    topics: {
      eyebrow:"जानिए", title:"सामान्य मानसिक स्वास्थ्य विषय", subtitle:"समझना पहला कदम है। अधिक पढ़ने के लिए कार्ड पर टैप करें।",
      items:[
        {title:"अवसाद (डिप्रेशन)", desc:"केवल उदासी नहीं — एक स्थायी निम्न मनोदशा जो दैनिक जीवन को प्रभावित करती है, और जिसका इलाज संभव है।"},
        {title:"चिंता (एंग्ज़ाइटी)", desc:"जब चिंता निरंतर, शारीरिक और नियंत्रित करना मुश्किल हो जाए।"},
        {title:"तनाव और बर्नआउट", desc:"दीर्घकालिक तनाव मन और शरीर को कैसे प्रभावित करता है, और उबरने के तरीके।"},
        {title:"बाइपोलर डिसऑर्डर", desc:"मूड एपिसोड्स को समझना — अवसाद से लेकर उन्माद तक — और दीर्घकालिक प्रबंधन।"},
        {title:"ओसीडी", desc:"अवांछित विचार और दोहराव वाला व्यवहार — एक वास्तविक, इलाज योग्य स्थिति, व्यक्तित्व की विशेषता नहीं।"},
        {title:"नशा (एडिक्शन)", desc:"पदार्थों का उपयोग और निर्भरता, और रिकवरी की दिशा।"},
        {title:"बाल एवं किशोर मानसिक स्वास्थ्य", desc:"युवाओं में भावनात्मक और व्यवहार संबंधी चिंताओं को जल्दी पहचानना।"},
        {title:"आत्महत्या रोकथाम", desc:"चेतावनी के संकेत, बातचीत कैसे शुरू करें, और तत्काल मदद कहाँ से लें।"}
      ]
    },
    resources: {
      eyebrow:"संसाधन", title:"संसाधन और स्व-सहायता", subtitle:"मुफ्त, गोपनीय सहायता अभी उपलब्ध है।",
      helplinesTitle:"राष्ट्रीय हेल्पलाइन (भारत)",
      helplines:[
        {name:"टेली-मानस (Tele-MANAS)", number:"14416", desc:"भारत सरकार की 24x7 बहुभाषी मानसिक स्वास्थ्य हेल्पलाइन।"},
        {name:"किरण (KIRAN)", number:"1800-599-0019", desc:"राष्ट्रीय मानसिक स्वास्थ्य पुनर्वास हेल्पलाइन, 24x7।"},
        {name:"आईकॉल (iCall)", number:"9152987821", desc:"TISS द्वारा मनो-सामाजिक हेल्पलाइन, सोम–शनि।"},
        {name:"वंद्रेवाला फाउंडेशन", number:"1860-2662-345", desc:"24x7 मानसिक स्वास्थ्य सहायता हेल्पलाइन।"},
        {name:"आसरा (AASRA)", number:"9820466726", desc:"संकट या आत्महत्या के विचार वालों के लिए 24x7 हेल्पलाइन।"}
      ],
      tipsTitle:"रोज़मर्रा की स्व-सहायता",
      tips:["जिस पर भरोसा हो उससे अपनी भावनाओं के बारे में बात करें","नियमित नींद और भोजन की दिनचर्या बनाए रखें","शराब सीमित करें और स्वयं दवा लेने से बचें","चिंता बढ़ने पर धीमी साँस लेने का अभ्यास करें","पेशेवर मदद जल्दी लें — यह कारगर है"],
      disclaimer:"यदि आप या आपका कोई परिचित तत्काल खतरे में है, तो कृपया ऊपर दी गई हेल्पलाइन पर कॉल करें या नज़दीकी आपातकालीन कक्ष में जाएँ।"
    },
    blog: {
      eyebrow:"पढ़ें", title:"जागरूकता लेख", subtitle:"मानसिक स्वास्थ्य पर छोटे लेख, सबके लिए लिखे गए।",
      posts:[
        {tag:"कलंक", title:"मानसिक बीमारी के बारे में फुसफुसाना क्यों बंद करना चाहिए", excerpt:"चुप्पी कलंक की रक्षा करती है, लोगों की नहीं। खुली बातचीत क्यों ज़रूरी है।"},
        {tag:"चिंता", title:"क्या यह सामान्य चिंता है या एंग्ज़ाइटी डिसऑर्डर?", excerpt:"फर्क बताने के लिए एक सरल गाइड — और आगे क्या करें।"},
        {tag:"परिवार", title:"गलत बात कहे बिना किसी प्रियजन का साथ कैसे दें", excerpt:"संघर्ष कर रहे किसी व्यक्ति के लिए व्यावहारिक, सौम्य तरीके।"},
        {tag:"युवा", title:"किशोरों में संकेतों को पहचानना", excerpt:"सामान्य किशोर मनोदशा क्या है, और किस पर ध्यान देने की ज़रूरत है।"}
      ],
      readMore:"और पढ़ें"
    },
    testimonials: {
      eyebrow:"अनुभव", title:"लोग क्या कहते हैं",
      quotes:[
        {text:"मुझे नहीं पता था कि जो मैं महसूस कर रहा था उसका एक नाम है — और यह ठीक हो सकता है। इसने मुझे पहला कदम उठाने में मदद की।", author:"अयाता, 27"},
        {text:"अपनी स्थिति के बारे में सरल भाषा में, बिना किसी निर्णय के पढ़ना, आखिरकार मदद माँगना आसान बना दिया।", author:"अज्ञात, 34"},
        {text:"सिर्फ हेल्पलाइन की सूची ने एक बहुत कठिन रात में मेरी एक दोस्त की मदद की।", author:"अज्ञात, 22"}
      ],
      disclaimer:"अनुमति से साझा किया गया। गोपनीयता की सुरक्षा के लिए पहचान संबंधी विवरण हटा दिए गए हैं।"
    },
    contact: {
      eyebrow:"संपर्क करें", title:"संपर्क और अपॉइंटमेंट", subtitle:"कोई सवाल है, या परामर्श बुक करना चाहते हैं? नीचे संपर्क करें।",
      formName:"पूरा नाम", formEmail:"ईमेल पता", formLanguage:"पसंदीदा भाषा", formMessage:"संदेश",
      formSubmit:"संदेश भेजें", formNote:"यह फॉर्म सामान्य प्रश्नों के लिए है। यदि यह आपातकाल है, तो कृपया इसके बजाय हेल्पलाइन पर कॉल करें।",
      clinicTitle:"क्लिनिक", clinicAddressNote:"पता और मानचित्र यहाँ दिखाई देंगे।", phoneLabel:"फोन / व्हाट्सऐप", emailLabel:"ईमेल",
      formSuccess:"धन्यवाद — आपका संदेश दर्ज कर लिया गया है। हम जल्द ही आपसे संपर्क करेंगे।"
    },
    footer: {
      about:"गुजरात में एक प्रैक्टिसिंग मनोचिकित्सक द्वारा सार्वजनिक मानसिक स्वास्थ्य जागरूकता पहल।",
      quickLinks:"त्वरित लिंक", disclaimerTitle:"अस्वीकरण",
      disclaimerText:"यह वेबसाइट केवल सामान्य जागरूकता और शैक्षिक उद्देश्यों के लिए है। यह पेशेवर निदान या उपचार का विकल्प नहीं है। कृपया व्यक्तिगत चिकित्सा सलाह के लिए किसी योग्य मानसिक स्वास्थ्य पेशेवर से परामर्श करें।",
      copyright:"सर्वाधिकार सुरक्षित।", madeWith:"देखभाल के साथ बनाया गया।"
    }
  },

  gu: {
    meta: { title:"ડૉ. [તમારું નામ] — માનસિક સ્વાસ્થ્ય જાગૃતિ", desc:"ગુજરાતમાં એક પ્રેક્ટિસિંગ મનોચિકિત્સક દ્વારા જાહેર માનસિક સ્વાસ્થ્ય જાગૃતિ સંસાધન." },
    nav: { home:"હોમ", about:"વિશે", services:"સેવાઓ", topics:"વિષયો", resources:"સંસાધનો", blog:"બ્લોગ", contact:"સંપર્ક", bookConsultation:"પરામર્શ બુક કરો" },
    hero: {
      eyebrow:"માનસિક સ્વાસ્થ્ય જાગૃતિ · ગુજરાત",
      title1:"સારું ન લાગવું પણ ઠીક છે.",
      title2:"ચાલો, સાથે મળીને વાત કરીએ.",
      subtitle:"માનસિક સ્વાસ્થ્ય વિશે પ્રામાણિક, પૂર્વગ્રહ વિનાની માહિતી માટેનું સ્થળ — એક પ્રેક્ટિસિંગ મનોચિકિત્સક દ્વારા બનાવવામાં આવ્યું, જેથી તમે સમજી શકો, સામનો કરી શકો, અને ક્યારે અને કેવી રીતે મદદ લેવી તે જાણી શકો.",
      ctaLearn:"વધુ જાણો", ctaBook:"પરામર્શ બુક કરો", ctaResources:"સંસાધનો શોધો"
    },
    about: {
      eyebrow:"વિશે", title:"ડોક્ટર વિશે",
      bioLine1:"ડૉ. [તમારું નામ] ગુજરાતમાં પ્રેક્ટિસ કરતા મનોચિકિત્સક છે, જેમને માનસિક સ્વાસ્થ્ય સંભાળને દરેક માટે સમજી શકાય તેવી અને સુલભ બનાવવામાં ખાસ રસ છે — ફક્ત તેનાથી પરિચિત લોકો માટે નહીં.",
      bioLine2:"આ વેબસાઇટ એટલા માટે બનાવવામાં આવી છે કારણ કે માનસિક બીમારી સાથે જોડાયેલ મોટાભાગની પીડા મૌનમાંથી આવે છે, બીમારીમાંથી નહીં. જાગૃતિ, સચોટ માહિતી અને થોડી હિંમત આ બદલી શકે છે.",
      missionTitle:"અમારું ધ્યેય",
      missionText:"કલંક ઘટાડવું, સચોટ માનસિક સ્વાસ્થ્ય જાગૃતિ ફેલાવવી, અને ગુજરાત તથા અન્યત્રના લોકોને એ ઓળખવામાં મદદ કરવી કે ક્યારે વ્યાવસાયિક સહાય લેવાનો સમય છે."
    },
    services: {
      eyebrow:"અમે શું ઓફર કરીએ છીએ", title:"સેવાઓ", subtitle:"દરેક તબક્કે સહયોગ — પ્રથમ વાતચીતથી લઈને સતત સંભાળ સુધી.",
      items:[
        {title:"પરામર્શ", desc:"મૂલ્યાંકન, નિદાન અને વ્યક્તિગત સંભાળ યોજના માટે એક-થી-એક મનોચિકિત્સા પરામર્શ."},
        {title:"થેરાપી અને કાઉન્સેલિંગ", desc:"વ્યક્તિઓ અને પરિવારો માટે સંરચિત ટોક થેરાપી અને કાઉન્સેલિંગ સત્રો."},
        {title:"વર્કશોપ્સ", desc:"શાળાઓ, કોલેજો અને સમુદાયો માટે તણાવ, ભાવનાત્મક સુખાકારી અને સ્થિતિસ્થાપકતા પર ઇન્ટરેક્ટિવ સત્રો."},
        {title:"કોર્પોરેટ સત્રો", desc:"કાર્યસ્થળો માટે રચાયેલ માનસિક સ્વાસ્થ્ય જાગૃતિ સત્રો અને વેલનેસ કાર્યક્રમો."}
      ]
    },
    topics: {
      eyebrow:"જાણો", title:"સામાન્ય માનસિક સ્વાસ્થ્ય વિષયો", subtitle:"સમજવું એ પ્રથમ પગલું છે. વધુ વાંચવા માટે કાર્ડ પર ટેપ કરો.",
      items:[
        {title:"ડિપ્રેશન", desc:"માત્ર ઉદાસી નહીં — એક સતત નીચો મૂડ જે રોજિંદા જીવનને અસર કરે છે, અને જેની સારવાર શક્ય છે."},
        {title:"એન્ઝાયટી", desc:"જ્યારે ચિંતા સતત, શારીરિક અને નિયંત્રિત કરવી મુશ્કેલ બની જાય."},
        {title:"તણાવ અને બર્નઆઉટ", desc:"દીર્ઘકાલીન તણાવ મન અને શરીરને કેવી રીતે અસર કરે છે, અને પુનઃપ્રાપ્તિની રીતો."},
        {title:"બાયપોલર ડિસઓર્ડર", desc:"મૂડ એપિસોડ્સને સમજવું — ડિપ્રેશનથી લઈને મેનિયા સુધી — અને લાંબા ગાળાનું સંચાલન."},
        {title:"ઓસીડી", desc:"અનિચ્છનીય વિચારો અને પુનરાવર્તિત વર્તન — એક વાસ્તવિક, સારવાર યોગ્ય સ્થિતિ, વ્યક્તિત્વની વિશેષતા નહીં."},
        {title:"વ્યસન", desc:"પદાર્થોનો ઉપયોગ અને નિર્ભરતા, અને પુનઃપ્રાપ્તિનો માર્ગ."},
        {title:"બાળ અને કિશોર માનસિક સ્વાસ્થ્ય", desc:"યુવાનોમાં ભાવનાત્મક અને વર્તણૂક સંબંધિત ચિંતાઓને વહેલી ઓળખવી."},
        {title:"આત્મહત્યા નિવારણ", desc:"ચેતવણીના સંકેતો, વાતચીત કેવી રીતે શરૂ કરવી, અને તાત્કાલિક મદદ ક્યાંથી મેળવવી."}
      ]
    },
    resources: {
      eyebrow:"સંસાધનો", title:"સંસાધનો અને સ્વ-સહાય", subtitle:"મફત, ગોપનીય સહાય અત્યારે જ ઉપલબ્ધ છે.",
      helplinesTitle:"રાષ્ટ્રીય હેલ્પલાઇન (ભારત)",
      helplines:[
        {name:"ટેલી-માનસ (Tele-MANAS)", number:"14416", desc:"ભારત સરકારની 24x7 બહુભાષી માનસિક સ્વાસ્થ્ય હેલ્પલાઇન."},
        {name:"કિરણ (KIRAN)", number:"1800-599-0019", desc:"રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય પુનર્વસન હેલ્પલાઇન, 24x7."},
        {name:"આઈકોલ (iCall)", number:"9152987821", desc:"TISS દ્વારા મનો-સામાજિક હેલ્પલાઇન, સોમ–શનિ."},
        {name:"વંદ્રેવાલા ફાઉન્ડેશન", number:"1860-2662-345", desc:"24x7 માનસિક સ્વાસ્થ્ય સહાય હેલ્પલાઇન."},
        {name:"આસરા (AASRA)", number:"9820466726", desc:"તકલીફ કે આત્મહત્યાના વિચારો ધરાવતા લોકો માટે 24x7 હેલ્પલાઇન."}
      ],
      tipsTitle:"રોજિંદી સ્વ-સહાય",
      tips:["તમે વિશ્વાસ કરો છો તે વ્યક્તિ સાથે તમારી લાગણીઓ વિશે વાત કરો","નિયમિત ઊંઘ અને ભોજનની દિનચર્યા જાળવો","દારૂ મર્યાદિત કરો અને જાતે દવા લેવાનું ટાળો","ચિંતા વધે ત્યારે ધીમા શ્વાસ લેવાનો પ્રયાસ કરો","વ્યાવસાયિક મદદ વહેલી લો — તે અસરકારક છે"],
      disclaimer:"જો તમે અથવા તમારા કોઈ પરિચિત તાત્કાલિક જોખમમાં હોય, તો કૃપા કરીને ઉપર આપેલી હેલ્પલાઇન પર કૉલ કરો અથવા નજીકના ઇમરજન્સી રૂમમાં જાઓ."
    },
    blog: {
      eyebrow:"વાંચો", title:"જાગૃતિ લેખો", subtitle:"માનસિક સ્વાસ્થ્ય પર ટૂંકા લેખો, દરેક માટે લખાયેલા.",
      posts:[
        {tag:"કલંક", title:"માનસિક બીમારી વિશે ફફડાટમાં વાત કરવાનું શા માટે બંધ કરવું જોઈએ", excerpt:"મૌન કલંકનું રક્ષણ કરે છે, લોકોનું નહીં. ખુલ્લી વાતચીત શા માટે મહત્વની છે."},
        {tag:"એન્ઝાયટી", title:"શું આ સામાન્ય ચિંતા છે કે એન્ઝાયટી ડિસઓર્ડર?", excerpt:"તફાવત જણાવવા માટે એક સરળ માર્ગદર્શિકા — અને આગળ શું કરવું."},
        {tag:"કુટુંબ", title:"ખોટું ન બોલતાં કોઈ પ્રિયજનને કેવી રીતે સાથ આપવો", excerpt:"સંઘર્ષ કરી રહેલ વ્યક્તિ માટે વ્યવહારુ, નમ્ર રીતો."},
        {tag:"યુવા", title:"કિશોરોમાં સંકેતો ઓળખવા", excerpt:"સામાન્ય કિશોર મૂડ શું છે, અને શેના પર ધ્યાન આપવાની જરૂર છે."}
      ],
      readMore:"વધુ વાંચો"
    },
    testimonials: {
      eyebrow:"અનુભવો", title:"લોકો શું કહે છે",
      quotes:[
        {text:"મને ખબર નહોતી કે હું જે અનુભવી રહ્યો હતો તેનું એક નામ છે — અને તે સારું થઈ શકે છે. આનાથી મને પહેલું પગલું ભરવામાં મદદ મળી.", author:"અનામી, 27"},
        {text:"મારી સ્થિતિ વિશે સરળ ભાષામાં, કોઈ પણ જજમેન્ટ વગર વાંચવાથી, આખરે મદદ માંગવી સરળ બની.", author:"અનામી, 34"},
        {text:"ફક્ત હેલ્પલાઇનની યાદીએ મારી એક મિત્રને ખૂબ જ મુશ્કેલ રાત્રે મદદ કરી.", author:"અનામી, 22"}
      ],
      disclaimer:"પરવાનગીથી શેર કરવામાં આવ્યું છે. ગોપનીયતાના રક્ષણ માટે ઓળખ સંબંધિત વિગતો દૂર કરવામાં આવી છે."
    },
    contact: {
      eyebrow:"સંપર્કમાં રહો", title:"સંપર્ક અને એપોઇન્ટમેન્ટ", subtitle:"કોઈ પ્રશ્ન છે, અથવા પરામર્શ બુક કરવા માંગો છો? નીચે સંપર્ક કરો.",
      formName:"પૂરું નામ", formEmail:"ઇમેઇલ સરનામું", formLanguage:"પસંદગીની ભાષા", formMessage:"સંદેશ",
      formSubmit:"સંદેશ મોકલો", formNote:"આ ફોર્મ સામાન્ય પ્રશ્નો માટે છે. જો આ કટોકટી હોય, તો કૃપા કરીને તેના બદલે હેલ્પલાઇન પર કૉલ કરો.",
      clinicTitle:"ક્લિનિક", clinicAddressNote:"સરનામું અને નકશો અહીં દેખાશે.", phoneLabel:"ફોન / વોટ્સએપ", emailLabel:"ઇમેઇલ",
      formSuccess:"આભાર — તમારો સંદેશ નોંધાઈ ગયો છે. અમે જલ્દી તમારો સંદેશ મેળવીશું."
    },
    footer: {
      about:"ગુજરાતમાં એક પ્રેક્ટિસિંગ મનોચિકિત્સક દ્વારા જાહેર માનસિક સ્વાસ્થ્ય જાગૃતિ પહેલ.",
      quickLinks:"ઝડપી લિંક્સ", disclaimerTitle:"અસ્વીકરણ",
      disclaimerText:"આ વેબસાઇટ ફક્ત સામાન્ય જાગૃતિ અને શૈક્ષણિક હેતુઓ માટે છે. તે વ્યાવસાયિક નિદાન અથવા સારવારનો વિકલ્પ નથી. કૃપા કરીને વ્યક્તિગત તબીબી સલાહ માટે લાયક માનસિક સ્વાસ્થ્ય વ્યાવસાયિકની સલાહ લો.",
      copyright:"સર્વાધિકાર સુરક્ષિત.", madeWith:"કાળજી સાથે બનાવ્યું."
    }
  }
};
