import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const onEnter = (e) => {
      if (e.target.matches('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]')) {
        setHovering(true);
      }
    };
    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseover',  onEnter);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseover',  onEnter);
      document.removeEventListener('mouseleave', onLeave, true);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  ${hovering ? 'hovering' : ''}`} aria-hidden />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`} aria-hidden />
    </>
  );
}
