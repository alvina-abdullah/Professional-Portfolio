"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { AnimatedSectionTitle } from "@/components/Animated-section-title"

export function Skills() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
  ]

  const GraphicSkills = [
    { name: "Branding", level: 95 },
    { name: "Print Design", level: 70 },
    { name: "Layout & Composition", level: 85 },
    { name: "Color Theory", level: 70 },
    { name: "Typography", level: 85 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 80 },
    { name: "Concept Development", level: 40 },
    { name: "Problem Solving", level: 60 },
    { name: "UI/UX Design", level: 70 },
 
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="skills" className="py-16 md:py-24 ">
      <div className="container">
        <AnimatedSectionTitle
          title="My Skills"
          subtitle="I've worked with a variety of technologies in the modern world. Here's an overview of my technical skills."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillCard title="Web Development" skills={frontendSkills} index={0} />
          <SkillCard title="Grapic Designing" skills={GraphicSkills} index={1} />
          <SkillCard title="Other Skills" skills={otherSkills} index={2} />
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ title, skills, index }: { title: string; skills: any[]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <Card className="bg-background border-border/40 h-full hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <AnimatedSkill key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function AnimatedSkill({ skill, index, inView }: { skill: any; index: number; inView: boolean }) {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(
        () => {
          setProgressValue(skill.level)
        },
        300 + index * 100,
      )

      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, index])

  return (
    <div>
      <div className="flex justify-between mb-2">
        <motion.span
          className="font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
        >
          {skill.name}
        </motion.span>
        <motion.span
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + 0.1 * index, duration: 0.4 }}
        >
          {progressValue}%
        </motion.span>
      </div>
      <Progress value={progressValue} className="h-2 " />
    </div>
  )
}
export default Skills