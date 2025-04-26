"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionTitleProps {
  title: string
  subtitle: string
}

export function AnimatedSectionTitle({ title, subtitle }: AnimatedSectionTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const titleVariants = {
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

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "5rem",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  }

  return (
    <div ref={ref} className="flex flex-col items-center text-center mb-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {title}
      </motion.h2>

      <motion.div
        className="h-1 bg-primary mb-6"
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />

      <motion.p
        className="text-muted-foreground max-w-2xl"
        variants={subtitleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
