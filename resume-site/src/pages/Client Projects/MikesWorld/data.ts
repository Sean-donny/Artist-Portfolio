import mkSketch from '/optimised/mikeswrld_sketch.jpg';
import mkAlbumCover from '/optimised/mikeswrld_album_cover.jpg';
import mkTracklist from '/optimised/mikeswrld_tracklist.jpg';

const mkWrldData = {

    SketchedCover : {
        src: mkSketch,
        alt: "A sketch of the Mike's World album cover",
        title: "Mike's World Album Cover Sketch",
        year: '(2022)',
        header: "Album Cover Sketch",
        paragraph: '',
    },
    AlbumCover : {
        src: mkAlbumCover,
        alt: "An album cover Mike holding the world in the palms of his hands",
        title: "Mike's World Album Cover",
        year: '(2022)',
        header: 'Album Cover',
        paragraph: "The final cover depicts Mike surrounded by a dense, starry galaxy, complemented by analogous pinkish-purple nebulae that harmonize with his red theme.",
    },
    TracklistCover : {
        src: mkTracklist,
        alt: "A tracklist for the album Mike's World",
        title: "Mike's World Album Tracklist",
        year: '(2022)',
        header: 'Tracklist',
        paragraph: "The tracklist follows the starry galaxy theme, featuring roses cascading alongside the seven tracks.",
    },


}

export default mkWrldData