/**
 * Type definitions for Sri Maa App
 * All data models and interfaces for the application
 */

// ============================================
// ASHRAM TYPES
// ============================================

export interface Ashram {
  id: string
  name: string
  location: {
    city: string
    state: string
    country: string
    address: string
    coordinates?: {
      latitude: number
      longitude: number
    }
  }
  history: string
  significance: string
  photoUrl: string
  contact: {
    inCharge?: string
    phone?: string
    email?: string
  }
  visitingInfo: {
    darshanTimings?: string
    stayOptions?: string
    guidelines?: string
  }
  tags: string[] // e.g., "Main Centre", "Historic", "Retreat Centre"
}

// ============================================
// LIBRARY / BOOK TYPES
// ============================================

export interface Book {
  id: string
  title: string
  author: string
  language: string
  description: string
  coverImageUrl: string
  category: string // "Biography", "Talks", "Letters", etc.
  content?: {
    type: "html" | "markdown" | "text"
    data: string
  }
  pdfUrl?: string
  isDownloaded: boolean
  downloadedPath?: string
}

// ============================================
// PHOTO TYPES
// ============================================

export interface Photo {
  id: string
  imageUrl: string
  title: string
  description: string
  caption?: string
  location?: string
  date?: string
  tags: string[] // e.g., "Vrindavan", "Kashi", "Darshan", "Samadhi"
  isCached: boolean
}

// ============================================
// EVENT TYPES
// ============================================

export interface Event {
  id: string
  title: string
  description: string
  location: string
  startDate: string // ISO string
  endDate: string // ISO string
  isOnline: boolean
  isPhysical: boolean
  registrationUrl?: string
  livestreamUrl?: string
  organizer?: string
  imageUrl?: string
  tags: string[]
}

// ============================================
// POST / FEED TYPES
// ============================================

export type PostType = "Daily" | "Bhajan" | "Event" | "Teaching" | "Announcement"

export interface Post {
  id: string
  type: PostType
  title: string
  body: string
  imageUrl?: string
  videoUrl?: string
  attachments?: {
    type: "pdf" | "audio" | "video"
    url: string
    title: string
  }[]
  tags: string[]
  category: string
  timestamp: string // ISO string
  isRead: boolean
}

// ============================================
// SAYING OF THE DAY
// ============================================

export interface Saying {
  id: string
  quote: string
  source?: string // Book/talk reference
  date: string // ISO string
  imageUrl?: string
}

// ============================================
// INSTITUTION TYPES
// ============================================

export type InstitutionCategory =
  | "Kanyapeeth"
  | "Vidyapeeth"
  | "Hospital"
  | "Education"
  | "Trust"
  | "Other"

export interface Institution {
  id: string
  name: string
  category: InstitutionCategory
  description: string
  location: string
  websiteUrl?: string
  contact: {
    phone?: string
    email?: string
    address?: string
  }
  photoUrl?: string
}

// ============================================
// GUIDANCE / FAQ TYPES
// ============================================

export interface GuidanceSection {
  id: string
  title: string
  content: string // Markdown or HTML
  order: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// ============================================
// ABOUT / HISTORY TYPES
// ============================================

export interface AboutContent {
  id: string
  section: "sri_maa" | "sangha" | "recent_updates" | "diksha"
  title: string
  content: string // Markdown or HTML
  imageUrl?: string
  lastUpdated: string
}

// ============================================
// THEME TYPES
// ============================================

export interface ThemeConfig {
  id: string
  name: string
  startDate?: string // ISO string - optional for default theme
  endDate?: string // ISO string - optional for default theme
  colors: {
    primary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
  }
  gradients?: {
    primary?: string[]
    background?: string[]
  }
  bannerImageUrl?: string
  appIconKey?: string // For future dynamic icon switching
  fonts?: {
    heading?: string
    body?: string
  }
}

export interface ThemeData {
  version: string
  defaultTheme: ThemeConfig
  festivalThemes: ThemeConfig[]
}

// ============================================
// NOTIFICATION TYPES
// ============================================

export interface NotificationConfig {
  enabled: boolean
  dailySayingEnabled: boolean
  dailySayingTime: string // HH:MM format
  newPostsEnabled: boolean
  newEventsEnabled: boolean
}

// ============================================
// ADMIN TYPES
// ============================================

export interface AdminPost {
  title: string
  body: string
  type: PostType
  category: string
  imageUrl?: string
  tags: string[]
  attachments?: {
    type: "pdf" | "audio" | "video"
    url: string
    title: string
  }[]
}

export interface AdminEvent {
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
  isOnline: boolean
  isPhysical: boolean
  registrationUrl?: string
  livestreamUrl?: string
}

export interface AdminSaying {
  quote: string
  source?: string
  date: string
}

// ============================================
// APP CONFIG TYPES
// ============================================

export interface AppConfig {
  version: string
  apiBaseUrl: string
  adminSecretKey: string
  endpoints: {
    ashrams: string
    books: string
    photos: string
    events: string
    posts: string
    sayings: string
    institutions: string
    guidance: string
    about: string
    theme: string
  }
  features: {
    offlineMode: boolean
    notifications: boolean
    adminPanel: boolean
  }
}

// ============================================
// CACHE / OFFLINE TYPES
// ============================================

export interface CacheMetadata {
  key: string
  timestamp: string
  expiresAt?: string
  size?: number
}

export interface OfflineData {
  ashrams: Ashram[]
  books: Book[]
  photos: Photo[]
  events: Event[]
  posts: Post[]
  currentSaying?: Saying
  theme: ThemeConfig
  lastSync: string
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
