import NavigationMap from '../../interfaces/NavigationMap';

const navigationMap: NavigationMap = {
  YouTubers: {
    currentSrc: 'personal-projects/youtubers',
    previousSrc: 'personal-projects/mowalola',
    previousTitle: `Mowalola`,
    nextSrc: 'personal-projects/animation-project',
    nextTitle: 'Animation Project',
    navColour: 'bg-red-600',
  },
  AnimationProject: {
    currentSrc: 'personal-projects/animation-project',
    previousSrc: 'personal-projects/mikes-world',
    previousTitle: `Mike's World`,
    nextSrc: 'personal-projects/subaru-boy',
    nextTitle: 'Subaru Boy',
    navColour: 'bg-pink-600',
  },
  SubaruBoy: {
    currentSrc: 'personal-projects/subaru-boy',
    previousSrc: 'personal-projects/mikes-world',
    previousTitle: `Mike's World`,
    nextSrc: 'personal-projects/music',
    nextTitle: 'Music',
    navColour: 'bg-orange-600',
  },
  Music: {
    currentSrc: 'personal-projects/music',
    previousSrc: 'personal-projects/mikes-world',
    previousTitle: `Mike's World`,
    nextSrc: 'personal-projects/mowalola',
    nextTitle: 'Mowalola',
    navColour: 'bg-red-600',
  },
  Mowalola: {
    currentSrc: 'personal-projects/mowalola',
    previousSrc: 'personal-projects/mikes-world',
    previousTitle: `Mike's World`,
    nextSrc: 'personal-projects/youtubers',
    nextTitle: 'YouTubers',
    navColour: 'bg-red-600',
  },
};

export default navigationMap;
