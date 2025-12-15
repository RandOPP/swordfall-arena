import { useState } from "react";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";

const screenshots = [
  { src: screenshot1, title: "The Mystic Forest", description: "Ancient powers await those who dare to enter" },
  { src: screenshot2, title: "Combat Mastery", description: "Every duel is a dance of steel and skill" },
  { src: screenshot3, title: "Ruined Kingdoms", description: "Explore the remnants of fallen empires" },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Witness The </span>
            <span className="text-gradient-gold">Realm</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Stunning visuals bring the world of Swordfall to life.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="max-w-5xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group">
            <img
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-muted-foreground font-body">
                {screenshots[activeIndex].description}
              </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-xl border-2 border-gold/30 pointer-events-none" />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 justify-center">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-32 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-2 ring-gold scale-105 shadow-[0_0_20px_hsl(38_90%_55%/0.3)]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
