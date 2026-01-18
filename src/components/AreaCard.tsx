import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface AreaCardProps {
  slug: string;
  title: string;
  description: string;
}

const AreaCard = ({ slug, title, description }: AreaCardProps) => {
  return (
    <Link 
      to={`/area/${slug}`}
      className="civic-card block hover:border-primary/30 transition-colors group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className="civic-badge mb-3">
            Percorsi guidati
          </span>
          <h3 className="text-lg font-semibold text-foreground mt-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-primary mt-4 group-hover:underline underline-offset-2">
            Vai ai percorsi
            <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AreaCard;
