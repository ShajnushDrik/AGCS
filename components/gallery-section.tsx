"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/diverse-students-classroom.png",
    alt: "Classroom Activity",
  },
  {
    src: "/school-sports-day.png",
    alt: "Sports Day",
  },
  {
    src: "/science-lab.png",
    alt: "Science Lab",
  },
  {
    src: "/school-assembly.jpg",
    alt: "School Assembly",
  },
  {
    src: "/students-art-project.jpg",
    alt: "Art Class",
  },
  {
    src: "/school-library.png",
    alt: "Library",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Campus Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Take a glimpse into our vibrant school community</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
