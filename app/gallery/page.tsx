"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Camera, Maximize2, Play, LayoutGrid } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// --- OFFICIAL AGCS CATEGORIES (Extracted from agcs.edu.bd) ---
const galleryCategories = [
  { id: "all", name: "All Moments" },
  { id: "sports", name: "Sports Class" },
  { id: "arts", name: "Art & Culture" },
  { id: "campus", name: "Campus Life" },
  { id: "events", name: "School Events" },
  { id: "academic", name: "Academic Lab" },
]

// --- COMPREHENSIVE DATASET FROM AGCS.EDU.BD ---
const galleryImages = [
  // SPORTS CLASS
  { src: "https://agcs.edu.bd/storage/images/images/1702446427_20170914_165758.jpg", alt: "Students engaged in Sports Day activities", category: "sports" },
  { src: "https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg", alt: "Outdoor Physical Education", category: "sports" },
  
  // DANCE & ART COMPETITION
  { src: "https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG", alt: "Annual Dance Competition performance", category: "arts" },
  { src: "https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG", alt: "Art and Cultural Program highlights", category: "arts" },
  
  // CAMPUS LIFE & ASSEMBLY
  { src: "https://agcs.edu.bd/storage/images/images/1741670374_DSC_6283%20-%201K%20JPEG.jpg", alt: "Morning School Assembly at AGCS Dhaka", category: "campus" },
  { src: "https://agcs.edu.bd/storage/images/images/1702441916_DSC_9870.JPG", alt: "Students gathering in the main courtyard", category: "campus" },
  
  // SCHOOL EVENTS (Graduation, Relief Work, etc)
  { src: "https://agcs.edu.bd/storage/images/images/1702443477_DSC_1540.JPG", alt: "Graduation Ceremony for the Class of 2023", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1702448330_DSC_6262.JPG", alt: "Foundation Day Celebration", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG", alt: "IGCSE Batch celebration and achievement", category: "events" },

  // ACADEMIC & COMPUTER LAB
  { src: "https://agcs.edu.bd/storage/images/images/1703044207_DSC_4132.JPG", alt: "Students in the Science Laboratory", category: "academic" },
  { src: "https://agcs.edu.bd/storage/images/images/1702446101_DSC_2922.JPG", alt: "Computer Lab Session", category: "academic" },
]

export default function GalleryPage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = useMemo(() => {
    return selectedCategory === "all" 
      ? galleryImages 
      : galleryImages.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
            alt="AGCS Campus Banner"
            fill
            priority
            className="object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-950/60 to-slate-50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-1.5 rounded-full mb-6">
            <Camera className="h-4 w-4 text-yellow-500" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Visual Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-yellow-500">Gallery</span>
          </h1>
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {"Witness the vibrant academic life and cultural heritage of Assemblies of God Church School."}
          </p>
        </div>
      </section>

      {/* Filter Bar (Glassmorphism) */}
      <section className="sticky top-[64px] z-40 py-6 bg-slate-50/70 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center justify-start md:justify-center gap-3 min-w-max pb-2 md:pb-0">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                  selectedCategory === cat.id
                    ? "bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-900/30 hover:text-blue-900"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="group relative aspect-[3/4] overflow-hidden border-none cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-yellow-500 w-12 h-1 mb-4 rounded-full" />
                  <p className="text-white text-lg font-bold leading-tight mb-2 uppercase tracking-wide">
                    {image.category.replace('-', ' ')}
                  </p>
                  <p className="text-blue-100/90 text-sm line-clamp-2 italic">
                    {image.alt}
                  </p>
                  <div className="mt-6 flex items-center text-white text-sm font-bold gap-2">
                    <Maximize2 size={16} className="text-yellow-500" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-slate-400">
            <LayoutGrid size={64} className="mb-4 opacity-20" />
            <p className="text-xl font-medium">{"Updating our archives for this category..."}</p>
          </div>
        )}
      </section>

      {/* Featured Video Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
                Campus <span className="text-blue-700">Insights</span> Through Our Lens
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {"Assembly of God Church School isn't just about buildings; it's about the vibrant energy our students bring to every event. From high-stakes sports competitions to artistic exhibitions, experience the heart of our community."}
              </p>
              <div className="flex items-center gap-6 pt-4">
                 <div className="flex flex-col">
                   <span className="text-3xl font-black text-blue-900">70+</span>
                   <span className="text-slate-500 text-sm font-bold uppercase">Years of Legacy</span>
                 </div>
                 <div className="w-px h-12 bg-slate-200" />
                 <div className="flex flex-col">
                   <span className="text-3xl font-black text-blue-900">5k+</span>
                   <span className="text-slate-500 text-sm font-bold uppercase">Memories Captured</span>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-slate-100 group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-I7uEvPvVyw"
                  title="AGCS Official Campus Video"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-blue-950/95 z-[999] flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md">
            <X size={32} />
          </button>
          <div className="relative w-full max-w-6xl aspect-[4/3]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
    </div>
  )
}
