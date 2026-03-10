interface ImageDataItem {
  src: string;
  alt: string;
  title: string;
  year: string;
  style: string;
  width: number;
  height: number;
}

interface ImageData {
  [key: string]: ImageDataItem;
}

export default ImageData;
