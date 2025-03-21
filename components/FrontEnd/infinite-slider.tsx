'use client'
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Utility for conditional class names (optional)

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  marginTop?: string // Optional prop for top padding
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  gap = 24,
  reverse = false,
  speed = 8,
  marginTop = '-100px', // Default padding value
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const clone = slider.innerHTML;
      slider.innerHTML += clone; // Duplicate items for smooth loop
    }
  }, []);

  return (
    <div className={`overflow-hidden w-full relative pt-[${marginTop}]`}>
      <div
        ref={sliderRef}
        className={cn(
          'flex whitespace-nowrap animate-scroll',
          reverse ? '[--animation-direction:reverse]' : '[--animation-direction:forwards]'
        )}
        style={{ gap: `${gap}px`, animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
};
