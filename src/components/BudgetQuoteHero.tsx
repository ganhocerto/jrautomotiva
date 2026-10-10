import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppIcon3D } from './Icons';

export const BudgetQuoteHero: React.FC = () => {
  const whatsappUrl = 'https://wa.link/6nq224';

  return (
    <section className="relative w-full max-w-4xl mx-auto py-12 sm:py-20 px-4 select-none" aria-label="Orçamento direto">
      {/* High-impact automotive advertising billboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-[#070707] border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.95)] flex flex-col items-center text-center"
      >
        {/* Subtle orange laser line on top */}
        <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent drop-shadow-[0_0_12px_#FF6A00]" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#FF6A00]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 mb-5 text-[11px] sm:text-xs font-mono font-bold text-[#FFA040] uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>CANAL DIRETO • PATROCÍNIO — MG</span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display mb-3 leading-tight">
          SEU VEÍCULO PRECISA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">ATENÇÃO?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-lg mb-8">
          “Estamos aqui para ajudar você a encontrar a solução ideal.”
        </p>

        {/* 3D WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-cinema-whatsapp group relative inline-flex items-center justify-center gap-3.5 py-4 sm:py-4.5 px-8 sm:px-12 rounded-2xl text-white font-black tracking-wider text-sm sm:text-base cursor-pointer select-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Fazer orçamento no WhatsApp"
        >
          <WhatsAppIcon3D className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="uppercase font-display tracking-wider">
            FAZER MEU ORÇAMENTO
          </span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-85 animate-ping group-hover:opacity-100" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/90" />
        </motion.a>

        <p className="text-xs text-neutral-400 mt-5 font-medium">
          Envie sua dúvida ou agende sua revisão sem compromisso
        </p>
      </motion.div>
    </section>
  );
};
