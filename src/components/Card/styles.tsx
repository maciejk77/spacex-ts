import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.themeFonts,
    },
    headerStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: '10px 0',
      color: theme.baseColour,
    },
    imageStyle: {
      margin: '10px 0 0 10px',
      border: `5px solid ${theme.baseColour}`,
      width: 350,
      height: 350,
    },
    buttonStyle: {
      position: 'absolute',
      padding: 7,
      marginTop: 335,
      marginLeft: 255,
      textAlign: 'center',
      backgroundColor: theme.baseColour,
      width: 100,
    },
    listStyle: {
      fontFamily: theme.themeFonts,
      marginTop: '-5px',
      marginLeft: 10,
      width: 320,
      listStyle: 'none',
    },
    listItemStyle: { margin: '8px 0', color: theme.baseColour },
    descriptionStyle: {
      marginBottom: 10,
      padding: 15,
      color: theme.baseColour,
      fontSize: 18,
      paddingRight: 40,
      paddingBottom: 20,
      width: 468,
    },
  }),
  { name: 'card' }
);
