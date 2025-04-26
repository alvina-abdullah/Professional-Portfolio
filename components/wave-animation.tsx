"use client"

import { useEffect, useRef } from "react"

export default function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window
        canvas.width = width * ratio
        canvas.height = height * ratio
        ctx.scale(ratio, ratio)
        return true
      }
      return false
    }
    setCanvasDimensions()

    // Wave properties
    const waves = [
      {
        frequency: 0.02,
        amplitude: 10,
        speed: 0.01,
        color: "#ff00cc",
        offset: 0,
      },
      {
        frequency: 0.03,
        amplitude: 8,
        speed: 0.015,
        color: "#3333ff",
        offset: Math.PI / 2,
      },
      {
        frequency: 0.025,
        amplitude: 6,
        speed: 0.02,
        color: "#00ccff",
        offset: Math.PI,
      },
    ]

    let animationFrameId: number
    let time = 0

    // Animation loop
    const render = () => {
      time += 0.05

      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, height / 2)

        for (let x = 0; x < width; x++) {
          const y = Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude + height / 2
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = wave.color
        ctx.lineWidth = 3
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 8px rgba(255, 0, 204, 0.5))" }}
    />
  )
}
