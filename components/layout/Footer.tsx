import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-cream/50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              LUMIÈRE
            </Link>
            <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
              A sanctuary of sensory luxury. Where science meets artistry to create 
              transformative rituals for the modern soul.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-muted-foreground">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/products" className="font-sans text-sm hover:text-primary transition-colors">
                Collection
              </Link>
              <Link to="/about" className="font-sans text-sm hover:text-primary transition-colors">
                Our Story
              </Link>
              <Link to="/contact" className="font-sans text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-muted-foreground">
              Connect
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm">
              <span>hello@lumiere.com</span>
              <span>+1 (888) LUMIERE</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Lumière. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-sans text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="font-sans text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
