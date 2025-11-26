import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Ashram, Book, Photo, Event, Post, Saying, Institution } from "../models/types"

interface SriMaaContextType {
  ashrams: Ashram[]
  books: Book[]
  photos: Photo[]
  events: Event[]
  posts: Post[]
  currentSaying: Saying | null
  institutions: Institution[]
  isLoadingBooks: boolean
  isLoadingPosts: boolean

  setAshrams: (ashrams: Ashram[]) => void
  setBooks: (books: Book[]) => void
  setPhotos: (photos: Photo[]) => void
  setEvents: (events: Event[]) => void
  setPosts: (posts: Post[]) => void
  setCurrentSaying: (saying: Saying | null) => void
  setInstitutions: (institutions: Institution[]) => void
}

const SriMaaContext = createContext<SriMaaContextType | undefined>(undefined)

// Dummy Data
const dummyAshrams: Ashram[] = [
  {
    id: "1",
    name: "Kankhal Ashram",
    location: {
      city: "Kankhal",
      state: "Uttarakhand",
      country: "India",
      address: "Near Har Ki Pauri, Kankhal, Haridwar",
      coordinates: { latitude: 29.9457, longitude: 78.1642 },
    },
    history: "Main ashram established in 1932. This is where Ma spent considerable time.",
    significance: "Primary center and location of Ma's Samadhi shrine",
    photoUrl: "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Kankhal+Ashram",
    contact: { phone: "+91-1334-265333", email: "kankhal@anandamayi.org" },
    visitingInfo: {
      darshanTimings: "5:00 AM - 9:00 PM",
      stayOptions: "Guest rooms available, prior booking required",
    },
    tags: ["Main Center", "Samadhi", "Historical"],
  },
  {
    id: "2",
    name: "Varanasi Ashram",
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      country: "India",
      address: "Bhadaini, Varanasi",
    },
    history: "Established in the 1940s in the holy city of Varanasi",
    significance: "Important spiritual center on the banks of Ganga",
    photoUrl: "https://via.placeholder.com/400x300/F7931E/FFFFFF?text=Varanasi+Ashram",
    contact: { phone: "+91-542-2311162" },
    visitingInfo: { darshanTimings: "6:00 AM - 8:00 PM" },
    tags: ["Holy City", "Ganga"],
  },
  {
    id: "3",
    name: "Dehradun Kanyapeeth",
    location: {
      city: "Dehradun",
      state: "Uttarakhand",
      country: "India",
      address: "Kishenpur, Dehradun",
    },
    history: "Educational institution and ashram complex",
    significance: "Girls' school and spiritual center where Ma attained Mahasamadhi",
    photoUrl: "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Dehradun+Kanyapeeth",
    contact: { phone: "+91-135-2781490" },
    visitingInfo: { darshanTimings: "Morning and Evening", stayOptions: "Limited guest facilities" },
    tags: ["Education", "Mahasamadhi Location"],
  },
]

const dummyBooks: Book[] = [
  {
    id: "1",
    title: "Mother As Revealed To Me",
    author: "Bhaiji (Jyotish Chandra Ray)",
    description: "Personal reminiscences of Bhaiji, Ma's closest disciple",
    category: "Biography",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/FF6B35/FFFFFF?text=Mother+As+Revealed",
    pdfUrl: "https://example.com/book1.pdf",
  },
  {
    id: "2",
    title: "Matri Vani - Volume 1",
    author: "Collected Teachings",
    description: "Collection of Ma's teachings and conversations",
    category: "Teachings",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/F7931E/FFFFFF?text=Matri+Vani+Vol+1",
  },
  {
    id: "3",
    title: "Sad Vani",
    author: "Sri Anandamayi Ma",
    description: "Ma's spiritual instructions and guidance",
    category: "Teachings",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/FF6B35/FFFFFF?text=Sad+Vani",
  },
  {
    id: "4",
    title: "As The Flower Sheds Its Fragrance",
    author: "Alexander Lipski",
    description: "Diary of a Western devotee's experiences with Ma",
    category: "Biography",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/F7931E/FFFFFF?text=Flower+Fragrance",
  },
  {
    id: "5",
    title: "Words of Sri Anandamayi Ma",
    author: "Atmananda",
    description: "Compilation of Ma's spiritual wisdom",
    category: "Daily Reflections",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/FF6B35/FFFFFF?text=Words+of+Ma",
  },
  {
    id: "6",
    title: "Anandamayi: Her Life and Wisdom",
    author: "Richard Lannoy",
    description: "Comprehensive biography with photographs",
    category: "Biography",
    language: "English",
    coverImageUrl: "https://via.placeholder.com/200x300/F7931E/FFFFFF?text=Life+and+Wisdom",
  },
]

const dummyPosts: Post[] = [
  {
    id: "1",
    type: "Daily",
    title: "Morning Satsang at Kankhal",
    content: "Join us for morning prayers and meditation",
    date: new Date().toISOString(),
    author: "Ashram Admin",
  },
  {
    id: "2",
    type: "Teaching",
    title: "Ma's Words on Devotion",
    content: "Devotion means constant remembrance of the Divine in all circumstances",
    date: new Date(Date.now() - 86400000).toISOString(),
    author: "Sangha",
  },
  {
    id: "3",
    type: "Event",
    title: "Upcoming Janmotsav Celebration",
    content: "Ma's birth anniversary celebration on April 30th",
    date: new Date(Date.now() - 172800000).toISOString(),
    author: "Events Team",
  },
]

