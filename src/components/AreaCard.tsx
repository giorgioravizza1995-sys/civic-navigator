import { Link } from "react-router-dom";
import { ChevronRight, ShieldAlert, FileText, Briefcase, Home, LucideIcon } from "lucide-react";

interface AreaCardProps {
  slug: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

const iconMap: Record<string, LucideIcon> = {
  "rischi-frodi": ShieldAlert,
  "documenti-identita": FileText,
  "lavoro-previdenza": Briefcase,
  "casa-residenza": Home,
};

const AreaCard = ({ slug, title, description }: AreaCardProps) => {
  const Icon = iconMap[slug] || FileText;
  
  return (
    <Link 
      to={`/area/${slug}`}
      className="civic-card block hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
          <span className="civic-badge mt-3">
            Percorsi guidati
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AreaCard;
