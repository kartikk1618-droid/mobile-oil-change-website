import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturedServices } from '@/components/FeaturedServices';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { ServiceArea } from '@/components/ServiceArea';
import { Faq } from '@/components/Faq';
import { BookingForm } from '@/components/BookingForm';
import { CtaBand } from '@/components/CtaBand';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <FeaturedServices />
        <Gallery />
        <Reviews />
        <ServiceArea />
        <Faq />
        <BookingForm />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
