"use client"

import { useEffect } from "react"

import Education from "@/components/Education"
// import StepsSection from "@/components/steps-section"
import ParticlesBackground from "@/components/Particles-background"
import { GraphicProjects } from "@/components/Graphic-projects"
import { Skills } from "@/components/Skills"
import { Contact } from "@/components/Contact"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WebProjects from "@/components/Web-projects"




export default function Home() {
  useEffect(() => {
    // Create random floating elements
    const createFloatingElements = () => {
      const container = document.querySelector(".floating-container")
      if (!container) return

      for (let i = 0; i < 10; i++) {
        const element = document.createElement("div")
        element.classList.add("particle")

        // Random size
        const size = Math.random() * 100 + 50
        element.style.width = `${size}px`
        element.style.height = `${size}px`

        // Random position
        element.style.left = `${Math.random() * 100}%`
        element.style.top = `${Math.random() * 100}%`

        // Random animation duration
        const duration = Math.random() * 20 + 10
        element.style.animation = `float ${duration}s ease-in-out infinite`

        // Random delay
        element.style.animationDelay = `${Math.random() * 10}s`

        container.appendChild(element)
      }
    }

    createFloatingElements()

    return () => {
      const container = document.querySelector(".floating-container")
      if (container) {
        const particles = container.querySelectorAll(".particle")
        particles.forEach((particle) => particle.remove())
      }
    }
  }, [])

  return (
    <div className="relative">
      <div className="floating-container absolute inset-0 overflow-hidden pointer-events-none z-0"></div>
      <ParticlesBackground />
      <Hero/>
      <About/>
      <WebProjects/>
      <GraphicProjects/>
      <Skills/>
      <Education/>
      {/* <StepsSection/> */}
      <Contact/>
  

  
    </div>
  )
}
