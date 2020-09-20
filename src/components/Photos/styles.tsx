import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    activePhotoStyle: {
      border: '5px solid lightsalmon',
    },
    galleryStyle: {
      marginTop: 5,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    photoStyle: {
      border: '3px solid white',
      margin: 3,
    },
    activeThumbnailStyle: {
      border: '3px solid lightsalmon',
      margin: 3,
    },
  },
  { name: 'photos' }
);
