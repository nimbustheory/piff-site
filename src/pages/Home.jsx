import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Film, Calendar, MapPin, Users, Award, Globe, Mic2, Clapperboard,
  ArrowRight, ChevronRight, Star, Sparkles, Heart, GraduationCap, Popcorn
} from 'lucide-react'
import { SectionHeading, Marquee, StatCard, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'
import VenueMap, { VENUES } from '../components/VenueMap'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Hero photo */}
        <img
          src="/hero/home-hero.jpg"
          alt="Portland Film Festival audience in a packed theater"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
          sizes="100vw"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-noir-950/40" />

        {/* Gradient fade — stronger at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-transparent to-noir-950/90" />

        {/* Animated spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[600px] bg-gold-400/[0.04] rounded-full blur-[150px]
                        animate-glow-pulse" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#06060a_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 border border-gold-400/20 bg-gold-400/5
                        px-5 py-2 rounded-full mb-8 animate-fade-in">
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-400 font-mono text-sm tracking-[0.15em] uppercase">
            September 30 – October 4, 2026
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-bold leading-[0.9] mb-6 animate-fade-up">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream">
            Portland
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-400 text-glow-gold mt-2">
            Film Festival
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-display italic text-cream/60 mb-3 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Support Independent Voices
        </p>

        {/* Location */}
        <div
          className="flex items-center justify-center gap-2 text-cream/40 text-base mb-10 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Center for Native Arts & Culture · Portland, Oregon</span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          <Link to="/submit" className="btn-primary">
            Submit Your Film <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="btn-outline">
            Discover the Festival
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="w-px h-16 bg-gradient-to-b from-gold-400/40 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  )
}

/* ─── About Strip ─── */
function AboutStrip() {
  const [ref, visible] = useReveal()
  return (
    <section className="relative py-24 md:py-32 overflow-hidden light-sweep">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Left: Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-noir-800 rounded-sm overflow-hidden relative glow-gold">
              <img
                src="/homescreen/cinema-is-culture.jpg"
                alt="Cinema is Culture"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold-400 text-noir-950 p-5 rounded-sm">
              <p className="font-display text-3xl font-bold">13+</p>
              <p className="text-sm font-semibold uppercase tracking-wider">Years</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              label="About the Festival"
              title="Portland's Leading Film Non-Profit"
              subtitle="The Portland Film Festival is a 501(c)(3) non-profit dedicated to nurturing filmmakers and their audiences. We celebrate storytelling, focus on the people and artistry behind filmmaking, and provide entertaining and educational opportunities to the public."
            />
            <p className="text-cream/50 text-lg leading-relaxed mb-8">
              Starting as the Portland Film Club in 2009 and launching our festival in 2013, we've
              established ourselves as one of the most creative film festivals in the country — named
              "one of the coolest" by MovieMaker Magazine and a USA TODAY "Ten Best" Reader's Choice.
              Our programming team selects 100% of films from blind submissions, giving every
              filmmaker an equal opportunity.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Mission <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-noir-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="90+" label="Films Per Year" />
          <StatCard number="4,000+" label="Film Club Members" />
          <StatCard number="13+" label="Years Running" />
          <StatCard number="30M+" label="Subscriber Reach" />
        </div>
      </div>
    </section>
  )
}

