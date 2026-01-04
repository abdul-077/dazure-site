import { motion } from "framer-motion";

const rituals = [
  {
    id: 1,
    name: "Morning Awakening",
    description: "Begin with light",
    time: "6 min ritual",
  },
  {
    id: 2,
    name: "Evening Restoration",
    description: "Return to stillness",
    time: "12 min ritual",
  },
  {
    id: 3,
    name: "Weekly Renewal",
    description: "Deep transformation",
    time: "25 min ritual",
  },
];

export const Categories = () => {
  return (
    <section className="py-32 lg:py-48 relative overflow-hidden">
      {/* Sculptural background - flowing silk-like shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-card/50 to-transparent" />
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/3 -left-1/4 w-[50vw] h-[60vh] bg-highlight/8 organic-shape blur-2xl"
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-1/4 -right-1/4 w-[40vw] h-[40vh] bg-accent/6 organic-shape-alt blur-2xl"
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="text-xs font-light text-accent uppercase tracking-[0.3em] mb-6 block">
            The Experience
          </span>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-normal mb-6">
            Your <span className="italic text-gradient-rose">Ritual</span> Awaits
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Discover curated skincare journeys designed to transform your daily routine 
            into moments of serene self-care.
          </p>
        </motion.div>

        {/* Ritual Cards - Floating glass shelves aesthetic */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {rituals.map((ritual, index) => (
            <motion.a
              key={ritual.id}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Illuminated mineral structure card */}
              <div className="relative crystal-pod rounded-[2.5rem] p-10 lg:p-14 min-h-[320px] flex flex-col justify-between overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-highlight/20 rounded-full blur-3xl" />
                </div>

                {/* Decorative element - like embedded crystal */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-highlight/30 to-accent/20 flex items-center justify-center mb-8 group-hover:shadow-halo transition-shadow duration-700">
                  <div className="w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-[10px] text-accent uppercase tracking-[0.25em] mb-3">
                    {ritual.time}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-serif mb-2 text-foreground/90 group-hover:text-foreground transition-colors">
                    {ritual.name}
                  </h3>
                  <p className="text-muted-foreground font-light">
                    {ritual.description}
                  </p>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-accent/20 transition-colors duration-700 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};