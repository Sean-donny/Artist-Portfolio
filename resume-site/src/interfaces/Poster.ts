export type PosterSize = 'A4' | '16x20' | 'A2';

export interface Poster {
  slug: string;
  title: string;
  src: string;
  width: number;
  height: number;
  description: string;
  year: number;
  sizes: {
    [key in PosterSize]?: {
      price: number;
      stripePriceId: string;
      packaging: 'hard mailer' | 'mailing tube';
    };
  };
}

export interface PosterData {
  [key: string]: Poster;
}
