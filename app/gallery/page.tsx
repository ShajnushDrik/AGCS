"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Camera, Maximize2, LayoutGrid } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// --- CATEGORIES ---
const galleryCategories = [
  { id: "all", name: "All Moments" },
  { id: "sports", name: "Sports Class" },
  { id: "arts", name: "Art & Culture" },
  { id: "campus", name: "Campus Life" },
  { id: "events", name: "School Events" },
  { id: "academic", name: "Academic Lab" },
]

// --- IMAGE DATA ---
const galleryImages = [
  { src: "https://agcs.edu.bd/storage/images/images/1702446427_20170914_165758.jpg", alt: "Students engaged in Sports Day", category: "sports" },
  { src: "https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg", alt: "Outdoor Physical Education", category: "sports" },
  { src: "https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG", alt: "Annual Dance Competition", category: "arts" },
  { src: "https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG", alt: "Art and Cultural Program", category: "arts" },
  { src: "https://agcs.edu.bd/storage/images/images/1741670374_DSC_6283%20-%201K%20JPEG.jpg", alt: "Morning School Assembly", category: "campus" },
  { src: "https://agcs.edu.bd/storage/images/images/1702441916_DSC_9870.JPG", alt: "Students gathering in courtyard", category: "campus" },
  { src: "https://agcs.edu.bd/storage/images/images/1702443477_DSC_1540.JPG", alt: "Graduation Ceremony", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1702448330_DSC_6262.JPG", alt: "Foundation Day Celebration", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG", alt: "IGCSE Batch celebration", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1703044207_DSC_4132.JPG", alt: "Science Laboratory", category: "academic" },
  { src: "https://agcs.edu.bd/storage/images/images/1702446101_DSC_2922.JPG", alt: "Computer Lab Session", category: "academic" },
]

export default function GalleryPage() {
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

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
            alt="AGCS Campus Banner"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-2 italic">Photo Gallery</h1>
          <p className="text-blue-100 italic">{"Capturing moments at Assemblies of God Church School"}</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 py-4 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="rounded-full px-6"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, idx) => (
            <Card
              key={idx}
              className="group relative aspect-square overflow-hidden cursor-pointer border-none rounded-xl shadow-md"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                <Maximize2 className="text-white mb-2" size={24} />
                <p className="text-white text-center text-xs font-bold uppercase tracking-widest">{image.alt}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <LayoutGrid size={48} className="mb-4 opacity-20" />
            <p>{"No images found in this category."}</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image 
              src={selectedImage} 
              alt="Fullscreen Preview" 
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
