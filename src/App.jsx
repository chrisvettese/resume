import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {Button, CssBaseline} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Header from "./Header";
import Skills from "./Skills";
import Work from "./Work";
import {Primary} from "./Constants";
import Projects from "./Projects";

const theme = createTheme({
  palette: {
    background: {
      default: 'dimgrey'
    }
  },
  typography: {
    body1: {
      fontSize: '12px'
    },
    h1: {
      fontSize: '35px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '23px',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '17px',
      fontWeight: 'bold',
      color: Primary
    },
    h4: {
      fontSize: '17px'
    }
  },

});

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function printDiv() {
  const printContents = document.getElementById('printable').innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

function App() {
  const classes = useStyles();

  return (
    <div style={{flexDirection: 'column'}} className={classes.center}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className={classes.center} style={{marginTop: '30px', marginBottom: '-30px'}}>
          <Button variant='contained' color='primary' onClick={() => printDiv()}>Print</Button>
        </div>
        <br/>
        <div id='printable'
             style={{width: '8.5in', height: '11in', background: 'white', margin: '50px'}}>
          <Header/>
          <Skills/>
          <Work/>
          <Projects/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
