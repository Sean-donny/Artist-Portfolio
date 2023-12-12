interface ProjectDataItem {
    src: string;
    alt: string;
    title: string;
    year: string;
    style: string;
    navigate: string;
  }
  
interface ProjectData {
  [key: string]: ProjectDataItem;
}

export default ProjectData;