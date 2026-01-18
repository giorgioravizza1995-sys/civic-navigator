import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SituazioneCardProps {
  areaSlug: string;
  guidaSlug: string;
  title: string;
}

const SituazioneCard = ({ areaSlug, guidaSlug, title }: SituazioneCardProps) => {
  return (
    <Link 
      to={`/area/${areaSlug}/guida/${guidaSlug}`}
      className="civic-card block hover:border-primary/30 transition-colors group"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-foreground font-medium">
          {title}
        </p>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
      </div>
    </Link>
  );
};

export default SituazioneCard;
