const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || ''
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const GENRES = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
}

export const tmdbApi = {
  getImageUrl: (path, size = 'w500') => {
    if (!path) return null
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
  },

  getImageSrcSet: (path, sizes = ['w185', 'w342', 'w500']) => {
    if (!path) return undefined
    const widthMap = { w92: 92, w154: 154, w185: 185, w342: 342, w500: 500, w780: 780 }
    return sizes.map(s => `${TMDB_IMAGE_BASE_URL}/${s}${path} ${widthMap[s]}w`).join(', ')
  },

  getBackdropUrl: (path, size = 'w1280') => {
    if (!path) return null
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
  },

  getBackdropSrcSet: (path) => {
    if (!path) return undefined
    return [
      `${TMDB_IMAGE_BASE_URL}/w780${path} 780w`,
      `${TMDB_IMAGE_BASE_URL}/w1280${path} 1280w`,
    ].join(', ')
  },

  searchMovies: async (query, page = 1) => {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`
    )
    if (!response.ok) throw new Error('Failed to search movies')
    return response.json()
  },

  getMovieDetails: async (movieId) => {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=videos,credits,similar`
    )
    if (!response.ok) throw new Error('Failed to fetch movie details')
    return response.json()
  },

  discoverMovies: async (options = {}) => {
    const params = new URLSearchParams({
      api_key: TMDB_API_KEY,
      language: 'en-US',
      page: String(options.page || 1),
      sort_by: options.sortBy || 'popularity.desc',
      include_adult: 'false',
      'vote_count.gte': '50',
    })
    if (options.genreId) params.append('with_genres', String(options.genreId))
    if (options.year) params.append('primary_release_year', String(options.year))
    if (options.minRating) params.append('vote_average.gte', String(options.minRating))

    const response = await fetch(`${TMDB_BASE_URL}/discover/movie?${params}`)
    if (!response.ok) throw new Error('Failed to discover movies')
    return response.json()
  },

  getGenreNames: (genreIds) => {
    return genreIds.map((id) => GENRES[id]).filter(Boolean)
  },

  formatRuntime: (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  },

  getTrailerUrl: (videos) => {
    if (!videos?.results) return null
    const trailer =
      videos.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube' && v.official) ||
      videos.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube')
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null
  },

  getDirector: (credits) => {
    if (!credits?.crew) return null
    const director = credits.crew.find((c) => c.job === 'Director')
    return director?.name || null
  },
}
