import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="civic-container py-4">
        <Link to="/" className="inline-flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Compass className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground tracking-tight">
              Sportello Digitale Civico
            </h1>
            <p className="text-xs text-muted-foreground">
              Percorsi guidati per orientarsi nelle regole
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
