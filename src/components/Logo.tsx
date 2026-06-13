import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 64 }: LogoProps) {
  return (
    <div 
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md transition-transform duration-500 hover:rotate-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Golden Border with subtle gradient */}
        <circle cx="100" cy="100" r="94" stroke="#d5a021" strokeWidth="6" fill="#4a1504" />
        <circle cx="100" cy="100" r="88" stroke="#f6da73" strokeWidth="2" />

        {/* Circular Text paths */}
        <path
          id="text-path-top"
          d="M 24 100 A 76 76 0 0 1 176 100"
          fill="none"
        />
        <path
          id="text-path-bottom"
          d="M 176 100 A 76 76 0 0 1 24 100"
          fill="none"
        />

        {/* Top Text: LEO CLUB OF MAVERICKS */}
        <text className="fill-current text-[#fbf1c7]" style={{ fontSize: "12.5px", fontWeight: "bold", letterSpacing: "2.5px" }}>
          <textPath href="#text-path-top" startOffset="50%" textAnchor="middle">
            LEO CLUB OF MAVERICKS
          </textPath>
        </text>

        {/* Bottom Text: DISTRICT 324 E */}
        <text className="fill-current text-[#e3a024]" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "3px" }}>
          <textPath href="#text-path-bottom" startOffset="50%" textAnchor="middle">
            DISTRICT 324 E
          </textPath>
        </text>

        {/* Middle circular division divider */}
        <circle cx="100" cy="100" r="62" fill="#1c0601" stroke="#d5a021" strokeWidth="3" />

        {/* Laurel Wreath left and right inside center outer */}
        <g stroke="#d5a021" strokeWidth="1.5" fill="none" opacity="0.8">
          {/* Left Laurel */}
          <path d="M 62 100 Q 64 68 80 50" />
          <path d="M 62 100 Q 65 132 80 150" />
          {/* Leaves Left */}
          <path d="M 64 88 Q 58 84 64 80 Q 70 84 64 88 Z" fill="#d5a021" />
          <path d="M 67 74 Q 61 70 67 66 Q 73 70 67 74 Z" fill="#d5a021" />
          <path d="M 72 61 Q 67 56 73 53 Q 79 56 72 61 Z" fill="#d5a021" />
          <path d="M 64 112 Q 58 116 64 120 Q 70 116 64 112 Z" fill="#d5a021" />
          <path d="M 67 126 Q 61 130 67 134 Q 73 130 67 126 Z" fill="#d5a021" />
          <path d="M 72 139 Q 67 144 73 147 Q 79 144 72 139 Z" fill="#d5a021" />

          {/* Right Laurel */}
          <path d="M 138 100 Q 136 68 120 50" />
          <path d="M 138 100 Q 135 132 120 150" />
          {/* Leaves Right */}
          <path d="M 136 88 Q 142 84 136 80 Q 130 84 136 88 Z" fill="#d5a021" />
          <path d="M 133 74 Q 139 70 133 66 Q 127 70 133 74 Z" fill="#d5a021" />
          <path d="M 128 61 Q 133 56 127 53 Q 121 56 128 61 Z" fill="#d5a021" />
          <path d="M 136 112 Q 142 116 136 120 Q 130 116 136 112 Z" fill="#d5a021" />
          <path d="M 133 126 Q 139 130 133 134 Q 127 130 133 126 Z" fill="#d5a021" />
          <path d="M 128 139 Q 133 144 127 147 Q 121 144 128 139 Z" fill="#d5a021" />
        </g>

        {/* Center LEO Crest with Lion Head Silhouette representations */}
        <g transform="translate(71, 70) scale(0.58)">
          {/* Golden Letter 'L' in center representing LIONS/LEO */}
          {/* Central circle or gold background shield */}
          <path
            d="M 50 15 C 30 15 15 30 15 50 C 15 70 30 85 50 85 C 70 85 85 70 85 50 C 85 30 70 15 50 15 Z"
            fill="#d5a021"
            stroke="#f6da73"
            strokeWidth="2"
          />
          {/* Bold elegant 'L' inside */}
          <path
            d="M 40 33 L 48 33 L 48 60 L 63 60 L 63 67 L 40 67 Z"
            fill="#1c0601"
          />
          {/* Left facing lion profile representing looking into history list */}
          <path
            d="M 23 37 Q 12 37 8 48 Q 12 58 17 58 Q 14 52 23 52"
            stroke="#1c0601"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 12 43 C 10 43 9 45 9 47 C 9 49 11 50 13 49 C 14 48 14 45 12 43"
            fill="#1c0601"
          />
          {/* Right facing lion profile representing looking into future progress */}
          <path
            d="M 77 37 Q 88 37 92 48 Q 88 58 83 58 Q 86 52 77 52"
            stroke="#1c0601"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 88 43 C 90 43 91 45 91 47 C 91 49 89 50 87 49 C 86 48 86 45 88 43"
            fill="#1c0601"
          />
          
          {/* Ribbon with L E O above */}
          <rect x="30" y="8" width="40" height="12" rx="3" fill="#fbf1c7" stroke="#d5a021" strokeWidth="1.5" />
          <text x="50" y="18" fill="#1c0601" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="2px">LEO</text>
        </g>
      </svg>
    </div>
  );
}
