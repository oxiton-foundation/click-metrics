import { Route, Routes } from "react-router-dom"
import Template from "./components/navbar/template"
import { Home, Links, QrCodes, LinkInBio, Analytics, Campaigns, CustomLinks, Settings } from "./components/pages/index"
import { ThemeProvider } from 'next-themes';
import Landing from "./landing/Landing"


function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Template />} >
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/qr" element={<QrCodes />} />
          <Route path="/link/in/bio" element={<LinkInBio />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/custom/links" element={<CustomLinks />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes> */}

    
<ThemeProvider attribute="class">
      <div>
        <main className="mt-16 p-4">
          <Landing />
        </main>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
