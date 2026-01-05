import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const values = [
  {
    title: 'Purity',
    description: 'Every ingredient is selected for its exceptional efficacy and purity. We never compromise.',
  },
  {
    title: 'Artistry',
    description: 'Our formulations are composed like symphonies—each element in perfect harmony.',
  },
  {
    title: 'Ritual',
    description: 'Skincare is not routine. It is a daily meditation, a moment of intentional self-care.',
  },
  {
    title: 'Innovation',
    description: 'We merge ancient wisdom with cutting-edge science to create the extraordinary.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pearl via-cream/50 to-background" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-rose-quartz/20 to-transparent"
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Our Story
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8">
                The Art of
                <span className="block italic text-rose-quartz-deep">Radiance</span>
              </h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Born from a reverence for beauty in its purest form, Lumière represents 
                a new paradigm in skincare—where science dissolves into artistry, and 
                routine transforms into ritual.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-cream/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Philosophy
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
                  Quiet Luxury,
                  <span className="block italic text-rose-quartz-deep">Profound Results</span>
                </h2>
                <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    In a world of noise and excess, we chose a different path. Lumière 
                    was founded on the belief that true luxury whispers rather than shouts. 
                    Our products are not adorned with excessive packaging or bold claims—they 
                    simply deliver transformative results.
                  </p>
                  <p>
                    Each formulation begins in our laboratories in the Swiss Alps, where 
                    purity of air and water inspire purity of product. We work with 
                    botanicals sourced from the most pristine ecosystems on Earth, treating 
                    each ingredient as the precious resource it is.
                  </p>
                  <p>
                    The result is skincare that feels like a meditation—products that invite 
                    you to slow down, to breathe, to reconnect with yourself through the 
                    simple act of caring for your skin.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-4xl overflow-hidden bg-gradient-to-br from-rose-quartz/20 via-cream to-champagne/20">
                  <div className="absolute inset-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full border border-rose-quartz/30 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 rounded-full border border-champagne/30 flex items-center justify-center"
                      >
                        <span className="font-serif text-4xl text-foreground/30 italic">L</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating accents */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-champagne/30 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-rose-quartz/30 backdrop-blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Values
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light">
                Guiding Principles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cream to-rose-quartz/10 flex items-center justify-center">
                    <span className="font-serif text-2xl text-foreground/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-24 bg-cream/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Our Commitment
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
                "We believe in beauty that respects the Earth, honors tradition, 
                and embraces innovation."
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-12">
                Every Lumière product is cruelty-free, sustainably sourced, and 
                crafted with the utmost respect for both people and planet. Our 
                packaging is minimal by design, recyclable, and made from 
                responsibly sourced materials.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <span className="font-serif text-3xl text-foreground">100%</span>
                  <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Cruelty Free
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-foreground">98%</span>
                  <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Natural
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-foreground">Zero</span>
                  <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Parabens
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl text-foreground">Eco</span>
                  <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Packaging
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
