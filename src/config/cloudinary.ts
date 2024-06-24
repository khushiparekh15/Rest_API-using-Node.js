import {v2 as cloudinary} from 'cloudinary';
import { config } from './config';
          
cloudinary.config({ 
  cloud_name: config.cloudinary_cloud_name, 
  api_key: config.cloudinary_api_key, 
  api_secret: config.cloudinary_api_secret 

 
    // Configuration
      // cloud_name: 'dnjwmjtiu', 
      // api_key: '989929769949149', 
      // api_secret: '<your_api_secret>' 
});


export default cloudinary