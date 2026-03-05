interface NavigationMapItem {
  currentSrc: string;
  previousSrc: string;
  previousTitle: string;
  nextSrc: string;
  nextTitle: string;
  navColour: string;
}

interface NavigationMap {
  [key: string]: NavigationMapItem;
}

export default NavigationMap;
