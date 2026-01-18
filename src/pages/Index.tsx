import Layout from "@/components/layout/Layout";
import AreaCard from "@/components/AreaCard";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { aree } from "@/data/aree";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const scrollToAreas = () => {
    document.getElementById("aree")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section with Background */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Orientati nelle regole,
              <br />
              <span className="text-primary">passo dopo passo</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg md:text-xl leading-relaxed">
              Percorsi guidati per affrontare situazioni concrete: 
              documenti, lavoro, casa, rischi.
            </p>
            <Button 
              variant="civic" 
              size="lg" 
              className="mt-8 shadow-lg"
              onClick={scrollToAreas}
            >
              Inizia dalla tua situazione
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="aree" className="py-16 border-t border-border">
        <div className="civic-container">
          <h2 className="text-xl font-semibold text-foreground mb-8">
            Aree tematiche
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {aree.map((area) => (
              <AreaCard
                key={area.slug}
                slug={area.slug}
                title={area.title}
                description={area.description}
              />
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
