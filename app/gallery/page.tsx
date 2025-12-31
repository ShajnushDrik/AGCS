"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Camera, Maximize2, Play, LayoutGrid } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// --- OFFICIAL AGCS CATEGORIES ---
const galleryCategories = [
  { id: "all", name: "All Moments" },
  { id: "sports", name: "Sports Class" },
  { id: "arts", name: "Art & Culture" },
  { id: "campus", name: "Campus Life" },
  { id: "events", name: "School Events" },
  { id: "academic", name: "Academic Lab" },
]

// --- DATASET ---
const galleryImages = [
  { src: "https://agcs.edu.bd/storage/images/images/1702446427_20170914_165758.jpg", alt: "Students engaged in Sports Day activities", category: "sports" },
  { src: "https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg", alt: "Outdoor Physical Education", category: "sports" },
  { src: "https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG", alt: "Annual Dance Competition performance", category: "arts" },
  { src: "https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG", alt: "Art and Cultural Program highlights", category: "arts" },
  { src: "https://agcs.edu.bd/storage/images/images/1741670374_DSC_6283%20-%201K%20JPEG.jpg", alt: "Morning School Assembly at AGCS Dhaka", category: "campus" },
  { src: "https://agcs.edu.bd/storage/images/images/1702441916_DSC_9870.JPG", alt: "Students gathering in the main courtyard", category: "campus" },
  { src: "https://agcs.edu.bd/storage/images/images/1702443477_DSC_1540.JPG", alt: "Graduation Ceremony for the Class of 2023", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1702448330_DSC_6262.JPG", alt: "Foundation Day Celebration", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG", alt: "IGCSE Batch celebration and achievement", category: "events" },
  { src: "https://agcs.edu.bd/storage/images/images/1703044207_DSC_4132.JPG", alt: "Students in the Science Laboratory", category: "academic" },
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

      <section className="relative h-[300px] flex items-center justify-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
            alt="AGCS Banner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 italic">Photo Gallery</h1>
          <p className="text-blue-100 italic">{"Capturing moments at Assemblies of God Church School"}</p>
        </div>
      </section>

      <section className="sticky top-0 z-40 py-4 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {galleryCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
              className="rounded-full"
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, idx) => (
            <Card
              key={idx}
              className="group relative aspect-square overflow-hidden cursor-pointer border-none shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-white text-center text-sm font-bold">{image.alt}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-5 right-5 text-white"><X size={40} /></button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image src={selectedImage} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
