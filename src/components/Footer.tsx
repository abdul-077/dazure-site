import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

const footerLinks = {
  ritual: ["Essences", "Oils", "Creams", "Mists"],
  philosophy: ["Our Story", "Ingredients", "Sustainability", "Atelier"],
  care: ["Contact", "Shipping", "Returns", "FAQ"],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Sculptural divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-8 lg:px-16 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-serif font-medium tracking-[0.2em] text-embossed uppercase mb-6 text-foreground/80">
              Aura
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed font-light mb-8">
              A sanctuary for those who seek beauty as an art form. 
              Transformative rituals for the discerning spirit.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-11 h-11 rounded-full frosted-glass flex items-center justify-center hover:shadow-soft transition-shadow duration-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              <h3 className="font-light uppercase tracking-[0.2em] text-[11px] text-foreground/60 mb-6">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-500 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-border/30 mt-20 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <p className="text-xs text-muted-foreground/50 tracking-wide font-light">
            © 2024 Aura Beauty. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-500 font-light"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-500 font-light"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};