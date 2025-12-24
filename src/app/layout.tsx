import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import { ModeToggle } from '@/common/theme/mode-toggler';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Maksym Azimov | Portfolio',
=======
  title: 'RebelVerse | Portfolio',
>>>>>>> 3c4b385c930dda774abe94c8f03a8a4bd613a0b2
  description:
    'Check out modern and stylish porfolio of an experienced Web Developer Maksym Azimov! Built using TypeScript, Next.js 14, Framaer Motion and Tailwind CSS.',
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
<<<<<<< HEAD
          'relative flex items-center justify-center animate-fade-in',
=======
          'relative flex items-center justify-center',
>>>>>>> 3c4b385c930dda774abe94c8f03a8a4bd613a0b2
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed left-1 right-auto top-1 z-[99] sm:bottom-6 sm:left-6 sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
