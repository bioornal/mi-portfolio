
import './App.css'
import Acerca from './Components/Acerca'
import Contactos from './Components/Contactos'
import Habilidades from './Components/Habilidades'
import Head from './Components/Head'
import Pie from './Components/Pie'
import Proyectos from './Components/Proyectos'
import ScrollArriba from './Components/ScrollArriba'

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
      <main>
        <Acerca />
        <Proyectos />
        <Habilidades />
        <Contactos />
      </main>
      <ScrollArriba />
      <Pie />
    </div>
  )
}

export default App
