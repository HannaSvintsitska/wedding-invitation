import './App.css';
import Features from './features';
import {
  CircularProgress,
  ThemeProvider,
  createTheme,
  styled,
} from '@mui/material';
import '@fontsource/marck-script';
import '@fontsource/pattaya';
import useScrollByScreen from 'useScrollByScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Marck Script, sans-serif',
  },
});

const AppContainer = styled('div')(({ theme: { breakpoints } }) => ({
  [breakpoints.up('xs')]: {
    fontSize: '0.6em',
  },
  [breakpoints.up('sm')]: {
    fontSize: '0.7em',
  },
  [breakpoints.up('md')]: {
    fontSize: '1em',
  },
  [breakpoints.up('lg')]: {
    fontSize: '1em',
  },
  [breakpoints.up('xl')]: {
    fontSize: '1.3em',
  },
}));
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function App() {
  const [appRef, handleScroll] = useScrollByScreen();

  return (
    <ThemeProvider theme={customTheme}>
      <AppContainer
        id="app"
        ref={appRef}
        className="App"
        onScroll={handleScroll}
      >
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
