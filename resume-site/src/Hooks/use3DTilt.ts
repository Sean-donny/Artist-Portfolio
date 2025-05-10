import { useRef, useState, useEffect, useCallback } from 'react';

export function use3DTilt(maxAngle = 20) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      const rotateY = ((x - width / 2) / width) * maxAngle;
      const rotateX = -((y - height / 2) / height) * maxAngle;

      setStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      });
    },
    [maxAngle],
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `rotateX(0deg) rotateY(0deg)`,
      transition: 'transform 0.7s ease-out',
    });
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, style };
}
