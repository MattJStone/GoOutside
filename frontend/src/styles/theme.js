import React from 'react';

// import lightBaseTheme from 'material-ui-next/styles/baseThemes/lightBaseTheme';
import { MuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import Teal from 'material-ui-next/colors/teal';
import Grey from 'material-ui-next/colors/grey';

/*
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
*/

const theme = createMuiTheme({

    palette: {
        primary: {
          light: '#b5ffff',
          main: '#80d8ff',
          dark: '#49a7cc',
          contrastText: '#fff',
        },
    },
});


const Theme = props => (
  <MuiThemeProvider theme={theme}>
    { props.children }
  </MuiThemeProvider>
);

export default Theme;
