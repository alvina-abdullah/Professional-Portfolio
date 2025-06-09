"use client"

import { motion } from "framer-motion"
import { Code, PenTool } from "lucide-react"
import WaveAnimation from "@/components/wave-animation"
import { IoBookSharp } from "react-icons/io5";
const education = [
  {
    id: 1,
    title: "Governor Sindh Initiative for GenAI, Web3, and Metaverse",
    icon: <Code className="h-6 w-6 text-pink-500" />,
    items: [
      "Currently enrolled in the cutting-edge Web 3.0 program at GIAIC, I’m diving deep into the core technologies shaping the future of the internet.",
      "This immersive course is more than just a curriculum — it's a journey of hands-on learning, innovation, and creative exploration.",
      "In the first quarter, I laid a strong foundation by mastering the building blocks of web development: HTML, CSS, and TypeScript.",
      "Now advancing into the second quarter, I’m expanding my toolkit with powerful modern frameworks like Next.js and Tailwind CSS, and experimenting with Framer Motion to bring interfaces to life."
    ],
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 2,
    title: "BanoQabil 2.0-Graphic Designing",
    icon: <PenTool className="h-6 w-6 text-purple-500" />,
    items: ["Comprehensive Design Skills: Gained in-depth knowledge of design principles, including typography, color theory, layout, and composition, which are fundamental for creating visually appealing designs.",
       "Proficiency in Design Software: Developed expertise in industry-standard tools such as Adobe Photoshop, Illustrator, and InDesign to execute creative ideas and design projects efficiently.",
       "Hands-on Project Experience: Worked on various real-world projects, including logo design, social media posts, brochures, and promotional materials, strengthening practical design skills.",
       "Creative Portfolio Development: Built a diverse portfolio showcasing my design abilities, which serves as a foundation for my professional career in graphic design."
      ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Intermediate in Computer Science.",
    icon: <IoBookSharp className="h-6 w-6 text-blue-600" />,
    items: [
      "Currently enrolled in the Computer Science, where I am gaining a strong foundation in programming, algorithms, and data structures. This year, I am focusing on core subjects like C programming, discrete mathematics, and introductory computer systems, which are enhancing my problem-solving and analytical skills. I am passionate about expanding my knowledge in emerging technologies and preparing for a future in the tech industry.",
    ],
    color: "from-blue-500 to-cyan-600",
  },
]

export default function Education() {
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
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              Education
              <span className="absolute -bottom-2 left-0 w-full h-2">
                <WaveAnimation />
              </span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {education.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card rounded-xl p-6 h-full">
              <div
                className={`bg-gradient-to-r ${service.color} p-3 rounded-lg inline-flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{service.title}</h3>

              {Array.isArray(service.items) ? (
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{service.items}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
