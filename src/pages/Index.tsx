import Layout from "@/components/layout/Layout";
import AreaCard from "@/components/AreaCard";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { aree } from "@/data/aree";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const scrollToAreas = () => {
    document.getElementById("aree")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section with Background */}
      <section 
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        
        <div className="civic-container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in">
              Orientati nelle regole,
              <br />
              <span className="text-primary">passo dopo passo</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg md:text-xl leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              Percorsi guidati per affrontare situazioni concrete: 
              documenti, lavoro, casa, rischi.
            </p>
            <Button 
              variant="civic" 
              size="lg" 
              className="mt-8 shadow-lg animate-fade-in opacity-0 group"
              style={{ animationDelay: '0.2s' }}
              onClick={scrollToAreas}
            >
              Inizia dalla tua situazione
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="aree" className="py-16 md:py-20">
        <div className="civic-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Aree tematiche
            </h2>
            <p className="text-muted-foreground mt-2">
              Scegli l'area che riguarda la tua situazione
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {aree.map((area, index) => (
              <div 
                key={area.slug} 
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AreaCard
                  slug={area.slug}
                  title={area.title}
                  description={area.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />
    </Layout>
  );
};

export default Index;
