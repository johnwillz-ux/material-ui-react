import './App.css';
import SideMenu from "../Component/SideMenu";
import { createMuiTheme, CssBaseline, Icon, makeStyles,ThemeProvider  } from '@material-ui/core';
import Header from '../Component/header';

import PageHeader  from "../Component/pageHeader";
import shape from '@material-ui/core/styles/shape';
import Students from '../Students/Student';


const theme = createMuiTheme({
  palette: {
    primary:{
      main:'#D88C9A',
      light:'#fff'
    },
    secondary :{
      main:'#F2D0A9',
      light: '#fff'
    },
    background:{
      default:'#FFF'
    },
    },


    shape:{
      borderRadius:'5px',
  },
  
  overrides:{
    MuiAppBar:{
      root:{
      transform:'translateZ(0)',}
    }, 
  }
})

const useStyles = makeStyles ({
  appMain:{
    paddingLeft: '320px',
    width:'100%',
  }
})

function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={theme}>
      <SideMenu/>
     
      <div className={classes.appMain}>  
      <Header/>
      

      <Students/>

                            
      </div>
      <CssBaseline/>
      </ThemeProvider>

  
  );
}

export default App;
