import Header from "./Header";
import Skills from "./Skills";
import Work from "./Work";
import { Primary } from "./Constants";
import Projects from "./Projects";
import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "dimgrey",
    },
  },
  typography: {
    body1: {
      fontSize: "12.5px",
    },
    h1: {
      fontSize: "35px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "23px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "17px",
      fontWeight: "bold",
      color: Primary,
    },
    h4: {
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
});

function printDiv() {
  const printContents = document.getElementById("printable").innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

function App() {
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "-30px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => printDiv()}
          >
            Print
          </Button>
        </Box>
        <br />
        <Box
          id="printable"
          sx={{
            width: "8.5in",
            height: "11in",
            background: "white",
            m: "50px",
          }}
        >
          <Header />
          <Skills />
          <Work />
          <Projects />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
