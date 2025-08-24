import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Gallery />
        <Menu />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
