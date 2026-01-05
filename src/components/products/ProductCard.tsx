import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card overflow-hidden">
        {/* Image Container */}
        <Link to={`/products/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/80" />
          
          {/* Floating glow effect */}
          <motion.div
            animate={{ 
              opacity: isHovered ? 0.6 : 0.3,
              scale: isHovered ? 1.1 : 1 
            }}
            className="absolute inset-0 bg-gradient-to-br from-rose-quartz/20 via-transparent to-champagne/20"
          />
          
          {/* Product image placeholder with elegant styling */}
          <div className="absolute inset-8 flex items-center justify-center">
            <motion.div
              animate={{ y: isHovered ? -8 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-3xl bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40"
            >
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rose-quartz/30 to-champagne/30 flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl text-foreground/60">
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick add button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 btn-luxury flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add to Bag</span>
          </motion.button>
        </Link>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3 w-3 fill-champagne text-champagne" />
            <span className="font-sans text-xs text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>
          
          <Link to={`/products/${product.id}`}>
            <h3 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-3">
            {product.subtitle}
          </p>
          
          <p className="font-sans text-sm">
            ${product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
