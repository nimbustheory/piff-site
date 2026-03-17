import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award, MapPin, Ticket, Calendar, Star, Film, Clock,
  ArrowRight, ArrowUpRight, Users, Globe, Clapperboard
} from 'lucide-react'
import { PageHero, SectionHeading, StatCard, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'
import VenueMap, { VENUES } from '../components/VenueMap'

const stats = [
  { number: '100+', label: 'Films Screened' },
  { number: '20+', label: 'Countries' },
  { number: '10K', label: 'Attendees' },
  { number: '5', label: 'Days' },
]

const passes = [
  {
    name: 'Festival Pass',
    price: '$40',
    note: 'Starting at',
    description: 'Access to all festival screenings. Passes go on sale approximately September 20.',
    featured: true,
  },
  {
    name: 'Advance Ticket',
    price: '$4',
    note: 'Per screening',
    description: 'Individual screening tickets at advance pricing. Prices increase day-of-screening.',
  },
  {
    name: 'Volunteer Pass',
    price: 'Free',
    note: '4 shifts',
    description: 'Complete 4 volunteer shifts and earn a full festival pass. Sign up early!',
  },
]

const schedule = [
  { day: 'Wed', date: 'Sept 30', highlight: 'Opening Night', desc: 'Industry brunch, opening reception with hosted bar, and filmmaker meet & greets' },
  { day: 'Thu', date: 'Oct 1', highlight: 'Film Screenings', desc: 'Feature films and shorts with filmmaker Q&As and speed networking' },
  { day: 'Fri', date: 'Oct 2', highlight: 'Film Screenings', desc: 'Continued screenings across all categories and panel discussions' },
  { day: 'Sat', date: 'Oct 3', highlight: 'Shorts & More', desc: 'Short films, transmedia, student work, and community events' },
  { day: 'Sun', date: 'Oct 4', highlight: 'Awards & Closing', desc: 'Final screenings, awards ceremony, and closing celebration' },
]

const categories = [
  { name: 'Fiction / Narrative' },
  { name: 'Non-Fiction / Documentary' },
  { name: 'Short Films' },
  { name: 'Music Videos' },
  { name: 'Animation' },
  { name: 'Student Films' },
  { name: 'Indigenous Voices' },
  { name: 'Transmedia / Storyworlds' },
  { name: 'Web Series' },
  { name: 'TikToks & Reels' },
  { name: 'World Cinema' },
  { name: 'Voices of Ability' },
  { name: 'Veterans' },
  { name: 'Portland Stories' },
]

const awards = [
  'Best Narrative Feature',
  'Best Documentary Feature',
  'Best Short Film',
  'Best Director',
  'Audience Choice',
  'Best of Portland',
  'The Will Vinton Animation Award',
  'Stacey Stevens Indigenous Spirit Award',
  'Best Student Film',
  'Best of Women\'s Stories',
  'Best of Black Stories',
  'Best of Latine Stories',
  'Best of Pride Stories',
  'Best Late Night Movie',
]


const pastWinners = {
  '2024': [
    { award: 'Best Narrative Feature', film: 'My Best Friend Depression', director: 'Heather LeRoy' },
    { award: 'Best Documentary Feature', film: 'The Battle for Kyiv', director: 'Oz Katerji' },
    { award: 'Best Short Film', film: 'Lifeline', director: 'Jelle Krings' },
    { award: 'Best of Portland', film: 'To Kill A Wolf', director: 'Kelsey Taylor' },
    { award: 'Will Vinton Animation Award', film: 'LUKi and the Lights', director: 'Toby Cochran' },
    { award: 'Best Student Film', film: 'Sleeves', director: 'Peter Nepi' },
    { award: 'Best Director', film: 'Queen of the Ring', director: 'Ash Avildsen' },
    { award: 'Audience Choice', film: 'Losing Grace, Finding Hope', director: 'Marcia Carroll' },
    { award: "Best of Latine Stories", film: 'El Ultimo Tramo', director: 'Dominick Cura' },
    { award: "Best of Pride Stories", film: 'Chorus Notes', director: 'Casey de Fremery' },
    { award: "Best of Black Stories", film: 'PIC', director: 'Desean K. Terry' },
    { award: "Best of Women's Stories", film: 'How Did I Get Here', director: 'Kate Hamilton' },
    { award: "Indigenous Spirit Award", film: 'Inkwo For When the Starving Return', director: 'Amanda Strong' },
    { award: 'Best Late Night Movie', film: 'White Elephant', director: 'Ryan Copple' },
  ],
  '2021': [
    { award: 'Best Documentary', film: 'Street Heroines', director: 'Alexandra Henry' },
    { award: 'Best Narrative', film: 'Lune', director: 'Aviva Armour-Ostroff & Arturo Perez Torres' },
    { award: 'Best Director', film: 'This Is Not A War Story', director: 'Talia Lugacy' },
    { award: 'Best Documentary Short', film: 'Neurodivergent', director: 'Afton Quast Saler' },
    { award: 'Best Narrative Short', film: 'Georgia', director: 'Jayil Pak' },
    { award: 'Best Music Video', film: 'Twisted', director: 'Richey Beckett & Johanna Warren' },
  ],
}

export default function Festival() {
  const [mapOpen, setMapOpen] = useState(false)
  const [activeYear, setActiveYear] = useState('2024')
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()
  const [ref3, vis3] = useReveal()
  const [ref4, vis4] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="October 2026"
        title="The 2026 Portland Film Festival"
        subtitle="Five days of independent cinema, filmmaker Q&As, workshops, and community events at the Center for Native Arts & Culture."
        heroImage="/photos/festival-audience.jpg"
      />

      {/* Stats */}
      <section className="border-y border-white/5 bg-noir-900/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCard key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Festival Passes */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Get Your Pass"
            title="Festival Passes"
            subtitle="Affordable access to Portland's premier film event. Tickets sold through pdxff.com."
          />

          <div
            ref={ref1}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {passes.map((pass) => (
              <div
                key={pass.name}
                className={`p-8 relative group ${
                  pass.featured
                    ? 'bg-gradient-to-br from-gold-400/20 to-gold-400/5 border-2 border-gold-400/40'
                    : 'card-cinematic'
                }`}
              >
                {pass.featured && (
                  <span className="absolute -top-3 left-6 bg-gold-400 text-noir-950 font-mono text-sm tracking-wider uppercase px-3 py-1 font-semibold">
                    Best Value
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-cream mb-2">{pass.name}</h3>
                <div className="mb-4">
                  <span className="font-display text-4xl font-bold text-gold-400">{pass.price}</span>
                  {pass.note && (
                    <span className="text-cream/40 text-base ml-2">{pass.note}</span>
                  )}
                </div>
                <p className="text-cream/50 text-base leading-relaxed mb-6">{pass.description}</p>
                <a
                  href="https://pdxff.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pass.featured ? 'btn-primary' : 'btn-outline'}
                >
                  <Ticket className="w-4 h-4" /> Get Pass
                </a>
              </div>
            ))}
          </div>

          {/* Ticket Note */}
          <div className="mt-8 max-w-xl">
            <p className="text-cream/40 text-base leading-relaxed">
              Tickets and passes are sold through{' '}
              <a href="https://pdxff.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">
                pdxff.com
              </a>
              . The festival deliberately keeps prices low so all Portlanders can attend.
            </p>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Schedule */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="5 Days of Film"
            title="Festival Schedule"
            subtitle="September 30 – October 4, 2026"
          />

          <div
            ref={ref2}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ${vis2 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {schedule.map((day, i) => (
              <div
                key={day.date}
                className={`p-6 border transition-all ${
                  i === 0
                    ? 'border-gold-400/30 bg-gold-400/5'
                    : 'border-white/5 bg-noir-800/30 hover:border-gold-400/20'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="text-cream/30 font-mono text-sm uppercase">{day.day}</p>
                <p className="font-display text-2xl font-bold text-cream mb-2">{day.date}</p>
                <p className="text-gold-400 font-medium text-base mb-1">{day.highlight}</p>
                <p className="text-cream/40 text-sm leading-relaxed">{day.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + Awards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Categories */}
            <div>
              <SectionHeading
                label="Programming"
                title="Film Categories"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-3 p-4 border border-white/5 bg-noir-800/30 hover:border-gold-400/10 transition-colors"
                  >
                    <Film className="w-4 h-4 text-gold-400/50 flex-shrink-0" />
                    <span className="text-cream/70 text-base">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <SectionHeading
                label="Recognition"
                title="Festival Awards"
              />
              <div
                ref={ref3}
                className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${vis3 ? 'animate-fade-up' : 'opacity-0'}`}
              >
                {awards.map((award) => (
                  <div key={award} className="flex items-center gap-3 p-4 border border-white/5 bg-noir-800/30">
                    <Star className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <p className="text-cream/70 text-base font-medium">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Venues */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Locations"
            title="Festival Venues"
            subtitle="Screenings and events across three iconic Portland venues."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {VENUES.map((venue) => (
              <div key={venue.id} className="card-cinematic p-8">
                <MapPin className="w-6 h-6 text-gold-400 mb-4" />
                <h3 className="font-display text-lg font-semibold text-cream mb-2">{venue.name}</h3>
                <p className="text-cream/40 text-base leading-relaxed mb-3">{venue.description}</p>
                <p className="text-cream/30 text-sm">{venue.address}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setMapOpen(true)}
            className="btn-outline"
          >
            <MapPin className="w-4 h-4" /> View Venue Map
          </button>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Hall of Fame"
            title="Past Award Winners"
            subtitle="Celebrating the filmmakers who have graced our festival."
          />

          {/* Year Tabs */}
          <div className="flex gap-2 mb-8">
            {Object.keys(pastWinners).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 py-2 text-base font-mono tracking-wider transition-all ${
                  activeYear === year
                    ? 'bg-gold-400 text-noir-950'
                    : 'border border-white/10 text-cream/50 hover:text-cream hover:border-white/20'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div
            ref={ref4}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${vis4 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {pastWinners[activeYear].map((winner) => (
              <div key={winner.award} className="p-5 border border-white/5 bg-noir-800/30 hover:border-gold-400/10 transition-colors">
                <p className="text-gold-400 font-mono text-sm tracking-wider uppercase mb-2">{winner.award}</p>
                <p className="text-cream font-display font-semibold text-base mb-1">{winner.film}</p>
                <p className="text-cream/40 text-sm">Directed by {winner.director}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Don't Miss a Moment
          </h2>
          <p className="text-cream/50 text-lg leading-relaxed mb-8">
            Submit your film, grab a festival pass, or join us as a volunteer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/submit" className="btn-primary">
              Submit a Film <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/volunteer" className="btn-outline">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Venue Map Modal */}
      <VenueMap isOpen={mapOpen} onClose={() => setMapOpen(false)} />
    </div>
  )
}
