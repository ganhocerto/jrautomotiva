import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import componentsPhoto from '../assets/images/mechanical_service_components_1791565108333.jpg';
import {
  Engine3DIcon,
  Maintenance3DIcon,
  Diagnostic3DIcon,
  InspectionRevision3DIcon,
  PistonEngine3DIcon,
  BrakesSuspension3DIcon,
} from './Icons';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const serviceItems: ServiceItem[] = [
  {
    id: 'mecanica',
    number: '01',
    name: 'Mecânica em geral',
    subtitle: 'SISTEMAS MECÂNICOS & TRANSMISSÃO',
    description: 'Reparos e substituições de conjuntos mecânicos vitais com ferramentas calibradas e respeito aos torques recomendados.',
    highlights: ['Correia dentada e tensores', 'Embreagem e câmbio', 'Sistema de arrefecimento e bomba d’água'],
    icon: <Engine3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 'preventiva',
    number: '02',
    name: 'Manutenção preventiva',
    subtitle: 'LONGEVIDADE & ECONOMIA',
    description: 'Troca de lubrificantes com especificação exata da montadora, filtros originais, velas e fluidos no momento ideal.',
    highlights: ['Óleos 100% sintéticos e semissintéticos', 'Filtros de óleo, ar, combustível e cabine', 'Fluidos de freio e aditivo de radiador'],
    icon: <Maintenance3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 'diagnostico',
    number: '03',
    name: 'Diagnóstico automotivo',
    subtitle: 'TECNOLOGIA DE LEITURA ELETRÔNICA',
    description: 'Scanner profissional conectado à ECU do veículo para leitura em tempo real de sensores, atuadores e histórico de falhas.',
    highlights: ['Scanner computadorizado OBD2', 'Leitura de parâmetros de injeção', 'Análise de falhas intermitentes'],
    icon: <Diagnostic3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 'revisao',
    number: '04',
    name: 'Revisão de veículos',
    subtitle: 'SEGURANÇA PARA A SUA FAMÍLIA',
    description: 'Inspeção completa de segurança com checagem minuciosa de itens fundamentais antes de viagens ou revisões periódicas.',
    highlights: ['Inspeção de mais de 40 itens de segurança', 'Checagem de vazamentos e mangueiras', 'Iluminação, estepe e palhetas'],
    icon: <InspectionRevision3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 'motor',
    number: '05',
    name: 'Motor e componentes',
    subtitle: 'PRECISÃO INTERNA DO BLOCO',
    description: 'Avaliação criteriosa de cabeçote, sincronismo de válvulas, vedação, bomba de combustível e componentes internos.',
    highlights: ['Teste de compressão de cilindros', 'Troca de juntas e retentores', 'Limpeza e vazão de bicos injetores'],
    icon: <PistonEngine3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 'freios',
    number: '06',
    name: 'Freios e suspensão',
    subtitle: 'ESTABILIDADE & RESPOSTA IMEDIATA',
    description: 'Discos de freio, pastilhas, amortecedores, molas e buchas revisados para assegurar frenagem firme e estabilidade total.',
    highlights: ['Pastilhas e discos ventilados', 'Amortecedores e batentes', 'Buchas, pivôs e terminais axiais'],
    icon: <BrakesSuspension3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

export const ServicesEditorial: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('mecanica');
  const activeService = serviceItems.find((s) => s.id === activeId) || serviceItems[0];

  return (
    <section className="relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 select-none" aria-label="Soluções completas em mecânica">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#FF6A00]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#FF8C00] uppercase">
            ESPECIALIDADES JR
          </span>
          <span className="w-8 h-[2px] bg-[#FF6A00]" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none mb-3"
        >
          SOLUÇÕES COMPLETAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFA040] to-white text-glow-orange">EM MECÂNICA.</span>
        </motion.h2>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
          * Categorias sugeridas para validação com a oficina antes da execução do serviço.
        </p>
      </div>

      {/* Dynamic Editorial Layout with 3D Depth */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Side (5 Cols): Realistic Macro Photography of Precision Components */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative rounded-3xl overflow-hidden glass-panel-3d flex flex-col justify-between"
        >
          <div className="relative w-full h-64 sm:h-72 overflow-hidden">
            <img
              src={componentsPhoto}
              alt="Componentes automotivos profissionais na JR Soluções Automotivas"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/40" />

            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-[#FF6A00]/50 backdrop-blur-md text-[10px] font-mono font-bold text-[#FFA040]">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
              <span>BANCADA DE ALTA PRECISÃO</span>
            </div>
          </div>

          <div className="p-6 bg-[#0c0c0c] border-t border-white/[0.08] flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF8C00] uppercase font-bold">
                    {activeService.subtitle}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    JR #{activeService.number}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase font-display mb-2.5">
                  {activeService.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                  {activeService.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                  <p className="text-[10px] font-mono uppercase text-neutral-400 font-bold tracking-wider">
                    Principais componentes verificados:
                  </p>
                  {activeService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                      <span className="text-[#FF6A00] font-black text-sm">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side (7 Cols): High-Contrast Technical Service Category Selector */}
        <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3 justify-center">
          {serviceItems.map((item, idx) => {
            const isSelected = item.id === activeId;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                onClick={() => setActiveId(item.id)}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#202020] via-[#161616] to-[#0e0e0e] border-[#FF6A00]/70 shadow-[0_12px_28px_rgba(255,106,0,0.22)]'
                    : 'bg-[#101010]/90 hover:bg-[#181818] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isSelected
                        ? 'bg-[#FF6A00]/20 border-[#FF6A00]/60 text-[#FFA040]'
                        : 'bg-[#181818] border-white/10 text-neutral-400'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        {item.number}.
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-white uppercase font-display tracking-wide">
                        {item.name}
                      </h4>
                      {isSelected && (
                        <span className="hidden sm:inline-block text-[9px] font-mono uppercase bg-[#FF6A00] text-black font-black px-1.5 py-0.5 rounded">
                          ATIVO
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isSelected
                      ? 'bg-[#FF6A00] border-[#FF6A00] text-black font-black'
                      : 'bg-[#1a1a1a] border-white/10 text-neutral-400'
                  }`}
                >
                  <span className="text-xs">→</span>
                </div>

                {isSelected && (
                  <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#FF6A00] rounded-r-full shadow-[0_0_8px_#FF6A00]" />
                )}
              </motion.button>
            );
          })}
        </div>

      </div>

    </section>
  );
};
