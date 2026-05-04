import { plans } from "./types/pricing";
import { PricingCard } from "./PricingCard";

export function PricingSection() {
  function handleSubscribe(planId: string) {
    // Future: integrate with Stripe checkout
    console.log("Subscribe to plan:", planId);
    alert(`Plano selecionado: ${planId}\n(Integração com Stripe em breve)`);
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-red-600 uppercase tracking-[0.3em] text-xs font-bold mb-4">
          Planos & Preços
        </p>
        <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
          Escolha seu{" "}
          <span className="text-red-600 drop-shadow-[0_0_20px_rgba(139,0,0,0.8)]">
            Plano
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Do básico ao premium — soluções para cada etapa do seu negócio
          automotivo. Escale com performance.
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-red-700" />
          <div className="w-2 h-2 rounded-full bg-red-700 shadow-[0_0_8px_rgba(139,0,0,1)]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-red-700" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} onSubscribe={handleSubscribe} />
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-2xl mx-auto text-center mt-16">
        <p className="text-zinc-600 text-sm">
          Todos os planos incluem suporte técnico.{" "}
          <span className="text-red-800">Cancele quando quiser.</span>
        </p>
      </div>
    </section>
  );
}
