'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Code,
  Heart,
  Zap,
  ArrowRight,
  Users,
  Lightbulb,
  Target,
  Globe,
  Award,
  TrendingUp,
  Rocket,
  Star,
  CheckCircle2,
  MapPin,
  Briefcase,
} from 'lucide-react';

export default function About() {
  const sectionRef = useRef(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    {
      icon: <Globe className="w-6 h-6" />,
      number: '50+',
      label: 'Global Clients',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: 'Level 2',
      label: 'Freelancer',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: '50+',
      label: 'Projects Delivered',
      gradient: 'from-orange-500 to-rose-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: '100%',
      label: 'Client Satisfaction',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const services = [
    { icon: <Code />, text: 'Full-Stack Web Development' },
    { icon: <Sparkles />, text: 'Modern UI/UX Design' },
    { icon: <Rocket />, text: 'Mobile App Development' },
    { icon: <Zap />, text: 'CyberSecurity' },
    { icon: <Lightbulb />, text: 'Python Automation' },
    { icon: <Heart />, text: 'Graphic Design ' },
  ];

  // const achievements = [
  //   { text: 'Collaborated with German Researchers', icon: <MapPin /> },
  //   {
  //     text: 'Delivered Solutions to Fortune 500 Companies',
  //     icon: <Briefcase />,
  //   },
  // ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-white via-orange-50/30 to-white dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 overflow-hidden"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-300/20 to-pink-300/20 dark:from-orange-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
          style={{ y, top: '5%', left: '0%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
          style={{
            y: useTransform(y, (val) => -val),
            bottom: '5%',
            right: '0%',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-500 dark:to-pink-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400 rounded-full"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Sparkles className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 rounded-full"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 dark:from-orange-400 dark:via-pink-400 dark:to-rose-400"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200%' }}
            >
              About RebelVerse
            </motion.span>
          </h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Where Innovation Meets Excellence in Digital Solutions
          </motion.p>
        </motion.div>

        {/* Stats Section - Eye-catching numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} dark:opacity-50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-200 dark:border-white/10 group-hover:border-transparent transition-all duration-300 text-center h-full">
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 text-white shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                <motion.h3
                  className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                  animate={hoveredStat === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.h3>

                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Company Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full border border-orange-300 dark:border-orange-700/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <Rocket className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                REBELVERSE - DIGITAL SOLUTIONS AGENCY
              </span>
            </motion.div>

            {/* Story Title */}
            <motion.h3
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Transforming Ideas Into
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">
                Digital Excellence
              </span>
            </motion.h3>

            {/* Story Content */}
            <motion.div
              className="space-y-5 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.p
                className="text-gray-700 dark:text-gray-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">
                  RebelVerse
                </span>{' '}
                is not just another digital agency—we are
                <span className="font-semibold"> rebels with a cause</span>. We
                challenge the ordinary, break conventions, and craft
                extraordinary digital experiences that leave lasting
                impressions.
              </motion.p>

              <motion.p
                className="text-gray-700 dark:text-gray-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                We provide comprehensive digital solutions including
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {' '}
                  Web Development
                </span>
                ,
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {' '}
                  Mobile Applications
                </span>
                ,
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  {' '}
                  UI/UX Design
                </span>
                ,
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {' '}
                  CyberSecurity
                </span>
                ,
                <span className="font-semibold text-orange-600 dark:text-orange-400">
                  {' '}
                  Automation
                </span>
               
              </motion.p>
            </motion.div>

            {/* Services Grid - What We Provide */}
            <motion.div
              className="grid grid-cols-2 gap-3 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-white/10 hover:border-orange-300 dark:hover:border-orange-700/50 transition-all duration-300 group"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {service.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Founder Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Founder Card */}
            <div className="relative group">
              {/* Animated Glow */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 rounded-3xl blur-2xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-60"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white to-orange-50/50 dark:from-slate-800 dark:to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border-2 border-gray-200 dark:border-white/10 shadow-2xl">
                {/* Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-600 dark:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4" />
                  FOUNDER
                </motion.div>

                {/* Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 dark:from-orange-500 dark:via-pink-500 dark:to-purple-500 rounded-full blur-xl opacity-50"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                    <Image
                      src="/images/profile.jfif"
                      alt="Muhammad Areeb - Founder & Lead Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h4 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">
                    Muhammad Areeb
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                    Founder & Lead Developer
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      Level 2 Freelancer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 dark:from-orange-600 dark:via-pink-600 dark:to-purple-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-pink-500/50 dark:hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                animate={{ x: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <span className="relative z-10">
                LET'S BUILD YOUR SUCCESS STORY
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
