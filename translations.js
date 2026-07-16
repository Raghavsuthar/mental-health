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
          clinicianSection: "<h4>For Clinicians: Diagnostic & Screening Guidelines</h4><h5>DSM-5 Diagnostic Criteria Highlights:</h5><p>Requires 5 or more symptoms present during the same 2-week period, representing a distinct change from previous functioning; at least 1 symptom must be either (1) depressed mood or (2) loss of interest or pleasure.</p><ul><li>Depressed mood most of the day, nearly every day.</li><li>Markedly diminished interest or pleasure in all, or almost all, activities.</li><li>Significant weight loss or gain, or decrease/increase in appetite.</li><li>Insomnia or hypersomnia nearly every day.</li><li>Psychomotor agitation or retardation.</li><li>Fatigue or loss of energy nearly every day.</li><li>Feelings of worthlessness or excessive/inappropriate guilt.</li><li>Diminished ability to think/concentrate, or indecisiveness.</li><li>Recurrent thoughts of death, recurrent suicidal ideation without a specific plan, or a suicide attempt/specific plan.</li></ul><h5>Evidence-Based Screening Protocols:</h5><ul><li><strong>PHQ-9 (Patient Health Questionnaire-9)</strong>: Score of 0-4 (Minimal), 5-9 (Mild), 10-14 (Moderate), 15-19 (Moderately Severe), 20-27 (Severe). Always closely evaluate Item 9 for self-harm risk.</li><li><strong>Differential Diagnosis Considerations</strong>: Rule out Hypothyroidism (perform TSH panel), Substance-Induced Mood Disorder, Vitamin D3/B12 deficiencies, and Normal Bereavement vs. MDD. Evaluate for underlying Bipolar spectrum features before initiating Monotherapy Antidepressant treatments to prevent manic switching.</li></ul>"
        },
        {
          title: "Anxiety Disorders", 
          desc: "When normal worry transforms into persistent, overwhelming, and excessive fear regarding everyday situations.",
          detailTitle: "Clinical Overview: Generalized Anxiety & Panic Disorders",
          publicSection: "<h4>For the Public: Understanding Anxiety</h4><p>Anxiety disorders involve more than temporary stress. It is a state where the mind stays in constant high alert, misinterpreting normal situations as dangerous threats.</p><h5>Common Symptoms to Watch For:</h5><ul><li>Constant uncontrollable worry about everyday events.</li><li>Physical signs: rapid heart rate, muscle tension, tremors, and sudden sweating.</li><li>Restlessness, feeling constantly on edge, or difficulty falling asleep.</li><li>Sudden, overwhelming surges of intense fear accompanied by chest pain or shortness of breath (Panic Attacks).</li></ul><h5>When to seek care:</h5><p>Seek professional psychiatric guidance if your worries feel uncontrollable, cause ongoing physical distress, or force you to avoid basic activities like social gatherings, driving, or work.</p>",
          clinicianSection: "<h4>For Clinicians: Clinical Frameworks</h4><h5>Diagnostic & Screening Protocols:</h5><ul><li><strong>GAD-7 (Generalized Anxiety Disorder-7)</strong>: Utilize to track severity baseline. Scores ≥ 10 indicate a strong clinical threshold for generalized anxiety disorder.</li><li><strong>Somatic Presentation Rule-Outs</strong>: Differentiate clinical anxiety presentations from Cardiac Arrhythmias, Pheochromocytoma, Vestibular dysfunction, Caffeine intoxication, or Hyperthyroidism. Evaluate for comorbid Major Depressive Disorder, which presents in over 60% of cases.</li></ul>"
        },
        {
          title: "Stress & Burnout", 
          desc: "Chronic emotional and physical exhaustion resulting from prolonged exposure to severe stressors.",
          detailTitle: "Clinical Overview: Chronic Stress and Occupational Burnout",
          publicSection: "<h4>For the Public: Understanding Burnout</h4><p>Burnout is a state of total emotional, physical, and mental exhaustion caused by excessive, prolonged stress—typically from work, school, or caregiving.</p><h5>Common Symptoms to Watch For:</h5><ul><li>Feeling completely drained, tired, and lacking energy almost every single day.</li><li>Developing a cynical, negative, or detached attitude toward your work or daily roles.</li><li>A noticeable drop in performance, productivity, or ability to concentrate.</li><li>Frequent unexplained headaches, muscle pain, or weakened immunity.</li></ul><h5>When to seek care:</h5><p>If simple rest no longer restores your energy, or if feelings of emptiness and cynicism are deeply impacting your personal health and career, reaching out for therapy can help you recover safely.</p>",
          clinicianSection: "<h4>For Clinicians: Assessment Guidelines</h4><h5>Clinical Differentiation:</h5><p>Evaluate carefully to separate state-dependent Occupational Burnout from syndromal Major Depressive Disorder (MDD). Burnout presents with localized cynicism and frustration regarding a specific environment (e.g., workplace), whereas MDD features pervasive anhedonia, global worthlessness, and generalized psychomotor shifts across all life areas.</p>"
        },
        {
          title: "Bipolar Disorder", 
          desc: "A complex neurological condition marked by significant shifts in mood, energy, and activity levels.",
          detailTitle: "Clinical Overview: Bipolar Affective Disorder (BPAD)",
          publicSection: "<h4>For the Public: Understanding Bipolar Disorder</h4><p>Bipolar disorder is a biological brain condition marked by extreme shifts in mood, energy, and behavior that go far beyond typical emotional ups and downs.</p><h5>The Two Extreme Cycles:</h5><ul><li><strong>Manic Phases</strong>: Periods of extreme high energy, feeling overly euphoric or irritable, speaking rapidly, racing thoughts, reckless spending, and an severely reduced need for sleep without feeling tired.</li><li><strong>Depressive Phases</strong>: Periods of deep sadness, complete lack of energy, feelings of total worthlessness, excessive sleeping, and withdrawal from society.</li></ul><h5>When to seek care:</h5><p>Bipolar disorder requires long-term tracking under a psychiatrist. Seek help immediately if you observe dangerous impulsive behaviors or rapid shifts in mood that damage stability.</p>",
          clinicianSection: "<h4>For Clinicians: Management Guidelines</h4><h5>Critical Safety Screening Protocols:</h5><ul><li><strong>Screening</strong>: Utilize the MDQ (Mood Disorder Questionnaire) before prescribing Antidepressant monotherapy to prevent drug-induced manic switches.</li><li><strong>Bipolar I vs. Bipolar II</strong>: Bipolar I requires at least one lifetime full Manic Episode (may include psychosis). Bipolar II requires a history of at least one Hypomanic Episode AND at least one Major Depressive Episode, without full mania. Maintenance relies heavily on mood stabilizers and atypical antipsychotics.</li></ul>"
        },
        {
          title: "OCD (Obsessive-Compulsive Disorder)", 
          desc: "A chronic mental health condition where a person experiences uncontrollable, recurring thoughts and behaviors.",
          detailTitle: "Clinical Overview: Obsessive-Compulsive Disorder",
          publicSection: "<h4>For the Public: Understanding OCD</h4><p>OCD is a medical brain condition, not a personality quirk or a preference for neatness. It involves a distressing loop of thoughts and actions that are difficult to break without help.</p><h5>The Two Key Components:</h5><ul><li><strong>Obsessions</strong>: Distressing, unwanted, and intrusive thoughts, images, or urges (e.g., excessive fears of contamination, symmetry, or harm).</li><li><strong>Compulsions</strong>: Repetitive actions or mental routines performed to try and reduce the anxiety caused by the obsession (e.g., constant handwashing, repeating words, or checking locks).</li></ul><h5>When to seek care:</h5><p>If these repetitive thoughts and rituals take up more than an hour a day, cause deep distress, or stop you from enjoying normal life, professional treatment can help you break the loop.</p>",
          clinicianSection: "<h4>For Clinicians: Diagnostic Standards</h4><h5>Clinical Metrics and Interventions:</h5><ul><li><strong>Severity Assessment</strong>: Apply the Y-BOCS (Yale-Brown Obsessive Compulsive Scale) to establish clinical baselines. Obsessions and compulsions must be highly time-consuming (consume > 1 hour per day) or cause significant distress and functional impairment.</li><li><strong>First-Line Interventions</strong>: High-dose SSRI management combined with Exposure and Response Prevention (ERP) behavioral therapy protocol frameworks.</li></ul>"
        },
        {
          title: "Addiction & Substance Use", 
          desc: "A chronic, relapsing brain disease characterized by compulsive substance seeking and use.",
          detailTitle: "Clinical Overview: Substance Use Disorders (SUD)",
          publicSection: "<h4>For the Public: Understanding Addiction</h4><p>Addiction is a chronic disease that changes brain chemistry, impairing a person's control over using substances like alcohol, nicotine, prescriptions, or illicit drugs.</p><h5>Common Warning Signs:</h5><ul><li>An intense, uncontrollable craving to use the substance regularly.</li><li>Needing higher amounts of the substance over time to achieve the same effect (Tolerance).</li><li>Experiencing physical sickness, tremors, sweating, or anxiety when trying to stop (Withdrawal).</li><li>Neglecting family, health, and work responsibilities to prioritize substance use.</li></ul><h5>When to seek care:</h5><p>Addiction requires medical rehabilitation. If attempts to cut back cause physical distress, or if substance use is harming personal safety and relationships, consult a professional for medical detoxification.</p>",
          clinicianSection: "<h4>For Clinicians: Detoxification Protocols</h4><h5>Clinical Management Systems:</h5><ul><li><strong>Withdrawal Tracking Scales</strong>: Apply objective medical monitoring systems such as CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) or COWS (Clinical Opiate Withdrawal Scale) to direct detoxification timing.</li><li><strong>Treatment Pathways</strong>: Prioritize prevention of severe complications like Wernicke-Korsakoff syndrome, Delirium Tremens, and dangerous seizures using structured pharmacological tracking and long-term psychosocial relapse prevention protocols.</li></ul>"
        },
        {
          title: "Child & Adolescent Mental Health", 
          desc: "Addresses behavioral, developmental, and emotional challenges unique to young minds.",
          detailTitle: "Clinical Overview: Pediatric & Adolescent Neurodevelopmental Care",
          publicSection: "<h4>For the Public: Understanding Youth Mental Health</h4><p>Children and teenagers experience unique emotional, behavioral, and developmental challenges as their brains grow and adapt.</p><h5>Common Areas of Concern:</h5><ul><li><strong>Neurodevelopmental Shifts</strong>: Constant hyperactivity, extreme difficulty paying attention, or struggles with social skills (like ADHD or Autism spectrum traits).</li><li><strong>Emotional Changes</strong>: Sudden drops in school grades, severe emotional outbursts, extreme social withdrawal, or school refusal behaviors.</li></ul><h5>When to seek care:</h5><p>If a child's behavioral or emotional patterns show a sudden, lasting change that disrupts school performance, friendships, or family harmony, early psychiatric tracking can guide them back to healthy development.</p>",
          clinicianSection: "<h4>For Clinicians: Pediatric Protocols</h4><h5>Clinical Assessment Parameters:</h5><ul><li><strong>Developmental Inquiries</strong>: Screen across milestones, academic performance baselines, and family dynamic matrix changes. Assess for conditions including ADHD, Oppositional Defiant Disorder (ODD), and early onset Mood Disorders.</li><li><strong>Systemic Intervention</strong>: Treatment pathways must prioritize multi-systemic interventions involving school networks, pediatric medical care, and structured family counseling models before executing prolonged pharmacological plans.</li></ul>"
        },
        {
          title: "Suicide Prevention & Crisis Support", 
          desc: "Recognizing crucial warning signs—such as absolute hopelessness or explicit statements about self-harm.",
          detailTitle: "Clinical Overview: Crisis Management & Suicide Risk Mitigation",
          publicSection: "<h4>For the Public: Suicide Prevention Guide</h4><p>Suicidal thoughts are the result of severe psychological pain and crisis, not a personal flaw. Recognizing early warning signs can save lives.</p><h5>Critical Warning Signs:</h5><ul><li>Expressing profound feelings of being a burden to others or having no reason to live.</li><li>Talking explicitly about wanting to die, self-harming, or searching for methods online.</li><li>Sudden, uncharacteristic social withdrawal or giving away prized possessions.</li><li>A sudden, unexplained wave of calm or happiness after a deep depressive phase.</li></ul><h5>What to do immediately:</h5><p>If someone shows these signs, do not leave them alone. Ask them directly and calmly about their safety without judgment. Remove dangerous items and connect them immediately to national 24/7 emergency helplines like Tele-MANAS (14416).</p>",
          clinicianSection: "<h4>For Clinicians: Risk Assessment Protocols</h4><h5>Emergency Intervention Protocols:</h5><ul><li><strong>Direct Risk Assessment</strong>: Actively screen for absolute suicidal intent, ideation complexity, and access to lethal means using validated frameworks like the C-SSRS (Columbia-Suicide Severity Rating Scale).</li><li><strong>Safety Interventions</strong>: Never allow a patient in acute crisis to leave unmonitored. Restrict access to lethal means immediately, establish a structured crisis safety plan involving family support networks, and coordinate safe psychiatric admission tracking. Do not rely solely on 'no-harm contracts' as valid clinical mitigation tools.</li></ul>"
        }
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
    meta: { title:"डॉ. राघव सुथार — मानसिक स्वास्थ्य जागरूकता", desc:"गुजरात में एक प्रैक्टिसिंग मनोचिकित्सक द्वारा सार्वजनिक मानसिक स्वास्थ्य जागरूकता संसाधन।" },
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
          publicSection: "<h4>आम जनता के लिए: डिप्रेशन को समझना</h4><p>अवसाद या डिप्रेशन मस्तिष्क से जुड़ी एक जैविक चिकित्सीय स्थिति है, न कि किसी व्यक्ति की कमजोरी या आलस्य का संकेत। यह मस्तिष्क के रसायनों को बदल देता है, जिससे आपके सोचने, महसूस करने और दैनिक गतिविधियों को संभालने का तरीका प्रभावित होता है।</p><h5>मुख्य लक्षण जिन पर ध्यान दें:</h5><ul><li>लगातार मन उदास रहना, खालीपन महसूस होना या 2 सप्ताह से अधिक समय तक बार-बार रोना आना।</li><li>उन शौक में रुचि खो देना जो आपको पहले बहुत पसंद थीं (Anhedonia)।</li><li>बिना किसी शारीरिक मेहनत के भी हर समय अत्यधिक कमजोरी, थकान और ऊर्जा की कमी महसूस होना।</li><li>नींद में भारी बदलाव (अनिद्रा या बहुत अधिक सोना) और भूख या वजन में अचानक बदलाव आना।</li><li>खुद को बेकार समझना, अत्यधिक हीनभावना या बिना वजह अत्यधिक दोष महसूस करना।</li></ul><h5>डॉक्टर से कब मिलें?</h5><p>यदि ये लक्षण लगातार 2 सप्ताह से अधिक समय तक बने रहते हैं और आपके पारिवारिक जीवन, नौकरी या सामाजिक रिश्तों में बाधा डालते हैं, तो बिना देर किए एक योग्य मनोचिकित्सक से परामर्श करने का समय है।</p>",
          clinicianSection: "<h4>चिकित्सकों के लिए: नैदानिक और स्क्रीनिंग दिशानिर्देश</h4><h5>DSM-5 नैदानिक मानदंड (Diagnostic Criteria):</h5><p>मरीज में एक ही 2-सप्ताह की अवधि के दौरान निम्नलिखित में से 5 या अधिक लक्षण मौजूद होने चाहिए; कम से कम 1 लक्षण या तो (1) उदास मूड होना चाहिए या (2) रुचि या आनंद का खत्म होना होना चाहिए।</p><ul><li>दिन का अधिकांश भाग, लगभग हर दिन उदास या निम्न मूड रहना।</li><li>सभी या लगभग सभी गतिविधियों में रुचि या आनंद में स्पष्ट कमी आना।</li><li>अनिद्रा (Insomnia) या अतिनिद्रा (Hypersomnia) की समस्या।</li><li>थकान या ऊर्जा की भारी हानि होना।</li><li>बार-बार मृत्यु या आत्महत्या के विचार आना।</li></ul><h5>साक्ष्य-आधारित स्क्रीनिंग प्रोटोकॉल:</h5><ul><li><strong>PHQ-9 (Patient Health Questionnaire-9)</strong>: स्कोर 0-4 (न्यूनतम), 5-9 (हल्का), 10-14 (मध्यम), 15-19 (मध्यम गंभीर), 20-27 (गंभीर अवसाद)। आत्म-नुकसान के जोखिम का आकलन करने के लिए हमेशा Item 9 का मूल्यांकन करें।</li><li><strong>विभेदक निदान (Differential Diagnosis)</strong>: थायराइड की जांच (TSH panel) कर हाइपोथायरायडिज्म की संभावना को खारिज करें। एंटीडिप्रेसेंट शुरू करने से पहले अंतर्निहित बाइपोलर लक्षणों की जांच अवश्य करें ताकि मैनिक स्विचिंग को रोका जा सके।</li></ul>"
        },
        {
          title: "चिंता (एंग्ज़ाइटी डिसऑर्डर)", 
          desc: "जब सामान्य चिंता रोजमर्रा की परिस्थितियों के प्रति एक स्थायी, अत्यधिक और बेकाबू डर का रूप ले लेती है।",
          detailTitle: "क्लिनिकल अवलोकन: सामान्यीकृत चिंता और पैनिक विकार",
          publicSection: "<h4>आम जनता के लिए: चिंता रोग को समझना</h4><p>चिंता विकार अस्थायी तनाव से बढ़कर होते हैं। यह एक ऐसी स्थिति है जिसमें मस्तिष्क लगातार खतरे के मोड में रहता है और सामान्य स्थितियों को भी गंभीर समझने लगता है।</p><h5>मुख्य लक्षण जिन पर ध्यान दें:</h5><ul><li>रोजमर्रा की घटनाओं के बारे में लगातार और बेकाबू चिंता होना।</li><li>शारीरिक लक्षण: दिल की धड़कन बढ़ना, मांसपेशियों में खिंचाव, कंपन और अचानक पसीना आना।</li><li>बेचैनी, लगातार तनाव महसूस होना या सोने में परेशानी।</li><li>अचानक अत्यधिक डर का दौरा पड़ना, जिसमें छाती में दर्द या सांस फूलना (पैनिक अटैक) शामिल हैं।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: नैदानिक रूपरेखा</h4><h5>स्क्रीनिंग और विभेदन:</h5><ul><li><strong>GAD-7 Scale</strong>: बेसलाइन और प्रगति को ट्रैक करने के लिए उपयोग करें। स्कोर ≥ 10 सामान्यीकृत चिंता विकार की ओर संकेत करता है।</li><li><strong>शारीरिक लक्षण रूल-आउट</strong>: चिंता के लक्षणों को कार्डियक अतालता, हाइपरथायरायडिज्म, कैफीन नशा या वेस्टिबुलर शिथिलता से अलग करें।</li></ul>"
        },
        {
          title: "तनाव और बर्नआउट", 
          desc: "लंबे समय तक काम, पढ़ाई या व्यक्तिगत जीवन में भारी दबाव के कारण होने वाली अत्यधिक मानसिक थकावट।",
          detailTitle: "क्लिनिकल अवलोकन: क्रोनिक स्ट्रेस और ऑक्युपेशनल बर्नआउट",
          publicSection: "<h4>आम जनता के लिए: बर्नआउट को समझना</h4><p>बर्नआउट अत्यधिक और लंबे समय तक चलने वाले तनाव (आमतौर पर काम, कॉलेज या देखभाल की जिम्मेदारी) के कारण होने वाली शारीरिक, मानसिक और भावनात्मक थकावट की स्थिति है।</p><h5>मुख्य लक्षण जिन पर ध्यान दें:</h5><ul><li>लगभग हर दिन पूरी तरह से ऊर्जाहीन, थका हुआ और खाली महसूस करना।</li><li>अपने काम या दैनिक भूमिकाओं के प्रति नकारात्मक, उदासीन या चिड़चिड़ा नजरिया विकसित होना।</li><li>कार्यक्षमता, एकाग्रता या रचनात्मकता में भारी गिरावट आना।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: मूल्यांकन दिशानिर्देश</h4><h5>नैदानिक विभेदन (Clinical Differentiation):</h5><p>कार्यस्थल-विशिष्ट ऑक्युपेशनल बर्नआउट को व्यापक मेजर डिप्रेसिव डिसऑर्डर (MDD) से अलग करने के लिए सावधानीपूर्वक मूल्यांकन करें। बर्नआउट में हताशा एक विशिष्ट वातावरण (जैसे नौकरी) तक सीमित होती है, जबकि MDD में जीवन के सभी क्षेत्रों में व्यापक एनहेडोनिया और हीनभावना दिखाई देती है।</p>"
        },
        {
          title: "बाइपोलर डिसऑर्डर", 
          desc: "एक जटिल मानसिक स्थिति जिसमें व्यक्ति के मूड, ऊर्जा और कार्य करने की क्षमता में बहुत बड़े उतार-चढ़ाव आते हैं।",
          detailTitle: "क्लिनिकल अवलोकन: बाइपोलर अफेक्टिव डिसऑर्डर (BPAD)",
          publicSection: "<h4>आम जनता के लिए: बाइपोलर डिसऑर्डर को समझना</h4><p>बाइपोलर डिसऑर्डर एक मस्तिष्क से जुड़ी स्थिति है जिसमें मरीज के मूड, ऊर्जा और व्यवहार में अत्यधिक तीव्र उतार-चढ़ाव आते हैं, जो सामान्य मूड स्विंग्स से बहुत अलग होते हैं।</p><h5>दो मुख्य चक्र (Cycles):</h5><ul><li><strong>मैनिक चरण (Mania)</strong>: अत्यधिक उत्साह, खुद को सर्वशक्तिमान समझना, बहुत तेज बोलना, विचारों का तेजी से दौड़ना, अत्यधिक बिना सोचे-समझे पैसे खर्च करना और नींद की जरूरत में भारी कमी आना।</li><li><strong>अवसाद चरण (Depression)</strong>: गहरा दुख, ऊर्जा की भारी कमी, समाज से पूरी तरह कट जाना और रोते रहना।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: प्रबंधन दिशानिर्देश</h4><h5>सुरक्षा स्क्रीनिंग प्रोटोकॉल:</h5><ul><li><strong>स्क्रीनिंग</strong>: एंटीडिप्रेसेंट मोनोथेरेपी शुरू करने से पहले MDQ (Mood Disorder Questionnaire) का उपयोग करें ताकि दवा-प्रेरित मैनिक स्विचिंग को रोका जा सके।</li><li><strong>वर्गीकरण</strong>: बाइपोलर I के लिए कम से कम एक पूर्ण मैनिक एपिसोड की आवश्यकता होती है। बाइपोलर II के लिए कम से कम एक हाइपोमैनिक और एक मेजर डिप्रेसिव एपिसोड आवश्यक है। मुख्य उपचार मूड स्टेबलाइजर्स पर निर्भर करता है।</li></ul>"
        },
        {
          title: "ओसीडी (ऑब्सेसिव कंपल्सिव डिसऑर्डर)", 
          desc: "यह एक ऐसी स्थिति है जिसमें व्यक्ति के मन में अवांछित विचार बार-बार आते हैं, और वह एक ही व्यवहार दोहराता है।",
          detailTitle: "क्लिनिकल अवलोकन: ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)",
          publicSection: "<h4>आम जनता के लिए: ओसीडी को समझना</h4><p>ओसीडी मस्तिष्क से जुड़ी एक बीमारी है, यह केवल साफ-सफाई की आदत या सनक नहीं है। इसमें मरीज अवांछित विचारों और क्रियाओं के एक असहज चक्र में फंस जाता है।</p><h5>दो मुख्य भाग:</h5><ul><li><strong>ऑब्सेशन्स (Obsessions)</strong>: मन में बार-बार आने वाले परेशान करने वाले अनचाहे विचार या डर (जैसे गंदगी का डर, या किसी नुकसान का डर)।</li><li><strong>कंपल्शन्स (Compulsions)</strong>: उन अनचाहे विचारों की चिंता को कम करने के लिए बार-बार किया जाने वाला व्यवहार (जैसे बार-बार हाथ धोना, ताले चेक करना या गिनती करना)।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: नैदानिक मानक</h4><h5>हस्तक्षेप और मेट्रिक्स:</h5><ul><li><strong>तीव्रता मूल्यांकन</strong>: बेसलाइन स्थापित करने के लिए Y-BOCS (Yale-Brown Obsessive Compulsive Scale) का उपयोग करें। ये लक्षण प्रतिदिन कम से कम 1 घंटे से अधिक समय लेते हों और कार्यक्षमता को बाधित करते हों।</li><li><strong>उपचार</strong>: उच्च खुराक SSRI दवाओं के साथ एक्सपोजर एंड रिस्पांस प्रिवेंशन (ERP) बिहेवियरल थेरेपी का संयोजन सबसे प्रभावी है।</li></ul>"
        },
        {
          title: "नशा और लत (एडिक्शन)", 
          desc: "यह मस्तिष्क से जुड़ी एक दीर्घकालिक बीमारी है जिसमें नुकसानदेह परिणामों के बावजूद व्यक्ति नशा बंद नहीं कर पाता।",
          detailTitle: "क्लिनिकल अवलोकन: सब्सटेंस यूज़ डिसऑर्डर (SUD)",
          publicSection: "<h4>आम जनता के लिए: नशे की लत को समझना</h4><p>लत या एडिक्शन एक मस्तिष्क रोग है जो व्यक्ति के नियंत्रण को पूरी तरह समाप्त कर देता है, चाहे वह शराब, तंबाकू, नशीली दवाएं या कोई अन्य पदार्थ हो।</p><h5>मुख्य लक्षण:</h5><ul><li>पदार्थ का सेवन करने की अत्यधिक और तीव्र इच्छा होना।</li><li>समय के साथ समान असर के लिए पदार्थ की मात्रा को बढ़ाना पड़ना (Tolerance)।</li><li>नशा छोड़ने का प्रयास करने पर हाथ कांपना, पसीना आना, घबराहट या उल्टी होना (विड्रॉल लक्षण)।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: डिटॉक्सिफिकेशन प्रोटोकॉल</h4><h5>चिकित्सकीय प्रबंधन:</h5><ul><li><strong>विड्रॉल ट्रैकिंग</strong>: अल्कोहल विड्रॉल के लिए CIWA-Ar स्केल और ओपिओइड के लिए COWS स्केल का उपयोग करें ताकि डिटॉक्सिफिकेशन दवाओं की खुराक तय की जा सके।</li><li><strong>जटिलता रोकथाम</strong>: दौरे (Seizures), डेलिरियम ट्रैमेंस (Delirium Tremens) और वर्निक-कोर्साकॉफ सिंड्रोम जैसी जानलेवा जटिलताओं को रोकने के लिए उचित चिकित्सकीय और दीर्घकालिक पुनर्वास दृष्टिकोण अपनाएं।</li></ul>"
        },
        {
          title: "बाल एवं किशोर मानसिक स्वास्थ्य", 
          desc: "बच्चों और किशोरों में होने वाली व्यवहार संबंधी, विकासात्मक और भावनात्मक समस्याओं पर ध्यान देना।",
          detailTitle: "क्लिनिकल अवलोकन: बाल चिकित्सा एवं न्यूरोडेवलपमेंटल केयर",
          publicSection: "<h4>आम जनता के लिए: बच्चों का मानसिक स्वास्थ्य</h4><p>बढ़ती उम्र में बच्चों और किशोरों का मस्तिष्क विकास के दौर से गुजरता है, जिससे उनमें विशिष्ट भावनात्मक और व्यवहार संबंधी चुनौतियां आ सकती हैं।</p><h5>मुख्य समस्याएं:</h5><ul><li><strong>विकासात्मक समस्याएं</strong>: हर समय अत्यधिक भाग-दौड़ करना, ध्यान न लगा पाना, या सामाजिक मेलजोल में असमर्थता (जैसे ADHD या ऑटिज़्म के लक्षण)।</li><li><strong>भावनात्मक बदलाव</strong>: अचानक स्कूल के ग्रेड गिर जाना, अत्यधिक गुस्सा करना, स्कूल जाने से मना करना या अकेले कमरे में बंद रहना।</li></ul>",
          clinicianSection: "<h4>चिकित्सकों के लिए: बाल चिकित्सा प्रोटोकॉल</h4><h5>मूल्यांकन पैरामीटर:</h5><p>विकासात्मक मील के पत्थर (Developmental milestones), शैक्षणिक प्रदर्शन और पारिवारिक गतिशीलता का आकलन करें। लंबे समय तक दवाओं को शुरू करने से पहले थेरेपी, स्कूल काउंसलिंग और माता-पिता के प्रशिक्षण (Parent training) को प्राथमिकता दें।</p>"
        },
        {
          title: "आत्महत्या रोकथाम और क्राइसिस सपोर्ट", 
          desc: "गंभीर मानसिक संकट के संकेतों को पहचानना, जैसे कि पूरी तरह से निराश होना या आत्म-नुकसान की बात करना।",
          detailTitle: "क्लिनिकल अवलोकन: क्राइसिस मैनेजमेंट और सुसाइड रिस्क मिटिगेशन",
          publicSection: "<h4>आम जनता के लिए: आत्महत्या रोकथाम गाइड</h4><p>आत्महत्या के विचार गहरे मानसिक दर्द और अत्यधिक संकट का परिणाम होते हैं, यह कोई व्यक्तिगत कमजोरी नहीं है। समय पर लक्षणों को पहचान कर जान बचाई जा सकती है।</p><h5>अत्यधिक गंभीर लक्षण:</h5><ul><li>दूसरों पर बोझ होने की बात करना या यह कहना कि जीने का कोई मकसद नहीं है।</li><li>अलविदा कहना, अपनी कीमती चीजें दूसरों को दे देना या अचानक डिप्रेशन के बाद बहुत शांत या खुश दिखना।</li><li>खुद को नुकसान पहुंचाने के तरीकों के बारे में बात करना या खोजना।</li></ul><h5>तुरंत क्या करें?</h5><p>यदि कोई व्यक्ति ऐसे संकेत दे, तो उसे अकेला न छोड़ें। बिना किसी जजमेंट के सीधे बात करें और उन्हें तुरंत 24x7 आपातकालीन हेल्पलाइन जैसे **टेली-मानस (14416)** से जोड़ें।</p>",
          clinicianSection: "<h4>चिकित्सकों के लिए: जोखिम मूल्यांकन प्रोटोकॉल</h4><h5>आपातकालीन हस्तक्षेप:</h5><ul><li><strong>जोखिम मूल्यांकन</strong>: C-SSRS (Columbia-Suicide Severity Rating Scale) का उपयोग कर सक्रिय रूप से सुसाइडल इंटेंट, प्लान और साधनों तक पहुंच की जांच करें।</li><li><strong>सुरक्षा प्रबंधन</strong>: गंभीर संकट में मरीज को कभी भी अकेला न छोड़ें। साधनों तक पहुंच तुरंत प्रतिबंधित करें, परिवार को शामिल कर एक संकट सुरक्षा योजना (Crisis Safety Plan) बनाएं। केवल 'नो-शर्म कॉन्ट्रैक्ट्स' पर भरोसा न करें।</li></ul>"
        }
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
        {text:"मुझे नहीं पता था कि जो मैं महसूस कर रहा था उसका एक नाम है — और यह ठीक हो सकता है। इसने मुझे पहला कदम उठाने में मदद की।", author:"अज्ञान, 27"},
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
          publicSection: "<h4>સામાન્ય જનતા માટે: ડિપ્રેશનને સમજવું</h4><p>ડિપ્રેશન એ મગજ સાથે જોડાયેલી એક જૈવિક તબીબી સ્થિતિ છે, કોઈ વ્યક્તિની નબળાઈ કે આળસની નિશાની નથી. તે મગજના રસાયણોમાં ફેરફાર કરે છે, જે તમારા વિચારવા, અનુભવવા અને ઊંઘવા, ખાવા કે કામ કરવા જેવી દૈનિક પ્રવૃત્તિઓ પર સીધી અસર કરે છે.</p><h5>ધ્યાન રાખવા જેવા મુખ્ય લક્ષણો:</h5><ul><li>સતત મન ઉદાસ રહેવું, ખાલીપો અનુભવવો અથવા ૨ અઠવાડિયાથી વધુ સમય સુધી વારંવાર રડવું આવવું.</li><li>તમને પહેલા જે પ્રવૃત્તિઓ કે શોખ ખૂબ ગમતા હતા તેમાં હવે બિલકુલ રસ ન રહેવો (Anhedonia).</li><li>કોઈ પણ શારીરિક મહેનત વિના પણ સતત ભારે નબળાઈ, થાક અને શક્તિનો અભાવ અનુભવવો.</li><li>ઊંઘમાં મોટો ફેરફાર થવો (અનિદ્રા અથવા સામાન્ય કરતાં ઘણું વધારે ઊંઘવું) અને ભૂખ કે વજનમાં અસામાન્ય ફેરફાર થવો.</li></ul><h5>ડોક્ટરની સલાહ ક્યારે લેવી?</h5><p>જો આ લક્ષણો સતત ૨ અઠવાડિયાથી વધુ સમય સુધી ચાલુ રહે અને તમારા પારિવારિક જીવન, નોકરી કે સામાજિક સંબંધોમાં અવરોધ ઊભો કરે, તો મનોચિકિત્સકનો સંપર્ક કરો.</p>",
          clinicianSection: "<h4>તબીબો માટે: નૈદાનિક અને સ્ક્રીનીંગ માર્ગદર્શિકા</h4><h5>DSM-5 નૈદાનિક માપદંડ (Diagnostic Criteria):</h5><p>દર્દીમાં એક જ ૨-અઠવાડિયાના સમયગાળા દરમિયાન નીચેનામાંથી ૫ અથવા વધુ લક્ષણો હાજર હોવા જોઈએ; ઓછામાં ઓછું ૧ લક્ષણ કાં તો (૧) ઉદાસ મૂડ અથવા (૨) રસ કે आनंदનો અભાવ હોવો જ જોઈએ.</p><ul><li>દિવસનો મોટાભાગનો સમય ઉદાસ અથવા નીચો મૂડ રહેવો.</li><li>તમામ અથવા લગભગ તમામ પ્રવૃત્તિઓમાં રસ અથવા આનંદમાં સ્પષ્ટ ઘટાડો થવો.</li><li>અનિદ્રા (Insomnia) અથવા અતિનિદ્રા (Hypersomnia) ની સમસ્યા.</li><li>લગભગ દરરોજ થાક અથવા શક્તિનો મોટો અભાવ વર્તાવો.</li></ul><h5>સાક્ષ્ય-આધારિત સ્ક્રીનીંગ પ્રોટોકોલ:</h5><ul><li><strong>PHQ-9 Scale</strong>: સ્કોર ૦-૪ (ન્યૂનતમ), ૫-૯ (હળવું), ૧૦-૧૪ (મધ્યમ), ૧૫-૧૯ (મધ્યમ ગંભીર), ૨૦-૨૭ (ગંભીર ડિપ્રેશન). આત્મ-નુકસાનના જોખમ માટે હંમેશા Item 9 નું પરીક્ષણ કરો.</li><li><strong>વિભેદક નિદાન (Differential Diagnosis)</strong>: થાઈરોઈડની તપાસ (TSH panel) કરી હાઈપોથાઈરોઈડિઝમની શક્યતા નકારી કાઢો. એન્ટીડિપ્રેશન્ટ શરૂ કરતા પહેલા બાયપોલર લક્ષણોની તપાસ અવશ્ય કરો જેથી મેનિક સ્વિચિંગ અટકાવી શકાય.</li></ul>"
        },
        {
          title: "એન્ઝાયટી ડિસઓર્ડર (ચિંતા રોગ)", 
          desc: "જ્યારે સામાન્ય ચિંતા રોજિંદી પરિસ્થિતિઓ પ્રત્યે સતત, અતિશય અને કાબૂ બહારના ડરનું સ્વરૂપ લઈ લે છે.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: જનરલાઈઝ્ડ એન્ઝાયટી અને પેનિક ડિસઓર્ડર",
          publicSection: "<h4>સામાન્ય જનતા માટે: ચિંતા રોગને સમજવો</h4><p>એન્ઝાયટી ડિસઓર્ડર સામાન્ય તણાવ કરતાં વધુ ગંભીર હોય છે. તે એક એવી સ્થિતિ છે જેમાં મગજ સતત હાઈ એલર્ટ પર રહે છે અને સામાન્ય બાબતોને પણ મોટું જોખમ માને છે.</p><h5>ધ્યાન રાખવા જેવા મુખ્ય લક્ષણો:</h5><ul><li>રોજિંદી સામાન્ય બાબતો વિશે સતત અને બેકાબૂ ચિંતા થવી.</li><li>શારીરિક લક્ષણો: હૃદયના ધબકારા વધવા, સ્નાયુઓમાં જકડન, ધ્રુજારી અને અચાનક પરસેવો વળવો.</li><li>સતત અશાંતિ અનુભવવી અથવા ઊંઘવામાં મુશ્કેલી થવી.</li><li>અચાનક અત્યંત તીવ્ર ડરનો હુમલો થવો, જેમાં છાતીમાં દુખાવો અથવા શ્વાસ લેવામાં તકલીફ (પેનિક એટેક) થાય.</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: ક્લિનિકલ માર્ગદર્શિકા</h4><h5>સ્ક્રીનીંગ અને મોનિટરિંગ:</h5><ul><li><strong>GAD-7 Scale</strong>: ક્લિનિકલ બેઝલાઈન નક્કી કરવા માટે આ સ્કેલનો ઉપયોગ કરો. સ્કોર ≥ 10 જનરલાઈઝ્ડ એન્ઝાયટી ડિસઓર્ડર દર્શાવે છે.</li><li><strong>શારીરિક લક્ષણોનું સ્ક્રીનીંગ</strong>: એન્ઝાયટીના લક્ષણોને કાર્ડિયાક એરિથમિયા, હાઇપરથાઇરોઇડિઝમ, કેફીનનો નશો અથવા વેસ્ટિબ્યુલર સમસ્યાઓથી અલગ તારવો.</li></ul>"
        },
        {
          title: "તણાવ અને બર્નઆઉટ", 
          desc: "લાંબા સમય સુધી કામ, અભ્યાસ અથવા વ્યક્તિગત જીવનમાં ભારે દબાણને કારણે થતો અતિશય માનસિક અને શારીરિક થાક.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: ક્રોનિક સ્ટ્રેસ અને ઓક્યુપેશનલ બર્નઆઉટ",
          publicSection: "<h4>સામાન્ય જનતા માટે: બર્નઆઉટને સમજવું</h4><p>બર્નઆઉટ એ અતિશય અને લાંબા સમય સુધી ચાલતા તણાવને કારણે થતી શારીરિક, માનસિક અને ભાવનાત્મક થાકની સ્થિતિ છે (જે મોટે ભાગે કામ, અભ્યાસ અથવા કોઈ જવાબદારીમાંથી ઉદ્ભવે છે).</p><h5>ધ્યાન રાખવા જેવા મુખ્ય લક્ષણો:</h5><ul><li>રોજ સવારે ઉઠતી વખતે જ ભારે થાક, શક્તિનો અભાવ અને ખાલીપો અનુભવવો.</li><li>પોતાના કામ અથવા રોજિંદી ભૂમિકાઓ પ્રત્યે નકારાત્મક, ઉદાસીન કે અકળામણભર્યું વલણ વિકસવું.</li><li>કાર્યક્ષમતા અને એકાગ્રતામાં ખૂબ મોટો ઘટાડો થવો.</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: મૂલ્યાંકન માર્ગદર્શિકા</h4><h5>ક્લિનિકલ તફાવત (Clinical Differentiation):</h5><p>કાર્યસ્થળ-આધારિત ઓક્યુપેશનલ બર્નઆઉટને વ્યાપક મેજર ડિપ્રેસિવ ડિસઓર્ડર (MDD) થી અલગ કરવા માટે ચોક્કસ તપાસ કરો. બર્નઆઉટમાં હતાશા એક ચોક્કસ વાતાવરણ (જેમ કે નોકરી) પૂરતી મર્યાદિત હોય છે, જ્યારે MDD માં જીવનના તમામ ક્ષેત્રોમાં ગંભીર એનહેડોનિયા અને નકારાત્મકતા દેખાય છે.</p>"
        },
        {
          title: "બાયપોલર ડિસઓર્ડર", 
          desc: "એક જટિલ માનસિક સ્થિતિ છે જેમાં વ્યક્તિના મૂડ, ઉર્જા અને કાર્ય કરવાની ક્ષમતામાં મોટા ઉતાર-ચઢાવ આવે છે.",
          detailTitle: "UkLMQLkL'i rOhg'iFkOhg: LkIepOgR krOkRxLI rHkhgRMR (BPAD)",
          publicSection: "<h4>સામાન્ય જનતા માટે: બાયપોલર ડિસઓર્ડરને સમજવો</h4><p>બાયપોલર ડિસઓર્ડર એ મગજ સાથે જોડાયેલી સ્થિતિ છે જેમાં દર્દીના મૂડ અને ઉર્જામાં અત્યંત તીવ્ર ફેરફારો થાય છે, જે સામાન્ય મૂડ સ્વિંગ્સ કરતાં તદ્દન અલગ હોય છે.</p><h5>બે મુખ્ય ચક્રો (Cycles):</h5><ul><li><strong>મેનિક તબક્કો (Mania)</strong>: અતિશય ઉત્સાહ, અસામાન્ય ઉર્જા અનુભવવી, ખૂબ ઝડપથી બોલવું, વિચારોનું મગજમાં ઝડપથી દોડવું, બેફામ ખર્ચ કરવો અને ઊંઘની જરૂરિયાત સાવ ઘટી જવી.</li><li><strong>ડિપ્રેશન તબક્કો (Depression)</strong>: ઊંડી ઉદાસી, શક્તિનો સંપૂર્ણ નાશ થવો, રડવું અને સમાજથી સાવ અલિપ્ત થઈ જવું.</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: સંચાલન માર્ગદર્શિકા</h4><h5>સુરક્ષા સ્ક્રીનીંગ પ્રોટોકોલ:</h5><ul><li><strong>સ્ક્રીનીંગ</strong>: એન્ટીડિપ્રેશન્ટ મોનોથેરાપી શરૂ કરતા પહેલા MDQ (Mood Disorder Questionnaire) નો ઉપયોગ કરો જેથી દવા-પ્રેરિત મેનિક સ્વિચિંગ અટકાવી શકાય.</li><li><strong>વર્ગીકરણ</strong>: બાયપોલર I માટે જીવનમાં ઓછામાં ઓછા એક પૂર્ણ મેનિક એપિસોડની જરૂર છે. બાયપોલર II માટે હાઇપોમેનિક અને ડિપ્રેસિવ એપિસોડ હોવા જરૂરી છે. મુખ્ય સારવાર મૂડ સ્ટેબિલાઇઝર્સ પર આધારિત છે.</li></ul>"
        },
        {
          title: "ઓસીડી (ઓબ્સેસિવ કમ્પલ્સિવ ડિસઓર્ડર)", 
          desc: "આ એક એવી સ્થિતિ છે જેમાં વ્યક્તિના મનમાં અનિચ્છનીય વિચારો વારંવાર આવે છે, અને તે ચિંતા અનુભવે છે.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: ઓબ્સેસિવ-કમ્પલ્સિવ ડિસઓર્ડર (OCD)",
          publicSection: "<h4>સામાન્ય જનતા માટે: ઓસીડીને સમજવું</h4><p>ઓસીડી એ મગજની તબીબી સ્થિતિ છે, તે કોઈ સામાન્ય આદત, ચોખ્ખાઈનો શોખ કે વ્યક્તિગત વિશિષ્ટતા નથી. આમાં વ્યક્તિ અનિચ્છનીય વિચારો અને ક્રિયાઓના એક અસહ્ય ચક્રમાં ફસાઈ જાય છે.</p><h5>બે મુખ્ય ભાગો:</h5><ul><li><strong>ઓબ્સેસન્સ (Obsessions)</strong>: મનમાં વારંવાર આવતા અવાંછિત અને પરેશાન કરનારા વિચારો કે ડર (જેમ કે ચેપ/ગંદકી લાગવાનો ભય કે નુકસાન થવાનો ડર).</li><li><strong>કમ્પલ્સન્સ (Compulsions)</strong>: તે વિચારોની ચિંતા હળવી કરવા માટે વારંવાર કરવામાં આવતી ક્રિયાઓ (જેમ કે વારંવાર હાથ ધોવા, તાળાં ચકાસવાં કે ગણતરી કરવી).</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: નૈદાનિક ધોરણો</h4><h5>હસ્તક્ષેપ અને સ્કેલ:</h5><ul><li><strong>તીવ્રતા માપન</strong>: ક્લિનિકલ બેઝલાઈન માટે Y-BOCS (Yale-Brown Obsessive Compulsive Scale) નો ઉપયોગ કરો. આ લક્ષણો દિવસનો ૧ કલાકથી વધુ સમય બગાડતા હોવા જોઈએ.</li><li><strong>પ્રથમ લાઇન સારવાર</strong>: હાઈ-ડોઝ SSRI દવાઓ અને એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) બિહેવિયરલ થેરાપીનું મિશ્રણ સૌથી ઉત્તમ પરિણામ આપે છે.</li></ul>"
        },
        {
          title: "વ્યસન અને લત (એડિક્શન)", 
          desc: "આ મગજ સાથે જોડાયેલી એક લાંબા ગાળાની બીમારી છે જેમાં નુકસાનકારક પરિણામો હોવા છતાં વ્યક્તિ નશો કરી બેસે છે.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: સબસ્ટન્સ યુઝ ડિસઓર્ડર (SUD)",
          publicSection: "<h4>સામાન્ય જનતા માટે: વ્યસનની લતને સમજવી</h4><p>વ્યસન એ મગજની ક્રોનિક બીમારી છે જે વ્યક્તિના આત્મ-નિયંત્રણને નષ્ટ કરી નાખે છે, પછી તે દારૂ, તમાકુ, દવાઓ કે અન્ય નશીલા પદાર્થો હોય.</p><h5>ધ્યાન રાખવા જેવા મુખ્ય લક્ષણો:</h5><ul><li>તે પદાર્થનું સેવન કરવાની અત્યંત તીવ્ર અને અણધારી ઈચ્છા થવી.</li><li>સમય જતાં તે જ અસર મેળવવા માટે પદાર્થની માત્રા વધારવી પડવી (Tolerance).</li><li>નશો છોડવાનો પ્રયત્ન કરવાથી શરીરમાં ધ્રુજારી, પરસેવો, અત્યંત ગભરામણ કે બેચેની થવી (વિડ્રોઅલ લક્ષણો).</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: ડિટોક્સિફિકેશન પ્રોટોકોલ</h4><h5>તબીબી સંચાલન:</h5><ul><li><strong>વિડ્રોઅલ મોનિટરિંગ</strong>: આલ્કોહોલ વિડ્રોઅલ માટે CIWA-Ar સ્કેલ અને ઓપીઓઇડ માટે COWS સ્કેલનો ઉપયોગ કરી દવાઓ નક્કી કરો.</li><li><strong>જટિલતા અટકાવવી</strong>: ખેંચ (Seizures), ડેલિરિયમ ટ્રેમેન્સ (Delirium Tremens) અને મગજની ગંભીર ક્ષતિ જેવી જાનલેવા જટિલતાઓને રોકવા માટે તબીબી દેખરેખ હેઠળ ડિટોક્સિફિકેશન કરો.</li></ul>"
        },
        {
          title: "બાળ અને કિશોર માનસિક સ્વાસ્થ્ય", 
          desc: "બાળકો અને કિશોરોમાં જોવા મળતી વર્તણૂક સંબંધિત, વિકાસાત્મક અને ભાવનાત્મક સમસ્યાઓ પર ધ્યાન આપવું.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: પીડિયાટ્રિક અને ન્યુરોડેવલપમેન્ટલ કેર",
          publicSection: "<h4>સામાન્ય જનતા માટે: બાળકોનું માનસિક સ્વાસ્થ્ય</h4><p>બાળકો અને કિશોરોનો મગજનો વિકાસ ચાલુ હોય છે, જેથી તેમનામાં વિશિષ્ટ ભાવનાત્મક અને વર્તણૂક સંબંધિત પડકારો આવી શકે છે.</p><h5>મુખ્ય સમસ્યાઓ:</h5><ul><li><strong>વિકાસાત્મક પડકારો</strong>: એક જગ્યાએ શાંત ન બેસવું, ભણવામાં ધ્યાન ન આપવું, અથવા સામાજિક કુશળતાનો અભાવ (જેમ કે ADHD અથવા ઓટિઝમના લક્ષણો).</li><li><strong>ભાવનાત્મક ફેરફારો</strong>: અચાનક શાળાના પરિણામો બગડી જવા, અત્યંત ગુસ્સો કરવો, શાળાએ જવાની ના પાડવી કે એકલા રહેવું.</li></ul>",
          clinicianSection: "<h4>તબીબો માટે: પીડિયાટ્રિક પ્રોટોકોલ</h4><h5>મૂલ્યાંકન માપદંડો:</h5><p>વિકાસના તબક્કા (Developmental milestones), શૈક્ષણિક પ્રદર્શન અને કૌટુંબિક સંબંધો તપાસો. લાંબા ગાળાની દવાઓ શરૂ કરતાં પહેલાં બિહેવિયરલ થેરાપી, સ્કૂલ કાઉન્સેલિંગ અને પેરેન્ટ ટ્રેનિંગને પ્રાથમિકતા આપો.</p>"
        },
        {
          title: "આત્મહત્યા નિવારણ અને કટોકટી સપોર્ટ", 
          desc: "ગંભીર માનસિક સંકટના સંકેતોને ઓળખવા, જેમ કે સંપૂર્ણપણે નિરાશ થઈ જવું અથવા આત્મ-નુકસાનની વાતો કરવી.",
          detailTitle: "ક્લિનિકલ વિહંગાવલોકન: કટોકટી સંચાલન અને આત્મહત્યા જોખમ નિવારણ",
          publicSection: "<h4>સામાન્ય જનતા માટે: આત્મહત્યા નિવારણ માર્ગદર્શિકા</h4><p>આત્મહત્યાના વિચારો અસહ્ય માનસિક પીડા અને કટોકટીનું પરિણામ છે, તે કોઈ નબળાઈ નથી. યોગ્ય સમયે લક્ષણો ઓળખીને જીવ બચાવી શકાય છે.</p><h5>અત્યંત ગંભીર સંકેતો:</h5><ul><li>પોતે અન્ય લોકો પર બોજ હોવાની વાતો કરવી કે જીવવાનો કોઈ અર્થ નથી તેમ કહેવું.</li><li>અચાનક વિદાય લેવાની વાતો કરવી, પોતાની કીમતી વસ્તુઓ બીજાને આપી દેવી, અથવા ભારે ડિપ્રેશન પછી અચાનક સાવ શાંત થઈ જવું.</li><li>પોતાને નુકસાન પહોંચાડવાના રસ્તાઓ શોધવા.</li></ul><h5>તરત જ શું કરવું?</h5><p>જો કોઈ આવી સ્થિતિમાં જણાય, તો તેને એકલા ન મૂકો. કોઈ પણ જજમેન્ટ વગર પ્રેમથી વાત કરો અને તેમને તરત જ ૨૪/૭ કાર્યરત કટોકટી હેલ્પલાઇન **ટેલી-માનસ (14416)** સાથે જોડો.</p>",
          clinicianSection: "<h4>તબીબો માટે: જોખમ મૂલ્યાંકન પ્રોટોકોલ</h4><h5>તાત્કાલિક હસ્તક્ષેપ:</h5><ul><li><strong>જોખમ માપન</strong>: C-SSRS (Columbia-Suicide Severity Rating Scale) નો ઉપયોગ કરી આત્મહત્યાના ઈરાદા, પ્લાન અને સાધનોની ઉપલબ્ધતા ચકાસો.</li><li><strong>સુરક્ષા પ્લાન</strong>: અતિ ગંભીર કટોકટી ધરાવતા દર્દીને ક્યારેય એકલા ન જવા દો. સાધનોની પહોંચ તુરંત બંધ કરાવો, પરિવારને સામેલ કરી એક કટોકટી સુરક્ષા યોજના (Crisis Safety Plan) બનાવો. માત્ર 'નો-હાર્મ કોન્ટ્રેક્ટ્સ' પર ભરોસો ન રાખવો.</li></ul>"
        }
      ]
    },
    resources: {
      eyebrow:"સંસાધનો", title:"સંસાધનો & સ્વ-સહાય", subtitle:"મફત, ગોપનીય સહાય અત્યારે જ ઉપલબ્ધ છે.",
      helplinesTitle:"રાષ્ટ્રીય હેલ્પલાઇન (ભારત)",
      helplines:[
        {name:"ટેલી-માનસ (Tele-MANAS)", number:"14416", desc:"ભારત સરકારની 24x7 બહુભાષી માનસિક સ્વાસ્થ્ય હેલ્પલાઇન."},
        {name:"કિરણ (KIRAN)", number:"1800-599-0019", desc:"રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય પુનર્વસન હેલ્પલાઇન, 24x7."},
        {name:"આઈકોલ (iCall)", number:"9152987821", desc:"TISS દ્વારા મનો-સામાજિક હેલ્પલાઇન, સોમ–શનિ."}
      ],
      tipsTitle:"રોજિંદી સ્વ-સહાય",
      tips:["તમે વિશ્વાસ કરો છો તે વ્યક્તિ સાથે તમારી લાગણીઓ વિશે વાત કરો","નિયમિત ઊંઘ અને ભોજનની દિનચર્યા જાળવો","દારૂ મર્યાદિત કરો અને જાતે દવા લેવાનું ટાળો","ચિંતા વધે ત્યારે ધીમા શ્વાસ લેવાનો પ્રયાસ કરો","વ્યાવસાયિક મદદ વહેલી લો — તે અસરકારક છે"],
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
      eyebrow:"સંપર્કમાં રહો", title:"સંપર્ક & એપોઇન્ટમેન્ટ", subtitle:"કોઈ પ્રશ્ન છે, અથવા પરામર્શ બુક કરવા માંગો છો? નીચે સંપર્ક કરો.",
      formName:"પૂરું નામ", formEmail:"ઇમેઇલ સરનામું", formLanguage:"પસંદગીની ભાષા", formMessage:"સંદેશ",
      formSubmit:"સંદેશ મોકલો", formNote:"આ ફોર્મ સામાન્ય પ્રશ્નો માટે है. જો આ કટોકટી હોય, તો કૃપા કરીને તેના બદલે હેલ્પલાઇન પર કૉલ કરો.",
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
