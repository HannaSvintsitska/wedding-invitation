import './App.css';
import Features from './features';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource-variable/montserrat';
import '@fontsource/marck-script';
import '@fontsource/pattaya';
import useScrollByScreen from 'useScrollByScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat Variable, sans-serif',
  },
});

function App() {
  const [appRef, handleScroll] = useScrollByScreen();

  return (
    <ThemeProvider theme={customTheme}>
      <div id="app" ref={appRef} className="App" onScroll={handleScroll}>
        <Router>
          <Routes>
            <Route path="/:id" element={<Features />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
