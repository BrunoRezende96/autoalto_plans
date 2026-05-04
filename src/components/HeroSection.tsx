import { useState, useEffect } from "react";
import { Zap, Car, TrendingUp, Menu, X } from "lucide-react";
import { Carousel, slides, type Slide } from "./Carousel";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<Slide>(slides[0]);
  const [textVisible, setTextVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSlideChange = (slide: Slide) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide(slide);
      setTextVisible(true);
    }, 300);
  };

  useEffect(() => {
    setTextVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Carousel background */}
      <Carousel onSlideChange={handleSlideChange} />

      {/* Navbar */}
      <nav className="relative z-30 w-full px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8B0000] rounded flex items-center justify-center shadow-[0_0_12px_rgba(139,0,0,0.8)]">
            <Car size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Auto<span className="text-[#8B0000]">Drive</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Planos", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#cc2222]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 px-4 py-2 rounded border border-white/20 hover:border-white/50"
          >
            Entrar
          </a>
          <a
            href="#"
            className="bg-[#8B0000] hover:bg-[#a00000] text-white text-sm font-semibold px-5 py-2 rounded transition-all duration-300 shadow-[0_0_12px_rgba(139,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,0,0,0.9)]"
          >
            Anunciar
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white z-40"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-md pt-20 pb-8 px-6 flex flex-col gap-4 md:hidden z-30 border-b border-white/10">
            {["Planos", "Serviços", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="flex-1 text-center text-white/80 text-sm font-medium py-2 rounded border border-white/20"
              >
                Entrar
              </a>
              <a
                href="#"
                className="flex-1 text-center bg-[#8B0000] text-white text-sm font-semibold py-2 rounded shadow-[0_0_12px_rgba(139,0,0,0.5)]"
              >
                Anunciar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 md:px-12 text-center pb-24 pt-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-[#8B0000]/20 border border-[#8B0000]/50 text-[#ff4444] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <Zap size={12} className="fill-current" />
          PLATAFORMA #1 EM ANÚNCIOS AUTOMOTIVOS
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl mb-6 transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "80ms",
          }}
        >
          Venda mais rápido com{" "}
          <span className="text-[#cc2222] drop-shadow-[0_0_20px_rgba(139,0,0,0.8)]">
            anúncios automotivos
          </span>{" "}
          de alta performance
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "160ms",
          }}
        >
          Planos acessíveis, alcance massivo e tecnologia para destacar seus
          veículos e fechar negócios com velocidade.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "240ms",
          }}
        >
          <a
            href="#"
            className="group flex items-center justify-center gap-2 bg-[#8B0000] hover:bg-[#a00000] text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:shadow-[0_0_35px_rgba(139,0,0,0.9)] hover:-translate-y-0.5"
          >
            <TrendingUp size={18} />
            Ver Planos
          </a>
          <a
            href="#"
            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-[#8B0000] text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:-translate-y-0.5 hover:bg-[#8B0000]/10"
          >
            <Car size={18} />
            Anunciar Agora
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transitionDelay: "320ms",
          }}
        >
          {[
            { value: "500K+", label: "Visitantes/mês" },
            { value: "12K+", label: "Veículos anunciados" },
            { value: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide info bar */}
      <div className="relative z-20 w-full px-6 md:px-12 pb-16 flex justify-center">
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 max-w-lg w-full text-center transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
          }}
        >
          <p className="text-white font-semibold text-sm">{currentSlide.title}</p>
          <p className="text-white/50 text-xs mt-1">{currentSlide.subtitle}</p>
        </div>
      </div>

      {/* Bottom red line accent */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent z-30 shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
    </section>
  );
}
