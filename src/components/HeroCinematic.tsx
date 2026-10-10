import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import workshopBgImg from '../assets/images/modern_workshop_interior_1791563244428.jpg';
import { WhatsAppIcon3D, LocationPin3D } from './Icons';

export const HeroCinematic: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Smooth atmospheric parallax on the workshop background
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  const whatsappUrl = 'https://wa.link/6nq224';

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center text-center overflow-hidden px-4 pt-10 pb-16 select-none">
      
      {/* 1. Cinematic Realistic Workshop Interior Background */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : bgY,
          scale: shouldReduceMotion ? 1 : bgScale,
        }}
        className="absolute inset-0 pointer-events-none -z-20 overflow-hidden"
      >
        <img
          src={workshopBgImg}
          alt="Oficina mecânica JR Soluções Automotivas"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-[0.45]"
          loading="eager"
        />
        {/* Deep atmospheric vignettes and orange rim highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-[#050505]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF6A00]/15 blur-[120px] rounded-full" />
      </motion.div>

      {/* 2. Top Header & Unboxed 3D Metallic Emblem Logo */}
      <motion.div
        style={{ opacity: shouldReduceMotion ? 1 : contentOpacity }}
        className="relative z-10 w-full max-w-2xl flex flex-col items-center pt-2 sm:pt-6"
      >
        {/* Original Logo: Centered, smaller, NO BOX / NO FRAME */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-4 flex justify-center items-center"
        >
          {/* Subtle warm backlight glow */}
          <div 
            className="absolute inset-0 bg-[#FF6A00]/25 rounded-full blur-2xl -z-10 transform scale-110 pointer-events-none" 
            aria-hidden="true"
          />
          <img
            src="https://i.postimg.cc/rmyNdDtX/49FD375F-0B74-4F25-A97E-E1931D4D71D0.png"
            alt="JR Soluções Automotivas"
            className="w-36 sm:w-44 md:w-48 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(255,106,0,0.35)] transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase font-display leading-tight mb-1"
        >
          <span className="text-white">JR SOLUÇÕES </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">
            AUTOMOTIVAS
          </span>
        </motion.h1>

        {/* Institutional Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-neutral-300 max-w-md mb-2"
        >
          “Somos sinônimo de credibilidade e organização.”
        </motion.p>

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-300 mb-8"
        >
          <LocationPin3D className="w-3.5 h-3.5 text-[#FF6A00]" />
          <span>Patrocínio • Minas Gerais</span>
        </motion.div>

        {/* Highlight Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <span className="text-[11px] sm:text-xs font-black tracking-[0.3em] text-[#FF8C00] uppercase font-display mb-2 drop-shadow-[0_0_10px_rgba(255,106,0,0.5)]">
            EXCELÊNCIA EM CADA DETALHE
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none max-w-2xl">
            SEU CARRO EM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">BOAS MÃOS.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3 max-w-md">
            Soluções completas em mecânica automotiva com precisão técnica e transparência.
          </p>
        </motion.div>

        {/* Compact, Premium Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-cinema-orange group relative inline-flex items-center justify-center gap-3 py-3.5 sm:py-4 px-8 sm:px-10 rounded-2xl text-white font-black tracking-wider text-sm sm:text-base cursor-pointer select-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <WhatsAppIcon3D className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="uppercase font-display tracking-wider">
              SOLICITAR ORÇAMENTO
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="relative z-10 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity mt-8">
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
          CONHEÇA NOSSA ESTRUTURA
        </span>
        <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-bounce" />
        </div>
      </div>

    </section>
  );
};
