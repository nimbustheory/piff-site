import { useState, useEffect } from 'react'
import { Star, Clock, User, Play, X, Film as FilmIcon } from 'lucide-react'
import { PageHero, SectionHeading, useReveal } from '../components/UI'
import { tmdbApi, GENRES } from '../utils/tmdb'

/* ─── Real 2025 Portland Film Festival Selections (TMDB IDs) ─── */
const FESTIVAL_FILMS = {
  'Features': [
    { id: 524635, category: 'Narrative Feature' },    // The Chronology of Water — dir. Kristen Stewart
    { id: 1144932, category: 'Narrative Feature' },   // Queen of the Ring — dir. Ash Avildsen (Opening Night)
    { id: 1065661, category: 'Narrative Feature' },   // Chaperone — dir. Zoe Eisenberg (Slamdance winner)
    { id: 1429714, category: 'Narrative Feature' },   // Trash Baby — dir. Jacy Mairs (Portland-made)
    { id: 977000, category: 'Horror' },               // Moon Garden — dir. Ryan Stevens Harris
  ],
  'Documentaries': [
    { id: 961809, category: 'Documentary' },          // Street Heroines — dir. Alexandra Henry
    { id: 689862, category: 'Documentary' },          // For Walter and Josiah — dir. Jamie Elias (Indigenous)
    { id: 914557, category: 'Documentary' },          // Our Dad, Danielle — dir. S.E. King (LGBTQ+)
    { id: 1420948, category: 'Documentary' },         // Saints and Warriors — dir. Patrick Shannon (Indigenous)
    { id: 542012, category: 'Documentary' },          // Wajd: Songs of Separation — dir. Amar Chebib
  ],
}

/* ─── Additional festival films not on TMDB (shorts, local films) ─── */
const FESTIVAL_SHORTS = [
  { title: 'Handwoven', director: 'Mason Cazalet, Mihika Das, Dasha Levin & Matthew Wisdom', category: 'Documentary Short · Indigenous', description: 'Portrait of Nikyle Begay, a non-binary shepherd and weaver, filmed in Ganado, Arizona.' },
  { title: "Esperanza's Turn", director: 'Melissa Gregory Rue', category: "Narrative Short · Women's Stories", description: 'Story of a 12-year-old immigrant farm worker navigating childhood and responsibility.' },
  { title: 'Sing to Me Sylvie', director: 'Jannette Bloom', category: 'Narrative Feature · Portland', description: 'Shot entirely in Portland with local cast and crew.' },
  { title: 'Karaoke From Hell', director: 'Chip Mabry & Ben Mercer', category: 'Documentary · Portland', description: "World premiere. The story of the world's first live karaoke band from 1990s Portland." },
  { title: "Death's Door", director: 'Cara Ehlenfeldt & Ben Edwards', category: 'Short · Coming-of-Age', description: 'Family-friendly film about a teen who befriends Death.' },
  { title: "A Bird Hit My Window and Now I'm a Lesbian", director: 'Carmela Marie Murphy & AJ Dubler', category: 'Animated Short · Queer Stories', description: 'Stop-motion animated student film from the School of the Art Institute of Chicago.' },
  { title: 'Feelings Experiment', director: 'Portland Director', category: 'Short · Portland', description: 'By a Portland-based filmmaker, screened as part of the Portland Directors program.' },
  { title: 'Beltane', director: 'Festival Selection', category: 'Short · Horror', description: 'Screened as part of the festival horror programming block.' },
  { title: 'Brothers', director: 'Festival Selection', category: 'Narrative Short · Pride Stories', description: 'A story following a group of transmen.' },
]

