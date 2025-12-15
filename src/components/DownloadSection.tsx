import { Button } from "@/components/ui/button";
import { Download, Monitor, Apple, Terminal } from "lucide-react";

const platforms = [
  { name: "Windows", icon: Monitor, size: "2.4 GB", version: "v1.0.3" },
  { name: "macOS", icon: Apple, size: "2.6 GB", version: "v1.0.3" },
  { name: "Linux", icon: Terminal, size: "2.3 GB", version: "v1.0.3" },
];

const DownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Begin Your </span>
            <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Download Swordfall now and forge your destiny in the fallen kingdoms.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group relative p-8 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm text-center hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_50px_hsl(38_90%_55%/0.2)]"
            >
              {/* Platform Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <platform.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Platform Name */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                {platform.name}
              </h3>

              {/* Details */}
              <div className="text-muted-foreground font-body mb-6 space-y-1">
                <p className="text-sm">{platform.version}</p>
                <p className="text-sm">{platform.size}</p>
              </div>

              {/* Download Button */}
              <Button variant="hero" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* System Requirements Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body text-sm">
            Minimum: 8GB RAM, GTX 1060 or equivalent, 10GB storage
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
