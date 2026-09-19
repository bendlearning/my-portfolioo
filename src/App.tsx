import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { TechnicalServices } from '@/components/sections/TechnicalServices';
import { Contact } from '@/components/sections/Contact';
import { PaymentCenter } from '@/components/sections/PaymentCenter';

export default function App() {
  useTheme(); // Initialize theme
  useLanguage(); // Initialize language & direction

  const [paymentOpen, setPaymentOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      <Navbar onPaymentOpen={() => setPaymentOpen(true)} />

      <main>
        <Hero onServicesClick={scrollToServices} />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <TechnicalServices />
        <Contact />
      </main>

      <Footer />

      <FloatingButtons onPaymentOpen={() => setPaymentOpen(true)} />

      <PaymentCenter isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </div>
  );
}
