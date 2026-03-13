// Image imports
import cmCoverDraft from '/optimised/cashmanny_cover_draft_5.webp';
import cmFinalCover from '/optimised/cashmanny_album_cover.webp';
import cmFocusrite from '/optimised/cashmanny_focusrite_model_preview.webp';
import cmCodeRain from '/optimised/cashmanny_matrix_code_rain.webp';

const higherEducationData = {
  CoverDraft: {
    src: cmCoverDraft,
    alt: 'A rough draft of the album cover with the colour scheme laid out',
    title: 'Higher Education Rough Draft',
    year: '(2025)',
    header: 'Cover Draft',
    paragraph:
      "After choosing the composition he liked, I prepared this colour/lighting layout mockup for him. This helped us imagine what the finished cover would feel like, imagine this as the blocking stage of Michelangelo's David, only until the client approves can I go all in with carving out the details.",
  },
  FinalCover: {
    src: cmFinalCover,
    alt: 'An illustrated cover of Cashmanny reaching into a portal with his personal items flying out of it, as he stands on the top of a high rise building. We observe this from a birds eye view, with some fish eye distortion, and a neon colour scheme.',
    title: 'Higher Education Album Cover',
    year: '(2025)',
    header: 'Album Cover',
    paragraph:
      'His theme colour is dominant, the high POV, his personal items, the portal symbolising his journey forwards, the easter eggs, it is perfect. I really nerded out with this project, it always brings me joy when the client trusts your vision.',
  },
  Focusrite: {
    src: cmFocusrite,
    alt: 'A 3D model of a Focusrite audio interface.',
    title: 'Focusrite 3D Model',
    year: '(2025)',
    header: '3D Modelling',
    paragraph:
      'I went 3D for the promotional video, which saw me translate his personal items into models inside the portal. I modelled a Cursor, Football, Key, Nigerian Passport, Focusrite Scarlett 2i2, CRT Monitor, an Oyster Card, some Stars, £20 notes, and sourced the Keyboard, MacBook, Briefcase and Grad Cap from SketchFab. Thanks to those amazing artists I was able to save time, because I spent nearly an entire day making the Focusrite model, and realised I would have to source some of the models to meet the delivery deadline.',
  },
  CodeRain: {
    src: cmCodeRain,
    alt: 'A Matrix code rain scene of green characters and numbers illuminated a against a black background',
    title: 'Procedural Matrix Code Rain',
    year: '(2025)',
    header: 'Procedural Matrix Code Rain',
    paragraph:
      'I am very proud of this one right here! The Matrix movie has this "Code Rain" sequence which he sent as reference, so I used it as part of the theme of the video. I did not want to use any generic Maxtrix Code Generator or stock footage, so I developed a procedural generator in Blender Geometry Nodes, that way I could use it to write the album title and move the camera around it in 3D space. The nerds probably read that and gave me a nod of approval, thank you. Big shout out to Ducky3D on YouTube, his videos were a massive aid!',
  },
};

export default higherEducationData;
