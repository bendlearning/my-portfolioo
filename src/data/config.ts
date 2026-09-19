// ============================================================
// CENTRALIZED PORTFOLIO CONFIGURATION
// Edit this file to update all content across the site.
// ============================================================

export const personalInfo = {
  nameEn: 'Abd El Rahman',
  nameAr: 'مهندس عبدالرحمن',
  titleEn: 'Software Engineer & Mobile Application Developer',
  titleAr: 'مهندس برمجيات ومطور تطبيقات موبايل',
  qualificationEn: "Bachelor's Degree in Communication Technology",
  qualificationAr: 'بكالوريوس تكنولوجيا الاتصالات',
  profileImage: 'https://res.cloudinary.com/dg1g89w0t/image/upload/v1789756278/port_dny8e0.png',
  taglineEn:
    'I transform ideas into powerful digital experiences, intelligent software solutions, and high-quality mobile applications that help businesses grow and succeed.',
  taglineAr:
    'أحوّل الأفكار إلى تجارب رقمية مبتكرة وحلول برمجية متكاملة وتطبيقات موبايل احترافية تساعد الأفراد والشركات على النمو وتحقيق أهدافهم.',
};

export const contactInfo = {
  whatsapp1: '+201118397123',
  whatsapp1Link: 'https://wa.me/201118397123',
  whatsapp2: '+201032890206',
  whatsapp2Link: 'https://wa.me/201032890206',
  // Add your email here when available:
  email: '', // e.g. 'your@email.com'
};

export const paymentMethods = {
  instapay: {
    recipientName: 'Abdelrahman Said',
    phone: '01118397123',
    address: 'sirabdoosama@instapay',
    paymentLink: 'https://ipn.eg/S/sirabdoosama/instapay/6CIRJ1',
  },
  bankTransfer: {
    iban: 'EG160046010100000059102674936',
    recipientName: 'Abdelrahman Said',
  },
  binance: {
    id: '1047769293',
    trc20: 'TEYr21M6i4Y2mMXzYZHx2p6hFQE3j29Ksf',
    bep20: '0x836adca91d3f916da0557544ca4d13966bd215a5',
  },
  vodafoneCash: {
    number: '01032890206',
    recipientName: 'Abdelrahman Said',
  },
};

