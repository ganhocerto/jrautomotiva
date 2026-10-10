import React from 'react';
import { motion } from 'motion/react';
import {
  GoogleLogoOfficial,
  GoldenStar3D,
  InstagramIcon3D,
} from './Icons';

export const ReviewsAndSocial: React.FC = () => {
  const reviewUrl =
    'https://search.google.com/local/writereview?placeid=ChIJaxLOXXy7r5QRgsajQ-vbyow';
  const instagramUrl = 'https://www.instagram.com/jrsolucoesautomotivas/';

  return (
    <section className="relative w-full max-w-4xl mx-auto py-10 sm:py-16 px-4 select-none" aria-label="Avaliações e Instagram">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Google Reviews Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-3d relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center md:text-left"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
              <GoogleLogoOfficial className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
                AVALIAÇÕES OFICIAIS
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display mb-2">
              SUA OPINIÃO MOVE <span className="text-[#FBBC05] text-glow-gold">NOSSO TRABALHO.</span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Conte para outras pessoas como foi seu atendimento na JR Soluções Automotivas.
            </p>

            {/* 5 3D Golden Stars */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <GoldenStar3D key={i} size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
              ))}
            </div>
          </div>

          <motion.a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-3d-luxury-dark animate-sheen group w-full py-4 px-6 rounded-2xl text-white font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 cursor-pointer no-underline border-[#FBBC05]/40 hover:border-[#FBBC05]"
            aria-label="Avaliar no Google"
          >
            <GoldenStar3D size={18} className="w-4.5 h-4.5" />
            <span className="uppercase font-display tracking-wider text-neutral-100 group-hover:text-white">
              AVALIAR NO GOOGLE
            </span>
          </motion.a>
        </motion.div>

        {/* Instagram Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-3d relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center md:text-left"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
              <InstagramIcon3D className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
                INSTAGRAM OFICIAL
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display mb-2">
              JR SOLUÇÕES NO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD1D1D] via-[#E1306C] to-[#FED373]">INSTAGRAM</span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Acompanhe serviços em andamento, diagnósticos reais e o dia a dia da oficina em Patrocínio.
            </p>

            <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] mb-6 flex items-center justify-center md:justify-start gap-3">
              <InstagramIcon3D className="w-7 h-7" />
              <div className="text-left">
                <p className="text-xs font-bold text-white font-mono">@jrsolucoesautomotivas</p>
                <p className="text-[10px] text-neutral-400">Canal oficial no Instagram</p>
              </div>
            </div>
          </div>

          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-3d-luxury-dark animate-sheen group w-full py-4 px-6 rounded-2xl text-white font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 cursor-pointer no-underline border-pink-500/40 hover:border-pink-500"
            aria-label="Acompanhe o Instagram oficial"
          >
            <span className="uppercase font-display tracking-wider text-neutral-100 group-hover:text-white">
              ACOMPANHE NOSSO TRABALHO
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
