import React from 'react';

// Official WhatsApp 3D Icon with depth and authentic colors
export const WhatsAppIcon3D: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] shrink-0`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="waGradient" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34E87A" />
        <stop offset="0.5" stopColor="#25D366" />
        <stop offset="1" stopColor="#1EAA52" />
      </linearGradient>
      <filter id="waInsetShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="linear" slope="0.7" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feOffset dx="0" dy="2" />
        <feComposite operator="out" in2="SourceGraphic" result="inverse" />
        <feFlood floodColor="black" floodOpacity="0.3" result="color" />
        <feComposite operator="in" in2="inverse" result="shadow" />
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
    </defs>
    {/* Base circle with 3D bevel */}
    <circle cx="24" cy="24" r="22" fill="url(#waGradient)" filter="url(#waInsetShadow)" />
    <circle cx="24" cy="24" r="21" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
    {/* Inner speech bubble & phone */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 10C16.27 10 10 16.27 10 24C10 26.68 10.76 29.18 12.07 31.31L10.5 37.5L16.88 35.95C18.94 37.17 21.38 37.88 24 37.88C31.73 37.88 38 31.61 38 23.88C38 16.15 31.73 10 24 10ZM31.13 28.5C30.83 29.35 29.62 30.08 28.66 30.29C28.01 30.43 27.15 30.55 24.31 29.37C20.69 27.86 18.35 24.18 18.17 23.94C18 23.71 16.71 22 16.71 20.23C16.71 18.47 17.6 17.61 17.95 17.25C18.25 16.94 18.73 16.8 19.18 16.8C19.33 16.8 19.46 16.81 19.57 16.81C19.92 16.83 20.09 16.85 20.32 17.4C20.61 18.09 21.31 19.8 21.4 19.98C21.49 20.16 21.57 20.4 21.45 20.64C21.34 20.88 21.25 20.98 21.07 21.19C20.89 21.4 20.72 21.56 20.54 21.78C20.38 21.96 20.19 22.16 20.4 22.52C20.61 22.87 21.33 24.05 22.4 25C23.78 26.23 24.91 26.63 25.32 26.8C25.63 26.93 25.99 26.9 26.21 26.66C26.5 26.35 26.86 25.83 27.23 25.31C27.5 24.93 27.83 24.88 28.18 25.01C28.54 25.14 30.43 26.07 30.82 26.27C31.21 26.46 31.47 26.56 31.56 26.71C31.65 26.86 31.42 27.65 31.13 28.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official Google "G" Logo with authentic 4 colors
export const GoogleLogoOfficial: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] shrink-0`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      fill="#EA4335"
    />
  </svg>
);

// 3D Realistic Golden Star
export const GoldenStar3D: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_2px_8px_rgba(255,184,0,0.65)] ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="goldGradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF4A3" />
        <stop offset="0.3" stopColor="#FFD700" />
        <stop offset="0.75" stopColor="#FFA000" />
        <stop offset="1" stopColor="#E65100" />
      </linearGradient>
      <linearGradient id="goldHighlight" x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="0.5" stopColor="#FFD700" stopOpacity="0.3" />
        <stop offset="1" stopColor="#FF8F00" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Base Star */}
    <path
      d="M16 2.5L19.9 10.4L28.6 11.7L22.3 17.8L23.8 26.5L16 22.4L8.2 26.5L9.7 17.8L3.4 11.7L12.1 10.4L16 2.5Z"
      fill="url(#goldGradient)"
      stroke="#FFB300"
      strokeWidth="0.8"
    />
    {/* Left facet highlight for 3D bevel look */}
    <path
      d="M16 2.5L16 22.4L8.2 26.5L9.7 17.8L3.4 11.7L12.1 10.4L16 2.5Z"
      fill="url(#goldHighlight)"
      opacity="0.6"
    />
  </svg>
);

// Official Google Maps 3D Pin Icon
export const GoogleMapsIcon3D: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] shrink-0`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gmapPin" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA4335" />
        <stop offset="0.7" stopColor="#D93025" />
        <stop offset="1" stopColor="#B31412" />
      </linearGradient>
    </defs>
    {/* Google Maps Pin */}
    <path
      d="M24 4C14.06 4 6 12.06 6 22C6 34.2 21.6 43.2 22.3 43.6C22.8 43.9 23.4 44 24 44C24.6 44 25.2 43.9 25.7 43.6C26.4 43.2 42 34.2 42 22C42 12.06 33.94 4 24 4Z"
      fill="url(#gmapPin)"
    />
    {/* Inner colored circle segments replicating Google Maps style */}
    <circle cx="24" cy="20" r="9" fill="#FFFFFF" />
    <circle cx="24" cy="20" r="6" fill="#1A73E8" />
  </svg>
);

// Official Instagram 3D Icon with authentic gradient
export const InstagramIcon3D: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] shrink-0`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="igGrad" x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED373" />
        <stop offset="0.25" stopColor="#F15245" />
        <stop offset="0.6" stopColor="#D92E7F" />
        <stop offset="0.85" stopColor="#9B36B7" />
        <stop offset="1" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="11" fill="url(#igGrad)" />
    <rect x="5" y="5" width="38" height="38" rx="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    {/* Outer camera outline */}
    <rect x="11" y="11" width="26" height="26" rx="7" stroke="#FFFFFF" strokeWidth="3" />
    {/* Lens circle */}
    <circle cx="24" cy="24" r="6.5" stroke="#FFFFFF" strokeWidth="3" />
    {/* Flash dot */}
    <circle cx="31.5" cy="16.5" r="1.8" fill="#FFFFFF" />
  </svg>
);

