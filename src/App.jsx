
import './App.css'
import Acerca from './Components/Acerca'
import Head from './Components/Head'

// import Header from './components/Header/Header'
// import Projects from './components/Projects/Projects'
// import About from './components/About/About'
// import Skills from './components/Skills/Skills'
// import Contact from './components/Contact/Contact'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Head />
      {/* <Header /> */}
      <main>
        <h1>wenas</h1>
        <Acerca />
        {/* <About />
        <Projects />
        <Skills />
        <Contact /> */}
      </main>

      {/* <ScrollToTop />
      <Footer /> */}
    </div>
  )
}

export default App
