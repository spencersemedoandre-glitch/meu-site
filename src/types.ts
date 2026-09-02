export interface Chapter {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  estimatedMinutes: number;
  sampleExcerpt?: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  verified: boolean;
  date: string;
}

export interface Bonus {
  id: string;
  title: string;
  valueOriginal: number;
  description: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EbookConfig {
  title: string;
  titleHighlight: string;
  subtitle: string;
  author: string;
  authorBio: string;
  originalPrice: number;
  promoPrice: number;
  installmentsCount: number;
  installmentsValue: number;
  discountPercentage: number;
  checkoutUrl: string;
  guaranteeDays: number;
  salesCount: number;
  ratingScore: number;
  ratingCount: number;
  supportEmail: string;
  year: number;
  productName: string;
  coverColor: string;
  coverAccent: string;
}
