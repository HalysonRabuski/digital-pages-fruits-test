import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import TopBar from "./components/TopBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
