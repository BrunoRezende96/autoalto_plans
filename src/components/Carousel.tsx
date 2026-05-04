import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80&fit=crop",
    title: "Destaque seu Estoque",
    subtitle: "Alcance milhares de compradores qualificados todos os dias",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&fit=crop",
    title: "Venda com Velocidade",
    subtitle: "Anúncios otimizados para máxima conversão e visibilidade",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=80&fit=crop",
    title: "Tecnologia de Ponta",
    subtitle: "Plataforma inteligente que conecta vendedores e compradores",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&fit=crop",
    title: "Luxo & Performance",
    subtitle: "Do popular ao esportivo, seu veículo merece o melhor espaço",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1600&q=80&fit=crop",
    title: "Alcance Massivo",
    subtitle: "Mais de 500 mil visitantes mensais buscando o carro ideal",
  },
];

interface CarouselProps {
  onSlideChange?: (slide: Slide) => void;
}

export function Carousel({ onSlideChange }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        onSlideChange?.(slides[index]);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, onSlideChange]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Red gradient bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Left/Right controls */}
      {/* <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-[#8B0000] hover:border-[#8B0000] transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,0,0,0.7)]"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-[#8B0000] hover:border-[#8B0000] transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,0,0,0.7)]"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-[#8B0000] shadow-[0_0_8px_rgba(139,0,0,0.9)]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export { slides };
