/* ============================================================
   translations.js
   All site copy in English (en), Hindi (hi), and Gujarati (gu).
   ============================================================ */

const translations = {

  en: {
    meta: { title: "Dr. Raghav Suthar — Mental Health Awareness", desc: "A public mental health awareness resource by a practising psychiatrist in Gujarat." },
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
      bioLine1:"Dr. Raghav Suthar is a psychiatrist practising in Gujarat, with a special interest in making mental healthcare understandable and accessible to everyone.",
      bioLine2:"This website exists because so much of the suffering around mental illness comes from silence, not the illness itself.",
      missionTitle:"Our Mission",
      missionText:"To reduce stigma, spread accurate mental health awareness, and help people recognize when it's time to seek professional support."
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
      eyebrow:"Learn", title:"Common Mental Health Topics", subtitle:"Understanding is the first step. Click any card to read deep medical insights.",
      items:[
        {
          title: "Depression (Major Depressive Disorder)", 
          desc: "Much more than temporary sadness. Clinical depression is a persistent medical condition affecting millions globally.",
          detailTitle: "Clinical Overview: Major Depressive Disorder (MDD)",
          publicSection: "<h4>For the Public: Understanding Depression</h4><p>Depression is a biological medical condition, not a sign of personal weakness or laziness. It alters brain chemistry, affecting how you feel, think, and handle daily tasks like sleeping, eating, or working.</p><h5>Common Symptoms to Watch For:</h5><ul><li>Sustained low mood, feeling empty or crying frequently for over 2 weeks.</li><li>Loss of interest or pleasure in hobbies you used to love (Anhedonia).</li><li>Chronic fatigue, low energy, and feeling drained even without physical exertion.</li><li>Changes in sleep (insomnia or oversleeping) and changes in appetite or weight.</li><li>Feelings of worthlessness, excessive guilt, or absolute helplessness.</li></ul><h5>When to seek care:</h5><p>If these symptoms last continuously for more than 2 weeks and interfere with your family life, work, or social relationships, it is time to consult a qualified psychiatrist. Recovery is fully possible with timely psychological counseling and medical supervision.</p>",
          clinicianSection: "<h4>For Clinicians: Diagnostic & Screening Guidelines</h4><h5>DSM-5 Diagnostic Criteria Highlights:</h5><p>Requires 5 or more symptoms present during the same 2-week period, representing a distinct change from previous functioning; at least 1 symptom must be either (1) depressed mood or (2) loss of interest or pleasure.</p><ul><li>Depressed mood most of the day, nearly every day.</li><li>Markedly diminished interest or pleasure in all, or almost all, activities.</li><li>Significant weight loss or gain, or decrease/increase in appetite.</li><li>Insomnia or hypersomnia nearly every day.</li><li>Psychomotor agitation or retardation (observable by others).</li><li>Fatigue or loss of energy nearly every day.</li><li>Feelings of worthlessness or excessive/inappropriate guilt.</li><li>Diminished ability to think/concentrate, or indecisiveness.</li><li>Recurrent thoughts of death, recurrent suicidal ideation without a specific plan, or a suicide attempt/specific plan.</li></ul><h5>Evidence-Based Screening Protocols:</h5><ul><li><strong>PHQ-9 (Patient Health Questionnaire-9)</strong>: Score of 0-4 (Minimal), 5-9 (Mild), 10-14 (Moderate), 15-19 (Moderately Severe), 20-27 (Severe). Always closely evaluate Item 9 for self-harm risk.</li><li><strong>Differential Diagnosis Considerations</strong>: Rule out Hypothyroidism (perform TSH panel), Substance-Induced Mood Disorder, Vitamin D3/B12 deficiencies, and Normal Bereavement vs. MDD. Evaluate for underlying Bipolar spectrum features before initiating Monotherapy Antidepressant treatments to prevent manic switching.</li></ul>"
        },
        {title:"Anxiety Disorders", desc:"When normal worry transforms into persistent, overwhelming, and excessive fear regarding everyday situations.", detailTitle:"Anxiety Disorders", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"Stress & Burnout", desc:"Chronic emotional and physical exhaustion resulting from prolonged exposure to severe stressors.", detailTitle:"Stress & Burnout", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"Bipolar Disorder", desc:"A complex neurological condition marked by significant shifts in mood, energy, and activity levels.", detailTitle:"Bipolar Disorder", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"OCD (Obsessive-Compulsive Disorder)", desc:"A chronic mental health condition where a person experiences uncontrollable, recurring thoughts and behaviors.", detailTitle:"OCD", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"Addiction & Substance Use", desc:"A chronic, relapsing brain disease characterized by compulsive substance seeking and use.", detailTitle:"Addiction & Substance Use", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"Child & Adolescent Mental Health", desc:"Addresses behavioral, developmental, and emotional challenges unique to young minds.", detailTitle:"Child & Adolescent Mental Health", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"},
        {title:"Suicide Prevention & Crisis Support", desc:"Recognizing crucial warning signs—such as absolute hopelessness or explicit statements about self-harm.", detailTitle:"Suicide Prevention", publicSection:"<p>Detailed breakdown coming soon.</p>", clinicianSection:"<p>Clinical guidelines coming soon.</p>"}
      ]
    },
    resources: {
      eyebrow:"Resources", title:"Resources & Self-Help", subtitle:"Free, confidential support is available right now.",
      helplinesTitle:"National Helplines (India)",
      helplines:[
        {name:"Tele-MANAS", number:"14416", desc:"Government of India 24x7 mental health helpline, multilingual."},
        {name:"KIRAN", number:"1800-599-0019", desc:"National mental health rehabilitation helpline, 24x7."},
        {name:"iCall", number:"9152987821", desc:"Psychosocial helpline by TISS, Mon–Sat."}
      ],
      tipsTitle:"Everyday Self-Help",
      tips:["Talk to someone you trust about how you feel","Maintain a regular sleep and meal routine","Limit alcohol and avoid self-medicating","Try slow breathing when anxiety rises","Seek professional help early — it works"],
      disclaimer:"If you or someone you know is in immediate danger, please call a helpline above or go to the nearest emergency room."
    },
    blog: {
      eyebrow:"Read", title:"Awareness Articles", subtitle:"Short reads on mental health, written for everyone.",
      posts:[
        {tag:"Stigma", title:"Why we need to stop whispering about mental illness", excerpt:"Silence protects stigma, not people. Here's why open conversation matters."},
        {tag:"Anxiety", title:"Is it normal worry, or an anxiety disorder?", excerpt:"A simple guide to telling the difference — and what to do next."}
      ],
      readMore:"Read More"
    },
    testimonials: {
      eyebrow:"Voices", title:"What People Say",
      quotes:[
        {text:"I didn't know what I was feeling had a name — and that it could get better. This helped me take the first step.", author:"Anonymous, 27"},
        {text:"Reading about my condition in plain language, without judgement, made it easier to finally ask for help.", author:"Anonymous, 34"}
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
    meta: { title:"डॉ. राघव सुથાર — मानसिक स्वास्थ्य जागरूकता", desc:"गुजरात में एक प्रैक्टिसिंग मनोचिकित्सक द्वारा सार्वजनिक मानसिक स्वास्थ्य जागरूकता संसाधन।" },
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
      bioLine1:"डॉ. राघव सुथार गुजरात में प्रैक्टिस करने वाले मनोचिकित्सक हैं, जिनकी विशेष रुचि मानसिक स्वास्थ्य देखभाल को हर किसी के लिए समझने योग्य और सुलभ बनाने में है।",
      bioLine2:"यह वेबसाइट इसलिए बनाई गई है क्योंकि मानसिक बीमारी से जुड़ा अधिकांश कष्ट चुप्पी से आता है, बीमारी से नहीं।",
      missionTitle:"हमारा लक्ष्य",
      missionText:"कलंक (स्टिग्मा) को कम करना, सटीक मानसिक स्वास्थ्य जागरूकता फैलाना, और लोगों को यह पहचानने में मदद करना कि कब पेशेवर सहायता लेने का समय है।"
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
      eyebrow:"जानिए", title:"सामान्य मानसिक स्वास्थ्य विषय", subtitle:"समझना पहला कदम है। गहन चिकित्सा जानकारी पढ़ने के लिए किसी भी कार्ड पर क्लिक करें।",
      items:[
        {
          title: "अवसाद (गंभीर डिप्रेशन रोग)", 
          desc: "यह केवल अस्थायी उदासी नहीं है। क्लिनिकल डिप्रेशन एक गंभीर चिकित्सीय स्थिति है जो दुनिया भर में लाखों लोगों को प्रभावित करती है।",
          detailTitle: "क्लिनिकल अवलोकन: मेजर डिप्रेस्ड डिसऑर्डर (MDD)",
          publicSection: "<h4>आम जनता के लिए: डिप्रेशन को समझना</h4><p>अवसाद या डिप्रेशन मस्तिष्क से जुड़ी एक जैविक चिकित्सीय स्थिति (Biological condition) है, न कि किसी व्यक्ति की कमजोरी या आलस्य का संकेत। यह मस्तिष्क के रसायनों (Brain chemistry) को बदल देता है, जिससे आपके सोचने, महसूस करने और सोने, खाने या काम करने जैसी दैनिक गतिविधियों को संभालने का तरीका प्रभावित होता है।</p><h5>मुख्य लक्षण जिन पर ध्यान दें:</h5><ul><li>लगातार मन उदास रहना, खालीपन महसूस होना या 2 सप्ताह से अधिक समय तक बार-बार रोना आना।</li><li>उन शौक या गतिविधियों में रुचि खो देना जो आपको पहले बहुत पसंद थीं (Anhedonia)।</li><li>बिना किसी शारीरिक मेहनत के भी हर समय अत्यधिक कमजोरी, थकान और ऊर्जा की कमी महसूस होना।</li><li>नींद में भारी बदलाव (अनिद्रा या बहुत अधिक सोना) और भूख या वजन में अचानक बदलाव आना।</li><li>खुद को बेकार समझना, अत्यधिक हीनभावना या बिना वजह अत्यधिक गिल्ट (दोष) महसूस करना।</li></ul><h5>डॉक्टर से कब मिलें?</h5><p>यदि ये लक्षण लगातार 2 सप्ताह से अधिक समय तक बने रहते हैं और आपके पारिवारिक जीवन, नौकरी या सामाजिक रिश्तों में बाधा डालते हैं, तो बिना देर किए एक योग्य मनोचिकित्सक (Psychiatrist) से परामर्श करने का समय है। उचित काउंसलिंग और चिकित्सकीय देखरेख से डिप्रेशन से पूरी तरह बाहर आना संभव है।</p>",
          clinicianSection: "<h4>चिकित्सकों (Clinicians) के लिए: नैदानिक और स्क्रीनिंग दिशानिर्देश</h4><h5>DSM-5 नैदानिक मानदंड (Diagnostic Criteria):</h5><p>मरीज में एक ही 2-सप्ताह की अवधि के दौरान निम्नलिखित में से 5 या अधिक लक्षण मौजूद होने चाहिए, जो उनके पिछले कामकाज से स्पष्ट बदलाव दर्शाते हैं; कम से कम 1 लक्षण या तो (1) उदास मूड होना चाहिए या (2) रुचि या आनंद का खत्म होना होना चाहिए।</p><ul><li>दिन का अधिकांश भाग, लगभग हर दिन उदास या निम्न मूड रहना।</li><li>सभी या लगभग सभी गतिविधियों में रुचि या आनंद में स्पष्ट कमी आना।</li><li>बिना डाइटिंग के वजन में महत्वपूर्ण गिरावट या वृद्धि, या भूख में कमी/बढ़ोतरी।</li><li>लगभग हर दिन अनिद्रा (Insomnia) या अतिनिद्रा (Hypersomnia) की समस्या।</li><li>साइकोमोटर आंदोलन (Agitation) या मंदता (Retardation) जो दूसरों द्वारा दिखाई दे।</li><li>लगभग हर दिन थकान या ऊर्जा की भारी हानि होना।</li><li>खुद को पूरी तरह निरर्थक समझना या अत्यधिक व अनुचित गिल्ट महसूस करना।</li><li>सोचने, ध्यान केंद्रित करने की क्षमता में कमी या अनिर्णय की स्थिति बने रहना।</li><li>बार-बार मृत्यु के विचार आना, या बिना किसी विशिष्ट योजना के आत्महत्या के विचार आना, या आत्महत्या का प्रयास/विशिष्ट योजना बनाना।</li></ul><h5>साक्ष्य-आधारित स्क्रीनिंग प्रोटोकॉल:</h5><ul><li><strong>PHQ-9 (Patient Health Questionnaire-9)</strong>: स्कोर 0-4 (न्यूनतम), 5-9 (हल्का), 10-14 (मध्यम), 15-19 (मध्यम गंभीर), 20-27 (गंभीर अवसाद)। आत्म-नुकसान या आत्महत्या के जोखिम का आकलन करने के लिए हमेशा Item 9 का बारीकी से मूल्यांकन करें।</li><li><strong>विभेदक निदान (Differential Diagnosis)</strong>: थायराइड की जांच (TSH panel) कर हाइपोथायरायडिज्म की संभावना को खारिज करें। इसके अतिरिक्त, विटामिन D3/B12 की कमी, पदार्थ-प्रेरित मूड डिसऑर्डर, और सामान्य शोक (Bereavement) बनाम MDD में अंतर स्पष्ट करें। मरीज को एंटीडिप्रेसेंट मोनोथेरेपी शुरू करने से पहले अंतर्निहित बाइपोलर लक्षणों की जांच अवश्य करें ताकि मैनिक स्विचिंग (Manic switching) को रोका जा सके।</li></ul>"
        },
        {title:"चिंता (एंग्ज़ाइटी डिसऑर्डर)", desc:"जब सामान्य चिंता रोजमर्रा की परिस्थितियों के प्रति एक स्थायी, अत्यधिक और बेकाबू डर का रूप ले लेती है।", detailTitle:"चिंता रोग", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"तनाव और बर्नआउट", desc:"लंबे समय तक काम, पढ़ाई या व्यक्तिगत जीवन में भारी दबाव के कारण होने वाली अत्यधिक मानसिक थकावट।", detailTitle:"तनाव और बर्नआउट", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"बाइपोलर डिसऑर्डर", desc:"एक जटिल मानसिक स्थिति जिसमें व्यक्ति के मूड, ऊर्जा और कार्य करने की क्षमता में बहुत बड़े उतार-चढ़ाव आते हैं।", detailTitle:"बाइपोलर डिसऑर्डर", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"ओसीडी (ऑब्सेसिव कंपल्सिव डिसऑर्डर)", desc:"यह एक ऐसी स्थिति है जिसमें व्यक्ति के मन में अवांछित विचार बार-बार आते हैं, और वह एक ही व्यवहार दोहराता है।", detailTitle:"ओसीडी", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"नशा और लत (एडिक्शन)", desc:"यह मस्तिष्क से जुड़ी एक दीर्घकालिक बीमारी है जिसमें नुकसानदेह परिणामों के बावजूद व्यक्ति नशा बंद नहीं कर पाता।", detailTitle:"नशा और लत", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"बाल एवं किशोर मानसिक स्वास्थ्य", desc:"बच्चों और किशोरों में होने वाली व्यवहार संबंधी, विकासात्मक और भावनात्मक समस्याओं पर ध्यान देना।", detailTitle:"बाल मानसिक स्वास्थ्य", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"},
        {title:"आत्महत्या रोकथाम और क्राइसिस सपोर्ट", desc:"गंभीर मानसिक संकट के संकेतों को पहचानना, जैसे कि पूरी तरह से निराश होना या आत्म-नुकसान की बात करना।", detailTitle:"आत्महत्या रोकथाम", publicSection:"<p>विस्तृत जानकारी जल्द ही जोड़ी जाएगी।</p>", clinicianSection:"<p>क्लिनिकल गाइडलाइन्स जल्द उपलब्ध होंगी।</p>"}
      ]
    },
    resources: {
      eyebrow:"संसाधन", title:"संसाधन और स्व-सहायता", subtitle:"मुफ्त, गोपनीय सहायता अभी उपलब्ध है।",
      helplinesTitle:"राष्ट्रीय हेल्पलाइन (भारत)",
      helplines:[
        {name:"टेली-मानस (Tele-MANAS)", number:"14416", desc:"भारत सरकार की 24x7 बहुभाषी मानसिक स्वास्थ्य हेल्पलाइन।"},
        {name:"किरण (KIRAN)", number:"1800-599-0019", desc:"राष्ट्रीय मानसिक स्वास्थ्य पुनर्वास हेल्पलाइन, 24x7।"},
        {name:"आईकॉल (iCall)", number:"9152987821", desc:"TISS द्वारा मनो-सामाजिक हेल्पलाइन, सोम–शनि।"}
      ],
      tipsTitle:"रोज़मर्रा की स्व-सहायता",
      tips:["जिस पर भरोसा हो उससे अपनी भावनाओं के बारे में बात करें","नियमित नींद और भोजन की दिनचर्या बनाए रखें","शराब सीमित करें और स्वयं दवा लेने से बचें","चिंता बढ़ने पर धीमी साँस लेने का अभ्यास करें","पेशेवर मदद जल्दी लें — यह कारगर है"],
      disclaimer:"यदि आप या आपका कोई परिचित तत्काल खतरे में है, तो कृपया ऊपर दी गई हेल्पलाइन पर कॉल करें या नज़दीकी आपातकालीन कक्ष में जाएँ।"
    },
    blog: {
      eyebrow:"पढ़ें", title:"जागरूकता लेख", subtitle:"मानसिक स्वास्थ्य पर छोटे लेख, सबके लिए लिखे गए।",
      posts:[
        {tag:"कलंक", title:"मानसिक बीमारी के बारे में फुसफुसाना क्यों बंद करना चाहिए", excerpt:"चुप्पी कलंक की रक्षा करती है, लोगों की नहीं। खुली बातचीत क्यों ज़रूरी है।"},
        {tag:"चिंता", title:"क्या यह सामान्य चिंता है या एंग्ज़ाइटी डिसऑर्डर?", excerpt:"फर्क बताने के लिए एक सरल गाइड — और आगे क्या करें।"}
      ],
      readMore:"और पढ़ें"
    },
    testimonials: {
      eyebrow:"अनुभव", title:"लोग क्या कहते हैं",
      quotes:[
        {text:"मुझे नहीं पता था कि जो मैं महसूस कर रहा था उसका एक नाम है — और यह ठीक हो सकता है। इसने मुझे पहला कदम उठाने में मदद की।", author:"अज्ञात, 27"},
        {text:"अपनी स्थिति के बारे में सरल भाषा में, बिना किसी निर्णय के पढ़ना, आखिरकार मदद माँगना आसान बना दिया।", author:"अज्ञात, 34"}
      ],
      disclaimer:"अनुमति से साझा किया गया। गोपनीयता की सुरक्षा के लिए पहचान संबंधी विवरण हटा दिए गए हैं।"
    },
    contact: {
      eyebrow:"संपर्क करें", title:"संपर्क और अपॉइंटमेंट", subtitle:"कोई सवाल है, या परामर्श बुक करना चाहते हैं? नीचे संपर्क करें।",
      formName:"पूरा नाम", formEmail:"ईमेल पता", formLanguage:"पसंदीदा भाषा", formMessage:"संदेश",
      formSubmit:"संदेश भेजें", formNote:"यह फॉर्म सामान्य प्रश्नों के लिए है। यदि यह आपातकाल है, तो कृपया इसके बजाय हेल्पलाइन पर कॉल करें।",
      clinicTitle:"क्लिनिक", clinicAddressNote:"पता और मानचित्र यहाँ दिखाई लगेंगे।", phoneLabel:"फोन / व्हाट्सऐप", emailLabel:"ईमेल",
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
    meta: { title:"ડૉ. રાઘવ સુથાર — માનસિક સ્વાસ્થ્ય જાગૃતિ", desc:"ગુજરાતમાં એક પ્રેક્ટિસિંગ મનોચિકિત્સક દ્વારા જાહેર માનસિક સ્વાસ્થ્ય જાગૃતિ સંસાધન." },
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
      bioLine1:"ડૉ. રાઘવ સુથાર ગુજરાતમાં પ્રેક્ટિસ કરતા મનોચિકિત્સક છે, જેમને માનસિક સ્વાસ્થ્ય સંભાળને દરેક માટે સમજી શકાય તેવી અને સુલભ બનાવવામાં ખાસ રસ છે.",
      bioLine2:"આ વેબસાઇટ એટલા માટે બનાવવામાં આવી છે કારણ કે માનસિક બીમારી સાથે જોડાયેલ મોટાભાગની પીડા મૌનમાંથી આવે છે, બીમારીમાંથી નહીં.",
      missionTitle:"અમારું ધ્યેય",
      missionText:"કલંક ઘટાડવું, સચોટ માનસિક સ્વાસ્થ્ય જાગૃતિ ફેલાવવી, અને લોકોને એ ઓળખવામાં મદદ કરવી કે ક્યારે વ્યાવસાયિક સહાય લેવાનો સમય છે."
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
      eyebrow:"જાણો", title:"સામાન્ય માનસિક સ્વાસ્થ્ય વિષયો", subtitle:"સમજવું એ પ્રથમ પગલું છે. ઊંડી તબીબી માહિતી વાંચવા માટે કોઈપણ કાર્ડ પર ક્લિક કરો.",
      items:[
        {
          title: "ડિપ્રેશન (ગંભીર હતાશાનો રોગ)", 
          desc: "આ માત્ર થોડા સમયની ઉદાસી નથી. ક્લિનિકલ ડિપ્રેશન એક ગંભીર તબીબી સ્થિતિ છે જે વૈશ્વિક સ્તરે લાખો લોકોને અસર કરે છે.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: મેજર ડિપ્રેસિવ ડિસઓર્ડર (MDD)",
          publicSection: "<h4>સામાન્ય જનતા માટે: ડિપ્રેશનને સમજવું</h4><p>ડિપ્રેશન એ મગજ સાથે જોડાયેલી એક જૈવિક તબીબી સ્થિતિ (Biological condition) છે, કોઈ વ્યક્તિની નબળાઈ કે આળસની નિશાની નથી. તે મગજના રસાયણોમાં (Brain chemistry) ફેરફાર કરે છે, જે તમારા વિચારવા, અનુભવવા અને ઊંઘવા, ખાવા કે કામ કરવા જેવી દૈનિક પ્રવૃત્તિઓ પર સીધી અસર કરે છે.</p><h5>ધ્યાન રાખવા જેવા મુખ્ય લક્ષણો:</h5><ul><li>સતત મન ઉદાસ રહેવું, ખાલીપો અનુભવવો અથવા ૨ અઠવાડિયાથી વધુ સમય સુધી વારંવાર રડવું આવવું.</li><li>તમને પહેલા જે પ્રવૃત્તિઓ કે શોખ ખૂબ ગમતા હતા તેમાં હવે બિલકુલ રસ ન રહેવો (Anhedonia).</li><li>કોઈ પણ શારીરિક મહેનત વિના પણ સતત ભારે નબળાઈ, થાક અને શક્તિનો અભાવ અનુભવવો.</li><li>ઊંઘમાં મોટો ફેરફાર થવો (અનિદ્રા અથવા સામાન્ય કરતાં ઘણું વધારે ઊંઘવું) અને ભૂખ કે વજનમાં અચાનક ફેરફાર થવો.</li><li>પોતાને સાવ નકામા સમજવા, અતિશય હીનભાવના કે કોઈ પણ કારણ વિના અપરાધભાવ (Excessive guilt) અનુભવવો.</li></ul><h5>ડોક્ટરની સલાહ ક્યારે લેવી?</h5><p>જો આ લક્ષણો સતત ૨ અઠવાડિયાથી વધુ સમય સુધી ચાલુ રહે અને તમારા પારિવારિક જીવન, નોકરી કે સામાજિક સંબંધોમાં અવરોધ ઊભો કરે, તો લાયક મનોચિકિત્સક (Psychiatrist) નો સંપર્ક કરવાનો સમય પાકી ગયો છે. યોગ્ય પરામર્શ અને તબીબી સારવારથી ડિપ્રેશનમાંથી સંપૂર્ણપણે બહાર આવી શકાય છે.</p>",
          clinicianSection: "<h4>તબીબો (Clinicians) માટે: નૈદાનિક અને સ્ક્રીનીંગ માર્ગદર્શિકા</h4><h5>DSM-5 નૈદાનિક માપદંડ (Diagnostic Criteria):</h5><p>દર્દીમાં એક જ ૨-અઠવાડિયાના સમયગાળા દરમિયાન નીચેનામાંથી ૫ અથવા વધુ લક્ષણો હાજર હોવા જોઈએ, જે તેમની અગાઉની કામગીરીમાં સ્પષ્ટ ફેરફાર દર્શાવે છે; ઓછામાં ઓછું ૧ લક્ષણ કાં તો (૧) ઉદાસ મૂડ અથવા (૨) રસ કે આનંદનો અભાવ હોવો જ જોઈએ.</p><ul><li>દિવસનો મોટાભાગનો સમય, લગભગ દરરોજ ઉદાસ અથવા નીચો મૂડ રહેવો.</li><li>તમામ અથવા લગભગ તમામ પ્રવૃત્તિઓમાં રસ અથવા આનંદમાં સ્પષ્ટ ઘટાડો થવો.</li><li>ડાયેટિંગ વિના પણ વજનમાં મોટો ઘટાડો કે વધારો, અથવા ભૂખમાં અસામાન્ય ઘટાડો/વધારો.</li><li>લગભગ દરરોજ અનિદ્રા (Insomnia) અથવા અતિનિદ્રા (Hypersomnia) ની સમસ્યા.</li><li>સાયકોમોટર ઉત્તેજના (Agitation) અથવા મંદતા (Retardation) જે અન્યો દ્વારા જોઈ શકાય.</li><li>લગભગ દરરોજ થાક અથવા શક્તિનો મોટો અભાવ વર્તાવો.</li><li>પોતાને સંપૂર્ણ નિરર્થક સમજવા અથવા અતિશય અને અયોગ્ય અપરાધભાવ અનુભવવો.</li><li>વિચારવાની, ધ્યાન કેન્દ્રિત કરવાની ક્ષમતામાં ઘટાડો અથવા અનિર્ણાયક સ્થિતિ બનેલી રહેવી.</li><li>વારંવાર મૃત્યુના વિચારો આવવા, અથવા આત્મહત્યાના વિચારો આવવા, અથવા આત્મહત્યાનો પ્રયાસ/ચોક્કસ યોજના ઘડવી.</li></ul><h5>સાક્ષ્ય-આધારિત સ્ક્રીનીંગ પ્રોટોકોલ:</h5><ul><li><strong>PHQ-9 (Patient Health Questionnaire-9)</strong>: સ્કોર ૦-૪ (ન્યૂનતમ), ૫-૯ (હળવું), ૧૦-૧૪ (મધ્યમ), ૧૫-૧૯ (મધ્યમ ગંભીર), ૨૦-૨૭ (ગંભીર ડિપ્રેશન). આત્મ-નુકસાન અથવા આત્મહત્યાના જોખમનું મૂલ્યાંકન કરવા માટે હંમેશા Item 9 નું બારીકાઈથી પરીક્ષણ કરો.</li><li><strong>વિભેદક નિદાન (Differential Diagnosis)</strong>: થાઈરોઈડની તપાસ (TSH panel) કરી હાઈપોથાઈરોઈડિઝમની શક્યતા નકારી કાઢો. આ ઉપરાંત, વિટામિન D3/B12 ની ઉણપ, પદાર્થ-પ્રેરિત મૂડ ડિસઓર્ડર, અને સામાન્ય શોક (Bereavement) વિરુદ્ધ MDD વચ્ચેનો તફાવત સ્પષ્ટ કરો. દર્દીને એન્ટીડિપ્રેશન્ટ મોનોથેરાપી શરૂ કરતા પહેલા બાયપોલર લક્ષણોની તપાસ અવશ્ય કરો જેથી મેનિક સ્વિચિંગ (Manic switching) અટકાવી શકાય.</li></ul>"
        },
        {title:"એન્ઝાયટી ડિસઓર્ડર (ચિંતા)", desc:"જ્યારે સામાન્ય ચિંતા રોજિંદી પરિસ્થિતિઓ પ્રત્યે સતત, અતિશय અને કાબૂ બહારના ડરનું સ્વરૂપ લઈ લે છે.", detailTitle:"ચિંતા રોગ", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"તણાવ અને બર્નઆઉટ", desc:"લાંબા સમય સુધી કામ, અભ્યાસ અથવા વ્યક્તિગત જીવનમાં ભારે દબાણને કારણે થતો અતિશય માનસિક અને શારીરિક થાક.", detailTitle:"તણાવ અને બર્નઆઉટ", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"બાયપોલર ડિસઓર્ડર", desc:"એક જટિલ માનસિક સ્થિતિ છે જેમાં વ્યક્તિના મૂડ, ઉર્જા અને કાર્ય કરવાની ક્ષમતામાં મોટા ઉતાર-ચઢાવ આવે છે.", detailTitle:"બાયપોલર ડિસઓર્ડર", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"ઓસીડી (ઓબ્સેસિવ કમ્પલ્સિવ ડિસઓર્ડર)", desc:"આ એક એવી સ્થિતિ છે જેમાં વ્યક્તિના મનમાં અનિચ્છનીય વિચારો વારંવાર આવે છે, અને તે ચિંતા અનુભવે છે.", detailTitle:"ઓસીડી", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"વ્યસન અને લત (એડિક્શન)", desc:"આ મગજ સાથે જોડાયેલી એક લાંબા ગાળાની બીમારી છે જેમાં નુકસાનકારક પરિણામો હોવા છતાં વ્યક્તિ નશો કરી બેસે છે.", detailTitle:"વ્યસન મુક્તિ", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"બાળ અને કિશોર માનસિક સ્વાસ્થ્ય", desc:"બાળકો અને કિશોરોમાં જોવા મળતી વર્તણૂક સંબંધિત, વિકાસાत्मक અને ભાવનાત્મક સમસ્યાઓ પર ધ્યાન આપવું.", detailTitle:"બાળ માનસિક સ્વાસ્થ્ય", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"},
        {title:"આત્મહત્યા નિવારણ અને કટોકટી સપોર્ટ", desc:"ગંભીર માનસિક સંકટના સંકેતોને ઓળખવા, જેમ કે સંપૂર્ણપણે નિરાશ થઈ જવું અથવા આત્મ-નુકસાનની વાતો કરવી.", detailTitle:"આત્મહત્યા નિવારણ", publicSection:"<p>વિગતવાર માહિતી ટૂંક સમયમાં ઉમેરવામાં આવશે.</p>", clinicianSection:"<p>ક્લિનિકલ માર્ગદર્શિકા ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>"}
      ]
    },
    resources: {
      eyebrow:"સંસાધનો", title:"સંસાધનો અને સ્વ-સહાય", subtitle:"મફત, ગોપનીય સહાય અત્યારે જ ઉપલબ્ધ છે.",
      helplinesTitle:"રાષ્ટ્રીય હેલ્પલાઇન (ભારત)",
      helplines:[
        {name:"ટેલી-માનસ (Tele-MANAS)", number:"14416", desc:"ભારત સરકારની 24x7 બહુભાષી માનસિક સ્વાસ્થ્ય હેલ્પલાઇન."},
        {name:"કિરણ (KIRAN)", number:"1800-599-0019", desc:"રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય પુનર્વસન હેલ્પલાઇન, 24x7."},
        {name:"આઈકોલ (iCall)", number:"9152987821", desc:"TISS દ્વારા મનો-સામાજિક હેલ્પલાઇન, સોમ–શનિ."}
      ],
      tipsTitle:"રોજિંદી સ્વ-સહાય",
      tips:["તમે વિશ્વાસ કરો છો તે વ્યક્તિ સાથે તમારી લાગણીઓ વિશે વાત કરો","નિયમિત ઊંઘ અને ભોજનની દિનચર્યા જાળવો","દારૂ મર્યાદિત કરો અને જાਤੇ દવા લેવાનું ટાળો","ચિંતા વધે ત્યારે ધીમા શ્વાસ લેવાનો પ્રયાસ કરો","વ્યાવસાયિક મદદ વહેલી લો — તે અસરકારક છે"],
      disclaimer:"જો તમે અથવા તમારા કોઈ પરિચિત તાત્કાલિક જોખમમાં હોય, તો કૃપા કરીને ઉપર આપેલી હેલ્પલાઇન પર કૉલ કરો અથવા નજીકના ઇમરજન્સી રૂમમાં જાઓ."
    },
    blog: {
      eyebrow:"વાંચો", title:"જાગૃતિ લેખો", subtitle:"માનસિક સ્વાસ્થ્ય પર ટૂંકા લેખો, દરેક માટે લખાયેલા.",
      posts:[
        {tag:"કલંક", title:"માનસિક બીમારી વિશે ફફડાટમાં વાત કરવાનું શા માટે બંધ કરવું જોઈએ", excerpt:"મૌન કલંકનું રક્ષણ કરે છે, લોકોનું નહીં. ખુલ્લી વાતચીત શા માટે મહત્વની છે."},
        {tag:"એન્ઝાયટી", title:"શું આ સામાન્ય ચિંતા છે કે એન્ઝાયટી ડિસઓર્ડર?", excerpt:"તફાવત જણાવવા માટે એક સરળ માર્ગદર્શિકા — અને આગળ શું કરવું."}
      ],
      readMore:"વધુ વાંચો"
    },
    testimonials: {
      eyebrow:"અનુભવો", title:"લોકો શું કહે છે",
      quotes:[
        {text:"મને ખબર નહોતી કે હું જે અનુભવી રહ્યો હતો તેનું એક નામ છે — અને તે સારું થઈ શકે છે. આનાથી મને પહેલું પગલું ભરવામાં મદદ મળી.", author:"અનામી, 27"},
        {text:"મારી સ્થિતિ વિશે સરળ ભાષામાં, કોઈ પણ જજમેન્ટ વગર વાંચવાથી, આખરે મદદ માંગવી સરળ બની.", author:"અનામી, 34"}
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
