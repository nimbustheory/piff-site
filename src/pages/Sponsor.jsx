import { Link } from 'react-router-dom'
import {
  Heart, Users, Globe, Megaphone, Building2, ArrowUpRight,
  ArrowRight, Eye, GraduationCap
} from 'lucide-react'
import { PageHero, SectionHeading, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'

const reasons = [
  { icon: Eye, title: 'Brand Visibility', desc: 'Your brand front and center to a passionate, engaged audience of film lovers and creatives.' },
  { icon: Users, title: 'Community Impact', desc: 'Contribute to Portland\'s film community and nurture the ecosystem of creativity.' },
  { icon: Globe, title: 'National Reach', desc: '30M+ subscriber reach through our Comcast NBC/Universal partnership.' },
  { icon: GraduationCap, title: 'Education', desc: 'Support the Future Filmmakers program and youth film education workshops.' },
  { icon: Megaphone, title: 'Media Exposure', desc: 'Featured in press coverage, social media, and festival marketing materials.' },
  { icon: Heart, title: 'Tax Benefits', desc: '501(c)(3) non-profit status means sponsorship contributions may be tax deductible.' },
]

export default function Sponsor() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Sponsor 2026"
        title="Support Independent Voices at Portland Film Festival"
        subtitle="Together, we do more than celebrate film — we nurture the ecosystem of creativity and community that makes Portland an unparalleled haven for artists and visionaries."
        heroImage="/photos/red-carpet.jpg"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref1}
            className={`max-w-3xl ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <p className="text-xl md:text-2xl font-display italic text-cream/70 leading-relaxed mb-8">
              The Portland Film Festival brings together a passionate group of people
              wanting to learn, share and connect. As a sponsor, your brand will be
              front and center to our audience.
            </p>
            <p className="text-cream/50 text-lg leading-relaxed mb-8">
              If your business is inspired to join this vibrant community by sponsoring,
              donating, or contributing in any way, we warmly invite you to connect with us.
              Thank you for being an integral part of this journey, for helping the festival —
              and Portland itself — to thrive and inspire.
            </p>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Why Sponsor */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Why Sponsor"
            title="Partner With Portland Film Festival"
            subtitle="Align your brand with creativity, community, and independent storytelling."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <FeatureCard
                key={r.title}
                icon={r.icon}
                title={r.title}
                description={r.desc}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Presenting Sponsor */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-6 block">
            Presenting Sponsor
          </span>
          <div
            ref={ref2}
            className={`${vis2 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center p-10 border border-white/5 bg-noir-800/30 mb-6">
              <span className="font-display text-4xl md:text-5xl font-bold text-cream/30 tracking-wider">
                COMCAST
              </span>
            </div>
            <p className="text-cream/40 text-base max-w-lg mx-auto">
              The Portland Film Festival is made possible by generous support of our presenting
              sponsor, Comcast, along with contributions from local businesses and community partners.
            </p>
          </div>
        </div>
      </section>

      {/* Two Ways to Support */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Corporate Sponsorship */}
            <div className="card-cinematic p-10">
              <Building2 className="w-10 h-10 text-gold-400 mb-6" />
              <h3 className="font-display text-2xl font-bold text-cream mb-3">Corporate Sponsorship</h3>
              <p className="text-cream/50 leading-relaxed mb-4">
                Multiple sponsorship tiers are available, from presenting sponsor to supporting partner.
                Request our sponsorship deck for full details and benefits.
              </p>
              <p className="text-cream/40 text-base mb-6">
                You can also advertise in our program guide to reach festival attendees directly.
              </p>
              <Link to="/contact" className="btn-outline">
                Request Sponsorship Deck <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Individual Donations */}
            <div className="card-cinematic p-10">
              <Heart className="w-10 h-10 text-rose mb-6" />
              <h3 className="font-display text-2xl font-bold text-cream mb-3">Make a Donation</h3>
              <p className="text-cream/50 leading-relaxed mb-4">
                Your tax-deductible donation to our 501(c)(3) supports film education,
                community screenings, and local filmmakers. Every contribution makes a difference.
              </p>
              <p className="text-cream/40 text-base mb-6">
                Donations fund our FutureFilmmakers youth program, free screenings, and year-round events.
              </p>
              <a
                href="https://portlandfilm.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Donate Now <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Sponsors"
            title="2025 Partners & Sponsors"
            subtitle="Thank you to the organizations that make Portland Film Festival possible."
          />

          {/* Sponsor Logo Tiles */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-5">Sponsors</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Ryan Artists', logo: '/ra-logo.png' },
                  { name: 'Koerner Camera Systems', logo: '/koerner-logo.png' },
                  { name: 'Pro Photo Supply', logo: '/pro-photo-logo.png' },
                  { name: 'Oregon Film', logo: '/oregon-film-logo.png' },
                  { name: 'Portland Events & Film', logo: '/portland-film-events-logo.png' },
                  { name: 'SAG-AFTRA', logo: '/sag-aftra-logo.png' },
                  { name: 'Native Arts & Cultures Foundation', logo: '/native-arts-logo.png' },
                  { name: 'Portland Mortgage', logo: '/portland-mortgage-logo.png' },
                  { name: 'Voices of Ability', logo: '/voice-of-ability-logo.png' },
                ].map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="group relative bg-white rounded-sm p-5 flex items-center justify-center aspect-square
                               border border-white/10 hover:border-gold-400/30 transition-all hover:shadow-lg hover:shadow-gold-400/5"
                    title={sponsor.name}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-5">Food & Beverage Partners</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: 'A to Z Wineworks', logo: '/a-to-z-wine-logo.png' },
                  { name: 'Sokol Blosser', logo: '/sokol-blosser-logo.png' },
                  { name: 'Heck Brewing', logo: '/heck-logo.png' },
                  { name: "Bauman's Century Farm Cider", logo: '/baumans-cider-logo.png' },
                  { name: 'Happy Mountain Kombucha', logo: '/happy-mountain-logo.png' },
                  { name: 'Farina Bakery', logo: '/farina-bakery-logo.png' },
                  { name: 'PDX Cookie Co.', logo: '/pdx-cookie-logo.png' },
                  { name: 'Rose City Pepperheads', logo: '/rose-city-pepperheads-logo.png' },
                  { name: 'Snow Made', logo: '/snow-made-logo.png' },
                  { name: 'Notorious B.A.G.E.L.', logo: '/notorious-bagel-logo.png' },
                  { name: 'Harvest Snaps', logo: '/harvest-snaps-logo.png' },
                  { name: 'Built Protein', logo: '/built-logo.png' },
                  { name: 'Danner', logo: '/danner-logo.png' },
                ].map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="group relative bg-white rounded-sm p-5 flex items-center justify-center aspect-square
                               border border-white/10 hover:border-gold-400/30 transition-all hover:shadow-lg hover:shadow-gold-400/5"
                    title={sponsor.name}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-5">Community Partners</p>
              <div className="flex flex-wrap gap-3">
                {[
                  'City of Portland', 'Portland Parks & Recreation',
                  'Women in Film', 'Oregon Media Production Association',
                  'Willamette Writers', 'Oregon Governor\'s Office of Film',
                  'Clackamas Community College', 'Multnomah County Dept. of Human Services',
                ].map((name) => (
                  <span key={name} className="px-4 py-2.5 border border-white/10 bg-noir-800/30 text-cream/60 text-base">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-noir-900/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-display text-2xl font-bold text-cream mb-3">
            Ready to Partner?
          </h3>
          <p className="text-cream/50 text-base leading-relaxed mb-6">
            Connect with us to discuss sponsorship packages tailored to your brand.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
