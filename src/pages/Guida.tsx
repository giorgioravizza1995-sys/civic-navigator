import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getAreaBySlug, getSituazioneBySlug } from "@/data/aree";

const Guida = () => {
  const { areaSlug, guidaSlug } = useParams<{ areaSlug: string; guidaSlug: string }>();
  
  const area = areaSlug ? getAreaBySlug(areaSlug) : undefined;
  const situazione = areaSlug && guidaSlug ? getSituazioneBySlug(areaSlug, guidaSlug) : undefined;

  if (!area || !situazione) {
    return (
      <Layout>
        <div className="civic-container py-12">
          <p className="text-muted-foreground">Guida non trovata.</p>
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
          to={`/area/${areaSlug}`} 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Torna a {area.title}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="civic-badge mb-3">
            {area.title}
          </span>
          <h1 className="text-2xl font-semibold text-foreground mt-2">
            {situazione.title}
          </h1>
        </div>

        {/* Placeholder per guida interattiva */}
        <div className="civic-card">
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Il percorso guidato per questa situazione sarà disponibile a breve.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Qui troverai domande, passaggi e indicazioni pratiche.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guida;
