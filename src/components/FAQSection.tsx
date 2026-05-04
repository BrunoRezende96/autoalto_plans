import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "Os planos variam principalmente na quantidade de anúncios, visibilidade e recursos extras como destaque, carrossel e divulgação em mídia.",
  },
  {
    question: "O plano Starter é realmente gratuito?",
    answer:
      "Sim. O plano Starter permite até 5 anúncios com recursos básicos sem custo mensal.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim. Você pode fazer upgrade ou downgrade a qualquer momento conforme sua necessidade.",
  },
  {
    question: "Os anúncios têm duração limitada?",
    answer:
      "Sim. A maioria dos planos inclui anúncios com duração de 30 dias, podendo variar em planos mais avançados.",
  },
  {
    question: "O que significa 'carrossel de divulgação'?",
    answer:
      "Seus veículos aparecem em áreas de destaque da plataforma, aumentando a visibilidade e chances de venda.",
  },
  {
    question: "Os planos incluem tráfego pago?",
    answer:
      "Apenas planos mais avançados como Parceiro e VIP incluem benefícios relacionados a tráfego pago.",
  },
  {
    question: "Existe suporte para agências?",
    answer:
      "Sim. Os planos Agência e Agência Parceira incluem recursos completos para gestão profissional.",
  },
  {
    question: "Como funciona o plano Sob Consulta?",
    answer:
      "Esse plano é personalizado. Nossa equipe entra em contato para montar uma solução sob medida para seu negócio.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-white text-3xl md:text-5xl font-black text-center mb-12">
          Dúvidas Frequentes
        </h2>

        {/* Lista */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden transition-all duration-300"
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="text-white font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-red-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Resposta */}
                <div
                  className={`px-6 transition-all duration-300 ${
                    isOpen
                      ? "max-h-40 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Linha vermelha igual ao Hero */}
      <div className="mt-16 w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
    </section>
  );
}