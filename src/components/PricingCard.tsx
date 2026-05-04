import { Check } from "lucide-react";
import { PricingPlan } from "./types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  onSubscribe: (planId: string) => void;
}

export function PricingCard({ plan, onSubscribe }: PricingCardProps) {
  const isHighlighted = plan.highlighted;
  const isConsult = plan.price === null;

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-6 min-h-[550px] transition-all duration-300 cursor-default
        ${isHighlighted
          ? "border-2 border-red-700 bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_30px_rgba(139,0,0,0.5)] scale-[1.02]"
          : "border border-zinc-800 bg-zinc-950 hover:border-red-900 hover:shadow-[0_0_20px_rgba(139,0,0,0.25)] hover:scale-[1.02]"
        }
      `}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
          <span className="bg-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_12px_rgba(139,0,0,0.8)]">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <div className="mb-4">
        <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-400">
          {plan.name}
        </h3>
      </div>

      {/* Price */}
      <div className="mb-2">
        <span
          className={`text-4xl font-black ${isHighlighted ? "text-red-600" : "text-white"
            }`}
        >
          {plan.priceLabel}
        </span>
        {plan.period && (
          <span className="text-zinc-500 text-sm ml-1">
            {plan.period}
          </span>
        )}
      </div>

      {/* 🔥 SUBTÍTULO ABAIXO DO PREÇO */}
      {plan.subtitle && (
        <p className="text-xs text-red-500 mb-6 leading-snug font-medium animate-pulse">
          {plan.subtitle}
        </p>
      )}

      {/* Divider */}
      <div
        className={`h-px mb-6 ${isHighlighted ? "bg-red-900" : "bg-zinc-800"
          }`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${isHighlighted ? "text-red-500" : "text-red-700"
                }`}
            />
            <span
              className={`
          text-sm leading-snug
          ${feature.toLowerCase().includes("podcast")
                  ? "text-red-700 font-bold animate-pulse drop-shadow-[0_0_6px_rgba(220,38,38,0.8)]"
                  : "text-zinc-300"
                }
        `}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSubscribe(plan.id)}
        className={`
          w-full py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300
          ${isHighlighted
            ? "bg-red-700 text-white shadow-[0_0_16px_rgba(139,0,0,0.6)] hover:bg-red-600 hover:shadow-[0_0_28px_rgba(220,38,38,0.8)]"
            : isConsult
              ? "bg-transparent border border-red-900 text-red-500 hover:bg-red-900/20 hover:shadow-[0_0_16px_rgba(139,0,0,0.4)]"
              : "bg-zinc-900 border border-zinc-700 text-white hover:border-red-700 hover:text-red-400 hover:shadow-[0_0_16px_rgba(139,0,0,0.4)]"
          }
        `}
      >
        {isConsult ? "Falar com Consultor" : "Assinar Plano"}
      </button>
    </div>
  );
}