const dummySaying: Saying = {
  id: "1",
  quote: "The same Divine Mother who is within you is in all beings everywhere",
  source: "Matri Vani",
  date: new Date().toISOString(),
}

const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Janmotsav - Birth Anniversary",
    description: "Celebration of Ma's birth anniversary",
    startDate: "2025-04-30T00:00:00Z",
    endDate: "2025-04-30T23:59:59Z",
    location: "All Ashrams",
    type: "Festival",
  },
  {
    id: "2",
    title: "Samadhi Day Observance",
    description: "Commemorating Ma's Mahasamadhi",
    startDate: "2025-08-27T00:00:00Z",
    endDate: "2025-08-27T23:59:59Z",
    location: "Kankhal Ashram",
    type: "Memorial",
  },
  {
    id: "3",
    title: "Monthly Satsang",
    description: "Monthly gathering for devotees",
    startDate: "2025-02-15T10:00:00Z",
    endDate: "2025-02-15T18:00:00Z",
    location: "Varanasi Ashram",
    type: "Satsang",
  },
]

const dummyInstitutions: Institution[] = [
  {
    id: "1",
    name: "Kanyapeeth Girls School",
    type: "Educational",
    location: { city: "Dehradun", state: "Uttarakhand", country: "India" },
    description: "Residential school for girls combining modern and spiritual education",
    establishedYear: 1950,
    contact: { phone: "+91-135-2781490" },
  },
  {
    id: "2",
    name: "Anandamayi Charitable Dispensary",
    type: "Healthcare",
    location: { city: "Kankhal", state: "Uttarakhand", country: "India" },
    description: "Free medical services for the needy",
    contact: { phone: "+91-1334-265333" },
  },
]

const dummyPhotos: Photo[] = [
  {
    id: "1",
    url: "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Ma+in+Samadhi",
    title: "Ma in Samadhi",
    description: "Sri Anandamayi Ma in deep meditation",
    category: "Spiritual",
    uploadDate: new Date().toISOString(),
  },
  {
    id: "2",
    url: "https://via.placeholder.com/400x600/F7931E/FFFFFF?text=Ma+with+Devotees",
    title: "Ma with Devotees",
    description: "Ma blessing her devotees during a gathering",
    category: "Events",
    uploadDate: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    url: "https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Kankhal+Ashram",
    title: "Kankhal Ashram",
    description: "The main ashram in Kankhal where Ma's Samadhi is located",
    category: "Ashrams",
    uploadDate: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "4",
    url: "https://via.placeholder.com/400x400/F7931E/FFFFFF?text=Ma+Smiling",
    title: "Ma's Divine Smile",
    description: "Blessed image of Ma's radiant smile",
    category: "Spiritual",
    uploadDate: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: "5",
    url: "https://via.placeholder.com/500x400/FF6B35/FFFFFF?text=Janmotsav",
    title: "Janmotsav Celebration",
    description: "Annual birth anniversary celebration",
    category: "Events",
    uploadDate: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: "6",
    url: "https://via.placeholder.com/400x500/F7931E/FFFFFF?text=Ma+Darshan",
    title: "Ma Giving Darshan",
    description: "Ma blessing devotees",
    category: "Spiritual",
    uploadDate: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: "7",
    url: "https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Varanasi+Ashram",
    title: "Varanasi Ashram",
    description: "Ashram on the banks of holy Ganga",
    category: "Ashrams",
    uploadDate: new Date(Date.now() - 518400000).toISOString(),
  },
  {
    id: "8",
    url: "https://via.placeholder.com/400x300/F7931E/FFFFFF?text=Satsang",
    title: "Satsang Gathering",
    description: "Devotees gathered for spiritual discourse",
    category: "Events",
    uploadDate: new Date(Date.now() - 604800000).toISOString(),
  },
]

export const SriMaaProvider = ({ children }: { children: ReactNode }) => {
  const [ashrams, setAshrams] = useState<Ashram[]>([])
  const [books, setBooks] = useState<Book[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [currentSaying, setCurrentSaying] = useState<Saying | null>(null)
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [isLoadingBooks] = useState(false)
  const [isLoadingPosts] = useState(false)

  // Load dummy data on mount
  useEffect(() => {
    setAshrams(dummyAshrams)
    setBooks(dummyBooks)
    setPosts(dummyPosts)
    setCurrentSaying(dummySaying)
    setEvents(dummyEvents)
    setInstitutions(dummyInstitutions)
    setPhotos(dummyPhotos)
  }, [])

  return (
    <SriMaaContext.Provider
      value={{
        ashrams,
        books,
        photos,
        events,
        posts,
        currentSaying,
        institutions,
        isLoadingBooks,
        isLoadingPosts,
        setAshrams,
        setBooks,
        setPhotos,
        setEvents,
        setPosts,
        setCurrentSaying,
        setInstitutions,
      }}
    >
      {children}
    </SriMaaContext.Provider>
  )
}

export const useSriMaa = () => {
  const context = useContext(SriMaaContext)
  if (!context) {
    throw new Error("useSriMaa must be used within SriMaaProvider")
  }
  return context
}
