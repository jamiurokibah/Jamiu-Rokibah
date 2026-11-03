export interface TestimonialItem {
  id: string;
  isPlaceholder: boolean;
  authorName: string;
  authorRole: string;
  bookTitle: string;
  serviceReceived: 'Beta Reading' | 'Book Editing' | 'Book Cover Design' | 'Book Promotion';
  reviewExcerpt: string;
  fullReview: string;
  rating: number;
  avatarPlaceholder: string;
}

export const TESTIMONIALS_CONFIG = {
  sectionTitle: 'What Authors Say',
  sectionSubtitle:
    'Dedicated to delivering meticulous care, literary insight, and creative excellence for every author.',
  placeholderNotice:
    'Note: The entries below are clearly marked sample testimonial placeholders demonstrating layout and formatting until genuine client reviews are uploaded.',
  items: [
    {
      id: 'testimonial-placeholder-1',
      isPlaceholder: true,
      authorName: '[Author Name Placeholder]',
      authorRole: 'Indie Fantasy Novelist',
      bookTitle: 'Sample Book Title I',
      serviceReceived: 'Beta Reading' as const,
      rating: 5,
      avatarPlaceholder: 'A.R.',
      reviewExcerpt:
        '“The beta reading feedback was profoundly insightful. Every plot hole was illuminated with constructive solutions that transformed my manuscript into a page-turner.”',
      fullReview:
        '“The beta reading feedback provided by RashReader was profoundly insightful. Rather than generic praise, I received a rigorous 14-page critique detailing exact pacing sags, character motivations, and dialogue polish. It gave me the precise roadmap I needed before going to publication.”',
    },
    {
      id: 'testimonial-placeholder-2',
      isPlaceholder: true,
      authorName: '[Author Name Placeholder]',
      authorRole: 'Historical Fiction Author',
      bookTitle: 'Sample Book Title II',
      serviceReceived: 'Book Editing' as const,
      rating: 5,
      avatarPlaceholder: 'M.K.',
      reviewExcerpt:
        '“Incredible attention to detail. My writing voice was completely preserved while sentence rhythms and syntax were polished to literary publishing standards.”',
      fullReview:
        '“Finding an editor who respects your distinctive voice while catching every subtle grammatical nuance is rare. RashReader elevated my prose with surgical precision, offering thoughtful tracked changes and a custom style sheet that made my final manuscript shine.”',
    },
    {
      id: 'testimonial-placeholder-3',
      isPlaceholder: true,
      authorName: '[Author Name Placeholder]',
      authorRole: 'Sci-Fi & Thriller Creator',
      bookTitle: 'Sample Book Title III',
      serviceReceived: 'Book Cover Design' as const,
      rating: 5,
      avatarPlaceholder: 'S.T.',
      reviewExcerpt:
        '“The book cover design exceeded all my expectations. The typography and gold foil styling immediately captured my genre and jumped off the digital shelf.”',
      fullReview:
        '“The cover art RashReader created became the primary reason my pre-order campaign succeeded. The attention to thumbnail legibility, print wrap-around bleed dimensions, and 3D promotional assets made the entire launch process seamless.”',
    },
    {
      id: 'testimonial-placeholder-4',
      isPlaceholder: true,
      authorName: '[Author Name Placeholder]',
      authorRole: 'Debut Romance Author',
      bookTitle: 'Sample Book Title IV',
      serviceReceived: 'Book Promotion' as const,
      rating: 5,
      avatarPlaceholder: 'E.V.',
      reviewExcerpt:
        '“The promotional campaign assets and BookTok graphics gave my book launch an instant professional edge that captivated readers from day one.”',
      fullReview:
        '“I felt overwhelmed trying to market my debut book until I partnered with RashReader. The promotional suite, quote cards, and social media teasers were gorgeously on-brand, cohesive, and easy to deploy across all my channels.”',
    },
  ],
};
