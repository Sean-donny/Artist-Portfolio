interface SplitProjectDetailDataItem {
    src: string;
    alt: string;
    title: string;
    year: string;
    style: string;
    header: string;
    paragraph: string;
  }
  
interface SplitProjectDetailData {
  [key: string]: SplitProjectDetailDataItem;
}

export default SplitProjectDetailData;