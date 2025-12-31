"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Maximize2, LayoutGrid } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { galleryCategories, galleryImages } from "@/data/gallery"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory)
  }, [selectedCategory])

  const groupedImages = useMemo(() => {
    const groups: Record<string, typeof galleryImages> = {}
    filteredImages.forEach(img => {
      const key = img.subcategory || "General"
      if (!groups[key]) groups[key] = []
      groups[key].push(img)
    })
    return groups
  }, [filteredImages])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-maroon-900 overflow-hidden">
        <Image
          src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
          alt="AGCS Campus"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white italic">Photo Gallery</h1>
          <p className="text-white/80 mt-2">
            Moments from Assemblies of God Church School
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b py-4">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {galleryCategories.map(cat => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-12 space-y-16">
        {Object.entries(groupedImages).map(([group, images]) => (
          <div key={group}>
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-maroon-700 pl-4">
              {group}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, idx) => (
                <Card
                  key={idx}
                  className="relative aspect-square overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <Maximize2 className="text-white" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredImages.length === 0 && (
          <div className="text-center text-slate-400 py-20">
            <LayoutGrid size={48} className="mx-auto mb-4 opacity-30" />
            <p>No images available.</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={36} />
          </button>
          <div className="relative w-full max-w-6xl h-[80vh]">
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
