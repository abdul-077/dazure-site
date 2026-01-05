import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { BrandPhilosophy } from '@/components/home/BrandPhilosophy';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandPhilosophy />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
