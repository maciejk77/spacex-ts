import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Andale Mono',
    },
    headerStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: '10px 0',
      color: 'white',
    },
    imageStyle: {
      margin: '10px 0 0 10px',
      border: '5px solid white',
      width: 350,
      height: 350,
    },
    buttonStyle: {
      position: 'absolute',
      padding: 7,
      marginTop: 335,
      marginLeft: 255,
      textAlign: 'center',
      backgroundColor: 'white',
      width: 100,
    },
    listStyle: {
      fontFamily: 'Andale Mono',
      marginTop: '-5px',
      marginLeft: 10,
      width: 320,
      listStyle: 'none',
    },
    listItemStyle: { margin: '8px 0', color: 'white' },
    descriptionStyle: {
      marginBottom: 10,
      padding: 15,
      color: 'white',
      fontSize: 18,
      paddingRight: 40,
      paddingBottom: 20,
      width: 468,
    },
  },
  { name: 'card' }
);
