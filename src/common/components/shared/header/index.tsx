'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sparkles, Rocket, Menu, X } from 'lucide-react';

// Mock data - replace with your actual data
const links = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  // { id: 'portfolio', name: 'Portfolio' },
  { id: 'testimonials', name: 'Testimonials' },
  { id: 'contact', name: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative z-[99]">
      {/* Subtle Floating Particles */}
<<<<<<< HEAD
      {/* Subtle Floating Particles removed */}
=======
      <div className="fixed top-0 left-0 right-0 h-24 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-400/40 dark:bg-orange-500/40"
            style={{
              left: `${20 + i * 20}%`,
              top: '1.5rem',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
>>>>>>> 3c4b385c930dda774abe94c8f03a8a4bd613a0b2

      {/* Logo - Fixed Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="fixed left-4 top-4 sm:left-6 sm:top-8 cursor-pointer group/logo z-[100]"
        onClick={() => {
          document
            .getElementById('home')
            ?.scrollIntoView({ behavior: 'smooth' });
          setActiveSection('home');
          setMobileMenuOpen(false);
        }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo Icon */}
        

          {/* Logo Text */}
          <div className="hidden sm:block">
            <motion.h1
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              RebelVerse
            </motion.h1>
          </div>

          {/* Sparkle */}
          <motion.div
            className="absolute -top-1 -right-1 opacity-0 group-hover/logo:opacity-100"
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Hamburger Menu - Mobile Only (Right Side) */}
      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed right-4 top-4 sm:right-6 sm:top-8 md:hidden z-[101] p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-white/20 dark:border-white/10 shadow-2xl z-[99] md:hidden"
            >
              <div className="flex flex-col h-full p-6 pt-24">
                {/* Mobile Menu Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={`#${link.id}`}
                          onClick={(e) => {
                            smoothScrollTo(e, link.id);
                            setActiveSection(link.id);
                          }}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            link.id === activeSection
                              ? 'bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-500 dark:to-pink-500 text-white shadow-lg'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="uppercase tracking-wide text-sm">
                            {link.name}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    © 2024 RebelVerse
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation Container - CENTER */}
      <motion.div
        className="hidden md:block fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white/20 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-orange-500/5 sm:top-6 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full group"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.15), transparent)',
          }}
          animate={{
            x: ['-150%', '150%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Desktop Navigation Links - CENTER */}
      <nav className="hidden md:flex fixed left-1/2 top-[0.15rem] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-2">
          {links.map((link, index) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-gray-700 dark:text-gray-300"
              key={link.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1 + index * 0.05,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-2 uppercase text-sm transition-colors duration-300 hover:text-gray-900 dark:hover:text-white"
                href={`#${link.id}`}
                onClick={(e) => {
                  smoothScrollTo(e, link.id);
                  setActiveSection(link.id);
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.span>

                {/* Active Background */}
                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-500 dark:to-pink-500"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-40"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                      }}
                      animate={{
                        x: ['-100%', '150%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.span>
                )}

                {/* Hover Dot */}
                {link.id !== activeSection && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-500 dark:to-pink-500 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom Glow Line */}
      <motion.div
        className="hidden md:block fixed left-1/2 -translate-x-1/2 w-full sm:w-[50rem] h-px pointer-events-none"
        style={{
          top: scrolled ? '6.3rem' : '6.8rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.2 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-orange-400/50 dark:via-orange-500/50 to-transparent" />
      </motion.div>
    </header>
  );
}
