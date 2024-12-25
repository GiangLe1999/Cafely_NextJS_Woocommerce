export interface SearchedProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  regular_price: string;
  sale_price?: string;
  average_rating: string;
  rating_count: number;
}

export interface SearchedPost {
  id: number;
  title: string;
  thumbnail: string;
  slug: string;
  excerpt: string;
}
