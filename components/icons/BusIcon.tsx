import React from 'react';

interface BusIconProps {
  color: string;
  className?: string;
}

const BusIcon: React.FC<BusIconProps> = ({ color, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 40 20" 
      className={className}
      // This SVG icon is designed pointing to the right (0 degrees rotation)
    >
        {/* Main bus body */}
        <rect x="1" y="3" width="38" height="14" rx="4" fill={color} />
        <rect x="1" y="3" width="38" height="14" rx="4" fill="black" fillOpacity="0.2" />

        {/* Windows */}
        <path d="M6 5 H 30 V 9 H 6 Z" fill="#a0deff" fillOpacity="0.9" />
        
        {/* Windshield */}
        <path d="M31 5 H 35 C 36 5, 36 6, 35 7 L 31 7 Z" fill="#a0deff" fillOpacity="0.9" />

        {/* Roof details */}
        <rect x="8" y="4" width="20" height="1" fill="black" fillOpacity="0.1" rx="0.5"/>
        <rect x="10" y="15" width="18" height="1" fill="black" fillOpacity="0.1" rx="0.5"/>

        {/* Headlights */}
        <circle cx="37" cy="6" r="1.5" fill="#FFFDE7" />
        <circle cx="37" cy="14" r="1.5" fill="#FFFDE7" />

        {/* Taillights */}
        <rect x="2" y="5" width="2" height="3" rx="1" fill="#D32F2F" />
        <rect x="2" y="12" width="2" height="3" rx="1" fill="#D32F2F" />
    </svg>
  );
};

export default BusIcon;