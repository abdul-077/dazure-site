import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Your Selection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-light">
              Shopping Bag
            </h1>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted/50 flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="font-sans text-muted-foreground mb-8">
                Your bag is empty
              </p>
              <Link to="/products" className="btn-luxury inline-flex items-center gap-2">
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-6 py-8 border-b border-border/50"
                    >
                      {/* Product Image */}
                      <Link
                        to={`/products/${item.id}`}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-cream to-rose-quartz/10 flex-shrink-0 flex items-center justify-center"
                      >
                        <span className="font-serif text-2xl text-foreground/40">
                          {item.name.charAt(0)}
                        </span>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              to={`/products/${item.id}`}
                              className="font-serif text-lg hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="font-sans text-sm text-muted-foreground">
                              {item.subtitle}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center border border-border rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-muted transition-colors rounded-l-full"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-4 font-sans text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-muted transition-colors rounded-r-full"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-sans text-sm">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 floating-pod p-8">
                  <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${total}</span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-green-600">Complimentary</span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6 mb-8">
                    <div className="flex justify-between">
                      <span className="font-serif text-lg">Total</span>
                      <span className="font-serif text-xl">${total}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="btn-luxury w-full flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/products"
                    className="block text-center mt-4 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
