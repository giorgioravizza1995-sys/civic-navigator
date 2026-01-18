import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="civic-container py-6">
        <Link to="/" className="block">
          <h1 className="text-xl font-semibold text-foreground">
            Sportello Digitale Civico
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Percorsi guidati per orientarsi nelle regole
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
