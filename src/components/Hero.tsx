import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/product-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mineral-bg">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] bg-highlight/10 fluid-blob"
        />
        
        {/* Secondary organic shape */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-accent/8 organic-shape float-delayed"
        />

        {/* Iridescent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-br from-highlight/5 via-glow/5 to-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block text-xs font-light text-accent uppercase tracking-[0.3em] mb-8"
            >
              The Ritual Collection
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal leading-[1.1] mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-foreground/90"
              >
                Where Beauty
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="block text-gradient-rose italic"
              >
                Becomes Art
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base lg:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
            >
              An immersive sensory journey through rare botanical essences and 
              transformative skincare rituals, designed to elevate your daily practice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-10 py-6 text-sm tracking-[0.15em] uppercase font-light hover:shadow-halo transition-all duration-500"
              >
                Begin Your Ritual
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="rounded-full px-10 py-6 text-sm tracking-[0.15em] uppercase font-light text-muted-foreground hover:text-foreground"
              >
                Explore Essences
              </Button>
            </motion.div>
          </motion.div>

          {/* Crystal Pod Product Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            {/* Halo glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-br from-highlight/20 via-accent/10 to-transparent blur-3xl animate-pulse-soft" />
            </div>
            
            {/* Crystal pod container */}
            <motion.div 
              className="relative aspect-[3/4] w-full max-w-md crystal-pod rounded-[3rem] p-4 halo-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Aura signature serum in crystal vessel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
              </div>
              
              {/* Floating info pod */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 frosted-glass px-8 py-4 rounded-full shadow-elevated float"
              >
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Starting from</p>
                <p className="text-lg font-serif text-foreground">€285</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground/50"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};