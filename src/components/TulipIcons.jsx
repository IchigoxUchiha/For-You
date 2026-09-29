import React from 'react';

// Single delicate yellow tulip flower SVG
export function TulipFlower({ size = 20, className = "", color = "#facc15", leafColor = "#a3b18a" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Stem */}
      <path
        d="M12 11V21"
        stroke={leafColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M12 18C9.5 17 8 14.5 8.5 13C10.5 13 11.5 15 12 18Z"
        fill={leafColor}
        opacity="0.85"
      />
      <path
        d="M12 16.5C14.5 15.5 16 13 15.5 11.5C13.5 11.5 12.5 13.5 12 16.5Z"
        fill={leafColor}
        opacity="0.85"
      />
      {/* Petals / Tulip Head */}
      {/* Left petal */}
      <path
        d="M7.5 7.5C7.5 11.5 11.5 12.5 12 12.5C12 12.5 7.5 10.5 7.5 7.5Z"
        fill="#fde047"
      />
      {/* Right petal */}
      <path
        d="M16.5 7.5C16.5 11.5 12.5 12.5 12 12.5C12 12.5 16.5 10.5 16.5 7.5Z"
        fill="#fde047"
      />
      {/* Center Main Petal */}
      <path
        d="M12 3C10 5.5 8 9 9.5 12.5C10.5 13 13.5 13 14.5 12.5C16 9 14 5.5 12 3Z"
        fill={color}
      />
      {/* Center highlight */}
      <path
        d="M12 4.5C11.2 6.2 10.5 8.5 11.5 11C12 11.2 12 11.2 12.5 11C13.5 8.5 12.8 6.2 12 4.5Z"
        fill="#fef08a"
        opacity="0.9"
      />
    </svg>
  );
}

// Mini 3-Tulip Bouquet Motif
export function TulipBouquet({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Stems tied together */}
      <path d="M16 16L16 29" stroke="#87986a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 21L10 28" stroke="#87986a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 21L22 28" stroke="#87986a" strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Left Tulip (Yellow-Gold) */}
      <g transform="translate(4, 5) rotate(-18 10 10)">
        <path d="M7 6C6 9 9 11 10 11C10 11 6.5 9.5 7 6Z" fill="#fde047" />
        <path d="M13 6C14 9 11 11 10 11C10 11 13.5 9.5 13 6Z" fill="#fde047" />
        <path d="M10 2.5C8.5 4.5 7.5 7 8.5 10C9.5 10.5 10.5 10.5 11.5 10C12.5 7 11.5 4.5 10 2.5Z" fill="#facc15" />
      </g>

      {/* Right Tulip (Warm Peach-Yellow) */}
      <g transform="translate(14, 5) rotate(18 10 10)">
        <path d="M7 6C6 9 9 11 10 11C10 11 6.5 9.5 7 6Z" fill="#fef08a" />
        <path d="M13 6C14 9 11 11 10 11C10 11 13.5 9.5 13 6Z" fill="#fef08a" />
        <path d="M10 2.5C8.5 4.5 7.5 7 8.5 10C9.5 10.5 10.5 10.5 11.5 10C12.5 7 11.5 4.5 10 2.5Z" fill="#fbbf24" />
      </g>

      {/* Center Tulip (Bright Sunshine Yellow) */}
      <g transform="translate(6, 2)">
        <path d="M7 6C6 9 9 11 10 11C10 11 6.5 9.5 7 6Z" fill="#fde047" />
        <path d="M13 6C14 9 11 11 10 11C10 11 13.5 9.5 13 6Z" fill="#fde047" />
        <path d="M10 2.5C8.5 4.5 7.5 7 8.5 10C9.5 10.5 10.5 10.5 11.5 10C12.5 7 11.5 4.5 10 2.5Z" fill="#eab308" />
        <path d="M10 4C9.2 5.5 8.8 7.2 9.5 9C10 9.2 10.5 9.2 11 9C11.5 7.2 11 5.5 10 4Z" fill="#fef9c3" />
      </g>

      {/* Ribbon bow */}
      <path d="M13 22C14.5 21 17.5 21 19 22M14 22L12 25M18 22L20 25" stroke="#e08374" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Single swaying miniature floating tulip decoration
export function FloatingTulipTag({ text = "Ân's favourite yellow tulips 🌷" }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef9c3]/80 border border-[#fde047]/60 text-[#713f12] text-xs font-serif shadow-xs backdrop-blur-xs">
      <TulipFlower size={15} color="#eab308" />
      <span>{text}</span>
    </div>
  );
}
