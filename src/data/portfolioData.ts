import { DesignerProfile, Project, Exhibition } from '../types';

export const INITIAL_PROFILE: DesignerProfile = {
  name: "Abhishek Sharma",
  monogram: "AS",
  role: "Graphic & YouTube Thumbnail Designer",
  headlineLine1: "creative",
  headlineLine2: "visuals",
  location: "India / Remote Worldwide",
  availability: "Available for High-CTR Creator Projects",
  bioSnippet: "I help top YouTubers, podcasts, and global brands skyrocket their Click-Through Rate (CTR) with high-converting thumbnails, dramatic visual storytelling, and scroll-stopping graphic design.",
  aboutIntro: "Specializing in high-converting YouTube thumbnails, podcast packaging, and viral graphic design. I combine consumer click psychology, color theory, 3D compositing, and bold typography to turn casual scrollers into loyal viewers.",
  aboutPhilosophy: [
    "A great thumbnail is the movie poster of digital media: it must convey curiosity, high production value, and extreme clarity in under 0.3 seconds.",
    "I have designed 100+ thumbnails across Finance, Podcasts, Tech, Gaming, and EdTech, generating over 50M+ combined views for leading creators worldwide."
  ],
  disciplines: [
    "YouTube Thumbnail Design",
    "High-CTR Click Psychology",
    "Podcast & Show Branding",
    "3D Compositing & Lighting FX",
    "Creator Channel Rebranding",
    "Social Media Campaign Visuals"
  ],
  stats: [
    {
      value: "50M+",
      label: "TOTAL VIEWS",
      sublabel: "Across creator channels"
    },
    {
      value: "18.4%",
      label: "PEAK CTR",
      sublabel: "Average 12-18% boost"
    },
    {
      value: "100+",
      label: "THUMBNAILS",
      sublabel: "Crafted for top creators"
    },
    {
      value: "24-48h",
      label: "TURNAROUND",
      sublabel: "Fast delivery"
    }
  ],
  email: "systummsharma23@gmail.com",
  portraitYellowBg: "https://i.ibb.co/TMmYk5fG/Whats-App-Image-2026-08-25-at-17-52-37.jpg",
  aboutMonochromePortrait: "https://i.ibb.co/TMmYk5fG/Whats-App-Image-2026-08-25-at-17-52-37.jpg",
  socials: [
    { name: "Direct Email", handle: "systummsharma23@gmail.com", url: "mailto:systummsharma23@gmail.com" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "the-money-show",
    number: "01",
    title: "The Money Show // 10M+ Views Podcast",
    subtitle: "Weekly Finance Podcast YouTube Thumbnail",
    category: "Podcasts & Finance",
    year: "2026",
    client: "The Money Show (FinEdge & GoldTrust)",
    role: "Lead Thumbnail Designer & Retoucher",
    services: ["YouTube Thumbnail Design", "Gold & Dark Lighting FX", "3D YouTube Badge", "Distressed Display Typography"],
    description: "High-impact YouTube thumbnail designed for 'The Money Show' weekly podcast. Features dramatic directional rim lighting, gold color grading, distressed block typography, and a prominent 10+ Million Views bottom banner to maximize authority and CTR.",
    brief: "Create an authoritative, high-prestige podcast thumbnail that stands out against competitors in the crowded finance & investing niche.",
    solution: "Used high-contrast monochrome studio lighting on the guest, 3D red play badge, gold gradient banner, and textured lettering to achieve an instant 16.8% CTR.",
    typography: "Impact Sans Bold & Helvetica Heavy",
    colorPalette: ["#080807", "#F5A623", "#FF0000", "#FFF275"],
    coverImage: "preset:the-money-show",
    isFeatured: true,
    accentColor: "#F5A623",
    ctrBoost: "+16.8% CTR",
    viewsGenerated: "10M+ Views",
    badgeText: "10M+ Viral Hit",
    youtubeChannel: "The Money Show Official",
    galleryImages: [
      {
        url: "preset:the-money-show",
        caption: "Final high-resolution 16:9 YouTube thumbnail master.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "zero-to-crore",
    number: "02",
    title: "0 to ₹1 Crore Story // The Dark Truth",
    subtitle: "Viral Founder Storytelling Thumbnail",
    category: "Interviews & Business",
    year: "2026",
    client: "Founder Unfiltered Podcast",
    role: "Graphic & Thumbnail Designer",
    services: ["High-Emotion Subject Framing", "Cyan Rim Lighting", "Sticker-Style Hook", "3D Rupee Typography"],
    description: "Designed for a top-tier entrepreneurial storytelling video. Emphasizes intense facial expression, dramatic split cyan studio lighting, and high-urgency yellow text paired with a curiosity-inducing 'The Dark Truth' badge.",
    brief: "Hook casual viewers scrolling through the business feed with intense curiosity and emotional tension.",
    solution: "Integrated neon cyan energy lines, deep moody shadows, studio microphone framing, and a bold yellow-on-dark color scheme that drove over 2.4 million views in 14 days.",
    typography: "Montserrat Extra Bold & Bebas Neue",
    colorPalette: ["#030608", "#00F0FF", "#FFB703", "#FFFFFF"],
    coverImage: "preset:zero-to-crore",
    isFeatured: true,
    accentColor: "#00F0FF",
    ctrBoost: "+18.2% CTR",
    viewsGenerated: "2.4M Views",
    badgeText: "18.2% CTR",
    youtubeChannel: "Founder Unfiltered",
    galleryImages: [
      {
        url: "preset:zero-to-crore",
        caption: "High-contrast visual hierarchy optimized for both mobile & desktop feeds.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "aaron-gaming",
    number: "03",
    title: "Aaron Gaming // 200 IQ Best Moment",
    subtitle: "High-Energy YouTube Gaming Thumbnail",
    category: "Gaming & Entertainment",
    year: "2026",
    client: "Aaron Gaming (650K Subs)",
    role: "Graphic Designer & Illustrator",
    services: ["Halftone Pattern Background", "3D Gameplay Angle", "Custom Emoji Assets", "Italic Display Typography"],
    description: "High-octane YouTube gaming thumbnail engineered for fast-paced viral gaming clips. Features vibrant orange-red halftone patterns, 3D angled monitor mockup, and high-visibility yellow pointer arrow.",
    brief: "Boost click rate among teenage and young-adult gaming audiences during peak streaming hours.",
    solution: "Used complementary yellow-orange warm tones, expressive shocked emojis, and bold slanted typography to create an energetic, unmissable composition.",
    typography: "Futura Extra Bold Condensed Italic",
    colorPalette: ["#FF5722", "#FFEA00", "#1C2833", "#FFFFFF"],
    coverImage: "preset:aaron-gaming",
    isFeatured: true,
    accentColor: "#FF5722",
    ctrBoost: "+16.5% CTR",
    viewsGenerated: "850K Views",
    badgeText: "Trending #4",
    youtubeChannel: "Aaron Gaming",
    galleryImages: [
      {
        url: "preset:aaron-gaming",
        caption: "Pop-art halftone aesthetic with dynamic eye-tracking flow.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "learn-coding-30-days",
    number: "04",
    title: "Learn Coding in 30 Days // 2026 Roadmap",
    subtitle: "Tech & Programming Beginner Masterclass",
    category: "Tech & Education",
    year: "2026",
    client: "CodeCraft Academy",
    role: "Visual & Thumbnail Designer",
    services: ["Glowing IDE Terminal UI", "3D Floating Python & JS Logos", "Neon Cyan Illumination", "Roadmap Checklist Card"],
    description: "Futuristic tech thumbnail built for a viral beginner coding tutorial. Utilizes glowing cyan neon typography, 3D software badges (Python, JavaScript), and a glowing code editor screen.",
    brief: "Deliver a clean, aspirational thumbnail that makes learning programming feel structured, achievable, and modern.",
    solution: "Designed a glowing IDE mockup with verified Python/JS badges and an actionable checklist that drove a 15.4% CTR.",
    typography: "SF Pro Display & JetBrains Mono",
    colorPalette: ["#020709", "#00F0FF", "#FFE873", "#387EB8"],
    coverImage: "preset:learn-coding-30-days",
    isFeatured: false,
    accentColor: "#00F0FF",
    ctrBoost: "+15.4% CTR",
    viewsGenerated: "1.2M Views",
    badgeText: "1.2M Views",
    youtubeChannel: "CodeCraft Academy",
    galleryImages: [
      {
        url: "preset:learn-coding-30-days",
        caption: "Neon cyberpunk glow with high legibility across mobile displays.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "travel-diaries",
    number: "05",
    title: "Travel Diaries // Making Peace & Sun",
    subtitle: "Aesthetic Scrapbook & Summer Vlog",
    category: "Lifestyle & Vlogs",
    year: "2026",
    client: "Wanderlust Chronicles",
    role: "Art Director & Graphic Artist",
    services: ["Scrapbook Polaroid Collage", "Torn Paper Texture", "Handwritten Font Pairing", "Warm Sunset Palette"],
    description: "An artistic, warm scrapbook-style lifestyle thumbnail. Features torn paper typography, real Polaroid frames, fresh lemon stickers, and coastal color grading.",
    brief: "Craft an authentic, non-clickbaity thumbnail that captures an aspirational summer aesthetic for travel enthusiasts.",
    solution: "Blended film photography with tactile scrapbook elements and whimsical handwriting to build high brand affinity and viewer retention.",
    typography: "Playfair Display Italic & Handwritten Script",
    colorPalette: ["#1E3A8A", "#38BDF8", "#FEF08A", "#FFFFFF"],
    coverImage: "preset:travel-diaries",
    isFeatured: false,
    accentColor: "#38BDF8",
    ctrBoost: "+13.9% CTR",
    viewsGenerated: "920K Views",
    badgeText: "Aesthetic Vlog",
    youtubeChannel: "Wanderlust Diaries",
    galleryImages: [
      {
        url: "preset:travel-diaries",
        caption: "Tactile editorial scrapbook composition with organic warmth.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "boards-95-guarantee",
    number: "06",
    title: "10th Boards: 95% Guarantee // Study Blueprint",
    subtitle: "High-Converting EdTech & Exam Prep",
    category: "EdTech & Exams",
    year: "2026",
    client: "TopperMind Prep",
    role: "Lead Thumbnail Designer",
    services: ["Shock Reaction Lighting", "Giant 3D Metric 95%", "Marksheet Document Composite", "Purple Studio Backdrop"],
    description: "High-conversion EdTech thumbnail tailored for students preparing for board exams. Highlights a massive 95% green metric and an expressive student reaction.",
    brief: "Drive massive engagement during board exam preparation season with high urgency and clear credibility.",
    solution: "Used high-contrast purple-to-green complementary colors, a simulated topper marksheet, and bold yellow headline text resulting in a massive 19.1% peak CTR.",
    typography: "Impact Bold & DIN Pro",
    colorPalette: ["#1E0A3C", "#34D399", "#FDE047", "#FFFFFF"],
    coverImage: "preset:boards-95-guarantee",
    isFeatured: true,
    accentColor: "#34D399",
    ctrBoost: "+19.1% CTR",
    viewsGenerated: "3.5M Views",
    badgeText: "19.1% Peak CTR",
    youtubeChannel: "TopperMind",
    galleryImages: [
      {
        url: "preset:boards-95-guarantee",
        caption: "High urgency educational hook engineered for student demographics.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "dont-buy-this",
    number: "07",
    title: "Don't Buy This! // 3 Big Flops Exposed",
    subtitle: "Tech Hardware Warning & Review Thumbnail",
    category: "Tech & Reviews",
    year: "2025",
    client: "Gizmo Lab Reviews",
    role: "Thumbnail Designer & 3D Compositor",
    services: ["Reverse Psychology Hook", "3D Floating Hardware", "Glowing Red Warning Cross", "Alert Triangle Badge"],
    description: "High-impact tech consumer warning thumbnail. Leverages negative curiosity psychology ('Don't Buy This!') with 3D product renders (iPhone, AirPods, MacBook) stamped with a red warning cross.",
    brief: "Stand out in the crowded tech review space by disrupting standard product review thumbnail tropes.",
    solution: "Created intense red/black dark gradient contrast with caution signage that triggered curiosity and achieved 1.8M views.",
    typography: "Bebas Neue & Montserrat Black",
    colorPalette: ["#450A0A", "#EF4444", "#FDE047", "#FFFFFF"],
    coverImage: "preset:dont-buy-this",
    isFeatured: false,
    accentColor: "#EF4444",
    ctrBoost: "+17.6% CTR",
    viewsGenerated: "1.8M Views",
    badgeText: "17.6% CTR",
    youtubeChannel: "Gizmo Lab",
    galleryImages: [
      {
        url: "preset:dont-buy-this",
        caption: "Reverse-psychology tech review packaging with high click velocity.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "how-to-start-business",
    number: "08",
    title: "How to Start Business // AI & E-commerce",
    subtitle: "Entrepreneurship Masterclass Thumbnail",
    category: "Business & Growth",
    year: "2025",
    client: "StartUp Daily India",
    role: "Graphic Designer & Retoucher",
    services: ["3D Cash Stacks Composite", "Floating App Badges (Shopify, Zomato, AI)", "Teal Studio Backdrop", "Bold Yellow Headline"],
    description: "Modern business masterclass thumbnail showcasing e-commerce and AI business models. Features 3D cash piles, branded app icons (Shopify, Zomato, ChatGPT), and an authoritative presenter pose.",
    brief: "Capture aspiring business founders with a clear visual promise of business scalability and actionable frameworks.",
    solution: "Combined recognizable brand logos with rich emerald green & gold tones, creating an instant feeling of wealth generation.",
    typography: "Anton & Helvetica Neue",
    colorPalette: ["#022C22", "#FACC15", "#E23744", "#10A37F"],
    coverImage: "preset:how-to-start-business",
    isFeatured: false,
    accentColor: "#FACC15",
    ctrBoost: "+16.8% CTR",
    viewsGenerated: "2.1M Views",
    badgeText: "2.1M Views",
    youtubeChannel: "StartUp Daily",
    galleryImages: [
      {
        url: "preset:how-to-start-business",
        caption: "High authority business packaging highlighting recognizable tech platforms.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "students-15k-month",
    number: "09",
    title: "Students: ₹15,000/Month // Zero Investment",
    subtitle: "Side Hustles & Passive Income Blueprint",
    category: "Podcasts & Finance",
    year: "2025",
    client: "EarnSmart India",
    role: "Visual & Graphic Designer",
    services: ["3D Smartphone UPI Screen Mockup", "Canva App Badge", "Glowing 3D Rupee Symbol", "Deep Forest Green Theme"],
    description: "Proof-driven financial blueprint thumbnail targeting college students. Incorporates a realistic mobile phone displaying a verified UPI '₹5,000 Payment Received' notification alongside the Canva logo.",
    brief: "Create immediate proof and high trust for a student online earning video.",
    solution: "Used verified payment notification UI elements combined with vibrant emerald green and gold luxury accents, driving over 4.2M views.",
    typography: "Proxima Nova Black & DIN",
    colorPalette: ["#022C22", "#FACC15", "#00C4CC", "#34D399"],
    coverImage: "preset:students-15k-month",
    isFeatured: true,
    accentColor: "#34D399",
    ctrBoost: "+18.9% CTR",
    viewsGenerated: "4.2M Views",
    badgeText: "4.2M Views Viral",
    youtubeChannel: "EarnSmart Hub",
    galleryImages: [
      {
        url: "preset:students-15k-month",
        caption: "Proof-driven financial composite featuring realistic mobile banking notifications.",
        aspectRatio: "wide"
      }
    ]
  },
  {
    id: "you-need-this",
    number: "10",
    title: "You Need This! // Ultimate Creator Tech",
    subtitle: "Hands-on Gadget Review & Showcase",
    category: "Tech & Reviews",
    year: "2025",
    client: "TechGear Weekly",
    role: "Thumbnail Designer",
    services: ["Marker Sticker Typography", "Neon Yellow Arrow Pointer", "Illuminated Gadget Screen", "Warm Studio Ambient Lighting"],
    description: "High-curiosity gadget review thumbnail. Features the creator presenting an illuminated micro-screen device, emphasized by hand-drawn marker typography and a bold neon yellow curved pointer arrow.",
    brief: "Create immense curiosity around a unique piece of tech hardware.",
    solution: "Used high-contrast black-on-yellow sticker text, direct eye contact, and an unmistakable directional arrow to guide viewer gaze directly to the screen.",
    typography: "Custom Marker & Syne Display",
    colorPalette: ["#15222A", "#FACC15", "#8B5CF6", "#FFFFFF"],
    coverImage: "preset:you-need-this",
    isFeatured: false,
    accentColor: "#FACC15",
    ctrBoost: "+15.8% CTR",
    viewsGenerated: "1.5M Views",
    badgeText: "1.5M Views",
    youtubeChannel: "TechGear Weekly",
    galleryImages: [
      {
        url: "preset:you-need-this",
        caption: "High curiosity hook using physical marker typography and directional arrows.",
        aspectRatio: "wide"
      }
    ]
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: "cs-1",
    number: "01",
    title: "The Money Show // 10M+ Views Milestone",
    venue: "FinEdge & GoldTrust Media Network",
    location: "Global YouTube Broadcast",
    category: "Podcasts & Finance",
    year: "2026",
    previewImage: "preset:the-money-show",
    linkText: "View Case Study",
    projectId: "the-money-show"
  },
  {
    id: "cs-2",
    number: "02",
    title: "0 to ₹1 Crore Story // 18.2% CTR Record",
    venue: "Founder Unfiltered Media",
    location: "YouTube Top Trending",
    category: "Interviews & Business",
    year: "2026",
    previewImage: "preset:zero-to-crore",
    linkText: "View Case Study",
    projectId: "zero-to-crore"
  },
  {
    id: "cs-3",
    number: "03",
    title: "Students ₹15K/Month // 4.2M Views Viral Campaign",
    venue: "EarnSmart Hub",
    location: "EdTech & Creator Ecosystem",
    category: "Finance & Side Hustles",
    year: "2025",
    previewImage: "preset:students-15k-month",
    linkText: "View Case Study",
    projectId: "students-15k-month"
  },
  {
    id: "cs-4",
    number: "04",
    title: "10th Boards 95% Guarantee // 3.5M Views Prep",
    venue: "TopperMind Academic Network",
    location: "National Exam Outreach",
    category: "EdTech & Exams",
    year: "2026",
    previewImage: "preset:boards-95-guarantee",
    linkText: "View Case Study",
    projectId: "boards-95-guarantee"
  }
];
