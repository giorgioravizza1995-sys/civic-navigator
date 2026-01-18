import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SituazioneCard from "@/components/SituazioneCard";
import { getAreaBySlug } from "@/data/aree";

const AreaTematica = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = areaSlug ? getAreaBySlug(areaSlug) : undefined;

  if (!area) {
    return (
      <Layout>
        <div className="civic-container py-12">
          <p className="text-muted-foreground">Area non trovata.</p>
          <Link to="/" className="civic-link mt-4 inline-block">
            Torna alla homepage
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="civic-container py-8">
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Torna alle aree
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="civic-badge mb-3">
            Percorsi guidati
          </span>
          <h1 className="text-2xl font-semibold text-foreground mt-2">
            {area.title}
          </h1>
          <p className="text-muted-foreground mt-2">
            {area.description}
          </p>
        </div>

        {/* Situazioni */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Scegli la tua situazione
          </h2>
          {area.situazioni.map((situazione) => (
            <SituazioneCard
              key={situazione.slug}
              areaSlug={area.slug}
              guidaSlug={situazione.slug}
              title={situazione.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AreaTematica;
