export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export interface TeamInfo {
  name: string;
  slogan: string;
  subSlogan: string;
  question: string;
  introLines: string[];
  motto: string;
  vision: string;
  instagramHandle: string;
  instagramUrl: string;
  ctaHeading: string;
  ctaButtonText: string;
  ctaSubtext: string;
  footerBrand: string;
  footerPillars: string;
}

export type ViewMode = 'interactive' | 'instagram-post' | 'story-format' | 'presentation-slide';
