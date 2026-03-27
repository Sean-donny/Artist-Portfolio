//image imports

//A4
import A4Tyla from '/optimised/a4_tyla.webp';
import A4Teenx from '/optimised/a4_teenx.webp';
import A4Santi from '/optimised/a4_santi.webp';
import A4Rocky from '/optimised/a4_rocky.webp';
import A4Rema from '/optimised/a4_rema.webp';
import A4Lauryn from '/optimised/a4_lauryn.webp';
import A4Igormaniac from '/optimised/a4_igormaniac.webp';
import A4Frank from '/optimised/a4_frank.webp';
import A4Doom from '/optimised/a4_doom.webp';
import A4Asake from '/optimised/a4_asake.webp';

//A2
import A2Subaru from '/optimised/a2_subaru.webp';
import A2Rrrocky from '/optimised/a2_rrrocky.webp';
import A2Ashley from '/optimised/a2_ashley.webp';

//16x20
import sixteenByTwentyTyler from '/optimised/16x20_tyler.webp';
import sixteenByTwentySubaruBoy from '/optimised/16x20_subaru_boy.webp';
import sixteenByTwentySpideryachty from '/optimised/16x20_spideryachty.webp';
import sixteenByTwentyHoodieGurl from '/optimised/16x20_hoodie_gurl.webp';
import sixteenByTwentyFashionRoadman from '/optimised/16x20_fashion_roadman.webp';
import sixteenByTwentyCenchBlack from '/optimised/16x20_cench_black.webp';
import sixteenByTwentyBoatBoy from '/optimised/16x20_boat_boy.webp';

import sixteenByTwentyAyraStarr from '/optimised/16x20_ayra_starr.webp';
import sixteenByTwentyBolaBaddie from '/optimised/16x20_bola_baddie.webp';
import sixteenByTwentyBxks from '/optimised/16x20_bxks.webp';
import sixteenByTwentyHobie from '/optimised/16x20_hobie_brown.webp';
import sixteenByTwentyLucki from '/optimised/16x20_lucki.webp';
import sixteenByTwentyOlandria from '/optimised/16x20_olandria.webp';
import sixteenByTwentyOrthodontistVisit from '/optimised/16x20_orthodontist_visit.webp';
import sixteenByTwentyFancyThat from '/optimised/16x20_pinkpantheress_fancy_that.webp';
import sixteenByTwentyStateside from '/optimised/16x20_pinkpantheress_stateside.webp';
import sixteenByTwentyPurpleHeart from '/optimised/16x20_purple_heart.webp';
import sixteenByTwentyOyoOyo from '/optimised/16x20_rema_oyo_oyo.webp';
import sixteenByTwentyRemaPsd from '/optimised/16x20_rema_psd.webp';
import sixteenByTwentySayCheese from '/optimised/16x20_say_cheese.webp';
import sixteenByTwentyShocked from '/optimised/16x20_shocked.webp';
import sixteenByTwentySkepta from '/optimised/16x20_skepta.webp';
import sixteenByTwentyTems from '/optimised/16x20_tems.webp';
import sixteenByTwentyTheGrinch from '/optimised/16x20_the_grinch.webp';

import { Poster } from '../../interfaces/Poster';

const STRIPE_PRICE_IDS = {
  A4: 'price_1RRtF0HH4untY4LMD38DDpYu',
  '16x20': 'price_1RRtFeHH4untY4LMrMjQZr0M',
  A2: 'price_1RRtGMHH4untY4LMqCwPW1N5',
};

