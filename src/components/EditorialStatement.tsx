import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import mechanicPhoto from '../assets/images/mechanic_engine_working_1791590759757.jpg';

export const EditorialStatement: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Subtle parallax shift on the photographic background
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden select-none" aria-label="Compromisso editorial JR Soluções Automotivas">
      
      {/* Background: Professional Technician Working on Engine with Cinematic Lighting */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : imgY }}
        className="absolute inset-0 -z-20 pointer-events-none overflow-hidden"
      >
        <img
          src={mechanicPhoto}
          alt="Mecânico profissional trabalhando no motor na JR Soluções Automotivas"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-[0.38]"
          loading="lazy"
        />
        {/* Cinematic dark scrim for pure legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-[#050505]" />
        {/* Warm amber light glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[420px] h-[420px] bg-[#FF6A00]/12 blur-[130px] rounded-full" />
      </motion.div>

      {/* Editorial Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Subtle orange accent trace */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 sm:w-16 h-[2px] bg-[#FF6A00]" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#FF8C00] uppercase">
            FILOSOFIA DE TRABALHO
          </span>
        </div>

        {/* Large Editorial Title (NO BOX) */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight max-w-3xl mb-6"
        >
          MUITO MAIS QUE MECÂNICA.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">
            COMPROMISSO COM VOCÊ.
          </span>
        </motion.h2>

        {/* Editorial Prose with Highlighted Words */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl text-neutral-200 font-normal leading-relaxed max-w-2xl mb-12 sm:mb-16"
        >
          “Na <strong className="text-white font-semibold">JR Soluções Automotivas</strong>, unimos{' '}
          <span className="text-[#FF8C00] font-bold">dedicação</span>,{' '}
          <span className="text-[#FF6A00] font-bold">organização</span> e{' '}
          <span className="text-[#FFA040] font-bold">cuidado</span> para oferecer soluções em mecânica para seu veículo.”
        </motion.p>

        {/* 3 Pillars in Clean Asymmetric Architectural Layout (NO generic boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/[0.08]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#FF6A00]">01.</span>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-display">
                DIAGNÓSTICO PRECISO
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Leitura computadorizada e teste de componentes para identificar a causa real, sem trocas desnecessárias de peças.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#FF8C00]">02.</span>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-display">
                ORGANIZAÇÃO & RIGOR
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Bancadas limpas, ferramentas no lugar certo e comunicação clara com o cliente durante cada etapa do serviço.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#FFA040]">03.</span>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-display">
                CUIDADO EM CADA DETALHE
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Aperto técnico com torquímetro, proteção da lataria e inspeção minuciosa antes da entrega final do carro.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
