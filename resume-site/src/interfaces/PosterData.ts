export interface PosterData {
  [key: string]: PosterDataItem;
}

export interface PosterDataItem {
  src: string;
  title: string;
  width: number;
  height: number;
}
