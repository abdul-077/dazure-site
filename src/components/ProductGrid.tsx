import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";

const products = [
  { id: 1, name: "Luminous Essence", price: 285, category: "Serum", image: product1, featured: true },
  { id: 2, name: "Rose Quartz Elixir", price: 195, category: "Oil", image: product2 },
  { id: 3, name: "Pearl Radiance", price: 165, category: "Cream", image: product3 },
  { id: 4, name: "Botanical Veil", price: 145, category: "Mist", image: product4 },
  { id: 5, name: "Silk Renewal", price: 225, category: "Mask", image: product5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ProductGrid = () => {
  return (
    <section className="py-32 lg:py-48 mineral-bg relative overflow-hidden">
      {/* Organic background element */}
      <div className="absolute top-1/4 right-0 w-[30vw] h-[50vh] bg-highlight/5 organic-shape-alt blur-xl" />
      
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
            The Collection
          </span>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-normal">
            Curated <span className="italic text-gradient-rose">Essences</span>
          </h2>
        </motion.div>

        {/* Grid - Asymmetric museum-like layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-12 gap-6 lg:gap-10"
        >
          {products.map((product, index) => {
            // Create asymmetric layout
            const gridClasses = index === 0 
              ? "col-span-12 lg:col-span-7" 
              : index === 1 
                ? "col-span-6 lg:col-span-5"
                : index === 2
                  ? "col-span-6 lg:col-span-4"
                  : index === 3
                    ? "col-span-12 lg:col-span-4"
                    : "col-span-12 lg:col-span-4";

            return (
              <motion.article
                key={product.id}
                variants={itemVariants}
                className={`group cursor-pointer ${gridClasses}`}
              >
                {/* Crystal Pod Product Container */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative crystal-pod rounded-[2rem] p-3 lg:p-4 halo-glow"
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] ${
                      index === 0 ? "aspect-[4/5]" : "aspect-square"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                    
                    {/* Add to ritual button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-full frosted-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-soft"
                    >
                      <Plus className="h-5 w-5 text-foreground" />
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Product info - minimal typography */}
                <div className="mt-6 text-center">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.25em] mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-lg lg:text-xl text-foreground/90 group-hover:text-foreground transition-colors duration-500">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 font-light">€{product.price}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="#"
            className="inline-flex items-center text-sm font-light tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-500 uppercase line-draw"
          >
            View Complete Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};