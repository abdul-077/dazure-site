import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Check } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">
              Contact
            </h1>
            <p className="font-sans text-muted-foreground">
              We would love to hear from you. Whether you have questions about 
              our products, need personalized recommendations, or simply want 
              to share your experience, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="floating-pod p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl mb-4">Message Sent</h2>
                  <p className="font-sans text-muted-foreground">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                    >
                      <option value="">Select a topic</option>
                      <option value="products">Product Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="consultation">Personalized Consultation</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-border bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-cream via-pearl to-rose-quartz/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-4 text-rose-quartz-deep" />
                    <p className="font-serif text-lg">New York City</p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Flagship Atelier
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="floating-pod p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-quartz/20 flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-rose-quartz-deep" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">Email</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    hello@lumiere.com
                  </p>
                </div>

                <div className="floating-pod p-6">
                  <div className="w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center mb-4">
                    <Phone className="h-5 w-5 text-stone" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">Phone</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    +1 (888) LUMIERE
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="floating-pod p-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-foreground/60" />
                </div>
                <h3 className="font-serif text-lg mb-2">Flagship Atelier</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  521 Madison Avenue<br />
                  New York, NY 10022<br />
                  United States
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-4 uppercase tracking-wider">
                  Mon–Sat: 10am–7pm · Sun: 12pm–6pm
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
