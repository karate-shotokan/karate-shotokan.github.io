import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/sobre", label: "O Sensei" },
    { to: "/shotokan", label: "Karaté Shotokan" },
    { to: "/dojos", label: "Dojos" },
    { to: "/horarios", label: "Horários" },
    { to: "/eventos", label: "Eventos" },
    { to: "/galeria", label: "Galeria" },
    { to: "/iniciacao", label: "Iniciação" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8B0000] flex items-center justify-center">
              <span className="text-white font-bold text-xl">KS</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-lg text-neutral-900">Karaté Shotokan</div>
              <div className="text-sm text-neutral-600">Sensei Carlos Cardoso</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#8B0000] ${
                  location.pathname === link.to ? "text-[#8B0000]" : "text-neutral-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#8B0000] hover:bg-[#6B0000]">
              <Link to="/inscricao">Inscreva-se</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-[#8B0000]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-[#8B0000] ${
                    location.pathname === link.to ? "text-[#8B0000]" : "text-neutral-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-[#8B0000] hover:bg-[#6B0000] w-full">
                <Link to="/inscricao">Inscreva-se</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