export const services = [
  {
    id: 'mobile-app',
    icon: 'Smartphone',
    titleEn: 'Mobile App Development',
    titleAr: 'تطوير تطبيقات الموبايل',
    descEn:
      'Design and development of modern, responsive mobile applications tailored to your business goals and user needs.',
    descAr:
      'تصميم وتطوير تطبيقات موبايل حديثة ومتجاوبة تناسب أهداف مشروعك واحتياجات المستخدمين.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'custom-software',
    icon: 'Code2',
    titleEn: 'Custom Software Solutions',
    titleAr: 'حلول برمجية مخصصة',
    descEn:
      'Customized software systems for businesses, factories, companies, and retail stores.',
    descAr:
      'إنشاء أنظمة برمجية مخصصة للشركات والمصانع والمؤسسات والمحلات التجارية.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'business-systems',
    icon: 'Building2',
    titleEn: 'Business Management Systems',
    titleAr: 'أنظمة إدارة الأعمال',
    descEn:
      'Practical solutions for managing operations, records, workflows, and business processes.',
    descAr:
      'حلول عملية لإدارة العمليات والسجلات وسير العمل والأنشطة التجارية.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'invoicing',
    icon: 'FileText',
    titleEn: 'Invoicing Systems',
    titleAr: 'أنظمة الفواتير',
    descEn: 'Custom invoicing solutions for companies and retail businesses.',
    descAr: 'إنشاء أنظمة فواتير مخصصة للشركات والمحلات التجارية.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'educational-apps',
    icon: 'GraduationCap',
    titleEn: 'Educational Applications',
    titleAr: 'التطبيقات التعليمية',
    descEn:
      'Interactive educational applications that make learning more accessible and engaging.',
    descAr:
      'تطوير تطبيقات تعليمية تفاعلية تجعل التعلم أكثر سهولة ومتعة.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'ai-training',
    icon: 'Brain',
    titleEn: 'Programming & AI Training',
    titleAr: 'تدريب البرمجة والذكاء الاصطناعي',
    descEn:
      'Online and offline training in programming, artificial intelligence, and technology.',
    descAr:
      'تقديم كورسات تدريبية أونلاين وأوفلاين في البرمجة والذكاء الاصطناعي والتكنولوجيا.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'graduation-projects',
    icon: 'Trophy',
    titleEn: 'Graduation Projects',
    titleAr: 'مشاريع التخرج',
    descEn:
      'Software development support for graduation projects, including innovative solutions such as ECAAT Golf Car.',
    descAr:
      'المساعدة في تنفيذ مشاريع التخرج البرمجية، بما في ذلك الحلول المبتكرة مثل مشروع ECAAT Golf Car.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'project-management',
    icon: 'LayoutDashboard',
    titleEn: 'Project Management',
    titleAr: 'إدارة المشاريع',
    descEn:
      'Organizing and managing software projects from planning to delivery.',
    descAr:
      'إدارة وتنظيم مشروعات البرمجيات بدايةً من التخطيط وحتى التسليم.',
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 'digital-transformation',
    icon: 'Zap',
    titleEn: 'Company Setup & Digital Transformation',
    titleAr: 'تأسيس الشركات والتحول الرقمي',
    descEn:
      "Helping businesses establish their digital systems and turn their ideas into practical software products.",
    descAr:
      'مساعدة الشركات في بناء أنظمتها الرقمية وتحويل أفكارها إلى منتجات برمجية عملية.',
    color: 'from-fuchsia-500 to-violet-600',
  },
  {
    id: 'market-software',
    icon: 'TrendingUp',
    titleEn: 'Market-Oriented Software Projects',
    titleAr: 'مشاريع برمجية موجهة للسوق',
    descEn:
      'Building practical software projects based on market needs and real-world requirements.',
    descAr:
      'تنفيذ مشروعات برمجية عملية تتناسب مع احتياجات السوق ومتطلبات العمل الفعلية.',
    color: 'from-cyan-500 to-blue-600',
  },
];

