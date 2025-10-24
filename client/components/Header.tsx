import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border">
      <nav className="container-max flex items-center justify-between px-4 md:px-8 py-6">
        <Link to="/" className="text-3xl font-bold text-foreground">
          Positivus
        </Link>

        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 right-0 md:w-auto flex-col md:flex-row md:items-center gap-8 bg-background md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-border`}
        >
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Use Cases
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <button className="btn-primary w-full md:w-auto">
            Request a quote
          </button>
        </div>
      </nav>
    </header>
  );
}
