import Layout from "@/components/layout/Layout";
import AreaCard from "@/components/AreaCard";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { aree } from "@/data/aree";

const Index = () => {
  const scrollToAreas = () => {
    document.getElementById("aree")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="civic-container">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
              Orientati nelle regole, passo dopo passo
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Percorsi guidati per affrontare situazioni concrete: documenti, lavoro, casa, rischi.
            </p>
            <Button 
              variant="civic" 
              size="lg" 
              className="mt-6"
              onClick={scrollToAreas}
            >
              Inizia dalla tua situazione
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="aree" className="py-12 border-t border-border">
        <div className="civic-container">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Aree tematiche
          </h2>
          <div className="space-y-4">
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
