interface ImageDataItem {
    src: string;
    alt: string;
    title: string;
    year: string;
    style: string;
  }
  
interface ImageData {
  [key: string]: ImageDataItem;
}

export default ImageData;