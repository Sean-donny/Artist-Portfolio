// image imports
import mkbhd from '/optimised/youtuber_mkbhd.jpg';
import mkbhdProfilePhoto from '/optimised/yt_profile_photo_mkbhd.jpg';
import kyron from '/optimised/youtuber_kyron.jpg';
import kyronProfilePhoto from '/optimised/yt_profile_photo_kyron.jpg';
import intra from '/optimised/youtuber_intra.jpg';
import intraProfilePhoto from '/optimised/yt_profile_photo_intra.jpg';
import frugal from '/optimised/youtuber_frugal.jpg';
import frugalProfilePhoto from '/optimised/yt_profile_photo_frugal.jpg';
import olisunvia from '/optimised/youtuber_olisunvia.jpg';
import olisunviaProfilePhoto from '/optimised/yt_profile_photo_olisunvia.jpg';
import bliss from '/optimised/youtuber_bliss.jpg';
import blissProfilePhoto from '/optimised/yt_profile_photo_bliss.jpg';
import tomScott from '/optimised/youtuber_tom_scott.jpg';
import tomScottProfilePhoto from '/optimised/yt_profile_photo_tom_scott.jpg';
import kenijima from '/optimised/youtuber_kenijima.jpg';
import kenijimaProfilePhoto from '/optimised/yt_profile_photo_kenijima.jpg';
import fashionRoadman from '/optimised/youtuber_fashion_roadman.jpg';
import fashionRoadmanProfilePhoto from '/optimised/yt_profile_photo_fashion_roadman.jpg';
import vsauce from '/optimised/youtuber_vsauce.jpg';
import vsauceProfilePhoto from '/optimised/yt_profile_photo_vsauce.jpg';
import jasmineLe from '/optimised/youtuber_jasmine_le.jpg';
import jasmineLeProfilePhoto from '/optimised/yt_profile_photo_jasmine_le.jpg';
import unboxTherapy from '/optimised/youtuber_unbox_therapy.jpg';
import unboxTherapyProfilePhoto from '/optimised/yt_profile_photo_unbox_therapy.jpg';
import moist from '/optimised/youtuber_moist.jpg';
import moistProfilePhoto from '/optimised/yt_profile_photo_moist.jpg';
import seanDonny from '/optimised/youtuber_sean_donny.jpg';
import seanDonnyProfilePhoto from '/optimised/yt_profile_photo_sean_donny.jpg';

