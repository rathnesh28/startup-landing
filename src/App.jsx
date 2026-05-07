import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`landing-page ${theme === 'dark' ? 'theme-dark-violet' : ''}`}>
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
        }
      />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Contact />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
