'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  Code,
  Palette,
  Shield,
  Cpu,
  Smartphone,
  Zap,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
<<<<<<< HEAD
  const [hoveredService, setHoveredService] = useState(null);
=======
  const [hoveredService, setHoveredService] = useState<number | null>(null);
>>>>>>> 3c4b385c930dda774abe94c8f03a8a4bd613a0b2
  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack solutions using MERN Stack & ASP.NET',
      gradient: 'from-blue-500 to-cyan-500',
      hover: 'group-hover:from-blue-600 group-hover:to-cyan-600',
      darkGradient: 'dark:from-blue-400 dark:to-cyan-400',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Cross-platform apps with Flutter & React Native',
      gradient: 'from-purple-500 to-pink-500',
      hover: 'group-hover:from-purple-600 group-hover:to-pink-600',
      darkGradient: 'dark:from-purple-400 dark:to-pink-400',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Clean, engaging & user-friendly experiences',
      gradient: 'from-orange-500 to-red-500',
      hover: 'group-hover:from-orange-600 group-hover:to-red-600',
      darkGradient: 'dark:from-orange-400 dark:to-red-400',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'CyberSecurity',
      description: 'SOC Analyst | Wazuh Integration & Monitoring',
      gradient: 'from-green-500 to-emerald-500',
      hover: 'group-hover:from-green-600 group-hover:to-emerald-600',
      darkGradient: 'dark:from-green-400 dark:to-emerald-400',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Python Automation',
      description: 'Smart workflows & custom automation tools',
      gradient: 'from-yellow-500 to-orange-500',
      hover: 'group-hover:from-yellow-600 group-hover:to-orange-600',
      darkGradient: 'dark:from-yellow-400 dark:to-orange-400',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Visual identity & branding solutions',
      gradient: 'from-pink-500 to-rose-500',
      hover: 'group-hover:from-pink-600 group-hover:to-rose-600',
      darkGradient: 'dark:from-pink-400 dark:to-rose-400',
    },
  ];

  return (
    <section
      ref={servicesRef}
      id="services"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
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
          {/* Decorative Top Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full mx-auto mb-6"
          />

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to transform your digital presence
          </p>

          {/* Decorative Bottom Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 dark:via-purple-400 to-transparent mx-auto mt-6"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              {/* Card Glow Effect - Theme Aware */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} ${service.darkGradient} rounded-2xl blur opacity-20 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-100 transition duration-500`}
              ></div>

              {/* Card Content - Theme Aware */}
              <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-white/10 h-full transition-all duration-300 hover:border-gray-300 dark:hover:border-white/30 hover:shadow-xl dark:hover:shadow-2xl">
                {/* Icon Container - Theme Aware */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} ${service.hover} ${service.darkGradient} mb-6 transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white">{service.icon}</div>
                </motion.div>

                {/* Title - Theme Aware */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description - Theme Aware */}
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow - Theme Aware */}
                {/* <motion.div
                  className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div> */}

                {/* Animated Corner Accent - Theme Aware */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient} ${service.darkGradient} rounded-bl-full`}
                  ></div>
                </div>

                {/* Particle Effect on Hover */}
                {hoveredService === index && (
                  <>
                    <motion.div
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ top: '50%', left: '50%' }}
                    />
                    <motion.div
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                      style={{ top: '50%', left: '50%' }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your project?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white font-semibold rounded-full hover:shadow-xl dark:hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
