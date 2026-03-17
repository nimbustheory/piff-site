import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Submit from './pages/Submit'
import Volunteer from './pages/Volunteer'
import Sponsor from './pages/Sponsor'
import Contact from './pages/Contact'
import News from './pages/News'
import Festival from './pages/Festival'
import Films from './pages/Films'
import Programs from './pages/Programs'
import Media from './pages/Media'

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Page Not Found</h1>
        <p className="text-cream/50 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-noir-950 font-semibold tracking-wide transition-all duration-300 hover:bg-gold-300">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="film-grain min-h-screen bg-noir-950 text-cream">
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/films" element={<Films />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          <Route path="/media" element={<Media />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
