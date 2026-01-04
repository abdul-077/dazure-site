import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Ritual", "Essences", "Atelier", "Philosophy"];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 frosted-glass"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo - Embossed into header */}
          <motion.a 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-xl lg:text-2xl font-serif font-medium tracking-[0.25em] text-embossed uppercase text-foreground/80">
              Aura
            </h1>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-sm font-light tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-500 line-draw uppercase"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 lg:gap-6">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-highlight/20">
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-highlight/20">
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 h-4 w-4 flex items-center justify-center bg-accent text-accent-foreground text-[10px] rounded-full font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden frosted-glass border-t border-border/30"
      >
        <nav className="container mx-auto px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-light tracking-[0.15em] text-foreground/80 hover:text-foreground transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};