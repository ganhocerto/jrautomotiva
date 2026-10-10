import React from 'react';
import { motion } from 'motion/react';
import { GoogleMapsIcon3D, LocationPin3D } from './Icons';

export const LocationEditorial: React.FC = () => {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=R.+Melch%C3%ADades+In%C3%A1cio+de+Lima%2C+1919%2C+Ouro+Preto%2C+Patroc%C3%ADnio%2C+MG';

  return (
    <section className="relative w-full max-w-4xl mx-auto py-12 sm:py-20 px-4 select-none" aria-label="Localização da oficina">
      {/* 3D Automotive Dashboard HUD Panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel-3d relative rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/4 w-72 h-36 bg-[#EA4335]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex-1 text-center md:text-left">
          {/* Dashboard HUD header badge */}
          <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-black/70 border border-white/10 text-xs font-mono font-bold text-neutral-300">
            <GoogleMapsIcon3D className="w-4 h-4" />
            <span className="text-[#FFA040]">GPS • NAVEGAÇÃO DIRETA</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase font-display tracking-tight mb-3">
            ENCONTRE NOSSA <span className="text-[#EA4335]">OFICINA.</span>
          </h3>

          <div className="space-y-1.5 text-neutral-300">
            <p className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <LocationPin3D className="w-4.5 h-4.5 text-[#FF6A00] shrink-0" />
              <span>Rua Melchíades Inácio de Lima, 1919</span>
            </p>
            <p className="text-sm text-neutral-300 font-medium">
              Ouro Preto — Patrocínio, MG
            </p>
            <p className="text-xs font-mono text-[#FFA040]">
              CEP 38747-318
            </p>
          </div>
        </div>

        {/* 3D Button: TRAÇAR ROTA */}
        <div className="shrink-0 w-full md:w-auto flex justify-center">
          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-3d-luxury-dark animate-sheen group w-full md:w-auto py-4 px-8 sm:px-10 rounded-2xl text-white font-black text-sm inline-flex items-center justify-center gap-3 cursor-pointer no-underline border-[#EA4335]/50 hover:border-[#EA4335]"
            aria-label="Traçar rota no Google Maps"
          >
            <GoogleMapsIcon3D className="w-5 h-5" />
            <span className="uppercase font-display tracking-wider">
              TRAÇAR ROTA
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
