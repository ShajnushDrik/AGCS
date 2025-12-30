"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const slides = [
  {
    id: 1,
    title: "[SLIDE 1 TITLE]",
    subtitle: "[Add your inspiring message here]",
    image: "/modern-school-campus.png",
  },
  {
    id: 2,
    title: "[SLIDE 2 TITLE]",
    subtitle: "[Add your second message here]",
    image: "/students-learning.jpg",
  },
  {
    id: 3,
    title: "[SLIDE 3 TITLE]",
    subtitle: "[Add your third message here]",
    image: "/school-activities.jpg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-muted">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }}>
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{slide.subtitle}</p>
              <div className="flex gap-4">
                <Button size="lg" variant="default" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
                >
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur hover:bg-white/20 text-white rounded-full p-3 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur hover:bg-white/20 text-white rounded-full p-3 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
