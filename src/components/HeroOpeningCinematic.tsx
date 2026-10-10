import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import workshopBgImg from '../assets/images/modern_workshop_interior_1791563244428.jpg';
import { WhatsAppIcon3D, LocationPin3D } from './Icons';

export const HeroOpeningCinematic: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle camera parallax drift on scroll
  const bgY = useTransform(scrollY, [0, 700], [0, 160]);
  const bgScale = useTransform(scrollY, [0, 700], [1, 1.08]);

  const whatsappUrl = 'https://wa.link/6nq224';

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center text-center overflow-hidden px-4 pt-8 pb-14 select-none">
      
      {/* 1. Passo da Abertura: Fundo começa escuro, revelando gradualmente a oficina */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          y: shouldReduceMotion ? 0 : bgY,
          scale: shouldReduceMotion ? 1 : bgScale,
        }}
        className="absolute inset-0 pointer-events-none -z-20 overflow-hidden"
      >
        <img
          src={workshopBgImg}
          alt="Oficina mecânica JR Soluções Automotivas em Patrocínio MG"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-[0.48]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/55 to-[#050505]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-[#FF6A00]/18 blur-[120px] rounded-full" />
      </motion.div>

      {/* 2. Passo da Abertura: Faixa de luz laser laranja atravessando o cenário */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100%', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, delay: 0.25, ease: 'easeInOut' }}
        className="absolute top-[32%] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent pointer-events-none drop-shadow-[0_0_12px_#FF6A00] -z-10"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center pt-2 sm:pt-6">
        
        {/* 3. Passo da Abertura: Logomarca surge com iluminação metálica e profundidade */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-4 flex justify-center items-center"
        >
          {/* Warm backlight halo */}
          <div 
            className="absolute inset-0 bg-[#FF6A00]/25 rounded-full blur-2xl -z-10 scale-125 pointer-events-none" 
            aria-hidden="true"
          />
          <img
            src="https://i.postimg.cc/rmyNdDtX/49FD375F-0B74-4F25-A97E-E1931D4D71D0.png"
            alt="JR Soluções Automotivas"
            className="w-36 sm:w-44 md:w-48 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(255,106,0,0.35)] transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </motion.div>

        {/* Company Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase font-display leading-tight mb-1"
        >
          <span className="text-white">JR SOLUÇÕES </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">
            AUTOMOTIVAS
          </span>
        </motion.h1>

        {/* Frase institucional */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-neutral-300 max-w-md mb-2"
        >
          “Somos sinônimo de credibilidade e organização.”
        </motion.p>

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-300 mb-8"
        >
          <LocationPin3D className="w-3.5 h-3.5 text-[#FF6A00]" />
          <span>Patrocínio • Minas Gerais</span>
        </motion.div>

        {/* 4. Passo da Abertura: Título principal de baixo para cima com suavidade */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none max-w-2xl">
            A SOLUÇÃO QUE SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">CARRO PRECISA.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3.5 max-w-lg leading-relaxed">
            “Mecânica automotiva com credibilidade, cuidado e organização em Patrocínio — MG.”
          </p>
        </motion.div>

        {/* 5. Passo da Abertura: Botão principal com reflexo luminoso de travessia */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-3d-luxury-orange animate-sheen group inline-flex items-center justify-center gap-3.5 py-4 px-8 sm:px-11 rounded-2xl text-white font-black tracking-wider text-sm sm:text-base cursor-pointer select-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <WhatsAppIcon3D className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="uppercase font-display tracking-wider">
              SOLICITAR ORÇAMENTO
            </span>
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll indicator prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center hover:opacity-100 transition-opacity mt-6"
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
          ROLE PARA EXPLORAR A TECNOLOGIA
        </span>
        <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-bounce" />
        </div>
      </motion.div>

    </section>
  );
};
