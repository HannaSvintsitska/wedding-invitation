import './App.css';
import Features from './features';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource-variable/montserrat';
import '@fontsource/marck-script';
import '@fontsource/pattaya';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat Variable, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div
        className="App"
        id="scrollRoot"
        onScroll={(...props: any[]) => {
          console.log(props);
        }}
      >
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
