import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Home from './Home.js'
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Experience from './Experience.js';
import Projects from './Projects.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline>
            <BrowserRouter>
                <Routes>
                <Route path="/Portfolio" element={<div><ResponsiveAppBar /><Outlet /></div>}>
                    <Route index element={<Home />} />
                    <Route path="Experience" element={<Experience />} />
                    <Route path="Projects" element={<Projects />} />
                </Route>
                <Route path="*" element={<div>PAGE NOT FOUND</div>} />
                </Routes>
            </BrowserRouter>
        </CssBaseline>
    </ThemeProvider>
    );
}

export default App;
