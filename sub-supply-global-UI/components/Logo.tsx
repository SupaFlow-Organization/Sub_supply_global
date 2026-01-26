
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2E4F4A';
  
  // Brand colors from the provided image
  const redColor = '#EF343A';
  const yellowColor = '#FFDE56'; // Adjusted to match the golden yellow

  return (
    <div className={`relative ${className} select-none`}>
      <svg 
        viewBox="0 0 260 65" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* Symbol Group - Left aligned */}
        <g transform="translate(0, 0)">
          {/* Red Shape: Top-Left Quadrant (Flat top/left, curved bottom-right) */}
          <path 
            d="M0 0 L 50 0 A 50 50 0 0 1 0 50 Z" 
            fill={redColor}
          />
          
          {/* Yellow Shape: Bottom-Right Corner (Flat bottom/right, curved top-left) */}
          {/* Positioned to complement the red shape with a gap */}
          <path 
            d="M 58 58 L 58 40 A 18 18 0 0 0 40 58 Z" 
            fill={yellowColor}
          />
        </g>

        {/* Text Group - Right of symbol */}
        <g fill={textColor} style={{ transition: 'fill 0.3s ease' }}>
          <text 
            x="72" 
            y="28" 
            fontFamily="'DM Sans', sans-serif" 
            fontWeight="700" 
            fontSize="26" 
            letterSpacing="-0.02em"
          >
            Süb Supply
          </text>
          <text 
            x="72" 
            y="54" 
            fontFamily="'DM Sans', sans-serif" 
            fontWeight="700" 
            fontSize="26" 
            letterSpacing="-0.02em"
          >
            Global
          </text>
        </g>
      </svg>
    </div>
  );
};