const richPosterData: Record<string, Poster> = {
  //A4
  tyla: {
    slug: 'tyla',
    title: 'Tyla',
    src: A4Tyla,
    width: 818,
    height: 1158,
    description: 'A beautiful portrait of Tyla against a pink bouquet.',
    year: 2024,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  teenx: {
    slug: 'teenx',
    title: 'Teenx',
    src: A4Teenx,
    width: 818,
    height: 1158,
    description: 'An illustration of Ken Carson, fitted up with his xman belt.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  santi: {
    slug: 'santi',
    title: 'Santi',
    src: A4Santi,
    width: 818,
    height: 1158,
    description: 'An illustration of Cruel Santino with Kuromi.',
    year: 2021,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  rocky: {
    slug: 'rocky',
    title: 'Rocky',
    src: A4Rocky,
    width: 818,
    height: 1158,
    description: 'An illustration of A$AP Rocky showing all smiles :)',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  rema: {
    slug: 'rema',
    title: 'Rema',
    src: A4Rema,
    width: 818,
    height: 1158,
    description: 'An illustration of Rema the Raver, with punching gloves.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  lauryn: {
    slug: 'lauryn',
    title: 'Lauryn',
    src: A4Lauryn,
    width: 818,
    height: 1158,
    description: 'A radiant portrait of Ms. Lauryn Hill smiling gleefully.',
    year: 2024,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  igormaniac: {
    slug: 'igormaniac',
    title: 'Igormaniac',
    src: A4Igormaniac,
    width: 818,
    height: 1158,
    description:
      'A portrait of IGOR against a pink backdrop, referencing Tyler, The Creator’s 2019 LP.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  frank: {
    slug: 'frank',
    title: 'Frank',
    src: A4Frank,
    width: 818,
    height: 1158,
    description:
      'A portrait of Frank Ocean, looking seemingly jaded with his right eye obscured—referencing the 1964 René Magritte painting "The Son of Man".',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  doom: {
    slug: 'doom',
    title: 'Doom',
    src: A4Doom,
    width: 818,
    height: 1158,
    description:
      'A manacing portrait of MFDOOM, referencing his Madvillainy era.',
    year: 2021,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  asake: {
    slug: 'asake',
    title: 'Asake',
    src: A4Asake,
    width: 818,
    height: 1158,
    description:
      'An illustration of Asake—Mr.Money—walking down the runway in full S/S 23 Mowalola.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  //A2
  subaru: {
    slug: 'subaru',
    title: 'Subaru',
    src: A2Subaru,
    width: 816,
    height: 1158,
    description:
      'An illustration of the Subaru Boy, surrounded with graffiti referencing tracks and themes surrounding the Final Heaven album.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  rrrocky: {
    slug: 'rrrocky',
    title: 'RRRocky',
    src: A2Rrrocky,
    width: 816,
    height: 1158,
    description:
      'An anatomy lesson of a portrait of the "DON’T BE DUMB" rapper—A$AP Rocky—showing of his grillz.',
    year: 2025,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  ashley: {
    slug: 'ashley',
    title: 'Ashley',
    src: A2Ashley,
    width: 816,
    height: 1158,
    description:
      'A portrait of Ashley Okoli embracing the ever calling warmth of the light.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  //16x20
  tyler: {
    slug: 'tyler',
    title: 'Tyler',
    src: sixteenByTwentyTyler,
    width: 926,
    height: 1158,
    description:
      'A portrait of Tyler Baudelaire, remember to call me if you get lost.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  subaru_boy: {
    slug: 'subaru_boy',
    title: 'Subaru Boy',
    src: sixteenByTwentySubaruBoy,
    width: 926,
    height: 1158,
    description:
      'An illustration of Cruel Santino sporting a camo jacket in true Subaru Boy fashion.',
    year: 2022,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  spideryachty: {
    slug: 'spideryachty',
    title: 'Spideryachty',
    src: sixteenByTwentySpideryachty,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty inspired by Miles from Spider-Man: Across The Spiderverse.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  hoodie_gurl: {
    slug: 'hoodie_gurl',
    title: 'Hoodie Gurl',
    src: sixteenByTwentyHoodieGurl,
    width: 926,
    height: 1158,
    description: 'A beautiful portrait of a girl in a hoodie.',
    year: 2024,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  fashion_roadman: {
    slug: 'fashion_roadman',
    title: 'Fashion Roadman',
    src: sixteenByTwentyFashionRoadman,
    width: 1158,
    height: 926,
    description:
      'A hyper-abstracted portrait of Ọdúnayọ̀ (Ayọ̀) Òjó experimenting with new style themes, drawing inspiration from Jean-Michel Basquiat.',
    year: 2024,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  cench: {
    slug: 'cench',
    title: 'Cench',
    src: sixteenByTwentyCenchBlack,
    width: 926,
    height: 1158,
    description:
      'A portrait of Central Cee crowned in Union Jack braids, against a dark backdrop embellished in chrome graffiti.',
    year: 2025,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },

  // Adding New posters to store
  ayra_starr: {
    slug: 'ayra_starr',
    title: 'Sabi Girl',
    src: sixteenByTwentyAyraStarr,
    width: 926,
    height: 1158,
    description: 'A portrait of Ayra Starr.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
  boat_boy: {
    slug: 'boat_boy',
    title: 'Boat Boy',
    src: sixteenByTwentyBoatBoy,
    width: 926,
    height: 1158,
    description:
      'A portrait of Lil Yachty set in a forest, referencing the "Virginia Creeper" title to Raf Simmons’ 2002 Fall collection.',
    year: 2023,
    sizes: {
      A4: {
        price: 14.99,
        stripePriceId: STRIPE_PRICE_IDS.A4,
        packaging: 'hard mailer',
      },
      '16x20': {
        price: 24.99,
        stripePriceId: STRIPE_PRICE_IDS['16x20'],
        packaging: 'mailing tube',
      },
      A2: {
        price: 29.99,
        stripePriceId: STRIPE_PRICE_IDS.A2,
        packaging: 'mailing tube',
      },
    },
  },
};

export default richPosterData;
