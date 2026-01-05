import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Plus, Minus, Check } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-sans text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="relative aspect-square rounded-4xl overflow-hidden bg-gradient-to-br from-cream via-pearl to-rose-quartz/10">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-rose-quartz/20 via-transparent to-transparent animate-glow-pulse" />
                
                {/* Product visual */}
                <div className="absolute inset-12 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-rose-quartz/40 to-champagne/40 flex items-center justify-center"
                  >
                    <span className="font-serif text-5xl text-foreground/50">
                      {product.name.charAt(0)}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:py-8"
            >
              {/* Category */}
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-2">
                {product.name}
              </h1>
              <p className="font-sans text-lg text-muted-foreground mb-6">
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-champagne text-champagne'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-3xl mb-8">${product.price}</p>

              {/* Description */}
              <div className="mb-10">
                <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  The Essence
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-10">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">
                    Key Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="px-4 py-2 rounded-full bg-muted/50 font-sans text-xs"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`btn-luxury flex-1 flex items-center justify-center gap-2 transition-all ${
                    added ? 'bg-green-600' : ''
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      <span>Add to Bag — ${product.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Features */}
              <div className="mt-10 pt-10 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-lg mb-1">Free</p>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                    Shipping
                  </p>
                </div>
                <div>
                  <p className="font-serif text-lg mb-1">30 Day</p>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                    Returns
                  </p>
                </div>
                <div>
                  <p className="font-serif text-lg mb-1">Luxury</p>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                    Packaging
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-6 mt-24">
            <h2 className="font-serif text-3xl mb-12 text-center">
              Complete Your Ritual
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
