import { useEffect, useRef, useState } from 'react'
import { MapPin, Navigation, X } from 'lucide-react'

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || ''

const VENUES = [
  {
    id: 'cnac',
    name: 'Center for Native Arts + Cultures',
    address: '800 SE 10th Ave, Portland, OR 97214',
    coordinates: [-122.6553, 45.5155],
    description: 'Festival Headquarters — Main screenings and events',
  },
  {
    id: 'kennedy',
    name: "McMenamin's Kennedy School",
    address: '5736 NE 33rd Ave, Portland, OR 97211',
    coordinates: [-122.6314, 45.5589],
    description: 'Monthly Indie Film Series screenings',
  },
  {
    id: 'hollywood',
    name: 'Hollywood Theatre',
    address: '4122 NE Sandy Blvd, Portland, OR 97212',
    coordinates: [-122.6203, 45.5360],
    description: 'Special screenings and midnight movies',
  },
]

export default function VenueMap({ isOpen, onClose }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedVenue, setSelectedVenue] = useState(null)

  useEffect(() => {
    if (!isOpen) {
      setMapLoaded(false)
      return
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !mapContainer.current || map.current) return

    const initMap = () => {
      const mapboxgl = window.mapboxgl
      if (!mapboxgl || !mapContainer.current) return

      mapboxgl.accessToken = MAPBOX_TOKEN

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-122.6428, 45.5351],
        zoom: 11.5,
      })

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

      map.current.on('load', () => {
        setMapLoaded(true)

        VENUES.forEach((venue) => {
          const el = document.createElement('div')
          el.style.cssText = `
            width: 32px; height: 32px;
            background: linear-gradient(135deg, #f4c430, #c44569);
            border: 2px solid #f5f0e8;
            border-radius: 50%;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 2px 12px rgba(244,196,48,0.4);
          `
          el.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#06060a"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3" fill="#06060a"/></svg>`

          el.addEventListener('click', () => {
            setSelectedVenue(venue)
            map.current.flyTo({ center: venue.coordinates, zoom: 14, duration: 1000 })
          })

          new mapboxgl.Marker(el).setLngLat(venue.coordinates).addTo(map.current)
        })
      })
    }

    if (window.mapboxgl) {
      initMap()
    } else {
      if (!document.querySelector('link[href*="mapbox-gl.css"]')) {
        const link = document.createElement('link')
        link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
      }
      const existingScript = document.querySelector('script[src*="mapbox-gl.js"]')
      if (existingScript) {
        if (window.mapboxgl) initMap()
        else existingScript.addEventListener('load', initMap)
      } else {
        const script = document.createElement('script')
        script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js'
        script.async = true
        script.onload = initMap
        document.head.appendChild(script)
      }
    }

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const openDirections = (venue) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates[1]},${venue.coordinates[0]}`,
      '_blank'
    )
  }

  return (
    <div className="fixed inset-0 z-[60] bg-noir-950" role="dialog" aria-modal="true">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-noir-950/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between">
        <h2 className="text-lg font-display font-bold text-cream flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gold-400" />
          Venue Locations
        </h2>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
          aria-label="Close venue map"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Map */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Loading */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-noir-950">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-cream/40">Loading map...</p>
          </div>
        </div>
      )}

      {/* Venue List */}
      <div className="absolute bottom-0 left-0 right-0 bg-noir-900/95 backdrop-blur-md border-t border-white/5 p-4 max-h-[40vh] overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-2">
          {VENUES.map((venue) => (
            <button
              key={venue.id}
              onClick={() => {
                setSelectedVenue(venue)
                map.current?.flyTo({ center: venue.coordinates, zoom: 14, duration: 1000 })
              }}
              className={`w-full text-left p-4 transition-all ${
                selectedVenue?.id === venue.id
                  ? 'bg-gold-400 text-noir-950'
                  : 'bg-noir-800/60 text-cream hover:bg-noir-700/60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{venue.name}</h3>
                  <p
                    className={`text-base ${
                      selectedVenue?.id === venue.id ? 'text-noir-950/70' : 'text-cream/40'
                    }`}
                  >
                    {venue.description}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      selectedVenue?.id === venue.id ? 'text-noir-950/50' : 'text-cream/30'
                    }`}
                  >
                    {venue.address}
                  </p>
                </div>
                {selectedVenue?.id === venue.id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openDirections(venue)
                    }}
                    className="p-2 bg-noir-950/20 hover:bg-noir-950/30 transition-colors ml-2"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { VENUES }
