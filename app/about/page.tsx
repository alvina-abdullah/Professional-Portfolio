"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import WaveAnimation from "@/components/wave-animation";

export default function WhyUsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className=" items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              About{" "}
              <span className="relative">
                Me
                <span className="absolute -bottom-2 left-0 w-full h-2">
                  <WaveAnimation />
                </span>
              </span>
            </h2>
            {/* <div className="relative h-[300px] w-full md:h-[400px]">
              <Image src="/dashboard-mockup.png" alt="Digital Marketing Dashboard" fill className="object-contain" />
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="px-10">
              <p className="text-lg text-gray-300">
                Hi, I'm Alvina — a passionate and detail-oriented Graphic
                Designer and Web Developer with a solid foundation in both
                creative design and technical development. With a certification
                in Graphic Design from BanoQabil 2.0 and a background in
                Computer Science, I bring a unique blend of artistic vision and
                logical problem-solving to every project I take on.
              </p>
              <br />
              <p className="text-lg text-gray-300">
                As a Graphic Designer, I specialize in crafting visually
                compelling and brand-focused content including logos, social
                media posts, brochures, flyers, posters, and other digital
                marketing assets. I believe in the power of visuals to tell
                stories, build identities, and make lasting impressions.
              </p>
              <br />
              <p className="text-lg text-gray-300">
                On the development side, I create responsive, modern, and
                user-friendly websites using technologies such as HTML, CSS,
                JavaScript, Tailwind CSS, React, Next.js, and TypeScript. I
                focus on delivering clean code, seamless user experiences, and
                pixel-perfect designs that bring life to the web.
              </p>
              <br />
              <p className="text-lg text-gray-300">
                I love working on creative landing pages, UI/UX designs, and
                interactive web components. I’m also passionate about learning
                and continuously upgrading my skill set with the latest tools,
                trends, and frameworks in both design and development.
              </p>
              <br />
              <p className="text-lg text-gray-300">
                I’m currently open to internships, collaborations, and freelance
                opportunities where I can grow, contribute meaningfully, and
                work with like-minded people to create something impactful.
                <br />
                Let’s build something beautiful together!
              </p>
            </div>
            <div className="pt-6 px-10">
              <Link
                href="/contact"
                className="btn-gradient inline-flex items-center px-6 py-3 rounded-md text-white font-medium"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
