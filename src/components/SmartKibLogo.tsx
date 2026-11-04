import React from 'react';

interface SmartKibLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  clickable?: boolean;
  variant?: 'badge' | 'pure';
  inverted?: boolean;
  accentColor?: 'emerald' | 'amber';
  onClick?: () => void;
}

export const SmartKibLogo: React.FC<SmartKibLogoProps> = ({
  size = 'md',
  showTagline = true,
  clickable = false,
  variant = 'badge',
  inverted = false,
  accentColor = 'emerald',
  onClick,
}) => {
  const sizeMap = {
    sm: {
      img: 'w-8 h-8',
      box: 'w-9 h-9 p-1 rounded-xl',
      title: 'text-lg',
      tagline: 'text-[10px]',
    },
    md: {
      img: 'w-10 h-10',
      box: 'w-11 h-11 sm:w-12 sm:h-12 p-1.5 rounded-2xl',
      title: 'text-xl sm:text-2xl',
      tagline: 'text-xs',
    },
    lg: {
      img: 'w-14 h-14 sm:w-16 sm:h-16',
      box: 'w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-3xl',
      title: 'text-2xl sm:text-3xl',
      tagline: 'text-xs sm:text-sm',
    },
    xl: {
      img: 'w-24 h-24 sm:w-28 sm:h-28',
      box: 'w-28 h-28 sm:w-32 sm:h-32 p-3 rounded-[2.5rem]',
      title: 'text-3xl sm:text-4xl',
      tagline: 'text-sm sm:text-base',
    },
  };

  const current = sizeMap[size];

  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`inline-flex items-center gap-3 select-none ${
        clickable ? 'cursor-pointer group' : ''
      }`}
    >
      {/* Logo Graphic from user's uploaded image */}
      {variant === 'badge' ? (
        <div
          className={`${current.box} ${
            inverted
              ? 'bg-white/15 border-2 border-white/30 shadow-md shadow-black/20'
              : 'bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 border-2 border-emerald-500/40 shadow-md shadow-emerald-900/20'
          } flex items-center justify-center relative transition-transform ${
            clickable ? 'group-hover:scale-105' : ''
          }`}
        >
          <img
            src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
            alt="SmartKib Dome Logo"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>
      ) : (
        <img
          src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
          alt="SmartKib Dome Logo"
          className={`${current.img} object-contain filter drop-shadow-md transition-transform ${
            clickable ? 'group-hover:scale-105' : ''
          }`}
        />
      )}

      {/* Brand Text */}
      <div>
        <div
          className={`font-black tracking-tight ${current.title} flex items-center leading-none ${
            inverted ? 'text-white' : 'text-slate-800'
          }`}
        >
          <span>Smart</span>
          <span
            className={
              inverted
                ? accentColor === 'amber'
                  ? 'text-amber-300'
                  : 'text-emerald-300'
                : 'text-emerald-600'
            }
          >
            Kib
          </span>
        </div>
        {showTagline && (
          <p
            className={`${current.tagline} font-semibold mt-1 ${
              inverted ? 'text-white/80' : 'text-slate-500'
            }`}
          >
            Kajian Nahwu, Sharaf &amp; I&apos;rab Interaktif
          </p>
        )}
      </div>
    </div>
  );
};
