import { useEffect, useRef, useState } from 'react'

/* ─── Scroll Reveal Hook ─── */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

/* ─── Section Heading ─── */
export function SectionHeading({ label, title, subtitle, align = 'left', light = false }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {label && (
        <span className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-3 block">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-noir-950' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-2xl leading-relaxed ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-noir-700/70' : 'text-cream/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── Marquee Strip ─── */
export function Marquee({ items, separator = '✦' }) {
  const content = items.join(` ${separator} `) + ` ${separator} `
  return (
    <div className="overflow-hidden border-y border-gold-400/10 py-4 bg-noir-900/50">
      <div className="marquee-track">
        <span className="text-gold-400/60 font-mono text-sm tracking-[0.2em] uppercase whitespace-nowrap px-2">
          {content}
        </span>
        <span className="text-gold-400/60 font-mono text-sm tracking-[0.2em] uppercase whitespace-nowrap px-2">
          {content}
        </span>
      </div>
    </div>
  )
}

/* ─── Film Strip Divider ─── */
export function FilmStripDivider() {
  return <div className="divider-sprocket my-0" />
}

/* ─── Stat Card ─── */
export function StatCard({ number, label }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`text-center p-6 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-gold-400 mb-2 text-glow-gold">
        {number}
      </div>
      <div className="text-cream/50 text-base tracking-wide uppercase">{label}</div>
    </div>
  )
}

/* ─── Feature Card ─── */
export function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`card-cinematic p-8 group ${visible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-5
                      group-hover:bg-gold-400/20 transition-colors">
        <Icon className="w-5 h-5 text-gold-400" />
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-cream">{title}</h3>
      <p className="text-cream/50 text-base leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Page Hero ─── */
export function PageHero({ label, title, subtitle, heroImage }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {heroImage ? (
          <>
            <img
              src={heroImage}
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-noir-950/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-transparent to-noir-950/90" />
          </>
        ) : (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                          bg-gold-400/5 rounded-full blur-[120px]" />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {label && (
            <span className="font-mono text-sm tracking-[0.25em] uppercase text-gold-400 mb-4 block animate-fade-in">
              {label}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cream mb-6
                         animate-fade-up text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-cream/60 leading-relaxed animate-fade-up"
               style={{ animationDelay: '100ms' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
    </section>
  )
}
