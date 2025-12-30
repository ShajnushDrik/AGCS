"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "campus", name: "Campus Life" },
  { id: "events", name: "Events" },
  { id: "sports", name: "Sports" },
  { id: "academics", name: "Academics" },
  { id: "arts", name: "Arts & Culture" },
]

const galleryImages = [
  { src: "/gallery-campus-1.jpg", alt: "School Building", category: "campus" },
  { src: "/gallery-sports-1.jpg", alt: "Sports Day", category: "sports" },
  { src: "/gallery-event-1.jpg", alt: "Annual Function", category: "events" },
  { src: "/gallery-academics-1.jpg", alt: "Classroom", category: "academics" },
  { src: "/gallery-arts-1.jpg", alt: "Art Exhibition", category: "arts" },
  { src: "/gallery-campus-2.jpg", alt: "School Garden", category: "campus" },
  { src: "/gallery-sports-2.jpg", alt: "Football Match", category: "sports" },
  { src: "/gallery-event-2.jpg", alt: "Science Fair", category: "events" },
  { src: "/gallery-academics-2.jpg", alt: "Library", category: "academics" },
  { src: "/gallery-arts-2.jpg", alt: "Music Class", category: "arts" },
  { src: "/gallery-campus-3.jpg", alt: "Playground", category: "campus" },
  { src: "/gallery-event-3.jpg", alt: "Prize Distribution", category: "events" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery-hero.jpg" alt="Photo Gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Photo Gallery</h1>
            <p className="text-xl text-balance opacity-90">Capturing moments, creating memories</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                    <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No photos found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">School Videos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="School Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold">[Video Title 1]</h3>
                <p className="text-sm text-muted-foreground">[Brief description]</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Annual Function"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold">[Video Title 2]</h3>
                <p className="text-sm text-muted-foreground">[Brief description]</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
