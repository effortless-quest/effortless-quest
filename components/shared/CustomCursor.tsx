'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px';
        dotRef.current.style.top = e.clientY - 5 + 'px';
      }
    };

    document.addEventListener('mousemove', onMove);

    let raf: number;
    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x - 16 + 'px';
        ringRef.current.style.top = ringPos.current.y - 16 + 'px';
      }
      raf = requestAnimationFrame(animRing);
    };
    raf = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#f5c842',
          boxShadow: '0 0 12px #f5c842',
          pointerEvents: 'none',
          zIndex: 99999,
          top: '-100px',
          left: '-100px',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid #a855f7',
          pointerEvents: 'none',
          zIndex: 99998,
          top: '-100px',
          left: '-100px',
        }}
      />
    </>
  );
}