import { Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold">
              <span className="text-gradient-gold">SWORD</span>
              <span className="text-foreground">FALL</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm mt-2">
              © 2024 Swordfall. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-8 text-muted-foreground font-body">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Support</a>
            <a href="#" className="hover:text-gold transition-colors">Press Kit</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
