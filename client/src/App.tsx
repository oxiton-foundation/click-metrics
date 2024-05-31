import { Route, Routes } from "react-router-dom"
import Template from "./components/navbar/template"
import { Home, Links, QrCodes, LinkInBio, Analytics, Campaigns, CustomLinks, Settings,Help } from "./components/pages/index"
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme,lightTheme} from './theme.js';
import { useState } from "react";


function App() {
  const [isDarkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
  );
  function toggleTheme() {
    const newTheme = !isDarkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme.toString());
  }
  
  const theme = useTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>    <CssBaseline />
      <Routes>
        <Route path="/" element={<Template theme={toggleTheme} />} >
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/qr" element={<QrCodes url="www.google.com" />} /> 
          <Route path="/link/in/bio" element={<LinkInBio />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/custom/links" element={<CustomLinks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
