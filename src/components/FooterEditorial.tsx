import React from 'react';

export const FooterEditorial: React.FC = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto px-4 pt-12 pb-20 text-center select-none" aria-label="Rodapé oficial">
      {/* Subtle Neon Orange Laser Divider Line */}
      <div className="relative w-full max-w-lg mx-auto mb-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-65" />
        <div className="absolute inset-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFA040] to-transparent blur-[2px] opacity-80" />
      </div>

      <div className="flex flex-col items-center gap-2 text-neutral-400">
        <h4 className="text-base sm:text-lg font-black tracking-[0.25em] text-white uppercase font-display">
          JR SOLUÇÕES <span className="text-[#FF6A00]">AUTOMOTIVAS</span>
        </h4>

        <p className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide">
          Patrocínio — Minas Gerais
        </p>

        <p className="text-xs sm:text-sm text-neutral-400 italic max-w-sm mt-0.5">
          “Somos sinônimo de credibilidade e organização.”
        </p>

        <div className="h-[1px] w-12 bg-white/10 my-3" />

        <p className="text-[10px] sm:text-[11px] text-neutral-500 font-mono tracking-wider">
          © {new Date().getFullYear()} JR Soluções Automotivas • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
