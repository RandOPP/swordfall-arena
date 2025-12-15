import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-gold font-body text-lg md:text-xl tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Rise. Fight. Conquer.
          </p>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="text-gradient-gold">SWORD</span>
            <span className="text-foreground">FALL</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Enter a world of dark fantasy where every blade tells a story. Master the art of combat, 
            forge legendary weapons, and carve your destiny in the ashes of fallen kingdoms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="mt-12 flex justify-center items-center gap-8 text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <span className="text-sm font-body tracking-wider">Available on:</span>
            <div className="flex gap-6">
              <span className="text-steel hover:text-gold transition-colors cursor-pointer">Windows</span>
              <span className="text-steel hover:text-gold transition-colors cursor-pointer">macOS</span>
              <span className="text-steel hover:text-gold transition-colors cursor-pointer">Linux</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
