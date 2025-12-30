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
  { id: "academics", name: "Academics" },
]

const galleryImages = [
  {
    src: "https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG",
    alt: "School Event",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg",
    alt: "Campus Activity",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG",
    alt: "School Program",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1741670374_DSC_6283%20-%201K%20JPEG.jpg",
    alt: "Campus Life",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702446427_20170914_165758.jpg",
    alt: "School Activity",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702448330_DSC_6262.JPG",
    alt: "School Function",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1703044207_DSC_4132.JPG",
    alt: "Academic Event",
    category: "academics",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702443477_DSC_1540.JPG",
    alt: "School Ceremony",
    category: "events",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG",
    alt: "IGCSE 2023",
    category: "academics",
  },
  {
    src: "https://agcs.edu.bd/storage/images/images/1702441916_DSC_9870.JPG",
    alt: "School Gathering",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/sliders/1707033914_01.jpg",
    alt: "School Building",
    category: "campus",
  },
  {
    src: "https://agcs.edu.bd/storage/images/sliders/1707033919_02.jpg",
    alt: "School Campus",
    category: "campus",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section - Real image */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033963_04.jpg"
            alt="AGCS Photo Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Photo Gallery</h1>
            <p className="text-xl text-balance opacity-90">Capturing moments, creating memories at AGCS</p>
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
                    <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">
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

      {/* Video Section - Real AGCS video */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">School Videos</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-I7uEvPvVyw?si=S4H7l8i2YVuivr3g"
                  title="AGCS Dhaka"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Assemblies of God Church School, Dhaka</h3>
                <p className="text-sm text-muted-foreground">Watch our school video on YouTube</p>
              </div>
            </Card>
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <a href="https://www.youtube.com/@AGCSDhaka" target="_blank" rel="noopener noreferrer">
                  Visit Our YouTube Channel
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
