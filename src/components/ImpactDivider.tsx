import React from 'react';
import { motion } from 'motion/react';

export const ImpactDivider: React.FC<{ phrase: string }> = ({ phrase }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-10 sm:my-16 px-4 flex flex-col items-center text-center select-none">
      <div className="flex items-center justify-center gap-3 w-full max-w-md">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#FF6A00]/50 to-transparent" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6 }}
        className="text-base sm:text-xl font-black text-white uppercase font-display tracking-widest mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        {phrase}
      </motion.p>
    </div>
  );
};
