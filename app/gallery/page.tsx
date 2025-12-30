"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Play, Camera, Maximize2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// --- OFFICIAL AGCS CATEGORIES ---
const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "campus", name: "Campus Life" },
  { id: "events", name: "Events" },
  { id: "academics", name: "Academics" },
]

// --- REAL IMAGE LINKS FROM AGCS.EDU.BD ---
const galleryImages = [
  {
    src: "https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG",
    alt: "Annual Prize Giving Ceremony",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg",
    alt: "Students in Campus Activity",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG",
    alt: "School Cultural Program",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1741670374_DSC_6283%20-%201K%20JPEG.jpg",
    alt: "Daily Campus Life",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702446427_20170914_165758.jpg",
    alt: "Physical Education Session",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702448330_DSC_6262.JPG",
    alt: "School Foundation Day Function",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1703044207_DSC_4132.JPG",
    alt: "Science Fair & Academic Exhibition",
    category: "academics",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702443477_DSC_1540.JPG",
    alt: "Graduation Ceremony",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG",
    alt: "IGCSE 2023 Batch Celebration",
    category: "academics",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702441916_DSC_9870.JPG",
    alt: "Students Assembly",
    category: "campus",
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Official Style Hero Section */}
      <section className="relative h-[450px] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
            alt="AGCS Photo Gallery Banner"
            fill
            priority
            className="object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <Camera className="h-12 w-12 text-yellow-400 mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Photo Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl font-light italic">
            "Capturing moments, creating memories at Assemblies of God Church School"
          </p>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-8 transition-all ${
                  selectedCategory === category.id 
                  ? "bg-blue-900 hover:bg-blue-800 shadow-md" 
                  : "text-blue-900 border-blue-200 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex flex-col items-center justify-center p-6">
                  <Maximize2 className="text-white h-8 w-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
                  <p className="text-white text-sm font-medium mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <Camera className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-xl font-medium">Coming Soon to this category</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-10 w-10" />
          </button>
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              width={1600}
              height={1200}
              className="max-h-full w-auto object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Video Highlight Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">School Video Highlight</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-none shadow-2xl bg-slate-900 rounded-3xl">
              <div className="aspect-video relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-I7uEvPvVyw?si=S4H7l8i2YVuivr3g&autoplay=0"
                  title="Assemblies of God Church School, Dhaka Official Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Experience Our Campus</h3>
                  <p className="text-slate-600">A journey through the academic life at AGCS.</p>
                </div>
                <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 h-12 rounded-xl">
                  <a href="https://www.youtube.com/@AGCSDhaka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Play className="h-4 w-4 fill-current" /> Official YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
