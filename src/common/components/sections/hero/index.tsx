'use client';

import 'next-cloudinary/dist/cld-video-player.css';
import SectionDivider from '@/common/components/shared/section-divider';
import TextAnimation from './_components/text-animation';
import { useSectionInView } from '@/common/lib/hooks';
import { useActiveSectionContext } from '@/common/stores/active-section';
import { smoothScrollTo } from '@/common/lib/utils';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  const { ref } = useSectionInView('home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center overflow-hidden"
        id="home"
        ref={ref}
      >
        {/* Dark Overlay with Theme Support */}
        <div className="absolute left-0 top-0 h-screen w-full bg-black/50 dark:bg-[#0000007c]"></div>

        {/* Video Background */}
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
        >
          <source src="/layout.mp4" />
        </video>

        {/* Animated Particles/Dots */}
        {/* Animated Particles/Dots removed */}     {/* Floating Geometric Shapes removed */}

        {/* Main Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center tracking-wide text-black dark:text-white px-4">
          <div className="flex h-full w-full flex-col items-center">
            {/* Top Decorative Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary dark:via-primary to-transparent mb-8"
            />

            {/* Hey! Text with Icon */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <Sparkles className="w-6 h-6 text-accent dark:text-accent animate-pulse" />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary dark:text-primary">
                Hey!
              </span>
              <Sparkles className="w-6 h-6 text-accent dark:text-accent animate-pulse" />
            </motion.div>

            {/* Main Heading Container */}
            <div className="h-auto w-[280px] text-center sm:w-[520px] md:w-[700px] lg:w-[920px] mb-8">
              {/* RebelVerse Text with Glow */}
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 relative"
              >
                <span className="relative inline-block">
                  {/* Glowing Background - Theme Aware */}
                  <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary via-accent to-secondary opacity-40 dark:opacity-50 animate-pulse"></span>

                  {/* Main Text with Gradient - Theme Aware */}
                  <span
                    className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
                    style={{
                      animation: 'gradient 3s ease infinite',
                      backgroundSize: '200% 200%',
                    }}
                  >
                    RebelVerse
                  </span>
                </span>
              </motion.h1>

              {/* Animated Underline - Theme Aware */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"
                style={{ width: '60%', transformOrigin: 'center' }}
              />

              {/* Tagline - Theme Aware */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-lg sm:text-xl lg:text-2xl text-foreground font-semibold mb-3"
              >
                Building Digital Dreams into Reality
              </motion.p>

              {/* Description - Theme Aware */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                We help businesses and creators build their digital presence
                through smart and modern tech solutions
              </motion.p>
            </div>

            {/* Bottom Decorative Line - Theme Aware */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '150px', opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary dark:via-primary to-transparent mb-10"
            />

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:flex-row lg:text-base"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {/* Contact Button - Theme Aware */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="group relative flex w-64 sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-semibold outline-none transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-primary/90 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Button Content */}
                <span className="relative z-10">Contact me here</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Fiverr Button - Theme Aware */}
              <motion.a
                href="https://www.fiverr.com/muhammadareeb79?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-64 sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm px-8 py-4 text-foreground font-semibold outline-none transition-all duration-300 border border-gray-300/50 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:border-primary/50 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View on Fiverr</span>
                <Star className="w-5 h-5 fill-accent text-accent" />
              </motion.a>

              {/* Social Icons - Theme Aware */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/maksym-azimov/"
                  target="_blank"
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-foreground transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Theme Aware */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const element = document.getElementById('services');
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2 hover:border-primary transition-colors">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Gradient Animation Keyframes */}
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </section>

      {/* Section Divider - Theme Aware */}
      <div className="flex w-full justify-center bg-background">
        <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </>
  );
}
