"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatedSectionTitle } from "@/components/Animated-section-title"

export default function WebProjects() {
  const projects = [
    {
      id: 1,
      title: "Inkshock Design",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/inkshock-design.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/alvina-abdullah/Inkshock-Design",
      liveUrl: "https://inshock-design.vercel.app",
    },
        {
    id: 2,
    title: "Qurbani Vibes",
    description:
     "A festive Eid-ul-Adha themed website featuring smooth scrolling, responsive design, and celebratory content presentation.",
    image: "/qurbani-vibes.png?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/alvina-abdullah/Eid-ul-adha",
    liveUrl: "https://eid-ul-adha-bice.vercel.app/",
  },
    {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/ecommerce-web.png?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/alvina-abdullah/Figma-Hackathon",
    liveUrl: "https://figma-hackathon-chi-five.vercel.app",
  },
    {
      id: 4,
      title: "Agentia World",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "/Agentia-web.png?height=400&width=600",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/alvina-abdullah/Agentia-World-",
      liveUrl: "https://agentia-world-topaz.vercel.app/",
    },
    {
      id: 5,
      title: "Ramadan Kareem",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/Ramadan-web.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/alvina-abdullah/Ramadan-Kareem",
      liveUrl: "https://ramadan-kareem-ten.vercel.app/",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/portfolio.png?height=400&width=600",
      tags: ["Html", "CSS", "Javascript"],
      githubUrl: "https://github.com/alvina-abdullah/personal-portfolio-using-html-custom-css",
      liveUrl: "https://alvina-abdullah.github.io/personal-portfolio-using-html-custom-css/",
    },
    {
      id: 7,
      title: "Static Interactive Resume",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/resume.png?height=400&width=600",
      tags: ["Html", "TypeScript", "Tailwind CSS" ],
      githubUrl: "https://github.com/alvina-abdullah/hackathon-milestone-1-and-2",
      liveUrl: "https://hackathon-1-portfolio.vercel.app/",
    },
    {
      id: 8,
      title: "Simple Calculator",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/calculator.png?height=400&width=600",
      tags: ["Html", "JavaScript", "CSS"],
      githubUrl: "https://github.com/alvina-abdullah/Simple-Calculator",
      liveUrl: "https://alvina-abdullah.github.io/Simple-Calculator/",
    },
    {
      id: 9,
      title: "Rickshaw Hub",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/rickshaw.png?height=400&width=600",
      tags: ["Html", "JavaScript", "CSS"],
      githubUrl:"https://github.com/alvina-abdullah/Landing-page-using-Tailwind-css",
      liveUrl: "https://landing-page-using-tailwind-css-brown.vercel.app/",
    },
    {
      id: 10,
      title: "Todo App",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/todo-app.png?height=400&width=600",
      tags: ["Html", "JavaScript", "CSS"],
      githubUrl:"https://github.com/alvina-abdullah/Todo-app",
      liveUrl: "https://alvina-abdullah.github.io/Todo-app/",
    },
    {
      id: 11,
      title: "Counter App",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/counter-app.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/alvina-abdullah/Counter-app",
      liveUrl: "https://counter-app-three-sepia.vercel.app",
    },
    {
      id: 12,
      title: "Countdown Timer",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/countdown-timer.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/alvina-abdullah/Countdown-Timer",
      liveUrl: "https://countdown-timer-tau-steel.vercel.app/",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 container">
          <p className="text-primary text-4xl mb-4 tracking-wider uppercase text-center font-extrabold ">Portfolio</p>
      <AnimatedSectionTitle
        title="My Projects"
        subtitle="Here are some of my recent projects. Each project is built with modern technologies and best practices."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button variant="outline" size="lg" asChild className="relative overflow-hidden group">
          <Link href="/web-projects" rel="noopener noreferrer">
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 bg-primary/10 w-0 group-hover:w-full transition-all duration-300 ease-out" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      <Card
        className="bg-background border-border/40 overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              transition: { duration: 0.5 },
            }}
            className="h-full w-full"
          >
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
              transition: { duration: 0.3 },
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0"
            animate={{
              opacity: isHovered ? 1 : 0,
              transition: { duration: 0.3, delay: isHovered ? 0.1 : 0 },
            }}
          >
            <Button size="sm" asChild className="bg-background/80 hover:bg-background/95">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
            <Button size="sm" asChild className="bg-primary/80 hover:bg-primary/95">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex gap-4 mt-auto">
          <Button variant="outline" size="sm" asChild className="opacity-0 md:opacity-100">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
          <Button size="sm" asChild className="opacity-0 md:opacity-100">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
