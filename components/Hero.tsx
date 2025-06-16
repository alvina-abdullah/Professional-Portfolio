"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import WaveAnimation from "./wave-animation";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden text-center">
      <div className="container mx-auto md:px-6">
        <div className=" items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center lg:px-32">
                {/* <span className="text-white">I'am Alvina </span>
                <br />
                <span className="text-white/70">Web Developer +</span>
                <br />
                <span className="text-white">Graphic Designer</span> */}
                Transforming ideas into elegant web solutions
              </h1>
              {/* <div className="relative h-8 w-40 mb-8 justify-self-center">
                <WaveAnimation />
              </div> */}
              <p className="text-xl text-gray-300 mb-10 lg:px-16">
                With a strong eye for design and a love for coding, I specialize
                in turning ideas into interactive web experiences. My toolkit
                includes React.js, Next.js, Tailwind CSS, and Framer Motion —
                perfect for building modern, fast, and animated websites.
              </p>

               {/* <Button
                asChild
                className="btn-gradient text-white mr-3 font-extrabold px-10 text-center rounded-full transition-all duration-300"
              >
                <Link 
                href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:c9d862cb-4bec-418c-8260-db6218546bdc"
                target="_blank" rel="noopener noreferrer">
                  Resume
                  <ExternalLink className="ml-1 h-4 w-6 text-center" />
                </Link>
              </Button> */}
              <Button
                asChild
                className="btn-gradient text-white font-extrabold px-10  text-center rounded-full transition-all duration-300 "
              >
                <Link href="/contact"  rel="noopener noreferrer">
                 Hire me
                  <ExternalLink className="ml-1 h-4 w-6 text-center" />
                </Link>
              </Button>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
