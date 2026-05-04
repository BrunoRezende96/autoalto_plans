import { PricingCard } from "./PricingCard";
import type { PricingPlan } from "./PricingCard";

export function Plans() {
    const plans: PricingPlan[] = [
        {
            id: "arrancada",
            name: "Arrancada",
            price: 49,
            priceLabel: "Grátis",
            subtitle: "Aproveite nosso plano gratuito para testar a plataforma e anunciar seu primeiro carro!",
            period: "",
            features: [
                "Até 4 anúncios",
                "Anúncios básicos",
                "Galeria com 4 imagens",
                "Vídeo na ficha",
                "Divulgação nos Stories",
            ],
        },
        {
            id: "aceleracao",
            name: "Aceleração",
            price: 49,
            priceLabel: "R$49,90",
            period: "/mês",
            features: [
                "+ Tudo do plano Arrancada",
                "Até 7 anúncios",
                "Galeria com 7 imagens",
                "Vídeo na ficha",
                "Divulgação nos Stories",
                "Carrossel de divulgação",
            ],
        },
        {
            id: "alta-velocidade",
            name: "Alta Velocidade",
            price: 149,
            priceLabel: "R$149,90",
            period: "/mês",
            features: [
                "+ Tudo do plano Aceleração",
                "Até 11 anúncios",
                "1 live mensal de engajamento (Apenas um veículo por live)",
            ],
        },
        {
            id: "velocidade-maxima",
            name: "Velocidade Máxima",
            price: 249,
            priceLabel: "R$249,90",
            period: "/mês",
            features: [
                "+ Tudo do plano Alta Velocidade",
                "Até 15 anúncios",
                "Página da agência",
                "Destaque em super ofertas",
                "1 vídeo mensal (tour ou apresentação)",
                "Criativos para anúncios",
                "Selo de destaque no anúncio",
            ],
        },

        {
            id: "Nitro",
            name: "Nitro",
            price: 649,
            priceLabel: "R$649,90",
            period: "/mês",
            highlighted: true,
            badge: "Mais vendido",
            features: [
                "+ Tudo do plano Velocidade Máxima",
                "Divulgação em podcast",
                "Tour mensal na loja ou vídeo",
                "Captação mensal de fotos personalizadas para anúncios",
                "Desconto exclusivo de 70% no tráfego pago em plataformas externas",

            ],
        },

        {
            id: "Turbo",
            name: "Turbo",
            price: 1.49990,
            priceLabel: "R$1.499,90",
            subtitle: null,
            period: "/mês",
            badge: null,
            features: [
                "+ Tudo do plano Nitro",
                "Participação mensal em podcasts",
                "Anúncios ilimitados",
                "Site grátis completo com gestão",
                "Tráfego pago grátis incluso",
            ],
        },
        {
            id: "pole-position",
            name: "Pole Position",
            price: 249990,
            priceLabel: "R$2.499,90",
            period: "/mês",
            features: [
                "+ Tudo dos planos anteriores",
                "Página da agência personalizada",
                "Administração de redes sociais completa",
                "Vídeos promocionais semanais",
                "IA de auto-atendimento 24/7",
            ],
        },
        {
            id: "campeao",
            name: "Campeão",
            price: null,
            priceLabel: "Sob consulta",
            subtitle:
                "Precisa de mais serviços? Entre em contato com nossa equipe e receba uma consultoria grátis!",
            badge: "Exclusivo",
            features: [
                "Plano totalmente personalizado",
                "Soluções sob medida para sua operação",
                "Atendimento estratégico especializado",
            ],
        },

    ];

    return (
        <div className="container flex items-center justify-center mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {plans.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        plan={plan}
                        onSubscribe={(id) => console.log("Plano escolhido:", id)}
                    />
                ))}
            </div>
        </div>
    );
}