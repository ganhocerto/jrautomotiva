import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import workshopInteriorImg from '../assets/images/modern_workshop_interior_1791563244428.jpg';

export const LivingBackground3D: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Multi-tier parallax offsets
  const yPhoto = useTransform(scrollY, [0, 3000], [0, 240]);
  const yGearsFast = useTransform(scrollY, [0, 3000], [0, -180]);
  const yGearsSlow = useTransform(scrollY, [0, 3000], [0, -90]);
  const lightBeamX = useTransform(scrollY, [0, 3000], ['-20%', '120%']);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-30 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Black Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 2. Realistic Darkened Modern Workshop Interior with Parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yPhoto }}
        className="absolute inset-0 opacity-[0.28] filter contrast-125 brightness-75 scale-105"
      >
        <img
          src={workshopInteriorImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/75 to-[#050505]" />
      </motion.div>

      {/* 3. Traveling Dynamic Neon Orange Volumetric Light Sweep */}
      <motion.div
        style={{ left: shouldReduceMotion ? '50%' : lightBeamX }}
        className="absolute top-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FF6A00]/15 via-[#FF8C00]/05 to-transparent blur-[140px] pointer-events-none"
      />
      <div className="absolute top-[65%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#FF6A00]/10 blur-[130px] pointer-events-none" />

      {/* 4. Layered 3D Industrial Precision Gears (Slow continuous rotation + parallax) */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yGearsFast }}
        className="absolute -top-12 -right-16 w-80 h-80 opacity-[0.055] text-white"
      >
        <svg
          viewBox="0 0 100 100"
          className={shouldReduceMotion ? '' : 'animate-[spin_70s_linear_infinite]'}
          fill="currentColor"
        >
          <path d="M50,34 C41.2,34 34,41.2 34,50 C34,58.8 41.2,66 50,66 C58.8,66 66,58.8 66,50 C66,41.2 58.8,34 50,34 Z M50,14 L44,14 L42,22 L36,24 L30,19 L26,23 L31,29 L29,35 L21,37 L21,43 L21,57 L29,59 L31,65 L26,71 L30,75 L36,70 L42,72 L44,80 L56,80 L58,72 L64,70 L70,75 L74,71 L69,65 L71,59 L79,57 L79,43 L71,35 L69,29 L74,23 L70,19 L64,24 L58,22 L56,14 Z" />
          <circle cx="50" cy="50" r="10" fill="#050505" />
        </svg>
      </motion.div>

      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yGearsSlow }}
        className="absolute top-[45%] -left-24 w-96 h-96 opacity-[0.045] text-white"
      >
        <svg
          viewBox="0 0 100 100"
          className={shouldReduceMotion ? '' : 'animate-[spin_90s_linear_infinite_reverse]'}
          fill="currentColor"
        >
          <path d="M50,37 C42.8,37 37,42.8 37,50 C37,57.2 42.8,63 50,63 C57.2,63 63,57.2 63,50 C63,42.8 57.2,37 50,37 Z M50,16 L45,16 L43,24 L38,26 L33,21 L29,25 L34,30 L32,35 L24,37 L24,47 L24,53 L32,55 L34,60 L29,65 L33,69 L38,64 L43,66 L45,74 L55,74 L57,66 L62,64 L67,69 L71,65 L66,60 L68,55 L76,53 L76,37 L68,35 L66,30 L71,25 L67,21 L62,26 L57,24 L55,16 Z" />
        </svg>
      </motion.div>

      {/* 5. Precision Technical Lines & Dimensions (CAD Blueprint Style) */}
      <div className="absolute inset-0 opacity-[0.035]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="livingTechGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#FF6A00" opacity="0.8" />
              <circle cx="120" cy="0" r="1.5" fill="#FF6A00" opacity="0.8" />
              <line x1="60" y1="56" x2="60" y2="64" stroke="currentColor" strokeWidth="0.5" />
              <line x1="56" y1="60" x2="64" y2="60" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#livingTechGrid)" />
        </svg>
      </div>

      {/* 6. Subtle Amber Embers */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#FF8C00] opacity-40 blur-[0.5px] animate-pulse" />
        <span className="absolute top-[55%] right-[22%] w-1 h-1 rounded-full bg-[#FFA040] opacity-35 blur-[0.5px] animate-ping" />
        <span className="absolute top-[80%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#FF6A00] opacity-30 blur-[0.5px]" />
      </div>
    </div>
  );
};
