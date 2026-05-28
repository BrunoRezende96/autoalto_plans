"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Building2,
  BadgeDollarSign,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CTAQuestions() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState({
    nome: "",
    loja: "",
    estoque: "",
    objetivo: "",
    anuncios: "",
    marketing: "",
  });

  const slideAnimation = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.98 },
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const nextStep = (
    key: keyof typeof answers,
    value: string
  ) => {
    setAnswers((s) => ({
      ...s,
      [key]: value,
    }));

    setStep((s) => s + 1);
  };

  const whatsappMessage = encodeURIComponent(`
Olá! Gostaria de solicitar uma consultoria para anunciar meus veículos.

• Nome: ${answers.nome}
• Loja/Agência: ${answers.loja}
• Estoque médio: ${answers.estoque}
• Objetivo: ${answers.objetivo}
• Quantidade de anúncios: ${answers.anuncios}
• Já investe em marketing? ${answers.marketing}
`);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/5511987103956?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const optionButton =
    "w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-[#8B0000] hover:border-[#8B0000] text-white py-5 px-6 font-semibold transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_25px_rgba(139,0,0,0.45)] hover:-translate-y-1";

  return (
    <section
      id="consultoria"
      className="
        relative
        w-full
        py-28
        px-6
        bg-black
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B0000]/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          className="
            bg-white/[0.04]
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[36px]
            overflow-hidden
            shadow-[0_0_60px_rgba(0,0,0,0.45)]
            p-8
            md:p-14
          "
        >
          <AnimatePresence mode="wait">
            {/* STEP 0 */}
            {step === 0 && (
              <motion.div
                key="step0"
                {...slideAnimation}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 bg-[#8B0000]/20 border border-[#8B0000]/40 text-[#ff4444] text-xs font-bold px-4 py-2 rounded-full">
                  <Sparkles size={14} />
                  CONSULTORIA PREMIUM
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight">
                  Vamos acelerar
                  <br />
                  suas vendas?
                </h2>

                <p className="text-white/60 text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
                  Responda algumas perguntas rápidas para que nossa
                  equipe monte a melhor estratégia para sua loja,
                  agência ou operação automotiva.
                </p>

                <button
                  onClick={() => setStep(1)}
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-3
                    bg-[#8B0000]
                    hover:bg-[#a00000]
                    text-white
                    font-bold
                    px-10
                    py-5
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-[0_0_30px_rgba(139,0,0,0.45)]
                    hover:shadow-[0_0_45px_rgba(139,0,0,0.75)]
                    hover:-translate-y-1
                  "
                >
                  COMEÇAR AGORA
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" {...slideAnimation}>
                <div className="flex items-center gap-3 mb-8">
                  <Car className="text-[#cc2222]" />
                  <h2 className="text-4xl font-black text-white">
                    Qual é o seu nome?
                  </h2>
                </div>

                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={answers.nome}
                  onChange={(e) =>
                    setAnswers((s) => ({
                      ...s,
                      nome: e.target.value,
                    }))
                  }
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-6
                    py-5
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-[#8B0000]
                    transition-all
                    duration-300
                  "
                />

                <button
                  disabled={answers.nome.trim().length < 3}
                  onClick={() => setStep(2)}
                  className="
                    mt-8
                    w-full
                    bg-[#8B0000]
                    disabled:opacity-40
                    hover:bg-[#a00000]
                    text-white
                    font-bold
                    py-5
                    rounded-2xl
                    transition-all
                    duration-300
                  "
                >
                  CONTINUAR
                </button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" {...slideAnimation}>
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="text-[#cc2222]" />
                  <h2 className="text-4xl font-black text-white">
                    Qual é o nome da sua loja?
                  </h2>
                </div>

                <input
                  type="text"
                  placeholder="Digite o nome da loja ou agência"
                  value={answers.loja}
                  onChange={(e) =>
                    setAnswers((s) => ({
                      ...s,
                      loja: e.target.value,
                    }))
                  }
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-6
                    py-5
                    text-white
                    placeholder:text-white/30
                    outline-none
                    focus:border-[#8B0000]
                    transition-all
                    duration-300
                  "
                />

                <button
                  disabled={answers.loja.trim().length < 2}
                  onClick={() => setStep(3)}
                  className="
                    mt-8
                    w-full
                    bg-[#8B0000]
                    disabled:opacity-40
                    hover:bg-[#a00000]
                    text-white
                    font-bold
                    py-5
                    rounded-2xl
                    transition-all
                    duration-300
                  "
                >
                  CONTINUAR
                </button>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" {...slideAnimation}>
                <h2 className="text-4xl font-black text-white mb-8">
                  Quantos veículos você possui em estoque?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    "Até 10 veículos",
                    "10 a 30 veículos",
                    "30 a 60 veículos",
                    "Mais de 60 veículos",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        nextStep("estoque", item)
                      }
                      className={optionButton}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div key="step4" {...slideAnimation}>
                <h2 className="text-4xl font-black text-white mb-8">
                  Qual é o seu principal objetivo?
                </h2>

                <div className="grid grid-cols-1 gap-5">
                  {[
                    "Vender mais veículos",
                    "Gerar mais leads",
                    "Fortalecer minha marca",
                    "Automatizar atendimento",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        nextStep("objetivo", item)
                      }
                      className={optionButton}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <motion.div key="step5" {...slideAnimation}>
                <h2 className="text-4xl font-black text-white mb-8">
                  Quantos anúncios pretende publicar?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    "Até 5 anúncios",
                    "Até 15 anúncios",
                    "Mais de 30 anúncios",
                    "Anúncios ilimitados",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        nextStep("anuncios", item)
                      }
                      className={optionButton}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <motion.div key="step6" {...slideAnimation}>
                <div className="flex items-center gap-3 mb-8">
                  <BadgeDollarSign className="text-[#cc2222]" />

                  <h2 className="text-4xl font-black text-white">
                    Você já investe em marketing?
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <button
                    onClick={() =>
                      nextStep("marketing", "Sim")
                    }
                    className={optionButton}
                  >
                    SIM
                  </button>

                  <button
                    onClick={() =>
                      nextStep("marketing", "Não")
                    }
                    className={optionButton}
                  >
                    NÃO
                  </button>
                </div>
              </motion.div>
            )}

            {/* FINAL */}
            {step === 7 && (
              <motion.div
                key="final"
                {...slideAnimation}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-bold px-5 py-2 rounded-full">
                  <CheckCircle2 size={16} />
                  ANÁLISE CONCLUÍDA
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight">
                  Sua estratégia
                  <br />
                  está pronta.
                </h2>

                <p className="text-white/60 text-lg mt-8 leading-relaxed max-w-2xl mx-auto">
                  Nossa equipe já possui informações suficientes
                  para indicar o plano ideal para sua operação.
                </p>

                <button
                  onClick={openWhatsApp}
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-3
                    bg-[#8B0000]
                    hover:bg-[#a00000]
                    text-white
                    font-bold
                    px-10
                    py-5
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-[0_0_35px_rgba(139,0,0,0.5)]
                    hover:shadow-[0_0_50px_rgba(139,0,0,0.8)]
                    hover:-translate-y-1
                  "
                >
                  FALAR COM UM CONSULTOR
                  <ArrowRight size={20} />
                </button>

                {/* Summary */}
                <div
                  className="
                    mt-12
                    bg-white/[0.04]
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    text-left
                  "
                >
                  <h3 className="text-2xl font-black text-white mb-6">
                    Resumo das respostas
                  </h3>

                  <ul className="space-y-4 text-white/70">
                    <li>
                      • Nome: <strong>{answers.nome}</strong>
                    </li>

                    <li>
                      • Loja: <strong>{answers.loja}</strong>
                    </li>

                    <li>
                      • Estoque: <strong>{answers.estoque}</strong>
                    </li>

                    <li>
                      • Objetivo: <strong>{answers.objetivo}</strong>
                    </li>

                    <li>
                      • Anúncios: <strong>{answers.anuncios}</strong>
                    </li>

                    <li>
                      • Marketing: <strong>{answers.marketing}</strong>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}