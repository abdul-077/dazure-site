import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, Check, Shield } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';

type Step = 'shipping' | 'payment' | 'review';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [shippingData, setShippingData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const steps: { key: Step; label: string; icon: React.ElementType }[] = [
    { key: 'shipping', label: 'Shipping', icon: Truck },
    { key: 'payment', label: 'Payment', icon: CreditCard },
    { key: 'review', label: 'Review', icon: Check },
  ];

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsComplete(true);
    clearCart();
  };

  if (items.length === 0 && !isComplete) {
    navigate('/cart');
    return null;
  }

  if (isComplete) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container mx-auto px-6 text-center max-w-xl"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Thank You</h1>
            <p className="font-sans text-muted-foreground mb-8">
              Your order has been placed successfully. A confirmation email 
              will be sent to {shippingData.email || 'your email'}.
            </p>
            <Link to="/products" className="btn-luxury">
              Continue Shopping
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Area */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-12">
                {steps.map((s, index) => (
                  <div key={s.key} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        step === s.key
                          ? 'bg-foreground text-background'
                          : steps.indexOf(steps.find(st => st.key === step)!) > index
                          ? 'bg-green-100 text-green-600'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {steps.indexOf(steps.find(st => st.key === step)!) > index ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <s.icon className="h-4 w-4" />
                      )}
                    </div>
                    <span className="hidden sm:block ml-3 font-sans text-sm">
                      {s.label}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="w-16 md:w-24 h-px bg-border mx-4" />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Shipping Step */}
                {step === 'shipping' && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-2xl mb-8">Shipping Information</h2>
                    
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={shippingData.email}
                        onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={shippingData.firstName}
                          onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={shippingData.lastName}
                          onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={shippingData.address}
                        onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="col-span-2">
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          value={shippingData.state}
                          onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          ZIP
                        </label>
                        <input
                          type="text"
                          value={shippingData.zip}
                          onChange={(e) => setShippingData({ ...shippingData, zip: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('payment')}
                      className="btn-luxury w-full sm:w-auto mt-8"
                    >
                      Continue to Payment
                    </button>
                  </motion.div>
                )}

                {/* Payment Step */}
                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-2xl mb-8">Payment Method</h2>

                    {/* Payment Options */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <button className="p-4 rounded-xl border-2 border-foreground bg-muted/30 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        <span className="font-sans text-sm">Card</span>
                      </button>
                      <button className="p-4 rounded-xl border border-border hover:border-foreground/50 transition-colors flex items-center justify-center">
                        <span className="font-sans text-sm font-medium text-blue-600">PayPal</span>
                      </button>
                      <button className="p-4 rounded-xl border border-border hover:border-foreground/50 transition-colors flex items-center justify-center">
                        <span className="font-sans text-sm">Apple Pay</span>
                      </button>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={paymentData.expiry}
                          onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={paymentData.cvv}
                          onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        value={paymentData.name}
                        onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span className="font-sans text-xs">
                        Your payment information is encrypted and secure
                      </span>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep('shipping')}
                        className="btn-luxury-outline"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep('review')}
                        className="btn-luxury flex-1"
                      >
                        Review Order
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Review Step */}
                {step === 'review' && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h2 className="font-serif text-2xl">Review Your Order</h2>

                    {/* Shipping Summary */}
                    <div className="p-6 rounded-2xl bg-muted/30">
                      <h3 className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-3">
                        Shipping To
                      </h3>
                      <p className="font-sans text-sm">
                        {shippingData.firstName} {shippingData.lastName}<br />
                        {shippingData.address}<br />
                        {shippingData.city}, {shippingData.state} {shippingData.zip}
                      </p>
                    </div>

                    {/* Items */}
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-4">
                        Order Items
                      </h3>
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between py-3 border-b border-border/50">
                          <span className="font-sans text-sm">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="font-sans text-sm">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep('payment')}
                        className="btn-luxury-outline"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isProcessing}
                        className="btn-luxury flex-1 disabled:opacity-50"
                      >
                        {isProcessing ? 'Processing...' : `Place Order — $${total}`}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 floating-pod p-8">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cream to-rose-quartz/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-sm text-foreground/40">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-sm">{item.name}</p>
                        <p className="font-sans text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-sans text-sm">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border/50 pt-4 space-y-2">
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="font-serif text-lg">Total</span>
                    <span className="font-serif text-xl">
                      ${(total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