/* ─── Film Card ─── */
function FilmCard({ film, onClick, index }) {
  const [ref, visible] = useReveal()
  const rating = film.vote_average?.toFixed(1)
  const year = film.release_date?.slice(0, 4)
  const posterUrl = tmdbApi.getImageUrl(film.poster_path, 'w342')
  const posterSrcSet = tmdbApi.getImageSrcSet(film.poster_path, ['w185', 'w342', 'w500'])

  return (
    <div
      ref={ref}
      onClick={() => onClick(film)}
      className={`group cursor-pointer ${visible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${(index % 8) * 60}ms` }}
    >
      <div className="relative aspect-[2/3] bg-noir-800 overflow-hidden mb-3">
        {posterUrl ? (
          <img
            src={posterUrl}
            srcSet={posterSrcSet}
            sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-cream/20">
            <Play className="w-12 h-12" />
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-noir-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">View Details</span>
        </div>
        {/* Rating badge */}
        {rating && (
          <div className="absolute top-2 right-2 bg-noir-950/80 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span className="text-cream text-sm font-medium">{rating}</span>
          </div>
        )}
      </div>
      <h3 className="font-display text-base font-semibold text-cream group-hover:text-gold-400 transition-colors leading-snug">
        {film.title}
      </h3>
      <p className="text-cream/40 text-sm mt-1">
        {year} {film.category && `· ${film.category}`}
      </p>
    </div>
  )
}

/* ─── Film Detail Modal ─── */
function FilmModal({ film, details, onClose, loading }) {
  if (!film) return null

  const backdropPath = details?.backdrop_path || film.backdrop_path
  const backdropUrl = tmdbApi.getBackdropUrl(backdropPath)
  const backdropSrcSet = tmdbApi.getBackdropSrcSet(backdropPath)
  const posterPath = details?.poster_path || film.poster_path
  const posterUrl = tmdbApi.getImageUrl(posterPath, 'w500')
  const director = details ? tmdbApi.getDirector(details.credits) : null
  const trailerUrl = details ? tmdbApi.getTrailerUrl(details.videos) : null
  const genres = details?.genres?.map((g) => g.name) || tmdbApi.getGenreNames(film.genre_ids || [])
  const cast = details?.credits?.cast?.slice(0, 8) || []
  const runtime = details?.runtime ? tmdbApi.formatRuntime(details.runtime) : null

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-noir-950/95 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-w-4xl mx-auto my-8 md:my-16">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-noir-950/80 backdrop-blur-sm flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Backdrop */}
        {backdropUrl && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={backdropUrl} srcSet={backdropSrcSet} sizes="(min-width: 896px) 896px, 100vw" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-transparent" />
          </div>
        )}

        <div className="relative bg-noir-900 px-6 md:px-10 pb-10 -mt-20">
          <div className="flex flex-col md:flex-row gap-8 pt-4">
            {/* Poster */}
            {posterUrl && (
              <div className="w-40 flex-shrink-0 -mt-24 relative z-10 hidden md:block">
                <img src={posterUrl} alt={film.title} className="w-full shadow-2xl" loading="lazy" decoding="async" />
              </div>
            )}

            {/* Info */}
            <div className="flex-1 pt-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">
                {details?.title || film.title}
              </h2>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-cream/50 text-base mb-4">
                {film.release_date && <span>{film.release_date.slice(0, 4)}</span>}
                {runtime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {runtime}
                  </span>
                )}
                {director && (
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {director}
                  </span>
                )}
                {details?.vote_average > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    {details.vote_average.toFixed(1)}
                  </span>
                )}
              </div>

              {/* Genres */}
              {genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {genres.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 text-sm font-mono tracking-wider uppercase border border-gold-400/20 text-gold-400/70"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              )}

              {/* Tagline */}
              {details?.tagline && (
                <p className="font-display italic text-cream/50 text-lg mb-4">"{details.tagline}"</p>
              )}

              {/* Synopsis */}
              <p className="text-cream/60 leading-relaxed mb-6">
                {details?.overview || film.overview}
              </p>

              {/* Trailer */}
              {trailerUrl && (
                <div className="mb-8">
                  <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-3">
                    Trailer
                  </h3>
                  <div className="aspect-video bg-noir-950">
                    <iframe
                      src={trailerUrl}
                      title="Trailer"
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              )}

              {/* Cast */}
              {cast.length > 0 && (
                <div>
                  <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-gold-400 mb-3">
                    Cast
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cast.map((c) => (
                      <div key={c.id} className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden bg-noir-800">
                          {c.profile_path ? (
                            <img
                              src={tmdbApi.getImageUrl(c.profile_path, 'w185')}
                              alt={c.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-cream/20">
                              <User className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                        <p className="text-cream text-sm font-medium leading-tight">{c.name}</p>
                        <p className="text-cream/30 text-sm leading-tight">{c.character}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Films Page ─── */
export default function Films() {
  const [films, setFilms] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [filmDetails, setFilmDetails] = useState(null)
  const [detailsLoading, setDetailsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('Features')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)

  // Load curated festival films (parallel fetch for speed)
  useEffect(() => {
    let cancelled = false
    async function loadFilms() {
      setLoading(true)
      const results = {}
      const sections = Object.entries(FESTIVAL_FILMS)

      // Fetch all sections in parallel
      await Promise.all(
        sections.map(async ([section, filmList]) => {
          const loaded = await Promise.all(
            filmList.map(async (entry) => {
              try {
                const data = await tmdbApi.getMovieDetails(entry.id)
                return { ...data, category: entry.category }
              } catch {
                return null
              }
            })
          )
          if (!cancelled) results[section] = loaded.filter(Boolean)
        })
      )

      if (!cancelled) {
        setFilms(results)
        setLoading(false)
      }
    }
    loadFilms()
    return () => { cancelled = true }
  }, [])

  // Handle film click — load details
  const handleFilmClick = async (film) => {
    setSelectedFilm(film)
    if (film.credits) {
      setFilmDetails(film) // already have full details
      return
    }
    setDetailsLoading(true)
    try {
      const details = await tmdbApi.getMovieDetails(film.id)
      setFilmDetails(details)
    } catch {
      setFilmDetails(null)
    }
    setDetailsLoading(false)
  }

  // Search handler
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }
    const timer = setTimeout(async () => {
      setSearching(true)
      try {
        const data = await tmdbApi.searchMovies(searchQuery)
        setSearchResults(data.results.slice(0, 12))
      } catch {
        setSearchResults([])
      }
      setSearching(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const tabs = Object.keys(FESTIVAL_FILMS)
  const displayFilms = searchQuery.trim()
    ? searchResults
    : films[activeTab] || []

  return (
    <div className="page-enter">
      <PageHero
        label="2025 Official Selections"
        title="Festival Film Gallery"
        subtitle="Browse real selections from the 2025 Portland Film Festival — 90+ films from around the world screened at the Center for Native Arts & Cultures. Click any film for details, trailers, and cast."
      />

      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search + Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-sm">
              <input
                type="text"
                placeholder="Search any film..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-noir-800/60 border border-white/10 pl-4 pr-4 py-2.5 text-base text-cream
                           placeholder-cream/30 focus:outline-none focus:border-gold-400/40 transition-colors"
              />
            </div>
            {!searchQuery && (
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-sm font-mono tracking-wider uppercase transition-all ${
                      activeTab === tab
                        ? 'bg-gold-400 text-noir-950'
                        : 'border border-white/10 text-cream/50 hover:text-cream hover:border-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && !searchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-[2/3] bg-noir-800 animate-pulse mb-3" />
                  <div className="h-4 bg-noir-800 animate-pulse w-3/4 mb-1" />
                  <div className="h-3 bg-noir-800 animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          )}

          {/* Search indicator */}
          {searchQuery && searching && (
            <p className="text-cream/30 text-base mb-8">Searching...</p>
          )}

          {/* Film Grid */}
          {displayFilms.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {displayFilms.map((film, i) => (
                <FilmCard key={film.id} film={film} onClick={handleFilmClick} index={i} />
              ))}
            </div>
          )}

          {/* Empty states */}
          {!loading && !searchQuery && displayFilms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream/30">
                No films loaded. Make sure your TMDB API key is configured.
              </p>
              <p className="text-cream/20 text-base mt-2">
                Add VITE_TMDB_API_KEY to your .env file
              </p>
            </div>
          )}

          {searchQuery && !searching && searchResults.length === 0 && (
            <div className="text-center py-16 text-cream/30">
              No films found for "{searchQuery}"
            </div>
          )}

          {/* TMDB Attribution */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-cream/20 text-sm">
              Film data provided by{' '}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold-400 transition-colors"
              >
                The Movie Database (TMDB)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Shorts & Local Films */}
      {!searchQuery && (
        <section className="py-20 md:py-28 bg-noir-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              label="Shorts & Local"
              title="More from the 2025 Festival"
              subtitle="Short films, Portland-made features, and emerging voices — the heart of our programming."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FESTIVAL_SHORTS.map((film) => (
                <div key={film.title} className="p-6 border border-white/5 bg-noir-800/30 hover:border-gold-400/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FilmIcon className="w-5 h-5 text-gold-400/60" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-cream mb-1">{film.title}</h3>
                      <p className="text-gold-400/70 font-mono text-sm tracking-wider uppercase mb-2">{film.category}</p>
                      <p className="text-cream/40 text-sm leading-relaxed mb-2">{film.description}</p>
                      <p className="text-cream/30 text-sm">Dir. {film.director}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-cream/20 text-sm mt-8 text-center">
              The 2025 festival screened 90+ films. Full programming available at{' '}
              <a href="https://pdxff.com" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold-400 transition-colors">
                pdxff.com
              </a>
            </p>
          </div>
        </section>
      )}

      {/* Detail Modal */}
      {selectedFilm && (
        <FilmModal
          film={selectedFilm}
          details={filmDetails}
          loading={detailsLoading}
          onClose={() => {
            setSelectedFilm(null)
            setFilmDetails(null)
          }}
        />
      )}
    </div>
  )
}
