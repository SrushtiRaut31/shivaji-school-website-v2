import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MetaTags from './components/MetaTags'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Academics from './pages/Academics'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="website">
      <Loading />
      <MetaTags />
      <Navbar />
      <ScrollToTopOnRoute />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
