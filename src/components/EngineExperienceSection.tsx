import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import engineShowcaseImg from '../assets/images/automotive_engine_3d_showcase_1791591981067.jpg';

interface EngineHotspot {
  id: string;
  name: string;
  tag: string;
  top: string;
  left: string;
  info: string;
}

const engineHotspots: EngineHotspot[] = [
  {
    id: 'intake',
    name: 'Coletor & Injeção',
    tag: 'FLUXO DE AR & COMBUSTÍVEL',
    top: '20%',
    left: '52%',
    info: 'Calibração de vazão de bicos injetores e teste de vedação de corpo de borboleta.',
  },
  {
    id: 'valves',
    name: 'Cabeçote & Válvulas',
    tag: 'TOLERÂNCIA MICROMÉTRICA',
    top: '42%',
    left: '35%',
    info: 'Aperto sequencial com torquímetro calibrado e verificação de folga de tuchos.',
  },
  {
    id: 'timing',
    name: 'Sincronismo & Correias',
    tag: 'PONTO EXATO DO MOTOR',
    top: '60%',
    left: '74%',
    info: 'Troca preventiva de correia dentada, rolamentos guia e tensor no prazo da montadora.',
  },
  {
    id: 'manifold',
    name: 'Exaustão & Arrefecimento',
    tag: 'TEMPERATURA IDEAL',
    top: '72%',
    left: '28%',
    info: 'Inspeção de fluxo de gases, vedação de coletor e circulação uniforme do fluido.',
  },
];

export const EngineExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeHotspot, setActiveHotspot] = useState<EngineHotspot | null>(engineHotspots[0]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll tracking strictly inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.5,
  });

  // Perspective and scale displacement on scroll
  const engineScale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1.05, 0.96]);
  const engineRotateX = useTransform(smoothProgress, [0, 0.5, 1], [8, 0, -6]);
  const engineY = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);
  const sweepX = useTransform(smoothProgress, [0.2, 0.8], ['-120%', '220%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-20 sm:py-32 px-4 select-none overflow-hidden"
      aria-label="Experiência mecânica em 3D"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#FF6A00]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#FF8C00] uppercase">
            ENGENHARIA & DETALHES
          </span>
          <span className="w-8 h-[2px] bg-[#FF6A00]" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none mb-3"
        >
          TECNOLOGIA, CUIDADO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">E PRECISÃO.</span>
        </motion.h2>

        <p className="text-sm sm:text-base text-neutral-300 font-normal max-w-lg leading-relaxed">
          “Cada detalhe importa quando o assunto é o seu veículo.”
        </p>
      </div>

      {/* 3D Realistic Engine Centerpiece Viewport */}
      <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#141414] via-[#090909] to-[#040404] border border-white/10 p-4 sm:p-8 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
        
        {/* Ambient Orange Radial Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF6A00]/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Traveling Luminous Specular Reflection Beam */}
        <motion.div
          style={{ x: shouldReduceMotion ? '0%' : sweepX }}
          className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-[#FF6A00]/25 to-transparent blur-xl transform -skew-x-25 pointer-events-none"
        />

        {/* Interactive 3D Engine Stage */}
        <div className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] flex items-center justify-center">
          
          <motion.div
            style={{
              scale: shouldReduceMotion ? 1 : engineScale,
              rotateX: shouldReduceMotion ? 0 : (mousePos.y ? mousePos.y : engineRotateX),
              rotateY: shouldReduceMotion ? 0 : mousePos.x,
              y: shouldReduceMotion ? 0 : engineY,
              perspective: 1000,
            }}
            transition={{
              rotateX: { type: 'spring', stiffness: 180, damping: 20 },
              rotateY: { type: 'spring', stiffness: 180, damping: 20 },
            }}
            className="relative w-full max-w-2xl transform-gpu flex items-center justify-center cursor-crosshair"
          >
            {/* The Photorealistic 3D Engine Asset */}
            <img
              src={engineShowcaseImg}
              alt="Motor automotivo de alta precisão da JR Soluções Automotivas"
              className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] brightness-105"
            />

            {/* Interactive Hotspot Nodes with Pulsing Rings */}
            {engineHotspots.map((spot) => {
              const isActive = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(spot)}
                    className="relative flex items-center justify-center w-8 h-8 rounded-full cursor-pointer outline-none group"
                    aria-label={`Ver detalhes de ${spot.name}`}
                  >
                    <span className={`absolute inset-0 rounded-full ${isActive ? 'bg-[#FF6A00]/40 animate-ping' : 'bg-white/20 group-hover:bg-[#FF6A00]/30'}`} />
                    <span className={`w-4 h-4 rounded-full border-2 transition-all ${isActive ? 'bg-[#FF6A00] border-white shadow-[0_0_12px_#FF6A00]' : 'bg-[#181818] border-[#FF6A00] group-hover:scale-125'}`} />
                  </button>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Hotspot Telemetry Information Panel */}
        {activeHotspot && (
          <motion.div
            key={activeHotspot.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 sm:p-5 rounded-2xl bg-black/80 border border-[#FF6A00]/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#FF8C00] uppercase font-bold">
                  {activeHotspot.tag}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white uppercase font-display">
                {activeHotspot.name}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                {activeHotspot.info}
              </p>
            </div>

            <div className="shrink-0 text-[10px] font-mono text-neutral-400 bg-white/[0.05] px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-center">
              PADRÃO TÉCNICO JR
            </div>
          </motion.div>
        )}
      </div>

    </section>
  );
};
