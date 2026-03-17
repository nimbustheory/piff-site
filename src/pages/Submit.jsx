import { Link } from 'react-router-dom'
import {
  Calendar, Clock, ArrowRight, ArrowUpRight, CheckCircle2, Film,
  Clapperboard, Globe, Music, Smartphone, GraduationCap, Star
} from 'lucide-react'
import { PageHero, SectionHeading, useReveal, FilmStripDivider, Marquee } from '../components/UI'

const deadlines = [
  { label: 'Early Discount Deadline', date: 'November 14, 2026', note: 'PST Midnight' },
  { label: 'Discount Deadline', date: 'November 26, 2026', note: 'PST Midnight' },
  { label: 'Early Bird Deadline', date: 'December 17, 2026', note: 'PST Midnight' },
]

const categories = [
  { icon: Film, name: 'Narrative Features & Shorts' },
  { icon: Clapperboard, name: 'Documentaries' },
  { icon: Globe, name: 'World Cinema' },
  { icon: Smartphone, name: 'Transmedia / Web Series / TikToks' },
  { icon: Music, name: 'Music Videos' },
  { icon: GraduationCap, name: 'Student Films' },
  { icon: Star, name: 'Indigenous / Voices of Ability / Veterans' },
]

const alumni = [
  'Kristen Stewart', 'Aubrey Plaza', 'Lena Headey', 'Aisha Tyler',
  'Jason Momoa', 'Eli Roth', 'Mira Sorvino', 'Joe Dante',
  'Justin Long', 'Mario Van Peebles', 'Chuck Palahniuk', 'Vanna White',
]

function DeadlineRow({ deadline, index }) {
  const [ref, vis] = useReveal()
  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 p-6 border border-white/5 bg-noir-800/30
                 hover:border-gold-400/20 transition-all group ${
        vis ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0">
        <Calendar className="w-4 h-4 text-gold-400" />
      </div>
      <div className="flex-1">
        <p className="text-cream font-medium">{deadline.label}</p>
        <p className="text-cream/40 text-base">{deadline.note}</p>
      </div>
      <p className="text-gold-400 font-mono text-base">{deadline.date}</p>
    </div>
  )
}

export default function Submit() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Call for Entries · 2026"
        title="Submit Your Film to Portland"
        subtitle="We're looking for good films with compelling stories. Every filmmaker that submits has an equal opportunity — 100% of our films are selected from blind submissions. Each project is reviewed a minimum of 3 times by industry professionals, past filmmakers, and staff."
        heroImage="/photos/winners-2024.jpg"
      />

      {/* Submission Platforms */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="How to Submit"
            title="Submission Platforms"
            subtitle="Choose your preferred submission method. All submissions receive equal consideration."
          />

          <div
            ref={ref1}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {/* Film Freeway */}
            <a
              href="https://filmfreeway.com/PortlandFilmFestival"
              target="_blank"
              rel="noopener noreferrer"
              className="card-cinematic p-8 group flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-5
                              group-hover:bg-gold-400/20 transition-colors">
                <Film className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2 group-hover:text-gold-400 transition-colors">
                Film Freeway
              </h3>
              <p className="text-cream/40 text-base leading-relaxed mb-4">
                Submit through the world's leading film festival submission platform.
              </p>
              <span className="flex items-center gap-2 text-gold-400 text-base mt-auto">
                Submit Now <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>

            {/* Direct */}
            <a
              href="https://portlandfilm.org/submit"
              target="_blank"
              rel="noopener noreferrer"
              className="card-cinematic p-8 group flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-5
                              group-hover:bg-gold-400/20 transition-colors">
                <Clapperboard className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2 group-hover:text-gold-400 transition-colors">
                Direct Submission
              </h3>
              <p className="text-cream/40 text-base leading-relaxed mb-4">
                Submit directly through the Portland Film Festival website.
              </p>
              <span className="flex items-center gap-2 text-gold-400 text-base mt-auto">
                Submit Now <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Deadlines */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Mark Your Calendar"
            title="Upcoming Deadlines"
          />

          <div className="max-w-2xl space-y-4">
            {deadlines.map((d, i) => (
              <DeadlineRow key={d.label} deadline={d} index={i} />
            ))}

            {/* Notification */}
            <div className="flex items-center gap-6 p-6 border border-gold-400/20 bg-gold-400/5">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-gold-400" />
              </div>
              <div className="flex-1">
                <p className="text-gold-400 font-medium">Notification Date</p>
                <p className="text-cream/40 text-base">PST Midnight, approximately</p>
              </div>
              <p className="text-gold-400 font-mono text-base font-bold">June 10, 2027</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Categories */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Accept"
            title="Film Categories"
            subtitle="We welcome a wide range of formats, genres, and storytelling approaches."
          />

          <div
            ref={ref2}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl ${
              vis2 ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="flex items-center gap-4 p-5 border border-white/5 bg-noir-800/30
                           hover:border-gold-400/10 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <cat.icon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-cream/70 text-base">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Alumni Marquee */}
      <Marquee items={alumni} />

      {/* Why Submit */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Why Portland"
            title="Why Submit to Our Festival?"
          />
          <div className="max-w-3xl space-y-4">
            {[
              'World-class screening environment with curated competitions and Audience Awards',
              '100% blind submission process — every filmmaker gets an equal opportunity',
              'Comcast NBC/Universal partnership provides national reach to 30M+ subscribers',
              'Named "one of the coolest film festivals" by MovieMaker Magazine and USA TODAY "Ten Best" Reader\'s Choice',
              'Opportunities to connect with dozens of film and television industry professionals',
              'Portland offers sophisticated, deeply engaged audiences in a vibrant arts community',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-cream/60 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
