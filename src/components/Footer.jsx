import { Link } from 'react-router-dom'
import { Film, MapPin, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-noir-950 border-t border-white/5">
      {/* Sprocket divider */}
      <div className="divider-sprocket" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border-2 border-gold-400 flex items-center justify-center">
                <Film className="w-4 h-4 text-gold-400" />
              </div>
              <div className="leading-tight">
                <span className="font-display text-lg font-bold tracking-wide block">PORTLAND</span>
                <span className="text-sm tracking-[0.3em] uppercase text-gold-400 font-medium">
                  Film Festival
                </span>
              </div>
            </Link>
            <p className="text-cream/50 text-base leading-relaxed mb-4">
              A 501(c)(3) non-profit dedicated to supporting independent voices
              and nurturing filmmakers and their audiences since 2009.
            </p>
            <p className="text-gold-400 font-display italic text-base">
              "Support Independent Voices"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: '/festival', label: '2026 Festival' },
                { to: '/films', label: 'Film Gallery' },
                { to: '/programs', label: 'Programs' },
                { to: '/about', label: 'Our Mission' },
                { to: '/news', label: 'In the News' },
                { to: '/submit', label: 'Submit a Film' },
                { to: '/volunteer', label: 'Volunteer' },
                { to: '/sponsor', label: 'Sponsor' },
                { to: '/media', label: 'Media Resources' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/60 hover:text-gold-400 text-base transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Festival Info */}
          <div>
            <h4 className="text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-5">2026 Festival</h4>
            <div className="space-y-4 text-base">
              <div>
                <p className="text-cream/80 font-medium">September 30 – October 4, 2026</p>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-cream/60 leading-relaxed">
                  CNAC Center for Native Arts & Culture<br />
                  800 S.E. 10th Ave. at Belmont St.<br />
                  Portland, Oregon
                </p>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-cream/60 leading-relaxed">
                  Mailing: 1126 NW Marshall St.<br />
                  Portland, OR 97209
                </p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-5">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://portlandfilm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold-400 text-base transition-colors"
              >
                portlandfilm.org <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://instagram.com/portlandfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold-400 text-base transition-colors"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://twitter.com/portlandfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold-400 text-base transition-colors"
              >
                Twitter / X <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://facebook.com/portlandfilmfestival"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold-400 text-base transition-colors"
              >
                Facebook <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://youtube.com/@portlandfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold-400 text-base transition-colors"
              >
                YouTube <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-8">
              <Link to="/submit" className="btn-primary py-2.5 px-5">
                Submit a Film
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} Portland Film Festival. All Rights Reserved.
          </p>
          <p className="text-cream/30 text-sm font-mono">
            #PortlandFilmFestival #PDXFilm #IndieFilm
          </p>
        </div>
      </div>
    </footer>
  )
}
