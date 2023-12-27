import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({cloud: {cloudName: import.meta.env.VITE_CLOUDINARY_CLOUDNAME}});
  
export default cld;