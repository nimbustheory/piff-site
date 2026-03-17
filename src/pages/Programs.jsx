import { Link } from 'react-router-dom'
import {
  Film, Users, GraduationCap, Calendar, MapPin, Clock, ArrowRight, ArrowUpRight,
  Star, Music, Heart, Clapperboard, Baby, FileVideo, Scissors
} from 'lucide-react'
import { PageHero, SectionHeading, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'

/* ─── Indie Film Series Monthly Themes ─── */
const indieThemes = [
  { month: 'February', theme: 'Black Stories', partner: 'Presented by Oregon Film' },
  { month: 'March', theme: "Women's Stories", partner: '' },
  { month: 'April', theme: 'Eco Stories', partner: '' },
  { month: 'May', theme: 'Mental Health Stories', partner: '' },
  { month: 'June', theme: 'Pride Stories', partner: '' },
  { month: 'August', theme: 'Horror', partner: '' },
  { month: 'September', theme: 'Latine Stories', partner: '' },
  { month: 'October', theme: 'Portland Stories', partner: '' },
  { month: 'November', theme: 'Indigenous Stories', partner: '' },
  { month: 'December', theme: 'Voices of Ability', partner: '' },
]

/* ─── Sub-Festivals ─── */
const subFestivals = [
  {
    icon: Baby,
    title: 'Kids Film Festival',
    desc: 'Films by and for children — celebrating young storytellers and family-friendly cinema.',
  },
  {
    icon: FileVideo,
    title: 'PDOC',
    desc: 'Portland Documentary Film Festival — dedicated to non-fiction filmmaking and real-world stories.',
  },
  {
    icon: Scissors,
    title: 'PDXShorts',
    desc: 'Portland Shorts Film Festival — showcasing the art of short-form storytelling.',
  },
]

export default function Programs() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()
  const [ref3, vis3] = useReveal()
  const [ref4, vis4] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Year-Round"
        title="Programs & Community"
        subtitle="We're more than a festival. Portland Film Festival builds Oregon's film community 365 days a year through screenings, meetups, youth education, and more."
        heroImage="/photos/portland-stories.jpg"
      />

      {/* Portland Film Club */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref1}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <div>
              <SectionHeading
                label="Since 2009"
                title="Portland Film Club"
                subtitle="Oregon's largest film community with 4,000+ members."
              />
              <p className="text-cream/50 text-lg leading-relaxed mb-6">
                What started as a simple meetup for film enthusiasts in 2009 has grown into Oregon's
                largest film community. Think book club, but for movies — we pick a film, watch it
                together, and discuss. It's that simple, and that powerful.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream/80 font-medium text-base">Weekly Monday Meetups</p>
                    <p className="text-cream/40 text-base">Living Room Theaters · $5 Merry Monday Movie special</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream/80 font-medium text-base">4,000+ Members</p>
                    <p className="text-cream/40 text-base">Movie theaters, private homes, and special locations</p>
                  </div>
                </div>
              </div>
              <a
                href="https://meetup.com/portlandfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join on Meetup <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual */}
            <div className="card-cinematic overflow-hidden">
              <div className="relative h-56">
                <img
                  src="/photos/festival-audience.jpg"
                  alt="Portland Film Club members at a screening"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="font-display text-4xl font-bold text-gold-400 text-glow-gold">4,000+</p>
                  <p className="text-cream/70 text-base uppercase tracking-wider">Film Club Members</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center p-6">
                <div>
                  <p className="text-cream font-display text-2xl font-bold">15+</p>
                  <p className="text-cream/40 text-sm">Years Active</p>
                </div>
                <div>
                  <p className="text-cream font-display text-2xl font-bold">52</p>
                  <p className="text-cream/40 text-sm">Meetups/Year</p>
                </div>
                <div>
                  <p className="text-cream font-display text-2xl font-bold">$5</p>
                  <p className="text-cream/40 text-sm">Monday Movies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Indie Film Series */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Monthly Screenings"
            title="Indie Film Series"
            subtitle="First Tuesday of every month at McMenamin's Kennedy School Theater. Doors at 6 PM."
          />

          <div
            ref={ref2}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${vis2 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {/* Info Card */}
            <div className="lg:col-span-2 card-cinematic p-8">
              <Film className="w-10 h-10 text-gold-400 mb-5" />
              <h3 className="font-display text-xl font-semibold text-cream mb-3">How It Works</h3>
              <p className="text-cream/50 text-base leading-relaxed mb-6">
                Each month features a short film paired with a feature film, followed by a discussion
                with the audience and often the filmmakers themselves. Every month has a unique theme
                celebrating diverse voices in cinema.
              </p>
              <div className="space-y-3 text-base">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-cream/60">First Tuesday · Doors at 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-cream/60">McMenamin's Kennedy School</span>
                </div>
              </div>
            </div>

            {/* Monthly Themes Grid */}
            <div className="lg:col-span-3">
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-4">Monthly Themes</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {indieThemes.map((item) => (
                  <div key={item.month} className="p-4 border border-white/5 bg-noir-800/30 hover:border-gold-400/10 transition-colors">
                    <p className="text-cream/30 font-mono text-sm uppercase">{item.month}</p>
                    <p className="text-cream/80 text-base font-medium mt-1">{item.theme}</p>
                    {item.partner && (
                      <p className="text-gold-400/50 text-sm mt-1">{item.partner}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FutureFilmmakers */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref3}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${vis3 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <div>
              <SectionHeading
                label="Youth Education"
                title="FutureFilmmakers"
                subtitle="Free hands-on filmmaking workshops for youth in partnership with Boys & Girls Club of Portland."
              />
              <p className="text-cream/50 text-lg leading-relaxed mb-6">
                Launched in 2023, the FutureFilmmakers program provides underprivileged and underserved
                youth with educational film experiences. Our workshops teach the fundamentals of storytelling,
                camera work, editing, and creative expression — all at no cost.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream/80 font-medium text-base">Saturdays, 10 AM – 2 PM</p>
                    <p className="text-cream/40 text-base">Center for Native Arts & Cultures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream/80 font-medium text-base">100% Free</p>
                    <p className="text-cream/40 text-base">In partnership with Boys & Girls Club</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream/80 font-medium text-base">1,000+ Youth Served</p>
                    <p className="text-cream/40 text-base">And growing every year</p>
                  </div>
                </div>
              </div>
              <Link to="/volunteer" className="btn-outline">
                Volunteer as a Mentor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Visual */}
            <div className="card-cinematic overflow-hidden">
              <div className="relative h-56">
                <img
                  src="/photos/futurefilmmakers.jpg"
                  alt="FutureFilmmakers youth workshop"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="font-display text-4xl font-bold text-gold-400 text-glow-gold">1,000+</p>
                  <p className="text-cream/70 text-base uppercase tracking-wider">Youth Served</p>
                </div>
              </div>
              <p className="text-cream/40 text-base leading-relaxed p-6">
                Teaching storytelling, camera work, editing, and creative expression to the next generation of filmmakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Networking */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Industry"
            title="Film Industry Networking"
            subtitle="Oregon's largest annual film industry networking events — connecting producers, directors, crew, and creatives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="card-cinematic p-8">
              <Star className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-cream mb-2">Speed Networking Event</h3>
              <p className="text-cream/50 text-base leading-relaxed mb-4">
                Our flagship networking event brings together film professionals for structured,
                fast-paced introductions. This event regularly sells out — get your ticket early.
              </p>
              <div className="flex items-center gap-3 text-sm text-cream/40">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Quarterly · 5:00 PM – 8:00 PM</span>
              </div>
            </div>
            <div className="card-cinematic p-8">
              <Users className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg font-semibold text-cream mb-2">Portland Film & Video Network</h3>
              <p className="text-cream/50 text-base leading-relaxed mb-4">
                Our online community of 5,000+ Portland-area film professionals. Share opportunities,
                find crew, and stay connected to the local industry.
              </p>
              <div className="flex items-center gap-3 text-sm text-cream/40">
                <Users className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>5,000+ Members · Year-Round</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Festivals */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="More Festivals"
            title="Satellite Events"
            subtitle="Beyond the annual festival, we produce focused events throughout the year."
          />
          <div
            ref={ref4}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl ${vis4 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {subFestivals.map((fest, i) => (
              <FeatureCard
                key={fest.title}
                icon={fest.icon}
                title={fest.title}
                description={fest.desc}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
            Get Involved
          </h2>
          <p className="text-cream/50 text-lg leading-relaxed mb-8">
            Whether you want to join the Film Club, volunteer at an event, or submit your own film —
            there's a place for you in Portland's film community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://meetup.com/portlandfilm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join the Film Club <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/volunteer" className="btn-outline">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
