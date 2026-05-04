export type PlanId =
  | "starter"
  | "basic"
  | "amigo"
  | "super-amigo"
  | "parceiro"
  | "parceiro-vip"
  | "agencia"
  | "agencia-parceira";

export interface PricingPlan {
  id: PlanId;
  name: string;
  price: number | null;
  priceLabel: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  stripeProductId?: string; // future Stripe integration
}

export const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    priceLabel: "Grátis",
    features: [
      "5 anúncios",
      "Anúncio completo",
      "Duração de 30 dias",
      "Galeria com 8 imagens",
      "Vídeo na ficha do veículo",
      "Divulgação em stories",
      "Sistema painel totem",
    ],
  },
  {
    id: "basic",
    name: "Básico",
    price: 50,
    priceLabel: "R$ 50",
    period: "/mês",
    features: [
      "Tudo do plano Starter",
      "8 anúncios",
      "Participa do carrossel de divulgação",
    ],
  },
  {
    id: "amigo",
    name: "Amigo",
    price: 150,
    priceLabel: "R$ 150",
    period: "/mês",
    features: [
      "Tudo do plano Básico",
      "10 anúncios",
      "Carrossel de divulgação",
      "Carrossel da live (básico)",
    ],
  },
  {
    id: "super-amigo",
    name: "Super Amigo",
    price: 250,
    priceLabel: "R$ 250",
    period: "/mês",
    highlighted: true,
    badge: "Mais Popular",
    features: [
      "Tudo do plano Amigo",
      "20 anúncios",
      "Página da agência",
      "Exibição randômica na home",
      "Selo de destaque (super oferta)",
      "Exibição em super ofertas",
      "Galeria com 8 imagens",
      "Vídeo na ficha",
    ],
  },
  {
    id: "parceiro",
    name: "Parceiro",
    price: 550,
    priceLabel: "R$ 550",
    period: "/mês",
    features: [
      "Tudo do plano Super Amigo",
      "Divulgação da marca em podcast",
      "1 tour mensal (live ou vídeo)",
      "Anúncios em criativos",
      "Tráfego pago com valor parceiro (R$350)",
    ],
  },
  {
    id: "parceiro-vip",
    name: "Parceiro VIP",
    price: 1500,
    priceLabel: "R$ 1.500",
    period: "/mês",
    features: [
      "Tudo do plano Parceiro",
      "Anúncios ilimitados",
      "Site grátis com gestão",
      "Tráfego pago grátis",
    ],
  },
  {
    id: "agencia",
    name: "Agência",
    price: 2500,
    priceLabel: "R$ 2.500",
    period: "/mês",
    features: [
      "Tudo dos planos anteriores",
      "Página da agência",
      "Duração de anúncios: 30 a 365 dias",
      "Administração de redes sociais (limitado)",
      "Site + administração",
      "Tráfego pago completo",
      "Vídeos promocionais (limitado)",
      "Agente IA de atendimento",
    ],
  },
  {
    id: "agencia-parceira",
    name: "Agência Parceira",
    price: null,
    priceLabel: "Sob Consulta",
    features: [
      "Tudo dos planos anteriores",
      "Condições exclusivas",
      "Atendimento personalizado",
      "Soluções sob medida",
    ],
  },
];
