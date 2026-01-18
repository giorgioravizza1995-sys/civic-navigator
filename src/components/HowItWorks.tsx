import { MapPin, HelpCircle, Route } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Parti da una situazione reale",
    description: "Scegli la situazione che corrisponde al tuo caso concreto.",
  },
  {
    number: "2",
    icon: HelpCircle,
    title: "Rispondi a poche domande",
    description: "Alcune domande ci aiutano a capire meglio il tuo caso.",
  },
  {
    number: "3",
    icon: Route,
    title: "Segui il percorso guidato",
    description: "Ottieni indicazioni pratiche, passo dopo passo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30 border-t border-border">
      <div className="civic-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Come funziona
          </h2>
          <p className="text-muted-foreground mt-2">
            Tre semplici passaggi per orientarti
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">
                Passo {step.number}
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
