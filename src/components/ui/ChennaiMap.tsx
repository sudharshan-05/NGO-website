/** Real Chennai SVG map — per RULES.md IMPACT MAP RULES */
export function ChennaiMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 750"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4285F4" stopOpacity="0.25" />
        </linearGradient>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="50" y2="0" stroke="rgba(46,125,50,0.04)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="50" stroke="rgba(46,125,50,0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1000" height="750" fill="#FAFAF5" />
      <rect width="1000" height="750" fill="url(#grid)" />

      {/* Cooum River */}
      <path
        d="M 0,310 Q 120,330 220,315 T 380,335 T 480,355 Q 540,375 580,365 Q 605,355 640,380"
        fill="none"
        stroke="#C8E6C9"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Adyar River */}
      <path
        d="M 120,680 Q 240,650 350,635 T 480,610 Q 530,600 598,620"
        fill="none"
        stroke="#C8E6C9"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Buckingham Canal */}
      <path
        d="M 648,0 H 645 Q 632,320 622,480 Q 605,600 564,750"
        fill="none"
        stroke="#C8E6C9"
        strokeWidth="2"
      />

      {/* Major roads */}
      <path d="M 335,750 L 335,532 L 410,500 L 445,476" fill="none" stroke="#E5E7EB" strokeWidth="5" strokeLinecap="round" />
      <path d="M 445,476 Q 480,400 515,290 T 630,240" fill="none" stroke="#E5E7EB" strokeWidth="5" strokeLinecap="round" />
      <path d="M 585,446 L 515,626 L 490,750" fill="none" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />

      {/* Bay of Bengal */}
      <path
        d="M 640 0 C 635 80, 630 140, 632 180 C 635 240, 638 290, 626 335 C 615 380, 608 440, 602 490 C 595 540, 588 590, 572 638 C 558 680, 545 720, 532 750 L 1000 750 L 1000 0 Z"
        fill="url(#oceanGradient)"
      />

      {/* Neighborhood labels */}
      <text x="445" y="445" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">GUINDY</text>
      <text x="595" y="418" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">ADYAR</text>
      <text x="500" y="495" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">VELACHERY</text>
      <text x="335" y="505" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">TAMBARAM</text>
      <text x="610" y="355" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">BESANT NAGAR</text>
      <text x="515" y="380" fill="#2E7D32" fillOpacity="0.7" fontSize="11" fontWeight="700" textAnchor="middle">THARAMANI</text>
    </svg>
  );
}
  