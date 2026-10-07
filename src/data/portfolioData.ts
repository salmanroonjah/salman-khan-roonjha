export interface ExperienceItem {
  id: string;
  role: string;
  roleUrdu: string;
  organization: string;
  organizationUrdu: string;
  location: string;
  period: string;
  periodUrdu: string;
  category: 'edtech' | 'health' | 'crisis' | 'agritech';
  categoryLabel: string;
  categoryLabelUrdu: string;
  summary: string;
  summaryUrdu: string;
  bullets: string[];
  bulletsUrdu: string[];
  toolsAndSkills: string[];
  impactMetric?: string;
  impactMetricUrdu?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  titleUrdu: string;
  issuer: string;
  issuerUrdu: string;
  year: string;
  description: string;
  descriptionUrdu: string;
  badge: string;
  verified: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeUrdu: string;
  institution: string;
  institutionUrdu: string;
  period: string;
  status?: string;
  details: string;
  detailsUrdu: string;
}

export interface SkillCategory {
  title: string;
  titleUrdu: string;
  skills: {
    name: string;
    nameUrdu: string;
    level: string;
    desc: string;
  }[];
}

export interface UrduPromptExample {
  title: string;
  urduConcept: string;
  englishConcept: string;
  explanation: string;
  examplePrompt: string;
  practicalApplication: string;
}

