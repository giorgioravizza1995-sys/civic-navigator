const steps = [
  {
    number: "1",
    title: "Parti da una situazione reale",
    description: "Scegli la situazione che corrisponde al tuo caso concreto.",
  },
  {
    number: "2",
    title: "Rispondi a poche domande",
    description: "Alcune domande ci aiutano a capire meglio il tuo caso.",
  },
  {
    number: "3",
    title: "Segui il percorso guidato",
    description: "Ottieni indicazioni pratiche, passo dopo passo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="civic-container">
        <h2 className="text-lg font-semibold text-foreground mb-8">
          Come funziona
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                {step.number}
              </div>
              <div className="pt-0.5">
                <h3 className="font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
