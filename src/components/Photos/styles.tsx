import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    activePhotoStyle: {
      border: `5px solid ${theme.themeColour3}`,
    },
    galleryStyle: {
      marginTop: 5,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    photoStyle: {
      border: `3px solid ${theme.baseColour}`,
      margin: 3,
    },
    activeThumbnailStyle: {
      border: `3px solid ${theme.themeColour3}`,
      margin: 3,
    },
  }),
  { name: 'photos' }
);
