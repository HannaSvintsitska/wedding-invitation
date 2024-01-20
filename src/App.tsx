import './App.css';
import Features from './features';
import { ThemeProvider, createTheme, styled } from '@mui/material';
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

const AppContainer = styled('div')(({ theme: { breakpoints }}) => ({
  [breakpoints.down('sm')]: {
    fontSize: '0.3em',
  },
  [breakpoints.down('md')]: {
    fontSize: '0.6em',
  },
  [breakpoints.up('lg')]: {
    fontSize: '1.3em',
  },
}));

function App() {
  const [appRef, handleScroll] = useScrollByScreen();

  return (
    <ThemeProvider theme={customTheme}>
      <AppContainer id="app" ref={appRef} className="App" onScroll={handleScroll}>
        <Router>
          <Routes>
            <Route path="/:id" element={<Features />}></Route>
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
