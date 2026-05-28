import { HeroSection } from "./components/HeroSection";
import { Toaster } from "sonner";
import { PricingCard } from "./components/PricingCard";
import { FAQSection } from "./components/FAQSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import { Plans } from "./components/Plans";
import { Header } from "./components/header";
import CTAQuestions from "./components/CTAQuestions";

export default function App() {

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />

      <section className="py-20 px-6 md:px-12">
        <h2 className="text-white text-3xl md:text-5xl font-black text-center mb-12">
          Escolha seu plano
        </h2>
        <div className="flex flex-col gap-14">
          <Plans />
        </div>
      </section>

      <FAQSection />
      <TestimonialsSection />
      <CTAQuestions />
      <Footer />
      <Toaster />
    </div>
  );
}