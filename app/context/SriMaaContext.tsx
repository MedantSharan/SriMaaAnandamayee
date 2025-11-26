import React, { createContext, useContext, useState, ReactNode } from "react"
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

export const SriMaaProvider = ({ children }: { children: ReactNode }) => {
  const [ashrams, setAshrams] = useState<Ashram[]>([])
  const [books, setBooks] = useState<Book[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [currentSaying, setCurrentSaying] = useState<Saying | null>(null)
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [isLoadingBooks, setIsLoadingBooks] = useState(false)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

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
