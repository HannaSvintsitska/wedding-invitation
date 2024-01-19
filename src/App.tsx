import './App.css';
import Features from './features';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource-variable/montserrat';
import '@fontsource/marck-script';
import '@fontsource/pattaya';
import useScrollByScreen from "useScrollByScreen";

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat Variable, sans-serif',
  },
});

function App() {
    const [appRef, handleScroll] = useScrollByScreen();

  return (
    <ThemeProvider theme={customTheme}>
      <div id='app' ref={appRef} className="App" onScroll={handleScroll}>
        <Features />
      </div>
    </ThemeProvider>
  );
}

export default App;
