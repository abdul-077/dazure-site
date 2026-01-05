import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BrandPhilosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-cream/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-rose-quartz/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-champagne/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden">
              {/* Abstract organic shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-quartz/20 via-cream to-champagne/20" />
              <div className="absolute inset-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-rose-quartz/30 to-champagne/30 flex items-center justify-center"
                >
                  <span className="font-serif text-6xl text-foreground/30 italic">L</span>
                </motion.div>
              </div>
              
              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center"
              >
                <span className="font-serif text-2xl text-rose-quartz-deep">✧</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Philosophy
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              Beauty as an
              <span className="block italic text-rose-quartz-deep">Art Form</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="font-sans text-muted-foreground leading-relaxed">
                At Lumière, we believe skincare transcends routine. Each product is 
                a carefully composed symphony of rare botanicals, advanced science, 
                and sensory artistry.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Our formulations are created in small batches, ensuring the highest 
                potency and purity. We source ingredients from pristine ecosystems 
                around the world, respecting both nature and tradition.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <span className="font-serif text-3xl text-foreground">12</span>
                <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  Products
                </p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl text-foreground">98%</span>
                <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  Natural
                </p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl text-foreground">5★</span>
                <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  Rated
                </p>
              </div>
            </div>

            <Link to="/about" className="btn-luxury-outline">
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
