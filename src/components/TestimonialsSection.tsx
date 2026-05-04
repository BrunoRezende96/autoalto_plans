import { Star } from "lucide-react";

const testimonials = [
  {
    company: "AutoPrime Veículos",
    plan: "Plano Turbo",
    comment:
      "Depois que entramos no plano Parceiro, nossa visibilidade aumentou muito. Os anúncios começaram a gerar leads todos os dias.",
  },
  {
    company: "Elite Motors Brasil",
    plan: "Plano Velocidade Máxima",
    comment:
      "O tráfego pago incluso fez total diferença. Em menos de 30 dias já tivemos retorno sobre o investimento.",
  },
  {
    company: "Grupo Velocity Automóveis",
    plan: "Plano Campeão",
    comment:
      "A gestão completa e os recursos de agência facilitaram tudo. Hoje operamos com muito mais escala e organização.",
  },
  {
    company: "TopCar Multimarcas",
    plan: "Plano Alta Velocidade",
    comment:
      "O destaque na plataforma trouxe mais autoridade. Nossos veículos vendem muito mais rápido agora.",
  },
  {
    company: "Urban Drive Veículos",
    plan: "Plano Velocidade Máxima",
    comment:
      "Ter site próprio + tráfego pago incluso foi um divisor de águas. Parece que temos uma equipe de marketing interna.",
  },
  {
    company: "Nova Era Automóveis",
    plan: "Plano Campeão",
    comment:
      "Os vídeos promocionais e o suporte ajudaram a profissionalizar totalmente nossa presença digital.",
  },

  // 🔽 Planos menores e intermediários atualizados

  {
    company: "SpeedCar Veículos",
    plan: "Plano Aceleração",
    comment:
      "Mesmo no plano básico já conseguimos uma boa visibilidade. Ótimo custo-benefício para começar.",
  },
  {
    company: "Rota Certa Automóveis",
    plan: "Plano Arrancada",
    comment:
      "Começamos no gratuito e já conseguimos gerar contatos. Foi essencial para dar o primeiro passo.",
  },
  {
    company: "Prime Auto Shop",
    plan: "Plano Aceleração",
    comment:
      "O aumento de anúncios e o carrossel ajudaram bastante. Já sentimos mais movimento nas vendas.",
  },
  {
    company: "MaxDrive Motors",
    plan: "Plano Alta Velocidade",
    comment:
      "Os recursos de destaque realmente fazem diferença. Nosso estoque gira bem mais rápido agora.",
  },
  {
    company: "Conecta Carros",
    plan: "Plano Aceleração",
    comment:
      "Simples, direto e funcional. Ideal para quem quer anunciar sem complicação.",
  },
  {
    company: "Vision Motors",
    plan: "Plano Turbo",
    comment:
      "A exposição da marca e os criativos deram um nível profissional muito maior para nossa empresa.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-white text-3xl md:text-5xl font-black text-center mb-4">
          Quem já vende mais com a gente
        </h2>

        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          De pequenos lojistas a grandes agências, nossos planos ajudam empresas
          a crescer no mercado automotivo.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-red-800 hover:shadow-[0_0_25px_rgba(139,0,0,0.3)] transition-all duration-300"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-red-600 fill-red-600"
                  />
                ))}
              </div>

              {/* Comentário */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                “{item.comment}”
              </p>

              {/* Empresa */}
              <div>
                <p className="text-white font-semibold">{item.company}</p>
                <p className="text-red-600 text-xs uppercase tracking-widest mt-1">
                  {item.plan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linha vermelha */}
      <div className="mt-16 w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
    </section>
  );
}