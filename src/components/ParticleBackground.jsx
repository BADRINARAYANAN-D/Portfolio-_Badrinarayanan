import React, { useRef, useMemo, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('ParticleBackground Canvas render fallback:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Safe particle field component
function Particles({ count = 800, isDark = false }) {
  const pointsRef = useRef();
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions  = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * (viewport.width || 10) * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (viewport.height || 10) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      velocities[i * 2]     = (Math.random() - 0.5) * 0.003;
      velocities[i * 2 + 1] = (Math.random() - 0.5) * 0.003;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.userData.velocities = velocities;
    return geo;
  }, [count, viewport.width, viewport.height]);

  const mousePos = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handler = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * (viewport.width || 10),
        y: -(e.clientY / window.innerHeight - 0.5) * (viewport.height || 10),
      };
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const pos  = attr.array;
    const vel  = pointsRef.current.geometry.userData.velocities;
    const t    = clock.elapsedTime;

    const hw = (viewport.width || 10) * 1.5;
    const hh = (viewport.height || 10) * 1.5;

    for (let i = 0; i < count; i++) {
      const ix = i * 3, iy = i * 3 + 1;
      const vx = i * 2, vy = i * 2 + 1;

      pos[ix] += vel[vx] + Math.sin(t * 0.25 + i * 0.08) * 0.0008;
      pos[iy] += vel[vy] + Math.cos(t * 0.18 + i * 0.06) * 0.0008;

      const dx = mousePos.current.x - pos[ix];
      const dy = mousePos.current.y - pos[iy];
      const distSq = dx * dx + dy * dy;
      if (distSq < 2) {
        pos[ix] -= dx * 0.001;
        pos[iy] -= dy * 0.001;
      }

      if (pos[ix] >  hw) pos[ix] = -hw;
      if (pos[ix] < -hw) pos[ix] =  hw;
      if (pos[iy] >  hh) pos[iy] = -hh;
      if (pos[iy] < -hh) pos[iy] =  hh;
    }
    attr.needsUpdate = true;
  });

  const color = isDark ? '#444444' : '#BBBBBB';

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={0.016}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground({ isDark = false }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
          dpr={Math.min(window.devicePixelRatio || 1, 1.5)}
        >
          <Particles isDark={isDark} />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
