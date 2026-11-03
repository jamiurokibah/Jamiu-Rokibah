import { IMAGES } from '../assets/images.ts';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  includes: string[];
  suitableFor: string[];
  benefits: string[];
  turnaroundTime: string;
  fiverrGigUrl: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'beta-reading',
    number: '01',
    title: 'Beta Reading',
    subtitle: 'Comprehensive Reader Insights & Manuscript Feedback',
    shortDescription:
      'Get valuable feedback on your manuscript before publication. I provide thoughtful reader insights on plot, characters, pacing, storytelling, readability, and overall reader experience.',
    fullDescription:
      'Before presenting your book to literary agents, publishers, or readers, you need a candid, constructive, and deeply attentive eye. My beta reading service provides in-depth critique from both an avid reader’s perspective and a structural editorial standpoint. You receive a structured editorial report evaluating narrative tension, emotional resonance, plot logic, character arcs, dialogue believability, and world-building consistency.',
    image: IMAGES.betaReading,
    features: [
      'Plot logic & narrative arc assessment',
      'Character motivation & emotional resonance',
      'Pacing, chapter transitions & tension',
      'World-building & setting immersion',
      'In-line comments + comprehensive summary report',
    ],
    includes: [
      'Comprehensive 8–15+ page reader editorial critique report',
      'Chapter-by-chapter impressions log and reaction notes',
      'Pacing graph and tension analysis throughout all three acts',
      'Constructive suggestions for plot holes and character arcs',
      'Follow-up Q&A consultation to answer your specific questions',
    ],
    suitableFor: [
      'First-time authors preparing their first draft for professional eyes',
      'Self-publishing authors who want to test market readiness',
      'Writers seeking honest, constructive, unbiased feedback before querying agents',
      'Authors revising sequels or multi-character complex narratives',
    ],
    benefits: [
      'Catch plot holes and confusing transitions before paying for full line edits',
      'Gain clear confidence in what works and actionable steps for what needs revision',
      'Understand how real readers perceive your protagonist and antagonists',
      'Preserve and enhance your authentic artistic voice without judgment',
    ],
    turnaroundTime: '5 – 10 business days (based on word count)',
    fiverrGigUrl: 'https://www.fiverr.com/s/2pQQg8N',
  },
  {
    id: 'book-editing',
    number: '02',
    title: 'Book Editing',
    subtitle: 'Meticulous Line, Copy & Developmental Refinement',
    shortDescription:
      'Improve your manuscript with professional editing support. I help refine grammar, spelling, sentence structure, clarity, consistency, and readability while respecting your unique writing voice.',
    fullDescription:
      'Great writing emerges in the editing phase. My professional editing service polishes your prose to literary standards while honoring your unique authorial tone. From syntax cadence, word precision, and tone harmonization to grammar, punctuation, and structural flow, every single line is examined with patient literary care so your manuscript shines with effortless professional caliber.',
    image: IMAGES.bookEditing,
    features: [
      'Grammar, punctuation, spelling & syntax perfection',
      'Sentence rhythm, flow, and cadence polishing',
      'Clarity, conciseness, and elimination of wordiness',
      'Consistent style guide adherence (Chicago Manual of Style)',
      'Tracked changes with clear author explanatory notes',
    ],
    includes: [
      'Two full manuscript passes (clean line edit + final proofing pass)',
      'Microsoft Word Track Changes (.docx) file + clean final version',
      'Custom Style Sheet documenting character names, terminology, and formatting conventions',
      'Detailed editorial summary highlighting strengths and stylistic recommendations',
      'Respectful revisions preserving your distinctive style and genre voice',
    ],
    suitableFor: [
      'Fiction novelists across Fantasy, Romance, Sci-Fi, Mystery, and Literary genres',
      'Non-fiction authors, memoirists, and business book writers',
      'Indie authors seeking traditional publishing polish on an independent budget',
      'Non-native English authors seeking fluent, natural phrasing',
    ],
    benefits: [
      'Deliver an unputdownable reading experience free from jarring typos or awkward phrasing',
      'Elevate passive voice into vibrant, evocative action',
      'Protect your publishing reputation with rigorous quality control',
      'Learn subtle craft techniques that immediately strengthen future drafts',
    ],
    turnaroundTime: '7 – 14 business days (based on project scope)',
    fiverrGigUrl: 'https://www.fiverr.com/s/2pQQg8N',
  },
  {
    id: 'book-cover-design',
    number: '03',
    title: 'Book Cover Design',
    subtitle: 'Striking, Genre-Aligned & High-Conversion Cover Art',
    shortDescription:
      'Make a powerful first impression with attractive, professionally designed book covers that reflect your story, genre, and target audience.',
    fullDescription:
      'Readers judge books by their covers within three seconds. Your cover is your primary sales engine. I craft custom, eye-catching book covers engineered for thumbnail conversion on Amazon Kindle, Apple Books, and physical bookstore shelves. Whether you need an intricate illustrated fantasy cover, a minimalist modern thriller, or a luxury gold-embossed non-fiction jacket, each design is tailored to your exact genre expectations.',
    image: IMAGES.coverDesign,
    features: [
      'High-converting eBook thumbnail & full print wraparound (Spine + Back)',
      'Striking custom typography, titling & author brand lockup',
      'Genre-authentic color grading, lighting & atmospheric texture',
      'Amazon KDP, IngramSpark & Barnes & Noble print-ready specs',
      'Realistic 3D promotional mockups for social media marketing',
    ],
    includes: [
      'Complete Paperback & Hardcover jacket print-ready PDF (300 DPI CMYK with bleed)',
      'High-resolution eBook front cover (JPG/PNG optimized for Kindle & e-readers)',
      'Multiple 3D photorealistic book mockups for social media and website promotion',
      'Source files and commercial licensing release documentation',
      'Barcode integration and spine thickness calibration based on final page count',
    ],
    suitableFor: [
      'Self-publishing authors launching on Amazon KDP, IngramSpark, or Lulu',
      'Authors rebranding an existing backlist book for improved sales conversion',
      'Series authors seeking a unified, recognizable visual brand across volumes',
      'Publishers looking for reliable, high-end cover design partnerships',
    ],
    benefits: [
      'Instantly stand out in crowded online search results and category rankings',
      'Convey professional publishing caliber before the reader opens page one',
      'Accurately signal genre conventions to attract your true target readers',
      'Receive ready-to-use marketing graphics that boost launch-week visibility',
    ],
    turnaroundTime: '4 – 7 business days with revision rounds',
    fiverrGigUrl: 'https://www.fiverr.com/s/2pQQg8N',
  },
  {
    id: 'book-promotion',
    number: '04',
    title: 'Book Promotion',
    subtitle: 'Strategic Launch Campaigns, Social Assets & Reader Outreach',
    shortDescription:
      'Give your book greater visibility with creative promotional strategies, marketing graphics, social media content, and promotional materials designed to attract potential readers.',
    fullDescription:
      'Publishing your book is only half the journey; putting it into readers’ hands is the other. My book promotion services equip you with cohesive promotional campaign strategies, eye-catching social media graphics, captivating video teasers, and launch kits designed to capture reader curiosity and drive book sales across TikTok (#BookTok), Instagram (#Bookstagram), Facebook, and email newsletters.',
    image: IMAGES.bookPromotion,
    features: [
      'Strategic launch timelines & multi-channel campaign planning',
      'Custom BookTok / Instagram Reels video promo templates',
      'High-impact social media banner suites (Twitter, Facebook, Threads)',
      'Quote cards, character spotlights & 3D promotional render packages',
      'Compelling sales copy, blurb optimization & newsletter hook drafts',
    ],
    includes: [
      'Suite of 15+ ready-to-post branded promotional graphics & quote cards',
      'Engaging 3D animated or static book teaser visuals for BookTok/Reels',
      'Optimized book sales blurb and hook copywriting for retail pages',
      'Author media press kit template including bio, Q&A sheet, and synopsis',
      'Step-by-step launch week checklist with daily engagement strategies',
    ],
    suitableFor: [
      'Authors preparing for an upcoming book release or pre-order campaign',
      'Writers looking to revitalize sales for published backlist titles',
      'Authors wanting high-aesthetic #BookTok & #Bookstagram presence without design stress',
      'Indie authors who need ready-to-deploy promotional graphics and ad creatives',
    ],
    benefits: [
      'Save dozens of hours trying to learn graphic design and social media formatting',
      'Build sustained reader excitement and pre-orders leading into launch day',
      'Maintain a consistent, luxury visual presence across all digital platforms',
      'Maximize your return on ad spend with professional, scroll-stopping creative assets',
    ],
    turnaroundTime: '5 – 8 business days',
    fiverrGigUrl: 'https://www.fiverr.com/s/2pQQg8N',
  },
];
