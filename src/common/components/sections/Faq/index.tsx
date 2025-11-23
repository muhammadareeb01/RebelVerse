// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import {
//   Plus,
//   Minus,
//   Mail,
//   MessageSquare,
//   Send,
//   MapPin,
//   Phone,
//   Clock,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   HelpCircle,
//   Zap,
//   Globe,
//   Award,
// } from 'lucide-react';

// // FAQ SECTION
// export function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: 'What services does RebelVerse provide?',
//       answer:
//         'We offer comprehensive digital solutions including Full-Stack Web Development (MERN, ASP.NET), Mobile App Development (Flutter, React Native), UI/UX Design, E-commerce Solutions (WordPress, Shopify), Python Automation, and Graphic Design & Branding.',
//       icon: <Zap className="w-5 h-5" />,
//       gradient: 'from-blue-500 to-cyan-500',
//     },
//     {
//       question: 'What is your typical project timeline?',
//       answer:
//         'Project timelines vary based on complexity. A simple website takes 2-3 weeks, while complex web applications can take 2-3 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.',
//       icon: <Clock className="w-5 h-5" />,
//       gradient: 'from-purple-500 to-pink-500',
//     },
//     {
//       question: 'Do you work with international clients?',
//       answer:
//         'Absolutely! We have successfully delivered projects to clients across USA, Germany, UAE, Singapore, UK, and more. We are experienced in remote collaboration and maintain excellent communication across all time zones.',
//       icon: <Globe className="w-5 h-5" />,
//       gradient: 'from-orange-500 to-rose-500',
//     },
//     {
//       question: 'What are your pricing models?',
//       answer:
//         'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer packages. Pricing depends on project scope, complexity, and timeline. Contact us for a custom quote tailored to your specific needs.',
//       icon: <Award className="w-5 h-5" />,
//       gradient: 'from-green-500 to-emerald-500',
//     },
//     {
//       question: 'Do you provide post-launch support?',
//       answer:
//         'Yes! We offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements. We ensure your application runs smoothly and stays up-to-date with the latest technologies.',
//       icon: <CheckCircle2 className="w-5 h-5" />,
//       gradient: 'from-pink-500 to-rose-500',
//     },
//     {
//       question: 'What makes RebelVerse different?',
//       answer:
//         'Our Level 2 Freelancer status, collaboration with Fortune 500 companies and German researchers, 100% client satisfaction rate, and expertise in cutting-edge technologies like React, Next.js, and TypeScript set us apart. We deliver excellence, not just code.',
//       icon: <Sparkles className="w-5 h-5" />,
//       gradient: 'from-yellow-500 to-orange-500',
//     },
//   ];

//   return (
//     <section
//       id="faq"
//       className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
//         <motion.div
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{ duration: 10, repeat: Infinity }}
//           style={{ top: '10%', left: '10%' }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 50, 0],
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 12, repeat: Infinity, delay: 2 }}
//           style={{ bottom: '10%', right: '10%' }}
//         />
//       </div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="flex items-center justify-center gap-3 mb-6"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: 'spring', duration: 0.8 }}
//           >
//             <motion.div
//               className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full"
//               animate={{ scaleX: [0.8, 1.2, 0.8] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             <HelpCircle className="w-6 h-6 text-purple-500 dark:text-purple-400" />
//             <motion.div
//               className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 rounded-full"
//               animate={{ scaleX: [0.8, 1.2, 0.8] }}
//               transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//             />
//           </motion.div>

//           <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             Everything you need to know about working with us
//           </p>
//         </motion.div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="relative">
//                 {/* Glow Effect */}
//                 <div
//                   className={`absolute -inset-0.5 bg-gradient-to-r ${faq.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
//                 />

//                 {/* Card */}
//                 <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border-2 border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700/50">
//                   {/* Question */}
//                   <button
//                     onClick={() =>
//                       setOpenIndex(openIndex === index ? -1 : index)
//                     }
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
//                   >
//                     <div className="flex items-center gap-4 flex-1">
//                       <motion.div
//                         className={`p-3 rounded-xl bg-gradient-to-r ${faq.gradient} text-white flex-shrink-0`}
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                       >
//                         {faq.icon}
//                       </motion.div>
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
//                         {faq.question}
//                       </h3>
//                     </div>
//                     <motion.div
//                       animate={{ rotate: openIndex === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="flex-shrink-0"
//                     >
//                       {openIndex === index ? (
//                         <Minus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//                       ) : (
//                         <Plus className="w-6 h-6 text-gray-400" />
//                       )}
//                     </motion.div>
//                   </button>

//                   {/* Answer */}
//                   <AnimatePresence>
//                     {openIndex === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: 'auto', opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 pb-6 pl-20">
//                           <motion.p
//                             initial={{ y: -10 }}
//                             animate={{ y: 0 }}
//                             className="text-gray-700 dark:text-gray-300 leading-relaxed"
//                           >
//                             {faq.answer}
//                           </motion.p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             Still have questions?
//           </p>
//           <motion.button
//             onClick={() => {
//               document
//                 .getElementById('contact')
//                 ?.scrollIntoView({ behavior: 'smooth' });
//             }}
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get in Touch
//             <ArrowRight className="w-4 h-4" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
