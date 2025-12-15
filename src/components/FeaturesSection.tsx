import { Swords, Map, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Intense Combat",
    description: "Master a deep, skill-based combat system with precise timing and devastating combos.",
  },
  {
    icon: Map,
    title: "Vast World",
    description: "Explore a sprawling dark fantasy realm filled with secrets, dungeons, and ancient mysteries.",
  },
  {
    icon: Shield,
    title: "Epic Gear",
    description: "Collect and upgrade legendary weapons and armor to forge your ultimate warrior.",
  },
  {
    icon: Sparkles,
    title: "Dynamic Story",
    description: "Shape your destiny through meaningful choices that echo across the shattered kingdoms.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Forge</span>
            <span className="text-foreground"> Your Legend</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Experience a combat system that rewards skill, patience, and strategy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(38_90%_55%/0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
