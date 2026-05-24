export interface PortfolioItem {
  id: string;
  imageUrl: string;
  category: 'long' | 'short' | 'design';
  categoryLabel: string;
  title: string;
  description: string;
}

export interface PriceItem {
  name: string;
  price: number;
  description?: string;
  length?: number;
}

export interface PriceCategory {
  title: string;
  description?: string;
  items: PriceItem[];
  note?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  service: string;
}
