import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Film } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/festival', label: 'Festival' },
  { path: '/films', label: 'Films' },
  { path: '/programs', label: 'Programs' },
  { path: '/about', label: 'About' },
  { path: '/news', label: 'News' },
  { path: '/sponsor', label: 'Sponsor' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir-950/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-gold-400 flex items-center justify-center
                          group-hover:bg-gold-400/10 transition-colors">
            <Film className="w-4 h-4 text-gold-400" />
          </div>
          <div className="leading-tight">
            <span className="font-display text-lg font-bold tracking-wide text-cream block">
              PORTLAND
            </span>
            <span className="text-sm tracking-[0.3em] uppercase text-gold-400 font-medium">
              Film Festival
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-base tracking-wide transition-colors hover-underline ${
                location.pathname === link.path
                  ? 'text-gold-400'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/submit" className="ml-4 btn-primary py-2.5 px-6">
            Submit a Film
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-cream"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-noir-950/98 backdrop-blur-lg border-t border-white/5
                     transition-all duration-500 ${
          scrolled ? 'top-[52px]' : 'top-[68px]'
        } ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-lg tracking-wide border-b border-white/5 transition-colors ${
                location.pathname === link.path
                  ? 'text-gold-400'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/submit" className="btn-primary mt-6 justify-center">
            Submit a Film
          </Link>
        </div>
      </div>
    </nav>
  )
}
