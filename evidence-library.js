/* Evidence-based learning library
   Sources are intentionally explicit so educational claims can be audited.
   This file is educational content, not individualized medical advice.
*/

const evidenceLibrary = {
  meta: {
    title: {
      en: "Evidence-Based Psychiatry Learning Library",
      hi: "साक्ष्य-आधारित मनोचिकित्सा अध्ययन पुस्तकालय",
      gu: "પુરાવા આધારિત મનોચિકિત્સા અભ્યાસ પુસ્તકાલય"
    },
    subtitle: {
      en: "Structured learning notes for students, clinicians and the public — with guideline-level sources and review metadata.",
      hi: "विद्यार्थियों, चिकित्सकों और आम लोगों के लिए संरचित अध्ययन सामग्री — दिशानिर्देश-आधारित स्रोतों और समीक्षा विवरण के साथ।",
      gu: "વિદ્યાર્થીઓ, ક્લિનિશિયન અને સામાન્ય લોકો માટે રચાયેલ અભ્યાસ સામગ્રી — માર્ગદર્શિકા આધારિત સ્ત્રોતો અને સમીક્ષા વિગતો સાથે."
    }
  },

  sources: [
    {name:"World Health Organization (WHO)", type:"Global public-health guidance", url:"https://www.who.int/"},
    {name:"NICE", type:"Clinical guidelines and evidence reviews", url:"https://www.nice.org.uk/guidance"},
    {name:"Indian Psychiatric Society (IPS)", type:"Indian clinical practice guidelines", url:"https://indianpsychiatricsociety.org/ips-guidelines/"},
    {name:"CANMAT / ISBD", type:"Bipolar disorder evidence guidance", url:"https://pubmed.ncbi.nlm.nih.gov/38695002/"},
    {name:"Cochrane", type:"Systematic reviews", url:"https://www.cochranelibrary.com/"},
    {name:"PubMed", type:"Biomedical literature database", url:"https://pubmed.ncbi.nlm.nih.gov/"}
  ],

  topics: [
    {
      id:"depression",
      icon:"🌧️",
      title:"Depressive disorders",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + NICE NG222 + IPS CPG",
      summary:"Depression involves persistent depressed mood or loss of interest/pleasure with associated cognitive, behavioural and biological symptoms that cause distress or functional impairment.",
      public:[
        ["What it means","Depression is more than ordinary sadness. Symptoms can affect mood, interest, sleep, appetite, energy, concentration, self-worth and safety."],
        ["Assessment","Assessment should consider duration, severity, functional impact, suicide/self-harm risk, psychotic symptoms, substance use, medical contributors and past episodes of mania/hypomania."],
        ["Treatment principles","Psychological treatment is central. Depending on severity and clinical context, antidepressant medication may be considered, often alongside psychological treatment. Severe or psychotic depression needs specialist assessment."]
      ],
      clinical:[
        ["Diagnostic frame","For a major depressive episode, assess the symptom cluster, duration, change from baseline, impairment/distress and exclusion of substance/medical causes. Always assess for past mania/hypomania before diagnosing unipolar depression."],
        ["Risk assessment","Ask directly about thoughts of death, suicidal ideation, intent, plan, access to means, previous attempts, self-neglect, psychosis and protective factors. Risk formulation should be dynamic rather than reduced to a score."],
        ["Management","Match intervention to severity, preference, comorbidity and risk. NICE recommends psychological treatments as key interventions and combination approaches for selected moderate-to-severe presentations. Psychotic depression warrants specialist care and may require antidepressant plus antipsychotic treatment."]
      ]
    },
    {
      id:"anxiety",
      icon:"🌀",
      title:"Anxiety disorders",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + NICE CG113",
      summary:"Anxiety disorders involve excessive fear or worry with cognitive, physical and behavioural symptoms that are difficult to control and cause clinically significant distress or impairment.",
      public:[
        ["Recognising anxiety","Persistent excessive worry, fear, avoidance, physical arousal and sleep or concentration problems can occur across different anxiety disorders."],
        ["Panic attacks","A panic attack is a sudden surge of intense fear or discomfort with physical and cognitive symptoms. A panic attack itself does not establish panic disorder."],
        ["Care","Psychoeducation, psychological therapies and—when clinically appropriate—medication are evidence-based options. Persistent symptoms deserve assessment rather than repeated reassurance alone."]
      ],
      clinical:[
        ["Differentiate","Distinguish GAD, panic disorder, social anxiety, specific phobia, separation anxiety and anxiety secondary to substances or medical conditions."],
        ["Assessment","Clarify triggers, anticipatory anxiety, avoidance, safety behaviours, substance/caffeine use, sleep, trauma and comorbidity. Assess suicide risk when distress or comorbidity warrants it."],
        ["Treatment principles","CBT and structured psychological interventions have strong evidence. Medication choice depends on diagnosis, severity, comorbidity, prior response, adverse-effect profile and patient preference."]
      ]
    },
    {
      id:"bipolar",
      icon:"🌗",
      title:"Bipolar disorder",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + IPS 2017 + CANMAT/ISBD update + Indian 2025 CPG",
      summary:"Bipolar disorder is characterised by episodes of mania/hypomania and depression, with changes in mood, energy, activity and cognition.",
      public:[
        ["Key idea","Bipolar disorder is not simply rapid mood swings. Episodes have characteristic changes in mood, energy, activity, sleep, cognition and behaviour."],
        ["Why assessment matters","A history of decreased need for sleep, increased activity, pressured speech, racing thoughts, grandiosity or episodic risky behaviour can change the diagnosis and treatment plan."],
        ["Treatment","Effective care combines appropriate medication, psychoeducation, relapse prevention and attention to sleep, substance use, physical health and psychosocial functioning."]
      ],
      clinical:[
        ["Assessment","Establish episode polarity, duration, severity, psychosis, mixed features, cycling pattern, substance/medication exposure, family history and longitudinal course. Screen for suicidality and capacity/risk issues."],
        ["Phase-specific care","Treatment differs for mania, bipolar depression and maintenance. Avoid applying a single 'bipolar regimen' to every phase; use current phase-specific guidance."],
        ["Evidence update","The Indian 2025 guideline update uses phase-specific first-, second- and third-line recommendations and adds practical guidance for BD-II, comorbidity, polypharmacy, reproductive safety and emerging treatments."]
      ]
    },
    {
      id:"schizophrenia",
      icon:"🧠",
      title:"Schizophrenia and psychosis",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + IPS CPG",
      summary:"Schizophrenia is a psychotic disorder associated with disturbances in perception, thought, behaviour and functioning. Psychosis also occurs in many other conditions, so assessment must be broad.",
      public:[
        ["Symptoms","Possible symptoms include delusions, hallucinations, disorganised thinking or behaviour, negative symptoms and cognitive difficulties."],
        ["Psychosis is not one diagnosis","Psychosis can occur in schizophrenia, mood disorders, substance-related states and medical/neurological conditions. New or acute psychosis needs careful assessment."],
        ["Recovery","Evidence-based care can include medication, psychoeducation, family interventions, psychological approaches and psychosocial rehabilitation."]
      ],
      clinical:[
        ["Assessment","Establish onset and course; characterise positive, negative, affective and cognitive symptoms; assess substance use, medical causes, functioning and risk. Obtain collateral history where appropriate."],
        ["First-episode psychosis","Treat as a clinical syndrome requiring timely specialist assessment. Consider medical/substance differentials and baseline physical investigations before and during treatment as indicated."],
        ["Long-term care","Antipsychotic treatment is one component of care. Adherence, adverse effects, physical health, smoking/substance use, family intervention, psychosocial rehabilitation and relapse prevention all matter."]
      ]
    },
    {
      id:"ocd",
      icon:"🔁",
      title:"Obsessive-compulsive disorder",
      level:"Core",
      review:"2026-11",
      evidence:"NICE CG31 + WHO",
      summary:"OCD involves obsessions, compulsions or both that are time-consuming or cause significant distress or impairment.",
      public:[
        ["Obsessions","Intrusive, unwanted thoughts, images or urges can occur. Having an intrusive thought does not mean a person wants it or will act on it."],
        ["Compulsions","Repetitive behaviours or mental acts are often performed to reduce anxiety or prevent a feared outcome, but relief is usually temporary."],
        ["Treatment","CBT with exposure and response prevention (ERP) is a major evidence-based psychological treatment. SSRIs are also used when clinically appropriate, with treatment intensity matched to severity."]
      ],
      clinical:[
        ["Assessment","Assess obsessions, compulsions, avoidance, insight, time burden, impairment, comorbidity and suicide risk. Differentiate OCD from psychosis, GAD, illness anxiety and OCPD."],
        ["ERP","ERP involves planned exposure to feared cues while reducing or preventing compulsive responses. It should be structured, collaborative and appropriately graded."],
        ["Medication","SSRIs are commonly used. Severe or refractory illness may require specialist strategies and careful review of adherence, adequate duration and augmentation options."]
      ]
    },
    {
      id:"ptsd",
      icon:"⚡",
      title:"Post-traumatic stress disorder",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + NICE",
      summary:"PTSD can follow exposure to an extremely threatening or horrific event or series of events and includes trauma-related re-experiencing, avoidance and persistent threat-related symptoms.",
      public:[
        ["Core pattern","People may experience intrusive memories or nightmares, avoidance, heightened threat, sleep disturbance and changes in mood or cognition."],
        ["Not every trauma response is PTSD","Distress after trauma is common. PTSD requires a characteristic symptom pattern with persistence and clinically important impairment."],
        ["Treatment","Trauma-focused psychological treatments have an important evidence base. Assessment should also consider depression, anxiety, substance use, dissociation and safety."]
      ],
      clinical:[
        ["Assessment","Clarify trauma exposure, symptom clusters, duration, impairment, dissociation, depression, substance use and suicide risk. Consider complex PTSD where relevant to ICD-11 practice."],
        ["Psychotherapy","Trauma-focused CBT and EMDR are evidence-based options in appropriate patients. Treatment should be delivered by appropriately trained clinicians."],
        ["Medication","Medication may be considered depending on guideline, severity, comorbidity and patient preference; avoid treating medication as a substitute for trauma-focused care when the latter is indicated."]
      ]
    },
    {
      id:"substance-use",
      icon:"🧭",
      title:"Substance use disorders",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + evidence-based SUD guidance",
      summary:"Substance use disorders are health conditions involving impaired control over substance use, continued use despite harm and clinically significant functional or health consequences.",
      public:[
        ["A disorder is more than use","Risk depends on substance, dose, pattern, context and individual vulnerability. A substance use disorder is defined by a pattern of impaired control and harmful consequences."],
        ["Withdrawal and intoxication","Some substances can produce medically dangerous withdrawal or intoxication. Alcohol and sedative-hypnotic withdrawal can be particularly important emergencies."],
        ["Recovery","Evidence-based care can include motivational approaches, psychosocial treatment, relapse prevention, medicines for selected disorders and harm-reduction strategies."]
      ],
      clinical:[
        ["Assessment","Document substance, route, quantity, frequency, last use, tolerance, withdrawal, craving, consequences, comorbidity and readiness to change. Screen for medical and psychiatric complications."],
        ["Alcohol","Assess withdrawal risk rather than assuming all withdrawal is mild. Severe withdrawal can progress to delirium or seizures and requires appropriate medical management."],
        ["Opioids and other drugs","Use diagnosis-specific evidence-based treatment. For opioid use disorder, medications for opioid use disorder are a major component of effective care; overdose prevention and naloxone access are important where available."]
      ]
    },
    {
      id:"child-adolescent",
      icon:"🧒",
      title:"Child & adolescent mental health",
      level:"Core",
      review:"2026-11",
      evidence:"WHO + developmental psychiatry guidance",
      summary:"Mental health in children and adolescents is shaped by development, family, school, peers, biology and environment. Assessment must be developmentally informed.",
      public:[
        ["Development matters","Symptoms can look different at different ages. Changes in behaviour, school functioning, sleep, play, relationships or development may be important signals."],
        ["Assessment","A good assessment considers the young person's account as well as parent/caregiver and school information when appropriate, while respecting confidentiality and safeguarding."],
        ["When to seek help","Persistent functional decline, severe behavioural change, self-harm or suicidal thoughts, psychosis, significant eating problems, developmental concerns or suspected abuse require professional assessment."]
      ],
      clinical:[
        ["Developmental formulation","Assess symptoms in developmental context, developmental milestones, family history, school functioning, peer relationships, trauma, neurodevelopmental features, medical conditions and substance exposure."],
        ["Collateral and confidentiality","Use collateral information thoughtfully and explain confidentiality and its limits. Safeguarding concerns may require information sharing according to law and local policy."],
        ["Treatment principles","Use age-appropriate psychological, family, school and social interventions. Medication decisions require diagnosis-specific evidence, age-specific indications and careful monitoring."]
      ]
    },
    {
      id:"suicide",
      icon:"🕊️",
      title:"Suicide and self-harm",
      level:"Safety",
      review:"2026-11",
      evidence:"WHO + national/local crisis resources",
      summary:"Suicidal thoughts and self-harm require compassionate, direct assessment and safety-focused care. They should never be reduced to a single numerical risk score.",
      public:[
        ["Take it seriously","Talking about suicide does not reliably 'put the idea in someone's head'. Asking calmly and directly can help identify danger and connect someone with care."],
        ["Immediate danger","If someone has imminent intent, a recent serious attempt, severe agitation, psychosis, intoxication or inability to stay safe, seek emergency help and do not leave the person alone."],
        ["Support","Reduce access to immediately dangerous means where feasible, involve trusted support with consent when possible, and arrange urgent professional assessment."]
      ],
      clinical:[
        ["Risk formulation","Assess ideation, intent, plan, means, preparatory acts, past attempts, self-harm, intoxication, agitation, psychosis, hopelessness, recent losses and protective factors. Formulate risk longitudinally."],
        ["Safety planning","Use collaborative, specific safety planning: warning signs, internal coping strategies, social contacts, professional contacts and means-safety steps. Document rationale and follow-up."],
        ["Avoid false precision","Risk scales should not replace clinical formulation or determine disposition by themselves. Decisions should integrate current mental state, history, environment, supports and ability to engage with a safety plan."]
      ]
    }
  ]
};
