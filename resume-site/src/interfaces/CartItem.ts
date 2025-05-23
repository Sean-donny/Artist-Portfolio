import { PosterSize } from './Poster';

export interface CartItem {
  title: string;
  size: PosterSize;
  quantity: number;
  stripePriceId: string;
  price: number; // optional, for displaying total in cart
}
