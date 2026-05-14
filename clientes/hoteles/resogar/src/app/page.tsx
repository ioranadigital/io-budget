import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import FeaturedApartments from '@/components/sections/FeaturedApartments';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <Hero />
        <FeaturedApartments />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
