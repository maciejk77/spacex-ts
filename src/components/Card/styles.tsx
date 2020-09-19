import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    container: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Andale Mono',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: '10px 0',
    },
    image: {
      margin: '10px 0 0 10px',
      border: '5px solid white',
      width: 350,
      height: 350,
    },
    button: {
      position: 'absolute',
      padding: 7,
      marginTop: 335,
      marginLeft: 255,
      textAlign: 'center',
      backgroundColor: 'white',
      width: 100,
    },
    list: {
      marginTop: '-5px',
      backgroundColor: 'white',
      marginLeft: 10,
      width: 320,
      listStyle: 'none',
    },
    listItem: { margin: '5px 0' },
    text: {
      fontSize: 15,
      paddingRight: 40,
      paddingBottom: 20,
    },
  },
  { name: 'card' }
);
