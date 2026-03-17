import { Link } from 'react-router-dom'
import {
  Target, Eye, GraduationCap, Globe, Users, Palette, Monitor, Building2,
  Megaphone, HandHeart, ArrowRight, Film, Award, Heart
} from 'lucide-react'
import { PageHero, SectionHeading, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'

const timeline = [
  { year: '2009', event: 'Portland Film Club founded as a meetup for film enthusiasts' },
  { year: '2013', event: 'First Portland Film Festival launches with workshops, networking events, and screenings' },
  { year: '2014', event: 'Named "one of the coolest film festivals in the world" by MovieMaker Magazine' },
  { year: '2019', event: 'Launched Indie Film Series at McMenamin\'s Kennedy School' },
  { year: '2020', event: 'Named "50 Film Festivals Worth the Entry Fee" by MovieMaker Magazine; virtual festival during pandemic' },
  { year: '2023', event: 'FutureFilmmakers youth program launches with Boys & Girls Club' },
  { year: '2024', event: 'Portland Film Club grows to 4,000+ members' },
  { year: '2025', event: '90+ films including Closer by Kristen Stewart; USA TODAY "Ten Best Film Festivals" Reader\'s Choice' },
]

const team = [
  { name: 'Joshua Leake', role: 'Executive Director & Co-Founder' },
  { name: 'Joe Stevens', role: 'Director of Programming' },
  { name: 'Ben Edwards', role: 'Director of Media' },
  { name: 'Michael Kurtz', role: 'Technical Director' },
  { name: 'Robin Klein', role: 'Merchandise & Indigenous Voices Programmer' },
  { name: 'Andrea Danehower', role: 'Sales and Development' },
  { name: 'Leah Faure', role: 'Staff Artist' },
  { name: '100+ Volunteers', role: 'All-Volunteer Organization' },
]

const programs = [
  { icon: Award, title: 'Annual Festival', desc: '5-day celebration featuring 100+ films from around the world with filmmaker Q&As and special events.' },
  { icon: Film, title: 'Indie Film Series', desc: 'Monthly screenings at McMenamin\'s Kennedy School featuring short and feature films with filmmaker discussions.' },
  { icon: Users, title: 'Portland Film Club', desc: 'Oregon\'s largest film community with 4,000+ members enjoying monthly meetups, discussions, and exclusive events.' },
  { icon: Heart, title: 'FutureFilmmakers', desc: 'Free youth film workshops in partnership with Boys & Girls Club, teaching next-gen filmmakers.' },
]

const goals = [
  { icon: Target, title: 'Annual Festival', desc: 'Establish, fund and curate a fun and well-organized annual film festival.' },
  { icon: Eye, title: 'Free Screenings', desc: 'Provide free and low-cost screenings and education opportunities to the community.' },
  { icon: Globe, title: 'Global Platform', desc: 'Provide a platform for filmmakers from Portland, Oregon, the US and the world.' },
  { icon: Palette, title: 'Cultural Force', desc: 'Become a positive force in Portland that helps fill cultural voids.' },
  { icon: Building2, title: 'Artistic Community', desc: "Nurture Portland's commitment to the arts by building a national and global stage." },
  { icon: Users, title: 'Community Events', desc: 'Host affordable film-related events that bring together families, students, and leaders.' },
  { icon: GraduationCap, title: 'Education', desc: 'Develop year-round educational outreach to inspire learning about cinema.' },
  { icon: HandHeart, title: 'Local Business', desc: 'Advocate for and support local Portland and Oregon businesses.' },
  { icon: Monitor, title: 'Multi-Platform', desc: 'Utilize technology and media to ensure access to all multi-platform experiences.' },
  { icon: Megaphone, title: 'Independent Voices', desc: 'Mobilize organizations to ensure all who are interested can participate in PDXFF activities.' },
]

export default function About() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()
  const [ref3, vis3] = useReveal()
  const [ref4, vis4] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Our Mission"
        title="Supporting Independent Voices Since 2009"
        subtitle="Portland Film Festival is a 501(c)(3) non-profit dedicated to nurturing filmmakers and their audiences. We celebrate storytelling and stand by the belief of equity for all people."
        heroImage="/hero/about-hero.jpg"
      />

      {/* Mission Statement */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref1}
            className={`max-w-3xl ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <p className="text-xl md:text-2xl font-display italic text-cream/70 leading-relaxed mb-8">
              "We stand by the belief of equity for all people, regardless of background,
              socioeconomic means or physical ability."
            </p>
            <p className="text-cream/50 text-lg leading-relaxed mb-6">
              The festival focuses on the people, ideas, technology, skills and artistry
              behind filmmaking and provides both entertaining and educational opportunities
              to the public and filmmakers. Our 2025 festival was 100% programmed from
              submissions selected by 100 pre-screeners and programmers — because we believe
              in giving all filmmakers equal footing.
            </p>
            <p className="text-cream/50 text-lg leading-relaxed">
              Thanks to our multi-year partnership with Comcast NBC/Universal, festival promotion
              receives national access to an over 30+ million subscriber base. Portland has become
              one of the most creative and unique stepping stones for independent filmmakers globally.
            </p>
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Goals */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Goals & Objectives"
            title="What We Stand For"
            subtitle="Our mission drives everything we do — from programming to partnerships."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map((goal, i) => (
              <FeatureCard
                key={goal.title}
                icon={goal.icon}
                title={goal.title}
                description={goal.desc}
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref2}
            className={`max-w-4xl mx-auto text-center ${vis2 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-4 block">
              What We Believe In
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-left">
              {[
                'Giving ALL filmmakers equal footing',
                'Amplifying diverse and underrepresented voices',
                'Showcasing raw, unfiltered creativity',
                'Breaking down industry barriers',
              ].map((belief, i) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-white/5 bg-noir-800/30">
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold-400 font-mono text-base font-bold">{i + 1}</span>
                  </div>
                  <p className="text-cream/70 leading-relaxed">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — Year-Round Programs */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Year-Round"
            title="What We Do"
            subtitle="We're more than a festival — we build Portland's film community 365 days a year."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((p, i) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Story"
            title="A Growing Legacy"
          />
          <div
            ref={ref3}
            className={`relative pl-8 border-l-2 border-gold-400/20 max-w-2xl space-y-6 ${vis3 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {timeline.map((item, i) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[25px] w-3 h-3 bg-gold-400 rounded-full" />
                <p className="text-gold-400 font-mono text-base font-bold">{item.year}</p>
                <p className="text-cream/60 text-base leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Festival"
            subtitle="Portland Film Festival is 100% volunteer-run. No paid staff means more resources for films and programming."
          />
          <div
            ref={ref4}
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ${vis4 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {team.map((member) => (
              <div key={member.name} className="card-cinematic p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-gold-400/60" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream mb-1">{member.name}</h3>
                <p className="text-cream/40 text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
            Be Part of the Story
          </h2>
          <p className="text-cream/50 text-lg leading-relaxed mb-8">
            Whether you're a filmmaker, volunteer, sponsor, or film lover — there's a place for you
            at the Portland Film Festival.
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
    </div>
  )
}