const YouTubersData = {
  Youtuber1: {
    name: 'Marques Brownlee',
    thumbnail: mkbhd,
    profilePhoto: mkbhdProfilePhoto,
    title: '5 Weird iPad Pro (M4) Decisions',
    views: '3.2M',
    likes: '111k',
    subscribers: '78.9M',
    datePosted: '4 days ago',
    suggested1: 'iPad Pro Review',
    suggested2: 'Robot Arm',
    suggested3: 'VR Glasses',
  },
  Youtuber2: {
    name: 'Kyron Warrick',
    thumbnail: kyron,
    profilePhoto: kyronProfilePhoto,
    title: 'some of my favourite designer pants | Balenciaga, Prada + MORE',
    views: '43K',
    likes: '1.4k',
    subscribers: '116K',
    datePosted: '1 year ago',
    suggested1: 'Balenciaga',
    suggested2: 'New Pickups',
    suggested3: 'Fashion Basics',
  },
  Youtuber3: {
    name: 'Intranet Girl',
    thumbnail: intra,
    profilePhoto: intraProfilePhoto,
    title: 'Designing my Intranet with Readymag! XOX',
    views: '24K',
    likes: '1.6k',
    subscribers: '115K',
    datePosted: '4 months ago',
    suggested1: 'Landing Pages',
    suggested2: '3D Modelling',
    suggested3: 'Molten Lava Typography',
  },
  Youtuber4: {
    name: 'Frugal Aesthetic',
    thumbnail: frugal,
    profilePhoto: frugalProfilePhoto,
    title: 'THIS STYLE TECHNIQUE CHANGED MY LIFE...',
    views: '584K',
    likes: '31k',
    subscribers: '1.53M',
    datePosted: '1 year ago',
    suggested1: 'Uniform',
    suggested2: 'Styling',
    suggested3: 'Proportions',
  },
  Youtuber5: {
    name: 'oliSUNvia',
    thumbnail: olisunvia,
    profilePhoto: olisunviaProfilePhoto,
    title:
      'when is offence justified?: analysing norms of respect & offensive content',
    views: '425K',
    likes: '27k',
    subscribers: '1.08M',
    datePosted: '4 months ago',
    suggested1: 'For You',
    suggested2: 'Video Essays',
    suggested3: 'Philosophical debates',
  },
  Youtuber6: {
    name: 'Bliss Foster',
    thumbnail: bliss,
    profilePhoto: blissProfilePhoto,
    title: 'What Happened to Streetwear?',
    views: '26K',
    likes: '1.4k',
    subscribers: '271K',
    datePosted: '5 days ago',
    suggested1: 'Streetwear',
    suggested2: 'Related Videos',
    suggested3: 'Margiela',
  },
  Youtuber7: {
    name: 'Tom Scott',
    thumbnail: tomScott,
    profilePhoto: tomScottProfilePhoto,
    title: 'Why the government drops flies on California',
    views: '2M',
    likes: '73k',
    subscribers: '6.44M',
    datePosted: '5 months ago',
    suggested1: 'Flights',
    suggested2: 'Related Videos',
    suggested3: 'Computer Science',
  },
  Youtuber8: {
    name: 'Kenijima',
    thumbnail: kenijima,
    profilePhoto: kenijimaProfilePhoto,
    title: 'office tour',
    views: '41K',
    likes: '1.5k',
    subscribers: '86K',
    datePosted: '2 months ago',
    suggested1: 'Vuja De',
    suggested2: 'Related Videos',
    suggested3: 'Issey Pleats',
  },
  Youtuber9: {
    name: 'Fashion Roadman',
    thumbnail: fashionRoadman,
    profilePhoto: fashionRoadmanProfilePhoto,
    title: 'WHY EVERYONE LOVES MUI MUI',
    views: '1.8K',
    likes: '365',
    subscribers: '121K',
    datePosted: '10 days ago',
    suggested1: 'Luxury Goods',
    suggested2: 'Related Videos',
    suggested3: 'Fashion Business',
  },
  Youtuber10: {
    name: 'Vsauce',
    thumbnail: vsauce,
    profilePhoto: vsauceProfilePhoto,
    title: 'The Banarch - Tarski Paradox',
    views: '43M',
    likes: '1M',
    subscribers: '21.7M',
    datePosted: '8 years ago',
    suggested1: 'Media Theories',
    suggested2: 'Eulers Disk',
    suggested3: 'Infinity',
  },
  Youtuber11: {
    name: 'Jasmine Le',
    thumbnail: jasmineLe,
    profilePhoto: jasmineLeProfilePhoto,
    title: `what i eat in a day 🍚 how i stay fit as someone who CANT'T cook (simple meals)`,
    views: '64K',
    likes: '5.4k',
    subscribers: '985K',
    datePosted: '5 days ago',
    suggested1: 'Lunches',
    suggested2: 'New Apartment',
    suggested3: 'GRWM Makeup',
  },
  Youtuber12: {
    name: 'Unbox Therapy',
    thumbnail: unboxTherapy,
    profilePhoto: unboxTherapyProfilePhoto,
    title: 'Unboxing the $2500 Wilson Airless Gen1 Basketball',
    views: '2.7M',
    likes: '45k',
    subscribers: '24.1M',
    datePosted: '3 months ago',
    suggested1: 'Inventions',
    suggested2: 'Gadgets',
    suggested3: 'iPhone 6 Bend Test',
  },
  Youtuber13: {
    name: 'penguinz0',
    thumbnail: moist,
    profilePhoto: moistProfilePhoto,
    title: 'They completely Ruined This Franchise',
    views: '2.1M',
    likes: '87k',
    subscribers: '15.1M',
    datePosted: '8 days ago',
    suggested1: 'The Strangers',
    suggested2: 'Related Videos',
    suggested3: 'Moist Meter',
  },
  Youtuber14: {
    name: 'Sean Donny',
    thumbnail: seanDonny,
    profilePhoto: seanDonnyProfilePhoto,
    title: 'Memories Vol. 3',
    views: '118',
    likes: '20',
    subscribers: '41',
    datePosted: '2 months ago',
    suggested1: 'Memories',
    suggested2: 'Related Videos',
    suggested3: 'Art',
  },
};

export default YouTubersData;
