import { useState } from 'react'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Topbar from './components/Topbar/Topbar'
import Works from './components/Works/Works'
import Menu from './components/menu/menu'

import './app.scss'


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen} 
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
