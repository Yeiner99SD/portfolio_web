import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
