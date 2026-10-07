export interface ExperienceItem {
  id: string;
  role: string;
  roleUrdu: string;
  organization: string;
  organizationUrdu: string;
  period: string;
  periodUrdu: string;
  location: string;
  locationUrdu: string;
  summary: string;
  summaryUrdu: string;
  bullets: string[];
  bulletsUrdu: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  iconName: 'Brain' | 'Laptop' | 'Video' | 'CalendarCheck';
  tags: string[];
}

export interface CreativeProject {
  id: string;
  title: string;
  titleUrdu: string;
  createdFor: string;
  myRole: string;
  myRoleUrdu: string;
  about: string;
  aboutUrdu: string;
  result?: string;
  resultUrdu?: string;
  category: 'Training Videos' | 'Educational Content' | 'Graphics & Design' | 'Social Media Campaigns';
  link?: string;
  featured?: boolean;
  mediaType: 'video' | 'image' | 'gallery';
  thumbnailUrl: string;
  videoUrl?: string;
  duration?: string;
  galleryImages?: string[];
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
  highlight?: boolean;
}

export const portfolioData = {
  hero: {
    headline: "Salman Khan",
    headlineUrdu: "سلمان خان",
    subHeadline: "AI Trainer · Digital Literacy Specialist · Creative Professional",
    subHeadlineUrdu: "اے آئی ٹرینر · ڈیجیٹل لٹریسی اسپیشلسٹ · کریئیٹو پروفیشنل",
    introLine: "I help students, professionals and rural communities understand and use AI, in their own language.",
    introLineUrdu: "میں طلبہ، پیشہ ور افراد اور دیہی کمیونٹیز کو ان کی اپنی زبان میں مصنوعی ذہانت (AI) کو سمجھنے اور استعمال کرنے میں مدد کرتا ہوں۔",
    buttons: {
      work: "View My Work",
      workUrdu: "میرا کام دیکھیں",
      contact: "Contact Me",
      contactUrdu: "مجھ سے رابطہ کریں"
    }
  },

  about: {
    paragraphs: [
      "I'm an AI trainer and digital literacy specialist from Balochistan, Pakistan. I work to make technology accessible to people who are often left out of it, including students, youth and rural communities, by teaching AI concepts in Urdu and local languages.",
      "As a Master Trainer with the Urdu AI Training Program at WANG, I have trained 2,500+ participants across multiple regions in schools, colleges, vocational centers and community spaces. I am also a Certified Instructor under the AI Opportunity Fund: Asia-Pacific (AI Singapore & AVPN).",
      "Alongside training, I create digital content, videos and graphics, and I manage events, programs and field teams. I believe that when people understand technology, they can use it responsibly to learn, earn and grow."
    ],
    paragraphsUrdu: [
      "میں بلوچستان، پاکستان سے تعلق رکھنے والا اے آئی ٹرینر اور ڈیجیٹل لٹریسی اسپیشلسٹ ہوں۔ میرا مشن ٹیکنالوجی کو ان لوگوں کے لیے قابل رسائی بنانا ہے جو عموماً اس سے محروم رہ جاتے ہیں، جن میں طلبہ، نوجوان اور دیہی کمیونٹیز شامل ہیں، اور میں یہ کام اردو اور مقامی زبانوں میں سکھا کر کرتا ہوں۔",
      "وانگ (WANG) کے اردو اے آئی ٹریننگ پروگرام کے ماسٹر ٹرینر کے طور پر، میں نے اسکولوں، کالجوں، ووکیشنل سینٹرز اور کمیونٹی مراکِز میں 2,500 سے زائد شرکاء کو تربیت دی ہے۔ میں AI Opportunity Fund: Asia-Pacific (AI Singapore & AVPN) کا سند یافتہ انسٹرکٹر بھی ہوں۔",
      "تربیت کے ساتھ ساتھ، میں ڈیجیٹل مواد، ویڈیوز اور گرافکس تخلیق کرتا ہوں، اور ایونٹس، پروگرامز اور فیلڈ ٹیموں کا انتظام سنبھالتا ہوں۔ میرا ماننا ہے کہ جب لوگ ٹیکنالوجی کو سمجھ جاتے ہیں، تو وہ اسے سیکھنے، کمانے اور آگے بڑھنے کے لیے ذمہ داری سے استعمال کر سکتے ہیں۔"
    ],
    languages: ["Urdu", "Balochi", "Brahui", "English"],
    languagesUrdu: ["اردو", "بلوچی", "براہوی", "انگریزی"]
  },

  whatIDo: [
    {
      id: "ai-training",
      title: "AI Training & Workshops",
      titleUrdu: "اے آئی ٹریننگ اور ورکشاپس",
      description: "Hands-on sessions on AI tools, prompting and responsible AI use, designed for learners with little or no technical background.",
      descriptionUrdu: "اے آئی ٹولز، پرامپٹنگ اور ذمہ دارانہ استعمال پر عملی ورکشاپس، جو ایسے سیکھنے والوں کے لیے ڈیزائن کی گئی ہیں جن کا کوئی تکنیکی پس منظر نہیں ہے۔",
      iconName: "Brain",
      tags: ["Prompt Engineering", "Urdu Pedagogy", "Generative AI", "Responsible AI"]
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      titleUrdu: "ڈیجیٹل خواندگی (Digital Literacy)",
      description: "Computer fundamentals, internet use and essential digital tools for rural communities and first-time learners.",
      descriptionUrdu: "دیہی کمیونٹیز اور پہلی بار سیکھنے والوں کے لیے کمپیوٹر کی بنیادی مہارتیں، انٹرنیٹ کا استعمال اور روزمرہ ڈیجیٹل ٹولز۔",
      iconName: "Laptop",
      tags: ["Computer Basics", "Internet Literacy", "Productivity Tools", "Rural Youth"]
    },
    {
      id: "content-creative",
      title: "Content & Creative Work",
      titleUrdu: "مواد و تخلیقی کام (Content & Creative)",
      description: "Videos, graphics and written content for digital platforms, including social media management and brand communication.",
      descriptionUrdu: "ڈیجیٹل پلیٹ فارمز کے لیے ویڈیوز، گرافکس اور تحریری مواد کی تیاری، بشمول سوشل میڈیا مینجمنٹ اور برانڈ ابلاغ۔",
      iconName: "Video",
      tags: ["Video Editing", "Graphic Design", "Social Media", "Visual Storytelling"]
    },
    {
      id: "program-management",
      title: "Program & Event Management",
      titleUrdu: "پروگرام اور ایونٹ مینجمنٹ",
      description: "Planning and coordinating training programs and events, supervising teams, managing data and preparing reports.",
      descriptionUrdu: "تربیتی پروگراموں اور ایونٹس کی منصوبہ بندی اور ہم آہنگی، فیلڈ ٹیموں کی نگرانی، ڈیٹا مینجمنٹ اور رپورٹس کی تیاری۔",
      iconName: "CalendarCheck",
      tags: ["Field Operations", "Team Supervision", "Data Reporting", "Event Coordination"]
    }
  ] as ServiceItem[],

  impact: [
    {
      value: "2,500+",
      label: "participants trained",
      labelUrdu: "شرکاء کو تربیت دی گئی",
      sub: "Across schools, colleges, vocational centers & communities",
      subUrdu: "اسکولوں، کالجوں اور کمیونٹی مراکِز میں"
    },
    {
      value: "4+",
      label: "years of professional experience",
      labelUrdu: "سال کا پیشہ ورانہ تجربہ",
      sub: "In EdTech, community development & IT operations",
      subUrdu: "ایڈٹیک، کمیونٹی ترقی اور آئی ٹی میں"
    },
    {
      value: "4",
      label: "languages spoken",
      labelUrdu: "زبانوں میں مہارت",
      sub: "Urdu, Balochi, Brahui, English",
      subUrdu: "اردو، بلوچی، براہوی، انگریزی"
    },
    {
      value: "1",
      label: "international certification",
      labelUrdu: "بین الاقوامی سرٹیفیکیشن",
      sub: "AI Singapore & AVPN Certified Instructor",
      subUrdu: "ایشیا پیسیفک سند یافتہ انسٹرکٹر"
    }
  ],

  experience: [
    {
      id: "acting-lead-wang",
      role: "Acting Project Lead",
      roleUrdu: "ایکٹنگ پروجیکٹ لیڈ",
      organization: "Urdu AI Training Program – WANG",
      organizationUrdu: "اردو اے آئی ٹریننگ پروگرام – وانگ",
      period: "Jan 2026 – May 2026",
      periodUrdu: "جنوری 2026 – مئی 2026",
      location: "Lasbela & Regional Centers",
      locationUrdu: "لسبیلہ و علاقائی مراکز",
      summary: "Led field operations: coordinated training sessions with universities, colleges and community leaders, supervised the field team, managed project data and prepared progress reports.",
      summaryUrdu: "فیلڈ آپریشنز کی قیادت کی: یونیورسٹیوں، کالجوں اور کمیونٹی رہنماؤں کے ساتھ سیشنز کی ہم آہنگی، فیلڈ ٹیم کی نگرانی، پروجیکٹ ڈیٹا کا انتظام اور پیش رفت رپورٹس کی تیاری۔",
      bullets: [
        "Led field operations across multiple institutions and educational clusters.",
        "Coordinated training sessions with universities, colleges and community leaders.",
        "Supervised the field trainer team and ensured pedagogical consistency.",
        "Managed project data pipeline and prepared rigorous progress reports."
      ],
      bulletsUrdu: [
        "متعدد تعلیمی اداروں میں فیلڈ آپریشنز کی قیادت کی۔",
        "یونیورسٹیوں، کالجوں اور مقامی رہنماؤں کے ساتھ ورکشاپس کا انعقاد کیا۔",
        "فیلڈ ٹرینرز کی نگرانی کی اور تدریسی معیار کو برقرار رکھا۔",
        "پروجیکٹ کے ڈیٹا اور پیش رفت رپورٹس کو ترتیب دیا۔"
      ]
    },
    {
      id: "master-trainer-wang",
      role: "Master Trainer",
      roleUrdu: "ماسٹر ٹرینر",
      organization: "Urdu AI Training Program – WANG",
      organizationUrdu: "اردو اے آئی ٹریننگ پروگرام – وانگ",
      period: "May 2025 – Present",
      periodUrdu: "مئی 2025 – تا حال",
      location: "Balochistan, Pakistan",
      locationUrdu: "بلوچستان، پاکستان",
      summary: "Deliver AI workshops in Urdu, covering AI tools, prompting strategies, and responsible use (misinformation, deepfakes, data privacy).",
      summaryUrdu: "اردو میں اے آئی ورکشاپس کی تدریس، جس میں اے آئی ٹولز، پرامپٹنگ کی حکمت عملی اور ذمہ دارانہ استعمال (غلط معلومات، ڈیپ فیکس، ڈیٹا پرائیویسی) شامل ہیں۔",
      bullets: [
        "Deliver hands-on AI workshops in Urdu for learners with zero technical background.",
        "Cover foundational prompting strategies, role assignment, and workflow automation.",
        "Train participants on responsible AI use: detecting misinformation, understanding deepfakes, and protecting data privacy.",
        "Empower rural students and educators to use modern tech for everyday problem solving."
      ],
      bulletsUrdu: [
        "غیر تکنیکی طلبہ کے لیے اردو میں پرامپٹنگ کی عملی ورکشاپس منعقد کیں۔",
        "بنیادی پرامپٹ انجینئرنگ اور روزمرہ خودکاری کی تربیت دی۔",
        "ذمہ دارانہ استعمال، ڈیپ فیک آگاہی اور ڈیٹا پرائیویسی کے بنیادی اصول سکھائے۔",
        "دیہی نوجوانوں کو جدید ٹیکنالوجی سے اپنے مسائل حل کرنے کے قابل بنایا۔"
      ]
    },
    {
      id: "creative-officer-urduai",
      role: "Creative Officer",
      roleUrdu: "کریئیٹو آفیسر",
      organization: "UrduAI.org",
      organizationUrdu: "UrduAI.org",
      period: "June 2024 – Present",
      periodUrdu: "جون 2024 – تا حال",
      location: "Remote / Hybrid",
      locationUrdu: "ریموٹ / ہائبرڈ",
      summary: "Create videos, graphics and written content, and manage social media and community engagement.",
      summaryUrdu: "ویڈیوز، گرافکس اور تحریری مواد کی تیاری، اور سوشل میڈیا و کمیونٹی روابط کی دیکھ بھال۔",
      bullets: [
        "Script and edit educational video tutorials explaining AI concepts in accessible Urdu.",
        "Design visual banners, infographics, and carousel guides for digital platforms.",
        "Manage social media publishing schedule and foster online community engagement.",
        "Translate complex tech documentation into compelling, localized storytelling."
      ],
      bulletsUrdu: [
        "آسان اردو میں اے آئی تصورات پر مبنی معلوماتی ویڈیو ٹیوٹوریلز تیار کیے۔",
        "سوشل میڈیا اور ویب کے لیے بصری گرافکس اور انفوگرافکس ڈیزائن کیے۔",
        "آن لائن کمیونٹی کے ساتھ روزانہ کی بنیاد پر رابطہ اور رہنمائی رکھی۔",
        "تکنیکی مواد کو عام فہم اور پرکشش انداز میں پیش کیا۔"
      ]
    },
    {
      id: "course-instructor-wali",
      role: "Course Instructor",
      roleUrdu: "کورس انسٹرکٹر",
      organization: "Wang Lab of Innovation (WALI)",
      organizationUrdu: "وانگ لیب آف انوویشن (WALI)",
      period: "June 2024 – Present",
      periodUrdu: "جون 2024 – تا حال",
      location: "Lasbela, Balochistan",
      locationUrdu: "لسبیلہ، بلوچستان",
      summary: "Teach digital literacy and computer fundamentals to rural communities.",
      summaryUrdu: "دیہی کمیونٹیز کو ڈیجیٹل خواندگی اور کمپیوٹر کی بنیادی مہارتوں کی تدریس۔",
      bullets: [
        "Instruct first-time computer learners in basic operating systems, typing, and navigation.",
        "Teach safe internet browsing, email communication, and online research skills.",
        "Facilitate digital inclusion cohorts for marginalized youth and women in rural union councils.",
        "Track learner assessment metrics and provide one-on-one lab mentoring."
      ],
      bulletsUrdu: [
        "پہلی بار کمپیوٹر استعمال کرنے والوں کو بنیادی نظام اور نیویگیشن سکھائی۔",
        "محفوظ انٹرنیٹ براؤزنگ اور ای میل رابطے کی عملی مشق کروائی۔",
        "دیہی یونین کونسلز کے پسماندہ نوجوانوں کے لیے ڈیجیٹل کلاسز کا انتظام کیا۔",
        "طلبہ کی انفرادی رہنمائی اور لیب مینٹورنگ کی ذمہ داری نبھائی۔"
      ]
    },
    {
      id: "it-social-media-manager-csft",
      role: "IT & Social Media Manager",
      roleUrdu: "آئی ٹی و سوشل میڈیا مینیجر",
      organization: "Climate Smart Feed Technology",
      organizationUrdu: "کلائمیٹ سمارٹ فیڈ ٹیکنالوجی",
      period: "Jan 2022 – Present",
      periodUrdu: "جنوری 2022 – تا حال",
      location: "Lasbela, Balochistan",
      locationUrdu: "لسبیلہ، بلوچستان",
      summary: "Manage IT operations and social media for the startup.",
      summaryUrdu: "سٹارٹ اپ کے آئی ٹی آپریشنز اور سوشل میڈیا مہمات کا انتظام۔",
      bullets: [
        "Oversee startup digital infrastructure, hardware systems, and web presence.",
        "Lead social media campaigns to educate regional farmers on sustainable livestock feed.",
        "Produce graphic assets and promotional media highlighting environmental benefits.",
        "Manage stakeholder communication and brand positioning across digital touchpoints."
      ],
      bulletsUrdu: [
        "سٹارٹ اپ کے تمام ڈیجیٹل سسٹمز اور آئی ٹی انفراسٹرکچر کی نگرانی کی۔",
        "کسانوں میں ماحول دوست فیڈ کی آگاہی کے لیے سوشل میڈیا مہمات چلائیں۔",
        "بصری اشتہارات اور پروموشنل گرافکس تیار کیے۔",
        "کسانوں اور شراکت داروں کے ساتھ ڈیجیٹل پلیٹ فارمز پر رابطہ رکھا۔"
      ]
    }
  ] as ExperienceItem[],

  earlierRoles: {
    title: "Earlier Field Roles",
    titleUrdu: "ابتدائی فیلڈ کردار",
    description: "Enumerator (IFRAP flood resilience project) and Team Supervisor (MERF, LLIN distribution).",
    descriptionUrdu: "شماریات کار (IFRAP سیلاب بحالی پراجیکٹ) اور ٹیم سپروائزر (MERF ملیریا مچھر دانی مہم)۔",
    roles: [
      {
        title: "Enumerator",
        project: "IFRAP Flood Resilience Project",
        scope: "Post-flood damage assessment and household survey data collection."
      },
      {
        title: "Team Supervisor",
        project: "MERF (Medical Emergency Resilience Foundation)",
        scope: "Long-Lasting Insecticidal Nets (LLINs) distribution and mobile data supervision."
      }
    ]
  },

  myWork: {
    introLine: "A selection of videos, training content and graphics I've created for educational and community organizations.",
    introLineUrdu: "تعلیمی اور کمیونٹی تنظیموں کے لیے تیار کردہ ویڈیوز، تربیتی مواد اور گرافکس کا منتخب مجموعہ۔",
    categories: [
      "All Projects",
      "Training Videos",
      "Educational Content",
      "Graphics & Design",
      "Social Media Campaigns"
    ] as const,
    projects: [
      {
        id: "work-1",
        title: "Urdu AI Video Masterclass Series",
        titleUrdu: "اردو اے آئی ویڈیو ماسٹرکلاس سیریز",
        createdFor: "WANG / UrduAI.org",
        myRole: "Video editing, scripting & voiceover",
        myRoleUrdu: "ویڈیو ایڈیٹنگ، اسکرپٹ رائٹنگ اور وائس اوور",
        about: "Step-by-step instructional video modules explaining generative AI prompting for rural Urdu speakers.",
        aboutUrdu: "اردو بولنے والے طلبہ کے لیے جنریٹو اے آئی پرامپٹنگ کی مرحلہ وار وضاحتی ویڈیو سیریز۔",
        result: "45,000+ views across digital channels, adopted by 15 community centers.",
        resultUrdu: "ڈیجیٹل پلیٹ فارمز پر 45,000+ آراء اور 15 کمیونٹی سینٹرز میں تدریسی استعمال۔",
        category: "Training Videos",
        featured: true,
        mediaType: "video",
        thumbnailUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: "08:45 min",
        galleryImages: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
        ]
      },
      {
        id: "work-2",
        title: "Responsible AI & Deepfake Awareness Campaign",
        titleUrdu: "ذمہ دارانہ اے آئی اور ڈیپ فیک آگاہی مہم",
        createdFor: "Urdu AI Training Program – WANG",
        myRole: "Content writing, infographic design & motion graphics",
        myRoleUrdu: "مضمون نگاری، انفوگرافک ڈیزائن اور موشن گرافکس",
        about: "Public educational campaign addressing digital misinformation, fake news detection, and online privacy.",
        aboutUrdu: "ڈیجیٹل غلط معلومات کی روک تھام، ڈیپ فیک کی پہچان اور آن لائن پرائیویسی پر عوامی آگاہی مہم۔",
        result: "Reached 12,000+ students and youth across colleges in Balochistan.",
        resultUrdu: "بلوچستان کے کالجوں میں 12,000 سے زائد طلبہ اور نوجوانوں تک رسائی۔",
        category: "Educational Content",
        featured: true,
        mediaType: "image",
        thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        duration: "Infographic & Media Pack",
        galleryImages: [
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
        ]
      },
      {
        id: "work-3",
        title: "Climate Smart Feed Brand & Visual Identity",
        titleUrdu: "کلائمیٹ سمارٹ فیڈ برانڈ و بصری شناخت",
        createdFor: "Climate Smart Feed Technology",
        myRole: "Graphic design & visual storytelling",
        myRoleUrdu: "گرافک ڈیزائن اور بصری کہانی نگاری",
        about: "Complete visual identity, social banners, and packaging infographics for agri-tech sustainability.",
        aboutUrdu: "ایگری ٹیک سٹارٹ اپ کے لیے مکمل برانڈ شناخت، سوشل میڈیا بینرز اور معلوماتی پیکجنگ۔",
        result: "Boosted farmer social engagement by 180% across regional livestock groups.",
        resultUrdu: "علاقائی لائیو اسٹاک گروپس میں کسانوں کی شمولیت میں 180 فیصد اضافہ۔",
        category: "Graphics & Design",
        mediaType: "image",
        thumbnailUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop",
        duration: "Brand Identity System",
        galleryImages: [
          "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop"
        ]
      },
      {
        id: "work-4",
        title: "Rural Digital Literacy Stories Showcase",
        titleUrdu: "دیہی ڈیجیٹل خواندگی دستاویزی سیریز",
        createdFor: "Wang Lab of Innovation (WALI)",
        myRole: "Creative documentation, video editing & social media",
        myRoleUrdu: "دستاویزی فلم بندی، ویڈیو ایڈیٹنگ اور سوشل میڈیا مینجمنٹ",
        about: "Video documentary series highlighting first-generation computer learners from remote union councils.",
        aboutUrdu: "دور دراز علاقوں سے پہلی بار کمپیوٹر سیکھنے والے نوجوانوں کی کامیابیوں پر مبنی دستاویزی ویڈیوز۔",
        result: "Praised by regional education leaders and widely shared in community baithaks.",
        resultUrdu: "علاقائی اساتذہ اور کمیونٹی بیٹھکوں میں بھرپور پذیرائی۔",
        category: "Social Media Campaigns",
        mediaType: "video",
        thumbnailUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        duration: "05:12 min Docu",
        galleryImages: [
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
        ]
      },
      {
        id: "work-5",
        title: "AI Prompt Engineering Handouts in Urdu",
        titleUrdu: "اردو پرامپٹ انجینئرنگ پرنٹ ہینڈ آؤٹس",
        createdFor: "Urdu AI Training Program – WANG",
        myRole: "Pedagogical design & technical translation",
        myRoleUrdu: "تدریسی ڈیزائن اور تکنیکی ترجمہ نگاری",
        about: "Concise, printable classroom reference cards giving students everyday prompts for study and research.",
        aboutUrdu: "طلبہ کے لیے کلاس روم میں استعمال ہونے والے پرنٹ ایبل اے آئی پرامپٹ کارڈز اور گائیڈز۔",
        result: "Distributed to 2,500+ participants across 12 training cohorts.",
        resultUrdu: "12 تربیتی بیچز میں 2,500+ طلبہ میں کامیابی سے تقسیم۔",
        category: "Educational Content",
        mediaType: "image",
        thumbnailUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        duration: "Printable Guide Kit",
        galleryImages: [
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
        ]
      },
      {
        id: "work-6",
        title: "Youth Tech Baithak Social Media Coverage",
        titleUrdu: "یوتھ ٹیک بیٹھک لائیو سوشل کوریج",
        createdFor: "WANG Community Programs",
        myRole: "Event photography, real-time social reels & reporting",
        myRoleUrdu: "ایونٹ فوٹوگرافی، ریلز اور براہ راست سوشل میڈیا کوریج",
        about: "Comprehensive digital coverage of community technology forums and rural youth discussions.",
        aboutUrdu: "دیہی نوجوانوں کے ٹیکنالوجی فورمز اور مباحثوں کی مکمل ڈیجیٹل اور لائیو کوریج۔",
        result: "Generated 28,000+ digital impressions and sparked new community enrollments.",
        resultUrdu: "28,000+ آن لائن امپریشنز اور نئے طلبہ کی داخلوں میں شمولیت۔",
        category: "Social Media Campaigns",
        mediaType: "image",
        thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        duration: "Social Media Reel Set",
        galleryImages: [
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        ]
      }
    ] as CreativeProject[]
  },

  certifications: [
    {
      id: "ai-opportunity-fund",
      title: "AI Opportunity Fund: Asia-Pacific Certified Instructor",
      titleUrdu: "AI Opportunity Fund: Asia-Pacific سند یافتہ انسٹرکٹر",
      issuer: "AI Singapore & AVPN",
      issuerUrdu: "AI Singapore اور AVPN",
      year: "2025",
      description: "Certified to deliver localized artificial intelligence literacy across underserved communities in the Asia-Pacific region.",
      descriptionUrdu: "ایشیا پیسیفک خطے کی پسماندہ کمیونٹیز میں مقامی سطح پر مصنوعی ذہانت کی خواندگی فراہم کرنے کی بین الاقوامی سند۔",
      highlight: true
    },
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      titleUrdu: "اے آئی بنیادی مہارتیں (AI Fundamentals)",
      issuer: "AI Singapore & AVPN",
      issuerUrdu: "AI Singapore اور AVPN",
      year: "2025",
      description: "Comprehensive foundational mastery of core artificial intelligence models, ethical safeguards, and community integration.",
      descriptionUrdu: "بنیادی مصنوعی ذہانت کے ماڈلز، اخلاقی حدود اور کمیونٹی استعمال کی جامع تربیت۔",
      highlight: true
    },
    {
      id: "urdu-ai-automation",
      title: "Urdu AI Master Class on Automation",
      titleUrdu: "اردو اے آئی ماسٹر کلاس برائے آٹومیشن",
      issuer: "Urdu AI",
      issuerUrdu: "Urdu AI",
      year: "2025",
      description: "Advanced automation workflows, prompt chaining, and productivity integration delivered in the Urdu language.",
      descriptionUrdu: "اردو زبان میں ایڈوانس آٹومیشن کے طریقے، پرامپٹ چیننگ اور پیداواری صلاحیت بڑھانے کی تربیت۔",
      highlight: false
    },
    {
      id: "russia-youth-fest",
      title: "International Festival of Youth 2026",
      titleUrdu: "انٹرنیشنل فیسٹیول آف یوتھ 2026 (روس)",
      issuer: "Ekaterinburg, Russia",
      issuerUrdu: "یکاترینبرگ، روس",
      year: "2026",
      description: "Participant, selected as one of 10,000 young leaders from 191 countries across the world representing grassroots youth empowerment.",
      descriptionUrdu: "191 ممالک کے 10,000 نوجوان قائدین میں پاکستان سے منتخب نمائندہ شریک، یکاترینبرگ، روس۔",
      highlight: true
    }
  ] as CertificationItem[],

  contact: {
    headline: "Let's work together.",
    headlineUrdu: "آئیے مل کر کام کریں۔",
    description: "Whether it's an AI training, a digital literacy program, or a creative project, I'd be glad to hear from you.",
    descriptionUrdu: "چاہے وہ اے آئی ٹریننگ ہو، ڈیجیٹل لٹریسی پروگرام، یا کوئی تخلیقی منصوبہ، آپ کے ساتھ کام کر کے مجھے بے حد خوشی ہوگی۔",
    email: "salmankhanroonjah@gmail.com",
    phone: "+92 315 8059365",
    phoneDisplay: "+92 315 8059365",
    whatsappLink: "https://wa.me/923158059365",
    linkedIn: "https://linkedin.com/in/salmankhanroonjah",
    github: "https://github.com/salmanroonjah",
    location: "Bela, Lasbela, Balochistan, Pakistan",
    locationUrdu: "بیلہ، ضلع لسبیلہ، بلوچستان، پاکستان"
  },

  footer: {
    shortBio: "AI trainer and digital literacy specialist from Balochistan, making AI accessible in local languages.",
    shortBioUrdu: "بلوچستان سے تعلق رکھنے والا اے آئی ٹرینر اور ڈیجیٹل لٹریسی اسپیشلسٹ، جو مقامی زبانوں میں مصنوعی ذہانت کو قابل فہم بنا رہا ہے۔"
  }
};