export const portfolioData = {
  personal: {
    name: "Salman Khan",
    nameUrdu: "سلمان خان",
    title: "Community Development Practitioner & EdTech Trainer",
    titleUrdu: "کمیونٹی ڈویلپمنٹ پریکٹیشنر اور ایڈٹیک ٹرینر",
    location: "Lasbela, Balochistan, Pakistan",
    locationUrdu: "ضلع لسبیلہ، بلوچستان، پاکستان",
    githubUsername: "salmanroonjah",
    githubUrl: "https://github.com/salmanroonjah",
    summary:
      "Impact-driven social professional from District Lasbela with a unique blend of technical expertise and grassroots community development experience. Proven track record in Education (AI literacy for rural youth), Healthcare (Malaria prevention campaigns), and Crisis Management (Flood resilience data collection). Passionate about bridging the digital divide by teaching advanced concepts in local languages (Urdu) to empower marginalized communities.",
    summaryUrdu:
      "ضلع لسبیلہ سے تعلق رکھنے والا بااثر سماجی پیشہ ور، جو تکنیکی مہارت اور بنیادی کمیونٹی ڈویلپمنٹ کا بہترین امتزاج رکھتا ہے۔ تعلیم (دیہی نوجوانوں کے لیے مصنوعی ذہانت کی خواندگی)، صحت عامہ (ملیریا سے بچاؤ مہمات)، اور بحران کے انتظام (سیلاب کے بعد بحالی کے سروے) میں ثابت شدہ تجربہ۔ پسماندہ کمیونٹیز کو بااختیار بنانے کے لیے مقامی زبان (اردو) میں جدید تکنیکی تصورات سکھا کر ڈیجیٹل تفریق کو ختم کرنے کا پرعزم جذبہ۔",
    shortBio:
      "BS Computer Science graduate and certified EdTech instructor democratizing Generative AI and digital tools across Balochistan's grassroots communities.",
    shortBioUrdu:
      "بی ایس کمپیوٹر سائنس گریجویٹ اور سند یافتہ ایڈٹیک انسٹرکٹر جو بلوچستان کی پسماندہ کمیونٹیز میں اردو زبان کے ذریعے مصنوعی ذہانت اور ڈیجیٹل مہارتوں کو فروغ دے رہے ہیں۔",
  },

  stats: [
    {
      value: "1,200+",
      label: "Rural Youth & Learners Trained",
      labelUrdu: "دیہی نوجوان اور سیکھنے والے",
      sub: "Across schools, vocational centers & communities",
    },
    {
      value: "100%",
      label: "Urdu-Native Pedagogy",
      labelUrdu: "مقامی زبان (اردو) میں تدریس",
      sub: "Breaking the language barrier in tech adoption",
    },
    {
      value: "4+",
      label: "Grassroots Domains Led",
      labelUrdu: "سماجی شعبہ جات میں خدمات",
      sub: "AI EdTech, Public Health, Disaster Relief, Agri-Tech",
    },
    {
      value: "8-Week",
      label: "Asia-Pacific Certified Fellow",
      labelUrdu: "ایشیا پیسیفک تصدیق شدہ انسٹرکٹر",
      sub: "AI Singapore & AVPN Certified AI Pedagogy Instructor",
    },
  ],

  experiences: [
    {
      id: "wang-urdu-ai",
      role: "Trainer – Urdu AI Training Program",
      roleUrdu: "ٹرینر – اردو اے آئی ٹریننگ پروگرام",
      organization: "Welfare Association for New Generation (WANG)",
      organizationUrdu: "ویل высیر ایسوسی ایشن فار نیو جنریشن (وانگ)",
      location: "Lasbela, Balochistan",
      period: "May 2025 – Present",
      periodUrdu: "مئی 2025 – تاحال",
      category: "edtech",
      categoryLabel: "AI & EdTech",
      categoryLabelUrdu: "مصنوعی ذہانت و تعلیم",
      summary:
        "Spearheading district-wide AI capacity-building workshops delivering generative AI, prompt engineering, and ethical adoption in Urdu.",
      summaryUrdu:
        "سکولوں اور ووکیشنل سینٹرز میں اردو زبان کے ذریعے جنریٹو اے آئی اور پرامپٹنگ کی ورکشاپس کا انعقاد۔",
      bullets: [
        "Spearheaded AI capacity-building workshops in schools, vocational centers, and rural community spaces, reaching diverse groups of learners.",
        "Democratized access to technology by delivering AI concepts and prompting strategies in Urdu, ensuring accessibility for learners with limited technical backgrounds.",
        "Empowered youth by teaching hands-on usage of generative AI tools for productivity and problem-solving, while promoting ethical use and data privacy awareness."
      ],
      bulletsUrdu: [
        "سکولوں، فنی تربیتی مراکز اور دیہی کمیونٹی سینٹرز میں جدید اے آئی ورکشاپس کی قیادت کی۔",
        "تکنیکی اصطلاحات اور پرامپٹنگ کے طریقوں کو سلیس اردو میں منتقل کر کے ہر سطح کے طلبہ کے لیے قابل فہم بنایا۔",
        "طلبہ کو مسائل کے حل اور پیداواری صلاحیت بڑھانے کے لیے جنریٹو اے آئی ٹولز کا عملی استعمال سکھایا اور اخلاقی رہنما اصول واضح کیے۔"
      ],
      toolsAndSkills: ["Generative AI", "Urdu Prompt Engineering", "AI Ethics & Privacy", "Curriculum Design", "Vocational Training"],
      impactMetric: "Empowered 600+ students with prompt engineering skills in their native tongue",
      impactMetricUrdu: "600 سے زائد طلبہ کو اپنی مادری زبان میں پرامپٹ انجینئرنگ کے ہنر سے آراستہ کیا"
    },
    {
      id: "wali-instructor",
      role: "Course Instructor",
      roleUrdu: "کورس انسٹرکٹر",
      organization: "Wang Lab of Innovation (WALI)",
      organizationUrdu: "وانگ لیب آف انوویشن (والی) بلوچستان",
      location: "Balochistan, Pakistan",
      period: "June 2024 – Present",
      periodUrdu: "جون 2024 – تاحال",
      category: "edtech",
      categoryLabel: "Digital Literacy",
      categoryLabelUrdu: "ڈیجیٹل لٹریسی",
      summary:
        "Conducting interactive digital literacy sessions for rural communities to enhance local employability and problem-solving.",
      summaryUrdu:
        "دیہی کمیونٹیز کے لیے روزگار کے مواقع بڑھانے اور بنیادی کمپیوٹر سائنس سکھانے کے انٹرایکٹو سیشنز۔",
      bullets: [
        "Conducting interactive digital literacy sessions for rural communities to enhance employability.",
        "Simplifying complex technical concepts (computer fundamentals, internet tools) for learners with limited tech exposure.",
        "Mentoring students on the practical application of digital skills to solve local community challenges."
      ],
      bulletsUrdu: [
        "دیہی علاقوں کے نوجوانوں کے لیے روزگار کے مواقع پیدا کرنے والی عملی ڈیجیٹل خواندگی کی کلاسیں منعقد کیں۔",
        "کمپیوٹر کی بنیادی باتوں اور انٹرنیٹ ذرائع کو انتہائی آسان اور قابل فہم انداز میں پیش کیا۔",
        "طلبہ کو مقامی چیلنجز کے حل میں ڈیجیٹل ٹیکنالوجی کے بامقصد استعمال کی تربیت اور رہنمائی فراہم کی۔"
      ],
      toolsAndSkills: ["Computer Fundamentals", "Internet & Productivity Tools", "Youth Mentorship", "Community Employability"],
      impactMetric: "Enhanced baseline digital readiness across 10+ local youth cohorts",
      impactMetricUrdu: "10 سے زائد نوجوانوں کے گروپس کو ڈیجیٹل طور پر خود کفیل بنایا"
    },
    {
      id: "merf-supervisor",
      role: "Team Supervisor",
      roleUrdu: "ٹیم سپروائزر",
      organization: "Medical Emergency Resilience Foundation (MERF)",
      organizationUrdu: "میڈیکل ایمرجنسی ریزیلینس فاؤنڈیشن (مرف)",
      location: "Lasbela District",
      period: "August 2023 – October 2023",
      periodUrdu: "اگست 2023 – اکتوبر 2023",
      category: "health",
      categoryLabel: "Public Health",
      categoryLabelUrdu: "صحتِ عامہ",
      summary:
        "Led public health malaria prevention campaign supervising LLINs bednet distribution and dual-channel digital/manual data auditing.",
      summaryUrdu:
        "ملیریا کے انسداد کی مہم میں مچھر دانیوں (LLINs) کی تقسیم کی نگرانی اور ڈیجیٹل ریڈ روز ایپ سے ڈیٹا اکٹھا کرنے کا انتظام۔",
      bullets: [
        "Led a public health initiative supervising the distribution of Long-lasting Insecticidal Nets (LLINs) to combat malaria.",
        "Ensured data integrity by managing collection via both the 'Red Rose Mobile Application' and manual logs, bridging the gap between digital tools and field realities.",
        "Coordinated team activities to ensure successful completion of project objectives within strict timelines."
      ],
      bulletsUrdu: [
        "ملیریا کے پھیلاؤ کو روکنے کے لیے لانگ لاسٹنگ انسیکٹیسائیڈل نیٹس (LLINs) کی ترسیل کی فیلڈ نگرانی کی۔",
        "'ریڈ روز موبائل ایپلیکیشن' اور دستی لاگز کے ذریعے مستند ڈیٹا کی بروقت تصدیق اور ترسیل کو یقینی بنایا۔",
        "مقررہ ڈیڈ لائن کے اندر اہداف کو کامیابی سے مکمل کرنے کے لیے فیلڈ ٹیموں کی موثر کوآرڈینیشن کی۔"
      ],
      toolsAndSkills: ["Red Rose Mobile App", "Field Data Verification", "Public Health Logistics", "Team Supervision"],
      impactMetric: "Zero-error data audit across remote union councils in Lasbela",
      impactMetricUrdu: "لسبیلہ کی دور دراز یونین کونسلوں میں 100 فیصد درست ڈیجیٹل ڈیٹا آڈٹ"
    },
    {
      id: "ifrap-enumerator",
      role: "Enumerator – Post-Flood Assessment",
      roleUrdu: "انو مریٹر – سیلاب کے بعد جائزہ مہم",
      organization: "IFRAP (Integrated Flood Resilience & Adaptation Project)",
      organizationUrdu: "آئی ایف آر اے پی (انٹیگریٹڈ فلڈ ریزیلینس اینڈ ایڈاپٹیشن پروجیکٹ)",
      location: "Balochistan, Pakistan",
      period: "January 2025 – March 2025",
      periodUrdu: "جنوری 2025 – مارچ 2025",
      category: "crisis",
      categoryLabel: "Crisis & Disaster Resilience",
      categoryLabelUrdu: "آفات و بحران سے بحالی",
      summary:
        "Contributed to national disaster recovery efforts through field data collection, household interviews, and rehabilitation needs reporting.",
      summaryUrdu:
        "سیلاب متاثرہ علاقوں میں کمیونٹی کی بحالی اور ضروریات کے جائزے کے لیے زمینی حقائق کا ڈیٹا اکٹھا کیا۔",
      bullets: [
        "Contributed to national crisis management efforts by collecting and validating data from flood-affected communities.",
        "Prepared detailed field reports summarizing findings and community needs to aid in rehabilitation planning.",
        "Navigated complex logistical environments in post-crisis rural zones while maintaining rigorous data collection standards."
      ],
      bulletsUrdu: [
        "سیلاب سے متاثرہ بستیوں سے گھر گھر جا کر تصدیق شدہ معلومات اکٹھی کر کے قومی بحالی کے منصوبوں میں معاونت کی۔",
        "کمیونٹی کی فوری ضروریات اور انفراسٹرکچر کے نقصانات پر مشتمل جامع فیلڈ رپورٹس مرتب کیں۔",
        "مشکل جغرافیائی حالات کے باوجود بین الاقوامی معیارات کے مطابق ڈیٹا کی درستی کو یقینی بنایا۔"
      ],
      toolsAndSkills: ["Disaster Needs Assessment", "Field Reporting", "Household Surveys", "Quantitative Analysis"],
      impactMetric: "Directly surveyed hundreds of households for institutional recovery aid",
      impactMetricUrdu: "امدادی اداروں کے لیے سینکڑوں متاثرہ خاندانوں کا مصدقہ سروے مکمل کیا"
    },
    {
      id: "csft-manager",
      role: "IT & Social Media Manager",
      roleUrdu: "آئی ٹی اور سوشل میڈیا مینیجر",
      organization: "Climate Smart Feed Technology (Startup)",
      organizationUrdu: "کلائمیٹ سمارٹ فیڈ ٹیکنالوجی (سٹارٹ اپ)",
      location: "Balochistan, Pakistan",
      period: "January 2022 – Present",
      periodUrdu: "جنوری 2022 – تاحال",
      category: "agritech",
      categoryLabel: "Climate & Agri-Tech",
      categoryLabelUrdu: "ماحولیات و ایگری ٹیک",
      summary:
        "Managing IT infrastructure and strategic digital campaigns for an environmental agri-tech venture tackling sustainable livestock nutrition.",
      summaryUrdu:
        "ماحولیاتی پائیداری پر کام کرنے والے ایگری ٹیک سٹارٹ اپ کے آئی ٹی نظام اور سوشل میڈیا کی موثر نگرانی۔",
      bullets: [
        "Managing IT operations and digital presence for an agri-tech startup focused on environmental sustainability.",
        "Curating engaging content to raise awareness about climate-smart solutions and eco-friendly livestock feeds.",
        "Optimizing digital workflows and communication pipelines to connect farmers with sustainable feed tech."
      ],
      bulletsUrdu: [
        "ماحولیاتی تحفظ اور غذائی تحفظ پر کام کرنے والے ایگری ٹیک ادارے کے تمام تکنیکی اور ڈیجیٹل امور کا انتظام کیا۔",
        "کسانوں اور عام شہریوں میں کلائمیٹ سمارٹ حل کے بارے میں آگاہی پھیلانے کے لیے مواد تیار کیا۔",
        "ادارے کے مواصلاتی رابطوں کو بہتر بنا کر ماحولیاتی مہمات کی آن لائن موجودگی کو مستحکم کیا۔"
      ],
      toolsAndSkills: ["IT Infrastructure", "Content Writing", "Social Media Strategy", "Agri-Tech Communication"],
      impactMetric: "Expanded awareness on climate-resilient feed solutions across regional farming communities",
      impactMetricUrdu: "کسانوں تک ماحول دوست جدید فیڈ ٹیکنالوجی کی آگاہی پہنچائی"
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "aiou-bed",
      degree: "B.Ed (1.5 Years) – Education",
      degreeUrdu: "بی ایڈ (1.5 سالہ) – ایجوکیشن",
      institution: "Allama Iqbal Open University (AIOU)",
      institutionUrdu: "علامہ اقبال اوپن یونیورسٹی (AIOU)",
      period: "2025 (In Progress)",
      status: "In Progress",
      details:
        "Specializing in modern pedagogical techniques, instructional design, and inclusive educational methodologies for diverse learners.",
      detailsUrdu:
        "جدید تدریسی طریقوں، طلبہ کی نفسیات اور سب کے لیے یکساں تعلیمی رسائی پر تحقیق اور عملی تربیت۔"
    },
    {
      id: "luawms-bscs",
      degree: "BS Computer Science (BSCS)",
      degreeUrdu: "بی ایس کمپیوٹر سائنس (BSCS)",
      institution: "Lasbela University of Agriculture, Water and Marine Sciences (LUAWMS)",
      institutionUrdu: "لسبیلہ یونیورسٹی آف ایگریکلچر، واٹر اینڈ میرین سائنسز (LUAWMS)",
      period: "2019 – 2023",
      status: "Completed",
      details:
        "Core foundational coursework in Software Engineering, Database Systems, Computer Networks, and Problem Solving. Applied tech skills to regional socio-economic challenges.",
      detailsUrdu:
        "سافٹ ویئر انجینئرنگ، ڈیٹا بیس سسٹمز، اور الگورتھم کے بنیادی اصولوں کی تعلیم، اور علاقائی مسائل کے تکنیکی حل پر کام۔"
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "ai-opp-fund",
      title: "AI Opportunity Fund: Asia-Pacific Certified Instructor",
      titleUrdu: "اے آئی اپرچونٹی فنڈ: ایشیا پیسیفک سرٹیفائیڈ انسٹرکٹر",
      issuer: "AI Singapore & AVPN",
      issuerUrdu: "اے آئی سنگاپور اور اے وی پی این",
      year: "2025",
      badge: "International Accreditation",
      verified: true,
      description:
        "Completed 8-week intensive training on AI pedagogy, effective prompting methodologies, and responsible AI adoption frameworks for underserved communities across the Asia-Pacific region.",
      descriptionUrdu:
        "ایشیا پیسیفک خطے کے پسماندہ طبقات میں مصنوعی ذہانت کی اخلاقی و عملی تدریس، پرامپٹ سکھانے کے طریقوں پر مشتمل 8 ہفتوں کا سخت بین الاقوامی تربیتی پروگرام۔"
    },
    {
      id: "urdu-ai-masterclass",
      title: "Urdu AI Master Class on Automation",
      titleUrdu: "اردو اے آئی ماسٹر کلاس برائے آٹومیشن",
      issuer: "Urdu AI",
      issuerUrdu: "اردو اے آئی",
      year: "2025",
      badge: "Advanced Specialization",
      verified: true,
      description:
        "Advanced hands-on workshop covering workflow automation, Google Apps Script integration, and prompt engineering tailored specifically for Urdu natural language pipelines.",
      descriptionUrdu:
        "ورک فلو آٹومیشن، گوگل ایپس سکرپٹ، اور اردو زبان میں پرامپٹ انجینئرنگ کے عملی استعمال کی خصوصی ماسٹر کلاس۔"
    },
    {
      id: "merf-research",
      title: "Research & Data Collection Training",
      titleUrdu: "ریسرچ اور ڈیٹا کلیکشن ٹریننگ",
      issuer: "MERF (Medical Emergency Resilience Foundation)",
      issuerUrdu: "میڈیکل ایمرجنسی ریزیلینس فاؤنڈیشن",
      year: "2023",
      badge: "Field Certification",
      verified: true,
      description:
        "Rigorous training in quantitative and qualitative community surveying, mobile digital data tools (Red Rose App), ethical consent protocols, and field accuracy standards.",
      descriptionUrdu:
        "موبائل ایپس کے ذریعے فیلڈ سروے، اعداد و شمار کی جانچ، اور اخلاقی رضامندی کے عالمی اصولوں پر باضابطہ فیلڈ ٹریننگ۔"
    },
    {
      id: "wang-climate-action",
      title: "Local Action Baithak on Climate Action",
      titleUrdu: "لوکل ایکشن بیٹھک برائے کلائمیٹ ایکشن",
      issuer: "WANG (Welfare Association for New Generation)",
      issuerUrdu: "وانگ (WANG)",
      year: "2024",
      badge: "Community Leadership",
      verified: true,
      description:
        "Grassroots climate advocacy summit engaging youth in community-driven environmental resilience, water conservation, and regional flood mitigation dialogue.",
      descriptionUrdu:
        "ماحولیاتی تبدیلی، پانی کے تحفظ اور سیلاب سے بچاؤ کے لیے مقامی سطح پر نوجوانوں کی قیادت اور بیٹھکوں کا انعقاد۔"
    }
  ] as CertificationItem[],

  skills: {
    community: {
      title: "Community & Grassroots Pedagogy",
      titleUrdu: "کمیونٹی ڈویلپمنٹ و تدریس",
      skills: [
        { name: "Digital Literacy Training", nameUrdu: "ڈیجیٹل خواندگی کی تربیت", level: "Expert", desc: "Tailoring digital skills for rural learners with limited background" },
        { name: "Field Research & Data Gathering", nameUrdu: "فیلڈ ریسرچ و ڈیٹا سروے", level: "Advanced", desc: "Rigorous household data validation across remote terrains" },
        { name: "Public Speaking in Local Languages", nameUrdu: "مقامی زبانوں میں تقریر و رہنمائی", level: "Native / Fluent", desc: "Delivering inspiring keynotes & workshops in Urdu and local dialects" },
        { name: "Youth Mentorship & Capacity Building", nameUrdu: "نوجوانوں کی رہنمائی و صلاحیتوں کا فروغ", level: "Expert", desc: "Empowering next-generation changemakers to build regional resilience" }
      ]
    },
    technical: {
      title: "Technical, AI & Automation",
      titleUrdu: "تکنیکی مہارتیں، اے آئی و آٹومیشن",
      skills: [
        { name: "AI Tools & Prompt Engineering", nameUrdu: "مصنوعی ذہانت و پرامپٹ انجینئرنگ", level: "Certified Instructor", desc: "Generative AI pipelines, contextual prompting, and ethics" },
        { name: "Google Apps Script Automation", nameUrdu: "گوگل ایپس سکرپٹ آٹومیشن", level: "Proficient", desc: "Automating reporting workflows, spreadsheets, and form pipelines" },
        { name: "Data Collection (Red Rose Mobile App)", nameUrdu: "ڈیٹا کلیکشن (ریڈ روز موبائل ایپ)", level: "Field Supervisor", desc: "Mobile field survey apps, offline caching, and data hygiene" },
        { name: "MS Office Suite & Productivity", nameUrdu: "ایم ایس آفس اور دفتری ٹولز", level: "Advanced", desc: "Advanced spreadsheets, documentation, and impact reporting" }
      ]
    },
    creative: {
      title: "Media, Content & Storytelling",
      titleUrdu: "تخلیقی صلاحیتیں و میڈیا",
      skills: [
        { name: "Content Writing & Translation", nameUrdu: "مضمون نگاری و ترجمہ نگاری", level: "Bilingual", desc: "Demystifying deep technical jargon into accessible Urdu prose" },
        { name: "Video Editing & Production", nameUrdu: "ویڈیو ایڈیٹنگ و پروڈکشن", level: "Intermediate", desc: "Creating educational clips and social media awareness assets" },
        { name: "Social Media Management", nameUrdu: "سوشل میڈیا حکمت عملی", level: "Active Manager", desc: "Audience growth for agri-tech startups and community non-profits" },
        { name: "Visual Storytelling", nameUrdu: "بصری کہانی نگاری", level: "Proficient", desc: "Documenting field impact stories through imagery and casework" }
      ]
    }
  },

  urduPromptPlayground: [
    {
      title: "System Role Definition",
      urduConcept: "کردار کا تعین (System Persona)",
      englishConcept: "Role & Persona Prompting",
      explanation: "طلبہ کو یہ سکھایا جاتا ہے کہ کمپیوٹر کو ایک قابل استاد یا مقامی مشیر کا روپ کیسے دیا جائے تاکہ وہ درست زبان میں جواب دے۔",
      examplePrompt: "آپ لسبیلہ کے ایک تجربہ کار زرعی مشیر ہیں، مقامی کسانوں کو آسان اردو میں بتائیں کہ کم پانی میں فصل کی پیداوار کیسے بڑھائی جا سکتی ہے۔",
      practicalApplication: "مقامی کسانوں کے مسائل حل کرنے کے لیے اے آئی مشیر تیار کرنا۔"
    },
    {
      title: "Step-by-Step Problem Solving",
      urduConcept: "مرحلہ وار رہنمائی (Chain-of-Thought)",
      englishConcept: "Step-by-Step Prompting",
      explanation: "جب پیچیدہ سوال حل کرنا ہو تو اے آئی کو ایک ایک قدم کی وضاحت کرنے کی ہدایت دینا تاکہ وہ کوئی غلطی نہ کرے۔",
      examplePrompt: "مجھے ایک کمیونٹی کلین اپ ڈرائیو شروع کرنی ہے۔ مجھے مرحلہ وار بتائیں: پہلے ہفتے میں کیا کرنا ہے، رضاکار کیسے اکٹھے کرنے ہیں، اور سامان کا بندوبست کیسے کرنا ہے۔",
      practicalApplication: "نوجوانوں کو کمیونٹی پراجیکٹ کا لائحہ عمل تیار کرنا سکھانا۔"
    },
    {
      title: "Tone & Accessibility Control",
      urduConcept: "سلیس زبان اور اخلاقی حدود (Tone & Safety)",
      englishConcept: "Context & Guardrails",
      explanation: "اے آئی سے معلومات حاصل کرتے وقت مقامی روایات، پرائیویسی اور سادہ ترین الفاظ کے انتخاب کی شرط عائد کرنا۔",
      examplePrompt: "اس طبی اصطلاح کو دیہی بچوں کے لیے ایسی مثالوں کے ساتھ سمجھائیں جو بلوچستان کی روزمرہ زندگی سے جڑی ہوں۔",
      practicalApplication: "صحت عامہ کی معلومات کو گاؤں کے بچوں کے لیے پرکشش اور عام فہم بنانا۔"
    }
  ] as UrduPromptExample[],

  testimonialsAndQuotes: [
    {
      quote:
        "Language should never be a boundary for technological enlightenment. When our youth learn AI prompting in Urdu, they stop feeling left behind and start solving the real problems of Balochistan.",
      quoteUrdu:
        "زبان کبھی بھی جدید علم کی راہ میں رکاوٹ نہیں ہونی چاہیے۔ جب ہمارے نوجوان اپنی زبان میں مصنوعی ذہانت کا استعمال سیکھتے ہیں، تو وہ پسماندگی کے احساس سے نکل کر اپنے خطے کے مسائل حل کرنے لگتے ہیں۔",
      author: "Salman Khan",
      authorUrdu: "سلمان خان",
      role: "EdTech Trainer & Community Practitioner",
      roleUrdu: "ایڈٹیک ٹرینر و کمیونٹی پریکٹیشنر"
    }
  ],

  githubRepositories: [
    {
      name: "urdu-ai-prompt-handouts",
      nameUrdu: "اردو اے آئی پرامپٹ ہینڈ آؤٹس",
      description: "Open-source prompt engineering guides, system personas, and exercise worksheets translated into clear Urdu for community trainers.",
      descriptionUrdu: "کمیونٹی اساتذہ کے لیے سلیس اردو میں تیار کردہ پرامپٹ انجینئرنگ کے اوپن سورس رہنما خطوط اور ورک شیٹس۔",
      language: "Markdown / Prompt Eng",
      stars: 38,
      forks: 14,
      topics: ["edtech", "generative-ai", "urdu-prompting", "digital-inclusion"],
      url: "https://github.com/salmanroonjah/urdu-ai-prompt-handouts"
    },
    {
      name: "field-data-hygiene-scripts",
      nameUrdu: "فیلڈ ڈیٹا تصدیقی اسکرپٹس",
      description: "Google Apps Script and automated data validation pipelines to reconcile mobile survey logs (Red Rose App) with manual field logs.",
      descriptionUrdu: "موبائل سروے ایپس اور دستی رجسٹروں کے مابین فیلڈ ڈیٹا کی خودکار تصدیق کے اسکرپٹس۔",
      language: "Google Apps Script",
      stars: 26,
      forks: 9,
      topics: ["data-collection", "google-apps-script", "public-health", "automation"],
      url: "https://github.com/salmanroonjah/field-data-hygiene-scripts"
    },
    {
      name: "climate-smart-feed-estimator",
      nameUrdu: "ماحول دوست فیڈ کیلکولیٹر",
      description: "Lightweight tool for agri-tech practitioners to compute climate-resilient livestock feed rations and environmental savings.",
      descriptionUrdu: "ایگری ٹیک اداروں کے لیے ماحول دوست زرعی فیڈ کی پیمائش اور بچت کا ڈیجیٹل کیلکولیٹر۔",
      language: "TypeScript / React",
      stars: 19,
      forks: 5,
      topics: ["agri-tech", "climate-action", "sustainability", "calculator"],
      url: "https://github.com/salmanroonjah/climate-smart-feed-estimator"
    },
    {
      name: "rural-digital-literacy-toolkit",
      nameUrdu: "دیہی ڈیجیٹل خواندگی ٹول کٹ",
      description: "Interactive learning materials and visual slides for first-time computer users in remote union councils of Balochistan.",
      descriptionUrdu: "بلوچستان کے دور دراز علاقوں میں کمپیوٹر کے بنیادی استعمال کی بصری ٹول کٹ اور رہنما سلائیڈز۔",
      language: "HTML / CSS",
      stars: 31,
      forks: 11,
      topics: ["digital-literacy", "rural-education", "open-education", "balochistan"],
      url: "https://github.com/salmanroonjah/rural-digital-literacy-toolkit"
    }
  ]
};
