import { Download, Mail, ArrowUpRight } from 'lucide-react'
import { PageHero, SectionHeading, useReveal } from '../components/UI'

const logos = [
  {
    src: '/logos/piff-logo.png',
    title: 'Primary Logo',
    desc: 'Horizontal lockup with shutter icon. PNG with transparent background.',
    file: '/logos/piff-logo.png',
  },
  {
    src: '/logos/piff-logo-stack.jpg',
    title: 'Stacked Promo Logo',
    desc: 'Vertical layout with festival dates and website URL.',
    file: '/logos/piff-logo-stack.jpg',
  },
  {
    src: '/logos/indie-film-series.jpg',
    title: 'Indie Film Series',
    desc: 'Wordmark for the monthly Indie Film Series program.',
    file: '/logos/indie-film-series.jpg',
  },
  {
    src: '/logos/support-local-voices.jpg',
    title: 'Support Independent Voices',
    desc: 'Hand-lettered badge for the festival tagline and campaign.',
    file: '/logos/support-local-voices.jpg',
  },
]

export default function Media() {
  const [ref1, vis1] = useReveal()
  const [ref2, vis2] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="For Press & Partners"
        title="Media Resources"
        subtitle="Download official Portland Film Festival logos and brand assets for press coverage, partnerships, and promotional use."
      />

      {/* Logo Downloads */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Brand Assets"
            title="Logo Downloads"
            subtitle="Click any logo to download. Please use these official assets when representing the Portland Film Festival."
          />

          <div
            ref={ref1}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {logos.map((logo, i) => (
              <div
                key={logo.title}
                className="card-cinematic group overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Preview */}
                <div className="bg-white p-8 flex items-center justify-center min-h-[200px]">
                  <img
                    src={logo.src}
                    alt={logo.title}
                    className="max-h-40 max-w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream mb-1">
                      {logo.title}
                    </h3>
                    <p className="text-cream/40 text-base leading-relaxed">
                      {logo.desc}
                    </p>
                  </div>
                  <a
                    href={logo.file}
                    download
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10
                               flex items-center justify-center text-cream/50
                               hover:border-gold-400/40 hover:text-gold-400 transition-colors"
                    title={`Download ${logo.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Guidelines"
            title="Brand Usage"
          />
          <div
            ref={ref2}
            className={`max-w-3xl space-y-4 ${vis2 ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {[
              'Do not alter, rotate, or distort the logos in any way.',
              'Maintain clear space around the logo — do not crowd it with other elements.',
              'Use the PNG version (transparent background) when placing the logo over colored or photographic backgrounds.',
              'Do not change the colors of the logos without prior approval.',
              'For co-branding or partnership usage, please contact us for approval.',
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-noir-800/30">
                <span className="text-gold-400 font-mono text-base flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-cream/60 text-base leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Press Inquiries
          </h2>
          <p className="text-cream/50 text-lg leading-relaxed mb-8">
            Need high-resolution assets, additional formats, or have questions about brand usage?
            Reach out to our media team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:media@portlandfilm.org"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" /> Contact Media Team
            </a>
            <a
              href="https://portlandfilm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              portlandfilm.org <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
