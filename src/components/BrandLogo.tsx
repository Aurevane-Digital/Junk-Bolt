interface BrandLogoProps {
  /**
   * When inverted/dark is true (e.g. transparent navbar over dark video hero),
   * 'JUNK' text is white. When false (e.g. scrolled white navbar, white footer card),
   * 'JUNK' text is deep navy (#0a1424).
   */
  inverted?: boolean;
  className?: string;
}

export default function BrandLogo({ inverted = false, className = "h-10 sm:h-12 w-auto" }: BrandLogoProps) {
  const junkColor = inverted ? "#FFFFFF" : "#0a1424";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
        aria-label="Junk Bolt"
      >
        <defs>
          <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        <g transform="skewX(-10)" filter={inverted ? "url(#logoShadow)" : undefined}>
          {/* Top Word: JUNK */}
          <text
            x="4"
            y="32"
            fontFamily="'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="36"
            letterSpacing="-0.5"
            fill={junkColor}
            stroke={inverted ? "rgba(0,0,0,0.5)" : "none"}
            strokeWidth={inverted ? "1" : "0"}
            paintOrder="stroke fill"
          >
            JUNK
          </text>

          {/* Bottom Word: BOLT with Lightning Bolt 'B' */}
          <g transform="translate(4, 38)">
            {/* Custom stylized 'B' with lightning bolt left spine */}
            <g transform="translate(-1, 0)">
              {/* Lightning Bolt cutting through the spine */}
              <path
                d="M11 2 L2 18 L9 18 L4 35 L19 15 L12 15 Z"
                fill="url(#boltGrad)"
                stroke="#B45309"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              {/* Upper lobe of B */}
              <path
                d="M10 4 C15 4 19 6 19 10 C19 14 15 16 10 16 Z"
                fill="url(#boltGrad)"
              />
              {/* Lower lobe of B */}
              <path
                d="M10 16 C16 16 21 18 21 23 C21 28 15 30 9 30 Z"
                fill="url(#boltGrad)"
              />
              {/* Inner counter cuts for B */}
              <path
                d="M10 7 C12 7 14 8 14 10 C14 12 12 13 10 13 Z"
                fill={inverted ? "#0a1424" : "#ffffff"}
                opacity="0.9"
              />
              <path
                d="M10 19 C13 19 15 21 15 23 C15 25 13 27 10 27 Z"
                fill={inverted ? "#0a1424" : "#ffffff"}
                opacity="0.9"
              />
            </g>

            {/* O, L, T in BOLT */}
            <text
              x="23"
              y="28"
              fontFamily="'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="36"
              letterSpacing="-0.5"
              fill="url(#boltGrad)"
              stroke="#B45309"
              strokeWidth="0.5"
              paintOrder="stroke fill"
            >
              OLT
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
