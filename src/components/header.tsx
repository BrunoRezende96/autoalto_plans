import { useState } from "react";
import { Car, Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="w-full px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2"
        >
          <span className="text-white font-bold text-xl tracking-tight hover:scale-105 transition-transform duration-200">
            <img src="/logo.png" alt="Logo" className="h-8" />
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-white/70 hover:text-[#cc2222] text-sm font-medium transition-colors duration-200"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("planos")}
            className="text-white/70 hover:text-[#cc2222] text-sm font-medium transition-colors duration-200"
          >
            Planos
          </button>


          <button
            onClick={() => scrollToSection("consultoria")}
            className="text-white/70 hover:text-[#cc2222] text-sm font-medium transition-colors duration-200"
          >
            Contato
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("login")}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 px-4 py-2 rounded border border-white/20 hover:border-white/50"
          >
            Entrar
          </button>

          <button
            onClick={() => scrollToSection("anunciar")}
            className="bg-[#8B0000] hover:bg-[#a00000] text-white text-sm font-semibold px-5 py-2 rounded transition-all duration-300 shadow-[0_0_12px_rgba(139,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,0,0,0.9)]"
          >
            Anunciar
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-md pt-20 pb-8 px-6 flex flex-col gap-4 md:hidden border-b border-white/10">
            <button
              onClick={() => scrollToSection("planos")}
              className="text-left text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10"
            >
              Planos
            </button>

            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10"
            >
              Serviços
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10"
            >
              Contato
            </button>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => scrollToSection("login")}
                className="flex-1 text-center text-white/80 text-sm font-medium py-2 rounded border border-white/20"
              >
                Entrar
              </button>

              <button
                onClick={() => scrollToSection("anunciar")}
                className="flex-1 text-center bg-[#8B0000] text-white text-sm font-semibold py-2 rounded shadow-[0_0_12px_rgba(139,0,0,0.5)]"
              >
                Anunciar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}