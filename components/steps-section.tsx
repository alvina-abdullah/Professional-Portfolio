"use client"

import { motion } from "framer-motion"
import { Calendar, BarChart2, Users } from "lucide-react"
import WaveAnimation from "./wave-animation"

const steps = [
  {
    number: "01",
    title: "Schedule your complimentary Marketing Strategy Session",
    icon: <Calendar className="h-6 w-6 text-pink-500" />,
  },
  {
    number: "02",
    title: "Get your Free marketing Strategy plan",
    icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
  },
  {
    number: "03",
    title: "Work with us to grow your business and get more customers",
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
]

export default function StepsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start"
              >
                <div className="step-circle relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="step-number text-xl font-bold">{step.number}</span>
                </div>
                <div>
                  <div className="mb-2">{step.icon}</div>
                  <p className="text-gray-300 text-lg">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">3 Easy steps</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              to grow your business with ABN Strategies
            </h3>
            <div className="relative h-8 w-40 mb-8">
              <WaveAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