export const projects = [
  {
    id: 'ecaat-golf-car',
    nameEn: 'ECAAT Golf Car',
    nameAr: 'ECAAT Golf Car',
    categoryEn: 'Graduation Project',
    categoryAr: 'مشروع تخرج',
    descEn:
      'An innovative smart golf car system developed as a graduation project. Features intelligent control, navigation, and management capabilities.',
    descAr:
      'نظام سيارة جولف ذكي مبتكر تم تطويره كمشروع تخرج. يتميز بقدرات التحكم الذكي والملاحة والإدارة.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ecaat.golfcar',
    // imageUrl: 'URL_TO_APP_ICON', // Add icon URL here
    technologies: ['Flutter', 'Dart', 'IoT', 'Android'],
    featured: true,
  },
  {
    id: 'el-faidy',
    nameEn: 'El Faidy — Fayiditoo',
    nameAr: 'الفايدي — فايديتو',
    categoryEn: 'Business App',
    categoryAr: 'تطبيق أعمال',
    descEn:
      'A comprehensive business management application designed to streamline operations and improve productivity.',
    descAr:
      'تطبيق إدارة أعمال شامل مصمم لتبسيط العمليات وتحسين الإنتاجية.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.elfaiydiyto.fayiditoo',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'Android'],
    featured: true,
  },
  {
    id: 'fithome',
    nameEn: 'FitHome',
    nameAr: 'فيت هوم',
    categoryEn: 'Health & Fitness',
    categoryAr: 'الصحة واللياقة',
    descEn:
      'A home fitness application providing workout routines, exercise guidance, and fitness tracking.',
    descAr:
      'تطبيق لياقة بدنية منزلي يوفر روتين تمارين وإرشادات وتتبع للياقة البدنية.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fhitome.wokrtou',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'Android'],
    featured: true,
  },
  {
    id: 'flow-english',
    nameEn: 'Flow English',
    nameAr: 'فلو إنجليش',
    categoryEn: 'Education',
    categoryAr: 'تعليم',
    descEn:
      'An interactive English language learning application designed to help users improve their language skills.',
    descAr:
      'تطبيق تعليمي تفاعلي لتعلم اللغة الإنجليزية مصمم لمساعدة المستخدمين على تحسين مهاراتهم اللغوية.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.eflogishn.flowenglis',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'Android'],
    featured: true,
  },
  {
    id: 'nfc-wallet',
    nameEn: 'NFC Wallet',
    nameAr: 'محفظة NFC',
    categoryEn: 'Finance & NFC',
    categoryAr: 'مالية ونقل رقمي',
    descEn:
      'A digital wallet application leveraging NFC technology for seamless contactless transactions and card management.',
    descAr:
      'تطبيق محفظة رقمية يستخدم تقنية NFC لمعاملات مالية سلسة بدون لمس وإدارة البطاقات.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dwfncwal.dnfwcacet',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'NFC', 'Android'],
    featured: false,
  },
  {
    id: 'ai-invoice',
    nameEn: 'AI Invoice',
    nameAr: 'الفاتورة الذكية',
    categoryEn: 'AI & Business',
    categoryAr: 'ذكاء اصطناعي وأعمال',
    descEn:
      'An AI-powered invoicing application that simplifies billing, invoice generation, and financial management for businesses.',
    descAr:
      'تطبيق فواتير مدعوم بالذكاء الاصطناعي يبسّط إعداد الفواتير والإدارة المالية للشركات.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ainelfaydi.ainvoice',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'AI', 'Android'],
    featured: true,
  },
  {
    id: 'sara-fit',
    nameEn: 'Sara Fit',
    nameAr: 'سارة فيت',
    categoryEn: 'Health & Fitness',
    categoryAr: 'الصحة واللياقة',
    descEn:
      'A personalized fitness application providing customized workout plans and health tracking features.',
    descAr:
      'تطبيق لياقة بدنية شخصي يقدم خطط تمرين مخصصة وميزات تتبع الصحة.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sarafit.sarafit1',
    // imageUrl: 'URL_TO_APP_ICON',
    technologies: ['Flutter', 'Dart', 'Android'],
    featured: false,
  },
  {
    id: 'egyptian-financial-broker',
    nameEn: 'Egyptian Financial Broker',
    nameAr: 'الوسيط المالي المصري',
    categoryEn: 'Web / Finance',
    categoryAr: 'ويب ومالية',
    descEn:
      'A web-based financial brokerage project designed to provide a digital platform for financial services and related business needs.',
    descAr:
      'مشروع وسيط مالي مصري يهدف إلى تقديم منصة رقمية للخدمات المالية والاحتياجات ذات الصلة.',
    websiteUrl: 'https://egbroker.web.app',
    // imageUrl: 'URL_TO_PROJECT_IMAGE',
    technologies: ['Web', 'React', 'Firebase'],
    featured: true,
  },
];

export const skills = [
  {
    categoryEn: 'Mobile Development',
    categoryAr: 'تطوير الموبايل',
    icon: 'Smartphone',
    color: 'from-violet-500 to-purple-600',
    items: ['Flutter', 'Dart', 'Android Development'],
  },
  {
    categoryEn: 'Software Engineering',
    categoryAr: 'هندسة البرمجيات',
    icon: 'Code2',
    color: 'from-blue-500 to-cyan-600',
    items: ['Software Architecture', 'Application Development', 'Business Systems', 'Custom Software Solutions'],
  },
  {
    categoryEn: 'Project & Product',
    categoryAr: 'المشاريع والمنتجات',
    icon: 'LayoutDashboard',
    color: 'from-emerald-500 to-teal-600',
    items: ['Project Management', 'Requirements Analysis', 'Graduation Projects', 'Product Development'],
  },
  {
    categoryEn: 'Education & Training',
    categoryAr: 'التعليم والتدريب',
    icon: 'GraduationCap',
    color: 'from-orange-500 to-amber-600',
    items: ['Programming Education', 'AI Training', 'Technical Mentoring'],
  },
];

