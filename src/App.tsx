import './App.css';
import Features from './features';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource-variable/montserrat';
import '@fontsource/marck-script';
import '@fontsource/pattaya';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat Variable, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Features />
      </div>
    </ThemeProvider>
  );
}

export default App;
