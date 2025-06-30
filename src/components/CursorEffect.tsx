import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, input, textarea, select, [role="button"]')) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, input, textarea, select, [role="button"]')) {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    // Use event delegation for better performance
    document.body.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.body.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.body.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, [updateMousePosition, handleMouseOver, handleMouseOut]);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border border-blue-600/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </>
  );
};

export default CursorEffect;