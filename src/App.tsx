import React from 'react';
import { LivingBackground3D } from './components/LivingBackground3D';
import { HeroOpeningCinematic } from './components/HeroOpeningCinematic';
import { EditorialStatement } from './components/EditorialStatement';
import { EngineExperienceSection } from './components/EngineExperienceSection';
import { ImpactDivider } from './components/ImpactDivider';
import { ServicesEditorial } from './components/ServicesEditorial';
import { BudgetQuoteHero } from './components/BudgetQuoteHero';
import { LocationEditorial } from './components/LocationEditorial';
import { ReviewsAndSocial } from './components/ReviewsAndSocial';
import { FooterEditorial } from './components/FooterEditorial';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-start overflow-x-hidden relative selection:bg-[#FF6A00] selection:text-white">
      {/* Dynamic 3D Atmospheric Background with Parallax, Gears & Light Beams */}
      <LivingBackground3D />

      {/* 1 & 2. Abertura Cinematográfica 5 Passos (Fundo -> Laser Laranja -> Logo Metálica -> Título -> Botão com Brilho) */}
      <HeroOpeningCinematic />

      {/* 3. Filosofia de Trabalho & Fotografia Real de Alta Precisão */}
      <EditorialStatement />

      {/* Divisor Luminoso de Transição Cinematográfica */}
      <ImpactDivider phrase="ENGENHARIA AUTOMOTIVA • PRECISÃO & PERFORMANCE" />

      {/* 4. Showcase 3D do Motor com Perspectiva Interativa & Hotspots Técnicos */}
      <EngineExperienceSection />

      {/* 5. Soluções e Especialidades JR com Bancada Real e Seletor Interativo */}
      <ServicesEditorial />

      {/* 6. Experiência de Orçamento Direto no WhatsApp */}
      <BudgetQuoteHero />

      {/* 7. Navegação e Localização Oficial em Patrocínio — MG com Traçado de Rota GPS */}
      <LocationEditorial />

      {/* 8. Avaliações no Google (5 Estrelas 3D) e Instagram Oficial */}
      <ReviewsAndSocial />

      {/* 9. Rodapé Institucional com Linha Laser Neon e Credenciais */}
      <FooterEditorial />
    </div>
  );
}
