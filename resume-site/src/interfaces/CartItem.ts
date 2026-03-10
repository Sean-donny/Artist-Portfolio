import { PosterSize } from './Poster';

export interface CartItem {
  slug?: string;
  title: string;
  size: PosterSize;
  quantity: number;
  stripePriceId: string;
  price: number;
  thumbnail?: string;
}
