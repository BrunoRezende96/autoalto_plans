import { Car, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Grid 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 - Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="font-bold text-xl">
                <img src="/logo.png" alt="Logo" className="h-8" />
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              A plataforma número 1 em anúncios automotivos, conectando vendedores e compradores com tecnologia e alta performance.
            </p>
          </div>

          {/* Coluna 2 - Planos */}
          <div>
            <h4 className="font-bold mb-4 text-white">Planos</h4>

            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">Starter</li>
              <li className="hover:text-white cursor-pointer">Básico</li>
              <li className="hover:text-white cursor-pointer">Amigo</li>
              <li className="hover:text-red-500 cursor-pointer">Super Amigo</li>
              <li className="hover:text-white cursor-pointer">Parceiro</li>
              <li className="hover:text-white cursor-pointer">VIP</li>
              <li className="hover:text-white cursor-pointer">Agência</li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>

            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">Sobre nós</li>
              <li className="hover:text-white cursor-pointer">Como funciona</li>
              <li className="hover:text-white cursor-pointer">Depoimentos</li>
              <li className="hover:text-white cursor-pointer">Contato</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>

            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-red-600" />
                suporte@autodrive.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-red-600" />
                (11) 99999-9999
              </div>
            </div>

            {/* Redes sociais (seguro, sem lucide) */}
            <div className="flex gap-4 mt-6 text-lg">
              <span className="cursor-pointer hover:text-red-500 transition">
                📸
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                📘
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                🐦
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} AutoDrive. Todos os direitos reservados.</p>

          <p className="text-zinc-600">
            Desenvolvido para performance no mercado automotivo
          </p>
        </div>
      </div>

      {/* Linha vermelha glow */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
    </footer>
  );
}