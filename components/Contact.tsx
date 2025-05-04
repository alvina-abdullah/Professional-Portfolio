"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedSectionTitle } from "./Animated-section-title"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend or a service like Formspree
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <section id="contact" className="py-16 md:py-24 container">
      <AnimatedSectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? Feel free to reach out to me using the form below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={ref}>
        <motion.div
          className="lg:col-span-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ContactCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            title="Location"
            content="Karachi, Pakistan"
            variants={itemVariants}
          />

          <ContactCard
            icon={<Mail className="h-6 w-6 text-primary" />}
            title="Email"
            content="alvinaabdullah16@gmail.com"
            variants={itemVariants}
          />

          <ContactCard
            icon={<Phone className="h-6 w-6 text-primary" />}
            title="Phone"
            content="+1 (555) 123-4567"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Card className="bg-background border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-border/40 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-border/40 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="border-border/40 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    rows={6}
                    required
                    className="border-border/40 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto relative overflow-hidden group">
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-out" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  title,
  content,
  variants,
}: {
  icon: React.ReactNode
  title: string
  content: string
  variants: any
}) {
  return (
    <motion.div variants={variants}>
      <Card className="bg-background border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
        <CardContent className="p-6 flex items-start space-x-4">
          <motion.div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground">{content}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
