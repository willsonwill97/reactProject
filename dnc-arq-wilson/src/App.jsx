
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

// pages 

import Home from './pages/Home'
import About from './pages/about'
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'
import Projects from './pages/projects'
import Contact from './pages/contact'

//UTILS 
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route  path="/about" element= {<About />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element= {<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
