import React from 'react';
import { useCorruptionMetrics } from '../utils/corruption';
import { useCharacterStore } from '../store';

export default function CorruptionAtmosphere() {
  const {
    corruptionPercent,
    show3RedEyes,
    show5RedEyes,
    showVioletEye,
    showRedCracks,
    isLostControl,
  } = useCorruptionMetrics();

  const { setCorruption } = useCharacterStore();

  return (
    <>
      {/* SVG Distortion Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="eldritchDistort" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="turbulence" baseFrequency="0.012 0.015" numOctaves="2" result="turb">
              <animate attributeName="baseFrequency" dur="14s" values="0.012 0.015;0.018 0.020;0.012 0.015" repeatCount="indefinite"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      {corruptionPercent >= 25 && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
          {/* Dynamic Ambient Background Hue */}
          {corruptionPercent >= 75 && (
            <div 
              className="absolute inset-0 bg-red-950/20 mix-blend-color-dodge transition-opacity duration-1000"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(153, 27, 27, 0.25) 0%, rgba(5, 5, 5, 0.95) 75%)'
              }}
            />
          )}

      {/* RED CRACKS (at 90%+) */}
      {showRedCracks && (
        <svg 
          className="absolute inset-0 w-full h-full opacity-60 animate-pulse transition-opacity duration-1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="crackGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="crackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Crack Path 1 - Top Left towards Center */}
          <path
            d="M0,80 Q120,110 210,180 T380,310 T500,480 M210,180 Q290,130 350,90 M380,310 Q420,250 490,220"
            stroke="url(#crackGrad)"
            strokeWidth="3"
            fill="none"
            filter="url(#crackGlow)"
          />

          {/* Crack Path 2 - Top Right towards Center */}
          <path
            d="M1000,50 Q850,130 750,220 T620,380 T500,520 M750,220 Q790,320 860,370 M620,380 Q690,440 760,460"
            stroke="url(#crackGrad)"
            strokeWidth="3"
            fill="none"
            filter="url(#crackGlow)"
          />

          {/* Crack Path 3 - Bottom Left towards Center */}
          <path
            d="M30,1000 Q150,880 280,780 T420,620 T490,520 M280,780 Q210,720 160,650 M420,620 Q360,540 310,490"
            stroke="url(#crackGrad)"
            strokeWidth="3"
            fill="none"
            filter="url(#crackGlow)"
          />

          {/* Crack Path 4 - Bottom Right towards Center */}
          <path
            d="M980,950 Q820,860 710,760 T580,620 T510,500 M710,760 Q760,690 820,640 M580,620 Q640,560 690,520"
            stroke="url(#crackGrad)"
            strokeWidth="3"
            fill="none"
            filter="url(#crackGlow)"
          />

          {/* Central Fracture Spiderweb */}
          <circle cx="500" cy="500" r="160" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 8" fill="none" opacity="0.5" />
          <circle cx="500" cy="500" r="260" stroke="#dc2626" strokeWidth="1" strokeDasharray="8 12" fill="none" opacity="0.3" />
        </svg>
      )}

      {/* VIOLET EYE IN THE CENTER (at 75%+) */}
      {showVioletEye && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[340px] h-[220px] md:w-[480px] md:h-[300px] flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-1000">
            {/* Ethereal Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-600/30 filter blur-3xl animate-pulse" />
            
            <svg
              className="w-full h-full drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
              viewBox="0 0 400 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="violetIris" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f3e8ff" />
                  <stop offset="35%" stopColor="#a855f7" />
                  <stop offset="70%" stopColor="#6b21a8" />
                  <stop offset="100%" stopColor="#2e1065" />
                </radialGradient>
                <linearGradient id="violetBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Eye Shape Outlines */}
              <path
                d="M 20,120 Q 200,10 380,120 Q 200,230 20,120 Z"
                fill="rgba(15, 7, 26, 0.85)"
                stroke="url(#violetBorder)"
                strokeWidth="4"
              />

              {/* Sclera occult veins */}
              <path d="M 60,115 Q 120,95 160,110 M 70,130 Q 130,135 155,125" stroke="#9333ea" strokeWidth="1" opacity="0.6" fill="none" />
              <path d="M 340,115 Q 280,95 240,110 M 330,130 Q 270,135 245,125" stroke="#9333ea" strokeWidth="1" opacity="0.6" fill="none" />

              {/* Iris */}
              <circle cx="200" cy="120" r="55" fill="url(#violetIris)" className="animate-pulse" />

              {/* Occult Iris Glyphs / Rings */}
              <circle cx="200" cy="120" r="42" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.8" />
              <circle cx="200" cy="120" r="28" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.7" />

              {/* Slit Pupil */}
              <path
                d="M 200,75 Q 208,120 200,165 Q 192,120 200,75 Z"
                fill="#050505"
                stroke="#c084fc"
                strokeWidth="1"
              />
              
              {/* Star / Glisten */}
              <circle cx="188" cy="105" r="4" fill="#ffffff" opacity="0.9" />
              <circle cx="195" cy="112" r="2" fill="#ffffff" opacity="0.6" />
            </svg>
          </div>
        </div>
      )}

      {/* RED EYES IN BACKGROUND */}
      {/* Mobile/Base eyes (3 at 35%+, 5 at 50%+) */}
      {show3RedEyes && (
        <>
          {/* Eye 1: Top Left */}
          <div className="absolute top-[8%] left-[4%] w-20 h-12 md:w-28 md:h-16 opacity-75 animate-pulse transition-all duration-700">
            <RedEldritchEye delay="0s" size="small" />
          </div>

          {/* Eye 2: Bottom Right */}
          <div className="absolute bottom-[18%] right-[4%] w-24 h-14 md:w-32 md:h-18 opacity-75 animate-pulse transition-all duration-700">
            <RedEldritchEye delay="2s" size="medium" />
          </div>

          {/* Eye 3: Upper Right */}
          <div className="absolute top-[16%] right-[5%] w-20 h-12 md:w-28 md:h-16 opacity-70 animate-pulse transition-all duration-700">
            <RedEldritchEye delay="1.2s" size="small" />
          </div>
        </>
      )}

      {show5RedEyes && (
        <>
          {/* Eye 4: Mid-Left */}
          <div className="absolute top-[52%] left-[2%] w-24 h-14 md:w-32 md:h-18 opacity-80 animate-pulse transition-all duration-700">
            <RedEldritchEye delay="3.5s" size="medium" />
          </div>

          {/* Eye 5: Bottom Left / Center-Low */}
          <div className="absolute bottom-[14%] left-[18%] w-20 h-12 md:w-28 md:h-16 opacity-70 animate-pulse transition-all duration-700">
            <RedEldritchEye delay="2.7s" size="small" />
          </div>
        </>
      )}

      {/* ADDITIONAL PC / DESKTOP EXCLUSIVE RED EYES (Abundant surrounding eldritch eyes) */}
      {show3RedEyes && (
        <div className="hidden md:block pointer-events-none">
          {/* PC Left Gutter Eyes */}
          <div className="absolute top-[22%] left-[1.5%] w-24 h-14 opacity-60 animate-pulse" style={{ animationDelay: '0.8s' }}>
            <RedEldritchEye delay="0.8s" size="small" rotation="-12deg" />
          </div>
          <div className="absolute top-[38%] left-[0.8%] w-28 h-16 opacity-70 animate-pulse" style={{ animationDelay: '2.3s' }}>
            <RedEldritchEye delay="2.3s" size="medium" rotation="8deg" />
          </div>
          <div className="absolute top-[72%] left-[1.2%] w-22 h-13 opacity-65 animate-pulse" style={{ animationDelay: '1.7s' }}>
            <RedEldritchEye delay="1.7s" size="small" rotation="-6deg" />
          </div>
          <div className="absolute bottom-[6%] left-[3%] w-26 h-15 opacity-70 animate-pulse" style={{ animationDelay: '3.1s' }}>
            <RedEldritchEye delay="3.1s" size="medium" rotation="15deg" />
          </div>

          {/* PC Right Gutter Eyes */}
          <div className="absolute top-[6%] right-[1.5%] w-22 h-13 opacity-60 animate-pulse" style={{ animationDelay: '1.4s' }}>
            <RedEldritchEye delay="1.4s" size="small" rotation="10deg" />
          </div>
          <div className="absolute top-[32%] right-[1%] w-28 h-16 opacity-70 animate-pulse" style={{ animationDelay: '2.9s' }}>
            <RedEldritchEye delay="2.9s" size="medium" rotation="-8deg" />
          </div>
          <div className="absolute top-[48%] right-[1.8%] w-24 h-14 opacity-75 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <RedEldritchEye delay="0.5s" size="small" rotation="5deg" />
          </div>
          <div className="absolute top-[65%] right-[0.8%] w-26 h-15 opacity-70 animate-pulse" style={{ animationDelay: '2.1s' }}>
            <RedEldritchEye delay="2.1s" size="medium" rotation="-14deg" />
          </div>
          <div className="absolute bottom-[8%] right-[2.5%] w-22 h-13 opacity-65 animate-pulse" style={{ animationDelay: '1.9s' }}>
            <RedEldritchEye delay="1.9s" size="small" rotation="7deg" />
          </div>
        </div>
      )}

      {/* ADDITIONAL PC EYES AT HIGH CORRUPTION (50%+ and 75%+) */}
      {show5RedEyes && (
        <div className="hidden md:block pointer-events-none">
          {/* Top & Bottom Margins */}
          <div className="absolute top-[1.5%] left-[28%] w-20 h-12 opacity-65 animate-pulse" style={{ animationDelay: '3.8s' }}>
            <RedEldritchEye delay="3.8s" size="small" rotation="-5deg" />
          </div>
          <div className="absolute top-[2%] right-[26%] w-22 h-13 opacity-70 animate-pulse" style={{ animationDelay: '1.1s' }}>
            <RedEldritchEye delay="1.1s" size="small" rotation="6deg" />
          </div>
          <div className="absolute bottom-[2%] left-[36%] w-24 h-14 opacity-70 animate-pulse" style={{ animationDelay: '2.6s' }}>
            <RedEldritchEye delay="2.6s" size="medium" rotation="3deg" />
          </div>
          <div className="absolute bottom-[2.5%] right-[32%] w-20 h-12 opacity-65 animate-pulse" style={{ animationDelay: '4.2s' }}>
            <RedEldritchEye delay="4.2s" size="small" rotation="-8deg" />
          </div>

          {/* Deep Margins Clusters */}
          <div className="absolute top-[84%] left-[1.5%] w-18 h-10 opacity-75 animate-pulse" style={{ animationDelay: '0.3s' }}>
            <RedEldritchEye delay="0.3s" size="small" rotation="18deg" />
          </div>
          <div className="absolute top-[82%] right-[1.2%] w-20 h-12 opacity-75 animate-pulse" style={{ animationDelay: '1.6s' }}>
            <RedEldritchEye delay="1.6s" size="small" rotation="-15deg" />
          </div>
        </div>
      )}

      {corruptionPercent >= 75 && (
        <div className="hidden md:block pointer-events-none">
          {/* Ultra high intensity gazing eyes */}
          <div className="absolute top-[14%] left-[12%] w-16 h-10 opacity-80 animate-pulse" style={{ animationDelay: '0.7s' }}>
            <RedEldritchEye delay="0.7s" size="small" rotation="-20deg" />
          </div>
          <div className="absolute top-[18%] right-[14%] w-16 h-10 opacity-80 animate-pulse" style={{ animationDelay: '2.5s' }}>
            <RedEldritchEye delay="2.5s" size="small" rotation="20deg" />
          </div>
          <div className="absolute bottom-[25%] left-[10%] w-18 h-11 opacity-85 animate-pulse" style={{ animationDelay: '1.3s' }}>
            <RedEldritchEye delay="1.3s" size="small" rotation="12deg" />
          </div>
          <div className="absolute bottom-[28%] right-[12%] w-18 h-11 opacity-85 animate-pulse" style={{ animationDelay: '3.3s' }}>
            <RedEldritchEye delay="3.3s" size="small" rotation="-10deg" />
          </div>
        </div>
      )}

      {/* 100% LOST CONTROL VIGNETTE / BANNER */}
      {isLostControl && (
        <div className="absolute inset-0 pointer-events-auto flex flex-col justify-between p-4 z-50">
          {/* Red pulse screen edges */}
          <div className="absolute inset-0 border-[6px] border-red-600 animate-pulse shadow-[inset_0_0_50px_rgba(239,68,68,0.8)] pointer-events-none" />

          {/* Top warning toast */}
          <div className="mx-auto mt-2 bg-red-950/90 border-2 border-red-500 text-red-100 px-6 py-2 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.8)] flex items-center gap-4 text-xs md:text-sm font-bold tracking-wider uppercase animate-bounce">
            <span className="text-xl">⚠️</span>
            <span>¡CORRUPCIÓN MÁXIMA ALCANZADA! VIDA = 0</span>
            <button
              onClick={() => setCorruption(0)}
              className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors cursor-pointer border border-red-400"
            >
              Purificar (Reset CoR)
            </button>
          </div>
        </div>
      )}
        </div>
      )}
    </>
  );
}

function RedEldritchEye({ delay = '0s', size = 'small', rotation }: { delay?: string; size?: 'small' | 'medium'; rotation?: string }) {
  return (
    <svg
      className="w-full h-full drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
      viewBox="0 0 160 90"
      style={{ 
        animationDelay: delay,
        transform: rotation ? `rotate(${rotation})` : undefined
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="redIris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="40%" stopColor="#ef4444" />
          <stop offset="75%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
      </defs>

      {/* Eye Outer Contour */}
      <path
        d="M 10,45 Q 80,5 150,45 Q 80,85 10,45 Z"
        fill="#0a0202"
        stroke="#dc2626"
        strokeWidth="2.5"
      />

      {/* Iris */}
      <circle cx="80" cy="45" r={size === 'medium' ? 24 : 20} fill="url(#redIris)" />

      {/* Pupil */}
      <ellipse cx="80" cy="45" rx="3.5" ry="16" fill="#050505" />

      {/* Glisten */}
      <circle cx="75" cy="38" r="2.5" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}