export const technicalServices = [
  {
    id: 'app-upload',
    icon: '📲',
    titleEn: 'App Upload to Google Play',
    titleAr: 'رفع التطبيق على Google Play',
    descEn: 'Professional assistance with Google Play app publishing — from setup to launch.',
    descAr: 'مساعدة احترافية في نشر تطبيقك على Google Play من الإعداد حتى الإطلاق.',
    pricingEn: 'Contact for quote',
    pricingAr: 'تواصل للاستفسار',
  },
  {
    id: 'closed-testing',
    icon: '🧪',
    titleEn: 'Closed Testing',
    titleAr: 'الاختبار المغلق',
    descEn: 'Closed testing setup and support for Google Play applications.',
    descAr: 'إعداد ودعم الاختبار المغلق لتطبيقات Google Play.',
    pricingEn: 'Contact for quote',
    pricingAr: 'تواصل للاستفسار',
  },
  {
    id: 'bulk-testing',
    icon: '⭐',
    titleEn: 'Closed Testing — Previous Clients & Bulk',
    titleAr: 'اختبار مغلق — عملاء سابقون وطلبات كبيرة',
    descEn: 'Special service options for previous clients and bulk orders.',
    descAr: 'خيارات خدمة خاصة للعملاء السابقين والطلبات الكبيرة.',
    pricingEn: 'Special pricing available',
    pricingAr: 'أسعار خاصة متاحة',
  },
  {
    id: 'app-review',
    icon: '🔍',
    titleEn: 'App Review & Inspection',
    titleAr: 'مراجعة وفحص التطبيق',
    descEn: 'Application review and technical inspection to assess quality and performance.',
    descAr: 'مراجعة التطبيق وفحصه تقنيًا لتقييم الجودة والأداء.',
    pricingEn: 'Contact for quote',
    pricingAr: 'تواصل للاستفسار',
  },
  {
    id: 'bug-fixing',
    icon: '🛠️',
    titleEn: 'Bug Fixing',
    titleAr: 'إصلاح الأخطاء البرمجية',
    descEn: 'Professional bug fixing services. Price may vary based on type, complexity, and time required.',
    descAr: 'خدمات إصلاح الأخطاء البرمجية. قد يتفاوت السعر حسب نوع المشكلة وتعقيدها والوقت المطلوب.',
    pricingEn: 'Starting from — Contact for quote',
    pricingAr: 'تبدأ من — تواصل للاستفسار',
  },
  {
    id: 'bug-report',
    icon: '🐛',
    titleEn: 'Bug Report for the App',
    titleAr: 'تقرير أخطاء التطبيق',
    descEn: 'Identification and documentation of application issues and technical problems.',
    descAr: 'تحديد وتوثيق مشكلات التطبيق والمشاكل التقنية.',
    pricingEn: 'Contact for quote',
    pricingAr: 'تواصل للاستفسار',
  },
  {
    id: 'consultation',
    icon: '💡',
    titleEn: 'Technical Consultation',
    titleAr: 'الاستشارة التقنية',
    descEn: 'Expert technical guidance and consultation for your software projects and challenges.',
    descAr: 'إرشادات واستشارات تقنية متخصصة لمشاريعك البرمجية وتحدياتك التقنية.',
    pricingEn: 'Starting from — Contact for quote',
    pricingAr: 'تبدأ من — تواصل للاستفسار',
  },
  {
    id: 'google-play-console',
    icon: '🔐',
    titleEn: 'Google Play Console Assistance',
    titleAr: 'المساعدة في Google Play Console',
    descEn: 'Assistance with Google Play Console setup, account-related procedures, and account configuration.',
    descAr: 'مساعدة في إعداد Google Play Console والإجراءات المتعلقة بالحساب وتكوينه.',
    pricingEn: 'Contact for quote',
    pricingAr: 'تواصل للاستفسار',
  },
];

export const socialLinks = {
  // Add your social media links here:
  github: '',        // e.g. 'https://github.com/username'
  linkedin: '',      // e.g. 'https://linkedin.com/in/username'
  twitter: '',       // e.g. 'https://twitter.com/username'
  youtube: '',       // e.g. 'https://youtube.com/@username'
  instagram: '',     // e.g. 'https://instagram.com/username'
};
