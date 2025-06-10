"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const graphicproject = [
  {
    id: 1,
    src: "/clothing.jpg?height=600&width=600",
    alt: "Clothing brand",
    category: "Alvi's Clothing branding",
  },
  {
    id: 2,
    src: "/realestate.jpg?height=600&width=600",
    alt: "Realestate Brand",
    category: "Ceprock realestate branding",
  },
  {
    id: 3,
    src: "/youtube thumbnail.jpeg?height=600&width=600",
    alt: "Youtube thumbnail",
    category: "Thumbnail",
  },
  // {
  //   id: 4,
  //   src: "/placeholder.svg?height=600&width=600",
  //   alt: "Cocktail preparation",
  //   category: "Drinks",
  // },
  // {
  //   id: 5,
  //   src: "/placeholder.svg?height=600&width=600",
  //   alt: "Private dining area",
  //   category: "Interior",
  // },
  // {
  //   id: 6,
  //   src: "/placeholder.svg?height=600&width=600",
  //   alt: "Dessert plating",
  //   category: "Food",
  // },
]

export default function GraphicProjects() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="graphicproject" className="py-20  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
            Graphic Design <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {graphicproject.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(image.id)}
            >
              <div className={`relative ${index === 0 ? "h-[500px]" : "h-64"}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 text-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Image
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 rounded-full border-white/20 text-white hover:bg-primary/20 hover:border-primary"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl">
            <Image
              src={graphicproject.find((img) => img.id === selectedImage)?.src || ""}
              alt={graphicproject.find((img) => img.id === selectedImage)?.alt || ""}
              width={1200}
              height={800}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
