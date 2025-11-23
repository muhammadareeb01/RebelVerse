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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
            style={{ top: '20%', left: '10%' }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full"
            animate={{
              x: [0, -80, 0],
              y: [0, 120, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            style={{ top: '60%', right: '15%' }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-pink-400 dark:bg-pink-300 rounded-full"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
            style={{ bottom: '30%', left: '20%' }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rounded-full"
            animate={{
              x: [0, -60, 0],
              y: [0, -90, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4.8, repeat: Infinity, delay: 1.5 }}
            style={{ top: '40%', right: '25%' }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div
            className="absolute w-16 h-16 border-2 border-blue-400 dark:border-blue-300 rotate-45"
            animate={{
              y: [0, -30, 0],
              rotate: [45, 135, 45],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ top: '15%', left: '20%' }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full border-2 border-purple-400 dark:border-purple-300"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            style={{ bottom: '20%', right: '15%' }}
          />
        </div>

        {/* Main Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center tracking-wide text-black dark:text-white px-4">
          <div className="flex h-full w-full flex-col items-center">
            {/* Top Decorative Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent mb-8"
            />

            {/* Hey! Text with Icon */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 animate-pulse" />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">
                Hey!
              </span>
              <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 animate-pulse" />
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
                  <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 opacity-40 dark:opacity-50 animate-pulse"></span>

                  {/* Main Text with Gradient - Theme Aware */}
                  <span
                    className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
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
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full mx-auto mb-6"
                style={{ width: '60%', transformOrigin: 'center' }}
              />

              {/* Tagline - Theme Aware */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-3"
              >
                Building Digital Dreams into Reality
              </motion.p>

              {/* Description - Theme Aware */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
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
              className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 dark:via-purple-400 to-transparent mb-10"
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Button Content */}
                <span className="relative z-10">Contact me here</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Fiverr Button - Theme Aware */}
              <motion.a
                href="https://www.fiverr.com/muhammadareeb79?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-64 sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm px-8 py-4 text-gray-900 dark:text-white font-semibold outline-none transition-all duration-300 border border-gray-300/50 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:border-gray-400/70 dark:hover:border-white/40 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View on Fiverr</span>
                <Star className="w-5 h-5 fill-yellow-500 dark:fill-yellow-400 text-yellow-500 dark:text-yellow-400" />
              </motion.a>

              {/* Social Icons - Theme Aware */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/maksym-azimov/"
                  target="_blank"
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-900 dark:text-white transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-400 shadow-md hover:shadow-lg"
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

                {/* <motion.a
                  href="https://github.com/bbyc4kes"
                  target="_blank"
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-900 dark:text-white transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-400 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a> */}
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
          <div className="w-6 h-10 border-2 border-gray-600/60 dark:border-white/40 rounded-full flex justify-center p-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <motion.div
              className="w-1 h-3 bg-gray-600 dark:bg-white/60 rounded-full"
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
      <div className="flex w-full justify-center bg-white dark:bg-darkBg">
        <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-purple-400/50 dark:via-purple-500/50 to-transparent"></div>
      </div>
    </>
  );
}