// 3D Metallic Engine Icon (Mecânica em Geral)
export const Engine3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="metalChrome" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E2E8F0" />
        <stop offset="0.35" stopColor="#94A3B8" />
        <stop offset="0.7" stopColor="#475569" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="neonOrangePiston" x1="12" y1="14" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF8C00" />
        <stop offset="1" stopColor="#FF4500" />
      </linearGradient>
    </defs>
    <rect x="8" y="14" width="32" height="22" rx="4" fill="url(#metalChrome)" stroke="#64748B" strokeWidth="1.2" />
    <rect x="14" y="8" width="8" height="6" rx="2" fill="url(#metalChrome)" />
    <rect x="26" y="8" width="8" height="6" rx="2" fill="url(#metalChrome)" />
    <circle cx="24" cy="25" r="7" fill="url(#neonOrangePiston)" />
    <path d="M21 25L23.5 27.5L27 22.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20H8M4 25H8M4 30H8M40 20H44M40 25H44M40 30H44" stroke="#FF8C00" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="14" cy="19" r="1.5" fill="#FFFFFF" opacity="0.8" />
    <circle cx="34" cy="19" r="1.5" fill="#FFFFFF" opacity="0.8" />
  </svg>
);

// 3D Preventive Maintenance & Inspection Shield Icon (Manutenção Preventiva)
export const Maintenance3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="shieldGrad" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#CBD5E1" />
        <stop offset="0.5" stopColor="#475569" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
    <path
      d="M24 6L36 11V22C36 30.5 30.8 38.3 24 41C17.2 38.3 12 30.5 12 22V11L24 6Z"
      fill="url(#shieldGrad)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.2"
    />
    <path
      d="M24 10L33 14.5V22C33 28.5 29.2 34.6 24 37C18.8 34.6 15 28.5 15 22V14.5L24 10Z"
      fill="#111111"
      stroke="#FF6A00"
      strokeWidth="1.5"
    />
    <path
      d="M19 23.5L22.5 27L29 19.5"
      stroke="#FF8C00"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_0_8px_#FF6A00]"
    />
  </svg>
);

// 3D Diagnostic Computer & ECU Scanner Icon (Diagnóstico Automotivo)
export const Diagnostic3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="diagFrame" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64748B" />
        <stop offset="0.5" stopColor="#334155" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="14" y1="12" x2="34" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E1E1E" />
        <stop offset="1" stopColor="#0A0A0A" />
      </linearGradient>
    </defs>
    <rect x="10" y="8" width="28" height="32" rx="4" fill="url(#diagFrame)" stroke="#FF6A00" strokeWidth="1.2" />
    <rect x="14" y="12" width="20" height="18" rx="2" fill="url(#screenGlow)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <path
      d="M16 21H19L21.5 15L24.5 27L27 18L29 21H32"
      stroke="#FF6A00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_0_6px_#FF6A00]"
    />
    <circle cx="18" cy="35" r="2" fill="#FF8C00" />
    <circle cx="24" cy="35" r="2" fill="#64748B" />
    <circle cx="30" cy="35" r="2" fill="#64748B" />
  </svg>
);

// 3D Motor e Componentes (Piston & Cylinders)
export const PistonEngine3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pistonGrad" x1="16" y1="6" x2="32" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E2E8F0" />
        <stop offset="0.4" stopColor="#94A3B8" />
        <stop offset="0.8" stopColor="#475569" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
    {/* Piston crown */}
    <rect x="15" y="7" width="18" height="15" rx="3" fill="url(#pistonGrad)" stroke="#CBD5E1" strokeWidth="1.2" />
    {/* Piston rings */}
    <line x1="15" y1="11" x2="33" y2="11" stroke="#FF6A00" strokeWidth="1.5" />
    <line x1="15" y1="15" x2="33" y2="15" stroke="#FF8C00" strokeWidth="1.5" />
    {/* Connecting rod */}
    <path d="M21 22L21 34L20 37C20 39.2 21.8 41 24 41C26.2 41 28 39.2 28 37L27 34L27 22" fill="url(#pistonGrad)" stroke="#64748B" strokeWidth="1" />
    {/* Rod bearing circle */}
    <circle cx="24" cy="37" r="2.5" fill="#0D0D0D" stroke="#FF6A00" strokeWidth="1.2" />
  </svg>
);

