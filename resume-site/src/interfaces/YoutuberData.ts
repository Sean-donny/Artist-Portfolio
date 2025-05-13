export interface YoutuberDataItem {
  name: string;
  thumbnail: string;
  profilePhoto: string;
  title: string;
  views: string;
  likes: string;
  subscribers: string;
  datePosted: string;
  suggested1: string;
  suggested2: string;
  suggested3: string;
}

export interface YoutuberData {
  [key: string]: YoutuberDataItem;
}
