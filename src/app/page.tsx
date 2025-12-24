'use client';

import About from '@/common/components/sections/about';
import { Contact } from '@/common/components/sections/contact/index';
<<<<<<< HEAD
import Experience from '@/common/components/sections/experience';
import { FAQ } from '@/common/components/sections/Faq';
import Hero from '@/common/components/sections/hero';
import Projects from '@/common/components/sections/projects';
=======
// import Experience from '@/common/components/sections/experience';
// import { FAQ } from '@/common/components/sections/Faq';
import Hero from '@/common/components/sections/hero';
// import Projects from '@/common/components/sections/projects';
>>>>>>> 3c4b385c930dda774abe94c8f03a8a4bd613a0b2
import Services from '@/common/components/sections/services';
import Skills from '@/common/components/sections/skills';
import Testimonials from '@/common/components/sections/testimonal';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />

      <Services />
      <About />

      {/* <Projects /> */}
      <Testimonials />
      {/* <Experience /> */}
      {/* <Skills /> */}
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
}
