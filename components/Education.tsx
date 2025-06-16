"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WaveAnimation from "@/components/wave-animation";

const education = [
  {
    id: 1,
    date: "Feb 2024 - Ongoing | GIAIC",
    title: "Governor Sindh Initiative for GenAI, Web3, and Metaverse",
   description: `Currently enrolled in the cutting-edge Web 3.0 program at GIAIC, I’m diving deep into the core technologies shaping the future of the internet. This immersive journey blends hands-on learning with innovation and creativity. I began by mastering HTML, CSS, and TypeScript, and now I’m advancing with Next.js, Tailwind CSS, and Framer Motion to craft dynamic, modern interfaces.`,

  },
{
  id: 2,
  date: "2025 - Present | YouTube & Online Platforms",
  title: "Self-Placed Front-End Learning",
  description: `Actively learning front-end development through YouTube tutorials and online platforms. Focused on HTML, CSS, JavaScript, and React to build responsive, user-friendly interfaces. Creating real-world projects to apply concepts practically. This self-paced journey is sharpening my skills in modern web development.`,
},
  {
    id: 3,
    date: "2025 | KMA Girls Degree College, Karachi",
    title: "Intermediate in Computer Science",
    description: `Currently enrolled in the Computer Science, where I am gaining a strong foundation in programming, algorithms, and data structures. This year, I am focusing on core subjects like C programming, discrete mathematics, and introductory computer systems, which are enhancing my problem-solving and analytical skills. I am passionate about expanding my knowledge in emerging technologies and preparing for a future in the tech industry.`,
  },
  {
  id: 4,
  date: "2024 | BanoQabil 3.1 BootCamp",
  title: "Web Development",
  description: `Completed an intensive web development bootcamp focused on HTML, CSS, and modern UI design. Gained hands-on experience in creating responsive websites and user-friendly layouts. Learned to build structured, clean code with a strong emphasis on design consistency. This program enhanced my practical skills and understanding of front-end web development.`,
},
    {
    id: 5,
    date: "2023 | BanoQabil 2.0",
    title: "Graphic Designing",
    description: `I have developed a strong foundation in graphic design, mastering key principles like typography, color theory, and composition. I’m proficient in industry-standard tools such as Adobe Photoshop, Illustrator, and InDesign. Through hands-on projects, I’ve created logos, brochures, and social media designs that reflect real-world experience. My growing portfolio showcases my creativity and readiness for a professional design career.`,
  },
  {
    id: 6,
    date: "2023 | Al-Makhdoom Public School, Karachi ",
    title: "Matriculation",
    description: `Completed my matriculation with a focus on biology and science subjects.Built a strong foundation in science and mathematics during matriculation, achieving excellent academic results. Actively participated in school clubs, science fairs, and administration duties, which strengthened my leadership, communication, and teamwork skills.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function EducationTimeline() {
  const ref = useRef(null);

  // Scroll progress hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when it enters and leaves the screen
  });

  // Animate line height from 0% to 100%
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      className="relative py-20 text-white overflow-hidden"
    >
      {/* Top blur wave */}
      <div className="absolute top-0 left-0 w-full h-20 opacity-30 blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-0 w-full h-2">
              <WaveAnimation />
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative ml-6">
          {/* Scroll-based animated vertical line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[-22px] top-0 w-1 bg-white origin-top"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute w-4 h-4 bg-[#9647eb] border-4 border-white rounded-full left-[-30px] top-2 shadow-lg shadow-blue-400/40"></div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <span className="text-sm text-gray-300">{edu.date}</span>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom blurred wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-30 blur-2xl pointer-events-none" />
    </section>
  );
}
