import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-32 lg:py-48 mineral-bg relative overflow-hidden">
      {/* Sculptural background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] max-w-5xl max-h-5xl"
        >
          <div className="w-full h-full bg-gradient-to-br from-highlight/10 via-transparent to-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Crystal pod container */}
          <div className="crystal-pod rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            {/* Inner glow animation */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-highlight/20 rounded-full blur-3xl animate-pulse-soft" />
            </div>

            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block text-xs font-light text-accent uppercase tracking-[0.3em] mb-6"
              >
                Inner Circle
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-serif mb-6"
              >
                Join the <span className="italic text-gradient-rose">Ritual</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-muted-foreground font-light mb-10 max-w-md mx-auto leading-relaxed"
              >
                Receive early access to new essences, exclusive rituals, and 
                invitations to intimate beauty experiences.
              </motion.p>

              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border border-border/50 rounded-full px-8 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 transition-all duration-500 font-light text-sm tracking-wide"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full px-8 group hover:shadow-halo transition-all duration-500"
                  >
                    <span className="text-sm tracking-[0.1em] uppercase font-light">Join</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-foreground"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-serif text-lg">Welcome to the ritual</p>
                </motion.div>
              )}

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[11px] text-muted-foreground/60 mt-6 tracking-wide"
              >
                We respect your privacy. Unsubscribe at any moment.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};