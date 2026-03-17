import { Link } from 'react-router-dom'
import {
  Users, Laptop, Star, Palette, Megaphone, Film, Gift, Ticket,
  ShoppingBag, Shirt, ArrowRight, ArrowUpRight, Heart, Mail
} from 'lucide-react'
import { PageHero, SectionHeading, FeatureCard, useReveal, FilmStripDivider } from '../components/UI'

const opportunities = [
  { icon: Users, title: 'Community Outreach', desc: 'Connect with neighborhoods and local communities to spread the word.' },
  { icon: Laptop, title: 'IT / Tech Support', desc: 'Help with technical setup and support during screenings and events.' },
  { icon: Star, title: 'VIP & Filmmaker Liaison', desc: 'Welcome and assist visiting filmmakers and VIP guests.' },
  { icon: Palette, title: 'Graphic Design', desc: 'Create visual materials for festival promotion and branding.' },
  { icon: Megaphone, title: 'Social Media & Influencer', desc: 'Amplify the festival through social media and influencer outreach.' },
]

const benefits = [
  { icon: Film, text: 'See behind the scenes of a film festival' },
  { icon: Gift, text: 'Watch movies before their release' },
  { icon: Users, text: 'Meet filmmakers and cool people' },
  { icon: Shirt, text: 'Free t-shirt after your first shift' },
  { icon: Ticket, text: 'Opportunity to earn a festival pass' },
  { icon: ShoppingBag, text: 'Discounts on merchandise' },
]

export default function Volunteer() {
  const [ref1, vis1] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Join Our Team"
        title="Volunteer at the Portland Film Festival"
        subtitle="For over a decade, the Portland Film Festival has thrived because of the generous support of volunteers. We have fun opportunities before, during, and after the festival."
        heroImage="/photos/volunteers.jpg"
      />

      {/* Opportunities */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Open Positions"
            title="Volunteer Opportunities"
            subtitle="Volunteering at any level of the festival is exciting. Here are some of our current needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {opportunities.map((opp, i) => (
              <FeatureCard
                key={opp.title}
                icon={opp.icon}
                title={opp.title}
                description={opp.desc}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <FilmStripDivider />

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Perks"
            title="Benefits of Volunteering"
            align="center"
          />
          <div
            ref={ref1}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto ${
              vis1 ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 border border-white/5 bg-noir-800/30"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <b.icon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-cream/70 text-base">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-cream/50 text-lg leading-relaxed mb-4">
            2026 Festival: September 30 – October 4
          </p>
          <p className="text-cream/50 text-lg leading-relaxed mb-8">
            Group, corporate, and organization volunteer opportunities are also available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://portlandfilm.org/volunteer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Sign Up to Volunteer <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <a href="mailto:volunteer@portlandfilm.org" className="inline-flex items-center justify-center gap-2 text-cream/40 hover:text-gold-400 text-base transition-colors">
            <Mail className="w-4 h-4" />
            <span>volunteer@portlandfilm.org</span>
          </a>
        </div>
      </section>

      {/* Donate */}
      <section className="py-16 md:py-20 bg-noir-900/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Heart className="w-8 h-8 text-rose mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-cream mb-3">
            Save Independent Voices
          </h3>
          <p className="text-cream/50 text-base leading-relaxed mb-6 max-w-xl mx-auto">
            The Portland Film Festival is a 501(c)(3) non-profit. Your donations help amplify
            independent voices and provide educational experiences to kids, young adults, seniors, and community members.
            Donations may be tax deductible.
          </p>
          <a
            href="https://portlandfilm.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Donate Now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
