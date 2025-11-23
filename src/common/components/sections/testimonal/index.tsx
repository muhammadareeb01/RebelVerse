'use client';

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const testimonials = [
    {
      name: 'bilalkiani676',
      location: 'United Kingdom',
      image: '👩‍💼',
      rating: 5,
      text: 'Areeb was a pleasure to work with. He delivered the project on time, maintained excellent communication throughout, and demonstrated great professionalism. The quality of his work exceeded expectations, and he handled everything with efficiency and attention to detail. Highly recommended for any future projects.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'alstoncobb',
      location: 'United States',
      image: '👨‍🔬',
      rating: 5,
      text: 'Working with Muhammad was overall a good experience and we were able to get to the final result. As a new coder the only difficult part was understanding the technical specifications he provided however we offered to continually help if I had any questions going forward. Nonetheless, it was definitely great value and he got the job done and did a great job.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'testaccmve',
      location: 'Belgium',
      image: '👨‍💼',
      rating: 5,
      text: 'Wow! Where can I even start? Muhammad went beyond every expectation! What an incredible talent! Could not recommend him enough! Nothing was too much, everything was done smoothly, fast and reliable. Thanks a lot for everything Muhammad. We will definitely work together again!',
      gradient: 'from-orange-500 to-rose-500',
    },
    {
      name: 'oarthus',
      location: 'France',
      image: '👩‍💻',
      rating: 5,
      text: 'Working with Muhammad Areeb in Software Development was an EXCELLENT experience! His professionalism and attention to detail exceeded my expectations, and his proactive communication and quick responsiveness made the process seamless. Highly recommend his services! 😊',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'sino2022',
      location: 'Germany',
      image: '👨‍💼',
      rating: 5,
      text: 'Muhammad wurde beauftragt, eine komplexe Personaldaten-Seite in ein Prisma-Modell zu integrieren. Dabei lag der Fokus darauf, die Datenstruktur anzupassen, Model-Relationen sicherzustellen und die Funktionen für Speicherung, Abruf, Bearbeitung sowie Aktualisierung zu implementieren. Die Aufgabe wurde mit höchster Präzision und zur vollsten Zufriedenheit abgeschlossen.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
          style={{ y, top: '10%', left: '10%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-300/20 to-orange-300/20 dark:from-pink-500/10 dark:to-orange-500/10 rounded-full blur-3xl"
          style={{
            y: useTransform(y, (val) => -val),
            bottom: '10%',
            right: '10%',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        {/* Floating stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-4 h-4 text-yellow-400 dark:text-yellow-500 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200%' }}
            >
              Client Success Stories
            </motion.span>
          </h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Trusted by innovators worldwide 🌍
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              icon: <Users />,
              number: '50+',
              label: 'Happy Clients',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: <Award />,
              number: '50+',
              label: 'Projects Done',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: <TrendingUp />,
              number: '100%',
              label: 'Satisfaction',
              color: 'from-green-500 to-emerald-500',
            },
            {
              icon: <Star />,
              number: '5.0',
              label: 'Avg Rating',
              color: 'from-yellow-500 to-orange-500',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300`}
              />
              <div className="relative bg-white dark:bg-slate-800/90 p-4 rounded-xl border border-gray-200 dark:border-white/10 text-center">
                <div
                  className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-2`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative min-h-[400px] sm:min-h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute w-full"
              >
                <div className="relative group">
                  {/* Animated Glow */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-3xl blur-2xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-50`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Card */}
                  <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
                    {/* Top Section with Gradient */}
                    <div
                      className={`relative bg-gradient-to-r ${testimonials[activeIndex].gradient} p-8 sm:p-10`}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        className="absolute top-4 right-4 opacity-20"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Quote className="w-24 h-24 text-white" />
                      </motion.div>

                      {/* Client Info */}
                      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                        {/* Avatar */}
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-5xl shadow-xl border-4 border-white dark:border-slate-600">
                            {testimonials[activeIndex].image}
                          </div>
                          {/* Verified Badge */}
                          <motion.div
                            className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </motion.div>
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1 text-center sm:text-left text-white">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                            {testimonials[activeIndex].name}
                          </h3>

                          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-sm opacity-90">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{testimonials[activeIndex].location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center sm:justify-start gap-1 mt-6 relative z-10">
                        {[...Array(testimonials[activeIndex].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Bottom Section - Testimonial Text */}
                    <div className="p-8 sm:p-10">
                      <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        "{testimonials[activeIndex].text}"
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 sm:-px-16 pointer-events-none">
            <motion.button
              onClick={handlePrev}
              className="pointer-events-auto group relative bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-full shadow-xl border-2 border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300" />
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-white relative z-10" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="pointer-events-auto group relative bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-full shadow-xl border-2 border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300" />
              <ArrowRight className="w-6 h-6 text-gray-700 dark:text-white relative z-10" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-12' : 'w-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? `bg-gradient-to-r ${testimonials[activeIndex].gradient}`
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
                {index === activeIndex && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonials[activeIndex].gradient} blur`}
                    layoutId="activeDot"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
