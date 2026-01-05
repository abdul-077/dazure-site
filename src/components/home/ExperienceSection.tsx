import { motion } from 'framer-motion';

const features = [
  {
    icon: '◇',
    title: 'Crystal Pods',
    description: 'Products displayed in translucent vessels that capture and refract light.',
  },
  {
    icon: '○',
    title: 'Floating Shelves',
    description: 'Architectural glass displays that seem to defy gravity.',
  },
  {
    icon: '△',
    title: 'Mineral Glow',
    description: 'Illuminated structures inspired by natural crystalline formations.',
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-champagne/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            A Sanctuary of Light
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Step into an immersive world where architecture, light, and beauty converge. 
            Our space is designed as a sensory journey, not merely a store.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="floating-pod aspect-square max-w-[280px] mx-auto mb-8 flex items-center justify-center glow-effect">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="font-serif text-5xl text-rose-quartz-deep/60 group-hover:text-rose-quartz-deep transition-colors"
                >
                  {feature.icon}
                </motion.span>
              </div>
              <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
