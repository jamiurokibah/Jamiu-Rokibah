export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Beta Reading' | 'Book Editing' | 'Book Cover Design' | 'Book Promotion';
  isSample: true;
  sampleLabel: string;
  image: string;
  summary: string;
  details: string;
  genre: string;
  deliverables: string[];
  beforeAfter?: {
    original: string;
    revised: string;
    notes: string[];
  };
  sampleReportSummary?: {
    plotScore: string;
    pacingScore: string;
    characterScore: string;
    marketReadiness: string;
    keyRecommendation: string;
  };
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-cover-1',
    title: 'The Chronicles of Eldoria: The Lost Kingdom',
    category: 'Book Cover Design',
    isSample: true,
    sampleLabel: 'Sample Cover Showcase',
    image: '/src/assets/images/service_cover_design_1793703023606.jpg',
    genre: 'Epic Fantasy / Adventure',
    summary:
      'High-impact hardcover book cover with intricate gold foil heraldry, embossed filigree borders, and regal dark navy leather texture.',
    details:
      'Engineered specifically for high Amazon thumbnail contrast and tactile physical book presence. Included full wrap-around hardcover jacket, calibrated spine calculation, and foil stamp separation plates.',
    deliverables: [
      'Print-Ready 300 DPI CMYK PDF (Hardcover & Paperback)',
      'High-resolution eBook Cover for Kindle / Kobo / Apple Books',
      'Foil-stamping mask layer for luxury metallic print finishes',
      'Photorealistic 3D book mockup package for marketing',
    ],
  },
  {
    id: 'portfolio-edit-1',
    title: 'The Whispering Tide: Chapter II Line Edit',
    category: 'Book Editing',
    isSample: true,
    sampleLabel: 'Sample Line Editing Comparison',
    image: '/src/assets/images/service_book_editing_1793703023000.jpg',
    genre: 'Literary Suspense / Noir',
    summary:
      'Line-by-line editorial polish eliminating repetitive syntax, strengthening sensory immersion, and tightening character voice while preserving authorial flow.',
    details:
      'Demonstrates our two-pass line editing process: strengthening verbs, resolving dangling modifiers, harmonizing dialogue tags, and pacing transitions.',
    deliverables: [
      'Track Changes Word Document (.docx) with editorial commentary',
      'Clean ready-to-typeset manuscript version',
      'Custom Style Sheet for world consistency',
      'Comprehensive Editor Summary memo',
    ],
    beforeAfter: {
      original:
        'Elara stood by the edge of the dark, cold cliff and looked down at the foaming waves below that were crashing loudly against the rocks. She felt a very strong sense of fear rising up inside her chest because she knew that the secret letter in her coat pocket could ruin everything she had worked for all these years. "I can\'t do this," she said to herself in a quiet voice, wondering if anyone was following her through the dense fog.',
      revised:
        'At the cliff’s edge, Elara peered into the churning dark. Foam battered the black stone below, the roar drowning out the wind. Inside her woolen coat, the wax-sealed parchment burned against her ribs—three years of careful silence condensed into twenty damning lines. "I can’t," she whispered. Behind her, the pine fog offered no sound, only the suffocating certainty that she was no longer alone.',
      notes: [
        'Eliminated passive qualifiers ("very strong", "could ruin everything")',
        'Replaced generic narration with visceral sensory imagery ("churning dark", "black stone", "wax-sealed parchment")',
        'Enhanced emotional pacing by tightening sentence rhythms and sharpening character immediacy',
      ],
    },
  },
  {
    id: 'portfolio-beta-1',
    title: 'The Silent Shore: 14-Page Reader Critique',
    category: 'Beta Reading',
    isSample: true,
    sampleLabel: 'Sample Beta Reader Report',
    image: '/src/assets/images/service_beta_reading_1793703021968.jpg',
    genre: 'Psychological Thriller / Mystery',
    summary:
      'In-depth 14-page developmental reader report evaluating plot logic, protagonist empathy, mid-point pacing sag, and climax believability.',
    details:
      'A thorough reader analysis highlighting where early mystery foreshadowing was too overt in Chapter 4, and providing concrete craft solutions that sharpened the final plot twist.',
    deliverables: [
      '14-page Executive Reader Critique Report',
      'Chapter-by-Chapter Reaction Log with reader emotional metrics',
      'Character Arc Evaluation & Dialogue Authenticity assessment',
      'Market positioning & comps analysis (Gone Girl meets The Silent Patient)',
    ],
    sampleReportSummary: {
      plotScore: '9.2 / 10',
      pacingScore: '8.8 / 10',
      characterScore: '9.4 / 10',
      marketReadiness: 'High (Post-Act II Revision)',
      keyRecommendation:
        'Withhold the protagonist’s journal confession until Chapter 18 to amplify Act II suspense.',
    },
  },
  {
    id: 'portfolio-promo-1',
    title: 'The Golden Thread: Multi-Channel Launch Suite',
    category: 'Book Promotion',
    isSample: true,
    sampleLabel: 'Sample Promotional Campaign',
    image: '/src/assets/images/service_book_promotion_1793703024904.jpg',
    genre: 'Historical Fiction / Drama',
    summary:
      'Complete launch week marketing suite: 16 high-converting Instagram/BookTok graphics, teaser video layouts, review quote cards, and author press kit.',
    details:
      'Cohesive luxury brand campaign using rich black and gold aesthetics. Includes countdown stories, character quote reveals, and retail purchase incentive graphics.',
    deliverables: [
      '16x Multi-format social media promo templates (Feed, Stories, Reels covers)',
      'High-converting Amazon A+ Content image banners',
      'Author launch media kit PDF with synopsis, bio, and review blurbs',
      'Custom printable bookmarks and postcard promo assets',
    ],
  },
  {
    id: 'portfolio-hero-books',
    title: 'The Alchemist’s Path & Aurora’s Legacy Hardcover Series',
    category: 'Book Cover Design',
    isSample: true,
    sampleLabel: 'Sample Series Typography & Foil Mockup',
    image: '/src/assets/images/hero_books_showcase_1793703020520.jpg',
    genre: 'Literary & Historical Series',
    summary:
      'Harmonized three-volume luxury hardcover book spine and cover presentation with gold foil accents and timeless serif typesetting.',
    details:
      'Designed to look breathtaking on collectors’ bookshelves. Coordinated typography, spine width consistency across page counts, and elegant interior chapter title treatment.',
    deliverables: [
      'Full 3-volume coordinated series jacket layouts',
      'Interior title page and chapter heading ornament vector package',
      'Print-ready files with spot UV and metallic foil die lines',
      'Series launch retail mockups',
    ],
  },
  {
    id: 'portfolio-beta-2',
    title: 'Echoes of the Wild: World-Building & Magic System Review',
    category: 'Beta Reading',
    isSample: true,
    sampleLabel: 'Sample Fantasy World Audit',
    image: '/src/assets/images/service_beta_reading_1793703021968.jpg',
    genre: 'High Fantasy / World-Building',
    summary:
      'Comprehensive beta audit focusing on internal magic system consistency, linguistic naming conventions, and narrative exposition balance.',
    details:
      'Pinpointed sections with "info-dumping" in early chapters and helped the author weave lore naturally through character conflict and sensory atmosphere.',
    deliverables: [
      'World-building consistency matrix and magic rule check',
      'Pacing audit for prologue and opening three chapters',
      'Reader emotional investment scorecard across 24 chapters',
    ],
    sampleReportSummary: {
      plotScore: '9.0 / 10',
      pacingScore: '8.5 / 10',
      characterScore: '9.1 / 10',
      marketReadiness: 'Ready for Line Edit',
      keyRecommendation:
        'Transform the static prologue history into an active prologue scene showing the magical consequence firsthand.',
    },
  },
];
