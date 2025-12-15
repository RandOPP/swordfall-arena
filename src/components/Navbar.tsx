import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="font-display text-xl md:text-2xl font-bold">
            <span className="text-gradient-gold">SWORD</span>
            <span className="text-foreground">FALL</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 font-body text-sm">
              <a href="#features" className="text-muted-foreground hover:text-gold transition-colors">
                Features
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">
                Gallery
              </a>
              <a href="#download" className="text-muted-foreground hover:text-gold transition-colors">
                Download
              </a>
            </nav>
            <Button variant="hero" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Get Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4 font-body">
              <a
                href="#features"
                className="text-muted-foreground hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              <Button variant="hero" size="default" className="mt-2">
                <Download className="mr-2 h-4 w-4" />
                Get Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