/* ─── Film Categories ─── */
function Categories() {
  const categories = [
    { icon: Film, name: 'Fiction', desc: 'Narrative features and shorts' },
    { icon: Globe, name: 'World Cinema', desc: 'Global stories and perspectives' },
    { icon: Mic2, name: 'Non-Fiction', desc: 'Documentary filmmaking' },
    { icon: Sparkles, name: 'Transmedia', desc: 'Web series, TikToks, Reels & more' },
    { icon: Star, name: 'Indigenous', desc: 'Native voices and stories' },
    { icon: Heart, name: 'Voices of Ability', desc: 'Filmmakers with disabilities' },
    { icon: Users, name: 'Student Films', desc: 'Emerging young filmmakers' },
    { icon: Award, name: 'Portland Stories', desc: 'Local filmmaker showcase' },
  ]

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Programming"
          title="Curated Film Categories"
          subtitle="A rich program featuring diverse voices and genres from around the world."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <FeatureCard
              key={cat.name}
              icon={cat.icon}
              title={cat.name}
              description={cat.desc}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Notable Alumni ─── */
function Alumni() {
  const names = [
    'Kristen Stewart', 'Adrian Martinez', 'Jena Malone', 'Lena Headey',
    'Aubrey Plaza', 'Aisha Tyler', 'Mario Van Peebles', 'Mira Sorvino',
    'Joe Dante', 'Eli Roth', 'Justin Long', 'Haley Joel Osment',
    'Jason Momoa', 'Chuck Palahniuk', 'Doug Benson', 'Vanna White',
  ]

  return (
    <>
      <Marquee items={names} />
    </>
  )
}

/* ─── Year-Round Programming ─── */
function Programming() {
  const programs = [
    { icon: Award, title: 'Annual Festival', desc: '5-day celebration featuring 100+ films from around the world with filmmaker Q&As.' },
    { icon: Film, title: 'Indie Film Series', desc: 'Monthly screenings at McMenamin\'s Kennedy School with filmmaker discussions.' },
    { icon: Users, title: 'Portland Film Club', desc: 'Oregon\'s largest film community with 4,000+ members and monthly meetups.' },
    { icon: GraduationCap, title: 'FutureFilmmakers', desc: 'Free youth film workshops teaching the next generation of storytellers.' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-noir-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Year-Round"
          title="More Than a Festival"
          subtitle="We're building Portland's film community 365 days a year."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} delay={i * 80} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/programs" className="btn-outline">
            Explore All Programs <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Venues ─── */
function Venues() {
  const [mapOpen, setMapOpen] = useState(false)
  const [ref, visible] = useReveal()

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Locations"
          title="Our Venues"
          subtitle="Screenings and events across three iconic Portland venues."
        />
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {VENUES.map((venue) => (
            <div key={venue.id} className="card-cinematic p-8">
              <MapPin className="w-6 h-6 text-gold-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-cream mb-2">{venue.name}</h3>
              <p className="text-cream/40 text-base leading-relaxed mb-3">{venue.description}</p>
              <p className="text-cream/30 text-sm">{venue.address}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setMapOpen(true)} className="btn-outline">
          <MapPin className="w-4 h-4" /> View Venue Map
        </button>
        <VenueMap isOpen={mapOpen} onClose={() => setMapOpen(false)} />
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  const [ref, visible] = useReveal()
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] bg-gold-400/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div
          ref={ref}
          className={visible ? 'animate-fade-up' : 'opacity-0'}
        >
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-4 block">
            Call for Entries
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            Submit Your Film<br />
            <span className="text-gold-400 text-glow-gold">to Portland</span>
          </h2>
          <p className="text-cream/50 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            We're looking for compelling stories — narrative features, documentaries, shorts,
            transmedia, web series, student films, music videos, and more. Every submission
            gets equal consideration through our blind review process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/submit" className="btn-primary">
              Submit via Film Freeway <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/submit" className="btn-outline">
              Direct Submission
            </Link>
          </div>

          {/* Deadlines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { label: 'Early Discount', date: 'Nov 14, 2026' },
              { label: 'Discount', date: 'Nov 26, 2026' },
              { label: 'Early Bird', date: 'Dec 17, 2026' },
            ].map((d) => (
              <div key={d.label} className="p-4 border border-white/5 bg-noir-800/40">
                <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-1">{d.label}</p>
                <p className="text-cream/70 text-base font-medium">{d.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── News Card (extracted to avoid hook-in-loop) ─── */
function NewsCard({ item, index }) {
  const [ref, visible] = useReveal()
  return (
    <Link
      to="/news"
      ref={ref}
      className={`card-cinematic p-8 group cursor-pointer ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-4 block">
        {item.tag}
      </span>
      <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-gold-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-cream/40 text-base leading-relaxed">
        {item.excerpt}
      </p>
    </Link>
  )
}

/* ─── Featured News ─── */
function FeaturedNews() {
  const news = [
    {
      title: '2026 Submissions Now Open',
      excerpt: 'Submit your narrative features, documentaries, shorts, transmedia, web series, student films, and more.',
      tag: 'Call for Entry',
    },
    {
      title: '2025 Slate Includes Closer by Kristen Stewart',
      excerpt: 'Over 90 films from around the world with several local films screened at the Center of Native Arts + Cultures.',
      tag: '2025 Festival',
    },
    {
      title: 'Joe Stevens Celebrates 6th Year as Programming Director',
      excerpt: 'From directing traffic to directing film programming — Joe Stevens has come full circle at the Portland Film Festival.',
      tag: 'Team',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-noir-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label="Latest"
            title="Festival News"
          />
          <Link
            to="/news"
            className="hidden md:flex items-center gap-2 text-gold-400 text-base hover-underline pb-1 mb-12"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <NewsCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <Link
          to="/news"
          className="md:hidden flex items-center gap-2 text-gold-400 text-base hover-underline mt-8"
        >
          View All News <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

/* ─── Volunteer & Donate ─── */
function GetInvolved() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volunteer */}
          <Link to="/volunteer" className="card-cinematic p-10 md:p-14 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-[60px]
                            group-hover:bg-gold-400/10 transition-colors" />
            <div className="relative">
              <Users className="w-10 h-10 text-gold-400 mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-3
                             group-hover:text-gold-400 transition-colors">
                Volunteer
              </h3>
              <p className="text-cream/50 leading-relaxed mb-6">
                Join the team that makes the magic happen. See behind the scenes,
                watch movies before release, meet filmmakers, and earn a festival pass.
              </p>
              <span className="flex items-center gap-2 text-gold-400 text-base font-medium">
                Sign Up <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Sponsor */}
          <Link to="/sponsor" className="card-cinematic p-10 md:p-14 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose/5 rounded-full blur-[60px]
                            group-hover:bg-rose/10 transition-colors" />
            <div className="relative">
              <Heart className="w-10 h-10 text-rose mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-3
                             group-hover:text-rose transition-colors">
                Sponsor & Donate
              </h3>
              <p className="text-cream/50 leading-relaxed mb-6">
                Support Portland's film community. Amplify independent voices, educate
                future filmmakers, and put your brand front and center.
              </p>
              <span className="flex items-center gap-2 text-rose text-base font-medium">
                Become a Sponsor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <FilmStripDivider />
      <AboutStrip />
      <Stats />
      <Categories />
      <Alumni />
      <Programming />
      <Venues />
      <CTASection />
      <FilmStripDivider />
      <FeaturedNews />
      <GetInvolved />
    </div>
  )
}
