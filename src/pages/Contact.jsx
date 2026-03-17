import { useState } from 'react'
import { MapPin, Mail, Calendar, ArrowUpRight, Send, Phone } from 'lucide-react'
import { PageHero, useReveal } from '../components/UI'

export default function Contact() {
  const [formState, setFormState] = useState({
    first: '', last: '', email: '', zip: '', phone: '', subject: '', message: '', newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { first, last, email, phone, subject, message } = formState
    const body = `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`
    window.location.href = `mailto:info@portlandfilm.org?subject=${encodeURIComponent(subject || 'Website Contact')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const [ref1, vis1] = useReveal()

  return (
    <div className="page-enter">
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="We support independent voices. We want to hear from you!"
      />

      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card-cinematic p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream mb-3">Message Sent!</h3>
                  <p className="text-cream/50">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/60 text-base mb-2">First Name *</label>
                      <input
                        type="text" name="first" required
                        value={formState.first} onChange={handleChange}
                        className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                   placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                   transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/60 text-base mb-2">Last Name *</label>
                      <input
                        type="text" name="last" required
                        value={formState.last} onChange={handleChange}
                        className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                   placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                   transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/60 text-base mb-2">Email *</label>
                      <input
                        type="email" name="email" required
                        value={formState.email} onChange={handleChange}
                        className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                   placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                   transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/60 text-base mb-2">Zip Code *</label>
                      <input
                        type="text" name="zip" required
                        value={formState.zip} onChange={handleChange}
                        className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                   placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                   transition-colors"
                        placeholder="97209"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream/60 text-base mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone"
                      value={formState.phone} onChange={handleChange}
                      className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                 placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                 transition-colors"
                      placeholder="(optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-cream/60 text-base mb-2">Subject</label>
                    <input
                      type="text" name="subject"
                      value={formState.subject} onChange={handleChange}
                      className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                 placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-cream/60 text-base mb-2">Message</label>
                    <textarea
                      name="message" rows={5}
                      value={formState.message} onChange={handleChange}
                      className="w-full bg-noir-800/60 border border-white/10 px-4 py-3 text-cream
                                 placeholder-cream/20 focus:outline-none focus:border-gold-400/40
                                 transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="newsletter"
                      checked={formState.newsletter} onChange={handleChange}
                      className="w-4 h-4 accent-gold-400"
                    />
                    <span className="text-cream/50 text-base">Sign up for our newsletter</span>
                  </label>

                  <button type="submit" className="btn-primary">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div
              ref={ref1}
              className={`lg:col-span-2 space-y-8 ${vis1 ? 'animate-fade-up' : 'opacity-0'}`}
            >
              <div className="card-cinematic p-8">
                <h3 className="font-display text-xl font-semibold text-cream mb-5">Festival Details</h3>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-cream/80 font-medium text-base">2026 Festival Dates</p>
                      <p className="text-cream/50 text-base">September 30 – October 4, 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-cream/80 font-medium text-base">Venue</p>
                      <p className="text-cream/50 text-base leading-relaxed">
                        CNAC Center for Native Arts & Culture<br />
                        (Yale Union Laundry Bldg.)<br />
                        800 S.E. 10th Ave. at Belmont St.<br />
                        Portland, Oregon
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-cream/80 font-medium text-base">Mailing Address</p>
                      <p className="text-cream/50 text-base leading-relaxed">
                        1126 NW Marshall St.<br />
                        Portland, OR 97209
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-cinematic p-8">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Volunteer Inquiries', href: 'mailto:volunteer@portlandfilm.org' },
                    { label: 'portlandfilm.org', href: 'https://portlandfilm.org' },
                    { label: 'pdxff.com', href: 'https://pdxff.com' },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between text-cream/60 hover:text-gold-400
                                 text-base transition-colors py-2 border-b border-white/5 last:border-0"
                    >
                      {link.label} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
