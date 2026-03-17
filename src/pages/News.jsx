import { useState } from 'react'
import { Search, Tag } from 'lucide-react'
import { PageHero, useReveal } from '../components/UI'

const pressArticles = [
  { title: "Portland Film Festival's Future Filmmakers Workshop Opens Up the World of Filmmaking to Students", source: 'Press' },
  { title: 'The Portland Film Festival celebrates its 10th year', source: 'Press' },
  { title: 'Portland Film Festival: How to watch all 400 films', source: 'Press' },
  { title: 'Add these must-see movies to your Portland Film Fest queue', source: 'Press' },
  { title: 'Portland-themed films abound in Portland Film Festival', source: 'Press' },
  { title: 'Portland Film Festival premiering new documentary about conversion therapy', source: 'Press' },
  { title: "Portland Film Festival review: 'I Am We' and the world of multiple personalities", source: 'Press' },
  { title: 'Portland Mercury: A Decade of the Portland Film Festival', source: 'Press' },
  { title: "Portland Film Festival to host domestic abuse panel ahead of 'HIDE' premiere", source: 'Press' },
  { title: 'Portland Film Festival will screen movies at Lloyd Center', source: 'Press' },
  { title: 'Portland Film Festival features "Buffalo Soldiers" by Vancouver filmmaker', source: 'Press' },
  { title: "'Hellboy' Creator Mike Mignola On The Film That Made Him Fall In Love With Monsters", source: 'Press' },
  { title: 'Portland Film Festival and Comcast offer workshop for future filmmakers', source: 'Press' },
  { title: 'Vanessa Del Rio Biopic The Latin From Manhattan Announced As Opening Film At Portland Film Festival', source: 'Press' },
]

const festivalNews = [
  {
    title: 'Call for Entry Submissions for the 2026 Portland Film Festival',
    excerpt: 'Submit your narrative features, documentaries, shorts of all kinds, transmedia, web series, student films, TikToks, Reels, music videos, and more.',
    tag: '2026',
    featured: true,
  },
  {
    title: "Meet Äsk: Portland Film Festival's New Customer Services Manager",
    excerpt: 'Meet Äsk, our customer services manager who happens to be a beautifully crafted moth puppet!',
    tag: 'Festival',
  },
  {
    title: '2025 Slate of Films Including Closer by Kristen Stewart',
    excerpt: 'Over 90 films from around the world with several local films screened at the Center of Native Arts + Cultures.',
    tag: '2025',
  },
  {
    title: 'Joe Stevens Celebrates Sixth Year as Programming Director',
    excerpt: 'From directing traffic to directing film programming — Joe Stevens has come full circle.',
    tag: 'Team',
  },
  {
    title: 'Future Filmmakers Program & Native Arts + Cultures Foundation',
    excerpt: 'Aspiring filmmakers gathered at the Center for Native Arts + Cultures for hands-on movie-making experience.',
    tag: 'Education',
  },
  {
    title: 'USA TODAY Reader\'s Choice Best 10 Film Festivals',
    excerpt: 'The Portland Film Festival is included in the voting for USA TODAY\'s Reader\'s Choice list.',
    tag: 'Awards',
  },
  {
    title: '2024 Portland Film Festival Winning Films Announced',
    excerpt: 'Celebrating independent voices and cinema with award-winning films from the 2024 festival.',
    tag: '2024',
  },
  {
    title: 'INDIGENOUS STORIES Indie Film Series',
    excerpt: 'Two films featuring Indigenous directors at McMenamin\'s Kennedy School.',
    tag: 'Indie Series',
  },
  {
    title: 'PORTLAND STORIES Indie Film Series',
    excerpt: 'Two films featuring Portland directors: Feelings Experiment and Sing to Me Sylvie.',
    tag: 'Indie Series',
  },
  {
    title: 'LATINE STORIES Indie Film Series',
    excerpt: 'Two films featuring woman directors: Esperanza\'s Turn and Street Heroines.',
    tag: 'Indie Series',
  },
  {
    title: 'HORROR Indie Film Series',
    excerpt: 'Two films centering around the genre of horror: Beltane and Moon Garden.',
    tag: 'Indie Series',
  },
  {
    title: 'VOICES OF ABILITY Indie Film Series',
    excerpt: 'Two films centering around the voices of those with disabilities.',
    tag: 'Indie Series',
  },
  {
    title: 'PRIDE Stories Indie Film Series',
    excerpt: 'Two films highlighting LGBTQ+ stories: Brothers and Our Dad, Danielle.',
    tag: 'Indie Series',
  },
  {
    title: 'Mental Health Stories Indie Film Series',
    excerpt: 'Mental Health Awareness Month screenings at McMenamin\'s Kennedy School.',
    tag: 'Indie Series',
  },
  {
    title: 'ECO Stories Indie Film Series',
    excerpt: 'Celebrate Earth Day with Indie Eco Stories at McMenamin\'s Kennedy School.',
    tag: 'Indie Series',
  },
]

const allTags = ['All', ...new Set(festivalNews.map((n) => n.tag))]

function NewsCard({ item, index }) {
  const [ref, vis] = useReveal()
  return (
    <div
      ref={ref}
      className={`card-cinematic p-7 group ${item.featured ? 'md:col-span-2 lg:col-span-1 border-gold-400/20' : ''} ${
        vis ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-3 h-3 text-gold-400" />
        <span className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400">
          {item.tag}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-cream mb-3 leading-snug
                     group-hover:text-gold-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-cream/40 text-base leading-relaxed">{item.excerpt}</p>
    </div>
  )
}

export default function News() {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = festivalNews.filter((n) => {
    const matchesTag = filter === 'All' || n.tag === filter
    const matchesSearch = !searchQuery || n.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="page-enter">
      <PageHero
        label="In the News"
        title="Festival News & Press"
        subtitle="Stay up-to-date with the latest from the Portland Film Festival."
        heroImage="/photos/red-carpet.jpg"
      />

      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-noir-800/60 border border-white/10 pl-10 pr-4 py-2.5 text-base text-cream
                           placeholder-cream/30 focus:outline-none focus:border-gold-400/40 transition-colors"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1.5 text-sm font-mono tracking-wider uppercase transition-all ${
                    filter === tag
                      ? 'bg-gold-400 text-noir-950'
                      : 'border border-white/10 text-cream/50 hover:text-cream hover:border-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Festival News Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {filtered.map((item, i) => (
                <NewsCard key={item.title} item={item} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-cream/30 mb-20">
              No news found matching your search.
            </div>
          )}

          {/* Press Coverage */}
          <div className="border-t border-white/5 pt-16">
            <h2 className="font-display text-2xl font-bold text-cream mb-2">Press Coverage</h2>
            <p className="text-cream/40 text-base mb-8">Recent news articles about the Portland Film Festival.</p>

            <div className="space-y-0 divide-y divide-white/5">
              {pressArticles.map((article, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 hover:bg-noir-800/20 transition-colors px-3 -mx-3"
                >
                  <span className="text-gold-400/40 font-mono text-sm w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-cream/60 text-base flex-1">
                    {article.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