// 3D Freios e Suspensão (Brake Disc & Shock Absorber)
export const BrakesSuspension3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="rotorGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#CBD5E1" />
        <stop offset="0.5" stopColor="#64748B" />
        <stop offset="1" stopColor="#334155" />
      </linearGradient>
    </defs>
    {/* Perforated Brake Rotor Disc */}
    <circle cx="24" cy="24" r="17" fill="url(#rotorGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="10" fill="#181818" stroke="#FF6A00" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="4.5" fill="#0D0D0D" />
    {/* Ventilation cooling holes */}
    <circle cx="17" cy="18" r="1.2" fill="#0D0D0D" />
    <circle cx="31" cy="18" r="1.2" fill="#0D0D0D" />
    <circle cx="17" cy="30" r="1.2" fill="#0D0D0D" />
    <circle cx="31" cy="30" r="1.2" fill="#0D0D0D" />
    <circle cx="24" cy="14" r="1.2" fill="#0D0D0D" />
    <circle cx="24" cy="34" r="1.2" fill="#0D0D0D" />
    {/* Sport Brake Caliper in Bright Neon Orange */}
    <path
      d="M32 10C37 13 41 18 41 24C41 26 40.5 28 39.5 30L34 26C34.5 25.4 35 24.7 35 24C35 20.5 32.5 17.5 29 16.5L32 10Z"
      fill="#FF6A00"
      stroke="#FF8C00"
      strokeWidth="1.2"
      className="drop-shadow-[0_0_8px_#FF6A00]"
    />
  </svg>
);

// 3D Revisão Automotiva (Checklist & Inspection Meter)
export const InspectionRevision3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.35)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="boardGrad" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#334155" />
        <stop offset="0.6" stopColor="#1E293B" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    {/* Clipboard base */}
    <rect x="12" y="10" width="24" height="30" rx="3" fill="url(#boardGrad)" stroke="#64748B" strokeWidth="1.2" />
    {/* Top clip */}
    <rect x="19" y="7" width="10" height="5" rx="1.5" fill="#E2E8F0" stroke="#FF6A00" strokeWidth="1" />
    {/* Checked verification lines */}
    <circle cx="17" cy="18" r="2" fill="#FF6A00" />
    <line x1="22" y1="18" x2="31" y2="18" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="17" cy="24" r="2" fill="#FF6A00" />
    <line x1="22" y1="24" x2="31" y2="24" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="17" cy="30" r="2" fill="#FF8C00" />
    <line x1="22" y1="30" x2="28" y2="30" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 3D Mechanical Repairs & Wrench/Gears Icon (Reparos Mecânicos)
export const MechanicalRepair3DIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_4px_12px_rgba(255,106,0,0.3)]`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gearGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#94A3B8" />
        <stop offset="0.5" stopColor="#475569" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="wrenchChrome" x1="14" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.3" stopColor="#CBD5E1" />
        <stop offset="0.8" stopColor="#64748B" />
        <stop offset="1" stopColor="#334155" />
      </linearGradient>
    </defs>
    {/* Background Gear */}
    <path
      d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24C34 18.48 29.52 14 24 14Z"
      fill="url(#gearGrad)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1.2"
    />
    <circle cx="24" cy="24" r="5" fill="#0A0A0A" stroke="#FF6A00" strokeWidth="1.5" />
    {/* Precision Wrench placed diagonally */}
    <path
      d="M34.5 10.5C33.5 9.5 31.8 9.5 30.8 10.5L25.5 15.8L28.2 18.5L33.5 13.2C34.5 12.2 34.5 10.5 34.5 10.5Z"
      fill="url(#wrenchChrome)"
    />
    <path
      d="M26.5 17L14.2 29.3C13.5 30 13.5 31.2 14.2 31.9L16.1 33.8C16.8 34.5 18 34.5 18.7 33.8L31 21.5L26.5 17Z"
      fill="url(#wrenchChrome)"
      stroke="#FF8C00"
      strokeWidth="1"
    />
  </svg>
);

// 3D Location Marker Pin Icon
export const LocationPin3D: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} drop-shadow-[0_2px_8px_rgba(255,106,0,0.6)] shrink-0`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pinGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFA040" />
        <stop offset="0.6" stopColor="#FF6A00" />
        <stop offset="1" stopColor="#CC4400" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C7.58 2 4 5.58 4 10C4 15.25 10.7 21.35 11.25 21.84C11.66 22.21 12.34 22.21 12.75 21.84C13.3 21.35 20 15.25 20 10C20 5.58 16.42 2 12 2Z"
      fill="url(#pinGrad)"
      stroke="#FF8C00"
      strokeWidth="0.8"
    />
    <circle cx="12" cy="10" r="3.2" fill="#0D0D0D" stroke="#FFFFFF" strokeWidth="0.8" />
  </svg>
);
