export interface ProjectImage {
  url: string;
  caption?: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
  isMonochrome?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  services: string[];
  description: string;
  brief?: string;
  solution?: string;
  typography?: string;
  colorPalette?: string[];
  coverImage: string;
  galleryImages: ProjectImage[];
  isFeatured?: boolean;
  accentColor?: string;
  ctrBoost?: string;
  viewsGenerated?: string;
  badgeText?: string;
  youtubeChannel?: string;
}

export interface Exhibition {
  id: string;
  number: string;
  title: string;
  venue: string;
  location: string;
  category: string;
  year: string;
  previewImage: string;
  linkText?: string;
  projectId?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  iconName?: string;
}

export interface DesignerProfile {
  name: string;
  monogram: string;
  role: string;
  headlineLine1: string;
  headlineLine2: string;
  location: string;
  availability: string;
  bioSnippet: string;
  aboutIntro: string;
  aboutPhilosophy: string[];
  disciplines: string[];
  stats: StatItem[];
  email: string;
  portraitYellowBg: string;
  aboutMonochromePortrait: string;
  socials: SocialLink[];
}
