export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export const BRAND_CONFIG = {
  name: 'RashReader',
  tagline: 'Your Story Deserves to Be Read, Refined & Remembered.',
  subtitle: 'Helping authors transform their manuscripts into polished, professional, and beautifully presented books through expert beta reading, book editing, cover design, and book promotion.',
  email: 'rashreader677@gmail.com',
  fiverrUrl: 'https://www.fiverr.com/s/2pQQg8N',
  copyright: '© 2026 RashReader. All Rights Reserved.',
  socials: [
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/s/2pQQg8N',
      icon: 'fiverr',
      handle: 'rashreader',
      primary: true,
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/rasheedex111',
      icon: 'twitter',
      handle: '@rasheedex111',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@rashreader111',
      icon: 'tiktok',
      handle: '@rashreader111',
    },
    {
      name: 'Facebook',
      url: 'https://www.fb.com/l/6lp1kJRRR',
      icon: 'facebook',
      handle: 'RashReader Services',
    },
    {
      name: 'Discord',
      url: 'https://discord.com/channels/@me/1558876857758130236',
      icon: 'discord',
      handle: 'RashReader Author Hub',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/',
      icon: 'threads',
      handle: '@rashreader',
    },
  ],
  navLinks: [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ],
  palette: {
    black: '#000000',
    white: '#FFFFFF',
    luxuryGold: '#D4AF37',
    darkCharcoal: '#151515',
    softGold: '#C5A253',
  },
};
