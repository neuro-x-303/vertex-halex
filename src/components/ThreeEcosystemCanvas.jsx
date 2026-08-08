import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeEcosystemCanvas() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainAuroraGroup = new THREE.Group();
    scene.add(mainAuroraGroup);

    // =========================================================================
    // 1. EXACT AURORA BOREALIS SHADER CURTAINS (Cyan-Emerald, Magenta-Rose, Deep Violet-Blue)
    // =========================================================================

    const auroraVertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform float uSpeed;
      uniform float uWaveFreq;
      uniform float uWaveAmp;
      uniform float uCurveOffset;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Fluid S-curve undulation matching the reference image
        float wave1 = sin(pos.x * uWaveFreq + uTime * uSpeed + uCurveOffset) * uWaveAmp;
        float wave2 = cos(pos.y * 0.8 + uTime * (uSpeed * 0.7) + pos.x * 0.3) * (uWaveAmp * 0.45);
        float wave3 = sin((pos.x + pos.y) * 0.4 + uTime * 1.1) * 0.15;

        pos.z += wave1 + wave2 + wave3;
        pos.y += sin(pos.x * 0.35 + uTime * 0.4) * 0.25;

        vPosition = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const auroraFragmentShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform vec3 uColorCore;
      uniform vec3 uColorMid;
      uniform vec3 uColorEdge;
      uniform float uOpacity;
      uniform float uTime;

      void main() {
        // Vertical feathered gradient: Brightest in center ribbon, soft fade top and bottom
        float edgeFade = sin(vUv.y * 3.14159265);
        edgeFade = pow(edgeFade, 1.4);

        // Horizontal color blend across the curtain length
        float xNorm = vUv.x;
        vec3 col = mix(uColorEdge, uColorMid, smoothstep(0.0, 0.5, xNorm));
        col = mix(col, uColorCore, smoothstep(0.4, 0.9, xNorm));

        // Subtle shimmering dynamic brightness pulses
        float shimmer = 0.85 + 0.15 * sin(vPosition.x * 4.0 + uTime * 1.5);
        
        // Add a brilliant glowing white-hot core line in the upper third
        float coreHotspot = smoothstep(0.65, 0.82, edgeFade) * 0.45;
        col += vec3(0.8, 1.0, 0.95) * coreHotspot;

        gl_FragColor = vec4(col * shimmer, edgeFade * uOpacity);
      }
    `;

    // Ribbon Definitions matching the user's reference image exactly:
    // 1. Right Emerald-Turquoise Core Surge
    // 2. Center-Left Pink/Magenta Luminous Ribbon
    // 3. Deep Cosmic Indigo/Purple Background Veil
    // 4. Upper Right Electric Violet Arc
    const ribbonConfigs = [
      {
        width: 17, height: 4.8,
        colorCore: new THREE.Color(0x22d3ee), // Cyan
        colorMid: new THREE.Color(0x10b981),  // Emerald Green
        colorEdge: new THREE.Color(0x38bdf8), // Sky Blue
        opacity: 0.52,
        pos: [1.2, -0.4, -0.8],
        rot: [-0.35, 0.15, -0.18],
        speed: 0.55,
        freq: 0.38,
        amp: 0.75,
        curveOffset: 0.0
      },
      {
        width: 16, height: 3.8,
        colorCore: new THREE.Color(0xf43f5e), // Vivid Rose/Pink
        colorMid: new THREE.Color(0xd946ef),  // Magenta
        colorEdge: new THREE.Color(0x818cf8), // Soft Purple
        opacity: 0.42,
        pos: [-1.4, 0.3, -1.5],
        rot: [-0.25, -0.1, 0.12],
        speed: 0.45,
        freq: 0.42,
        amp: 0.65,
        curveOffset: 2.1
      },
      {
        width: 18, height: 5.5,
        colorCore: new THREE.Color(0x6366f1), // Electric Indigo
        colorMid: new THREE.Color(0x4338ca),  // Deep Royal Blue
        colorEdge: new THREE.Color(0x8b5cf6), // Violet
        opacity: 0.35,
        pos: [0.0, 0.8, -2.4],
        rot: [-0.4, 0.05, -0.08],
        speed: 0.35,
        freq: 0.3,
        amp: 0.85,
        curveOffset: 4.2
      },
      {
        width: 15, height: 3.4,
        colorCore: new THREE.Color(0xa855f7), // Purple
        colorMid: new THREE.Color(0x06b6d4),  // Cyan
        colorEdge: new THREE.Color(0xf43f5e), // Pink Edge
        opacity: 0.38,
        pos: [2.0, 1.2, -1.8],
        rot: [-0.3, 0.25, -0.22],
        speed: 0.6,
        freq: 0.45,
        amp: 0.55,
        curveOffset: 1.5
      }
    ];

    const ribbonMeshes = [];

    ribbonConfigs.forEach((cfg) => {
      const geo = new THREE.PlaneGeometry(cfg.width, cfg.height, 90, 30);
      const mat = new THREE.ShaderMaterial({
        vertexShader: auroraVertexShader,
        fragmentShader: auroraFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: cfg.speed },
          uWaveFreq: { value: cfg.freq },
          uWaveAmp: { value: cfg.amp },
          uCurveOffset: { value: cfg.curveOffset },
          uColorCore: { value: cfg.colorCore },
          uColorMid: { value: cfg.colorMid },
          uColorEdge: { value: cfg.colorEdge },
          uOpacity: { value: cfg.opacity }
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...cfg.pos);
      mesh.rotation.set(...cfg.rot);
      mainAuroraGroup.add(mesh);

      ribbonMeshes.push({ mesh, mat, geo });
    });

    // =========================================================================
    // 2. GLISTENING STARRY NIGHT & SPARKLING STAR CLUSTERS
    // =========================================================================

    const starCount = 850;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starTwinkleData = [];

    const starPalette = [
      new THREE.Color(0xffffff), // Pure Crystal White
      new THREE.Color(0x38bdf8), // Aurora Cyan
      new THREE.Color(0x34d399), // Emerald
      new THREE.Color(0xf472b6), // Soft Pink
      new THREE.Color(0xa5b4fc)  // Pale Indigo
    ];

    for (let i = 0; i < starCount; i++) {
      // Clustered distribution with high density in the lower-left & upper sky
      let x, y, z;
      if (i < 250) {
        // Star cluster near lower left ribbon curve
        x = -4.5 + (Math.random() - 0.5) * 4.5;
        y = -1.8 + (Math.random() - 0.5) * 2.5;
        z = (Math.random() - 0.5) * 3.5 - 0.5;
      } else {
        // Broad cosmic sky field
        x = (Math.random() - 0.5) * 20;
        y = (Math.random() - 0.5) * 14;
        z = (Math.random() - 0.5) * 7 - 1.5;
      }

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const col = starPalette[Math.floor(Math.random() * starPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;

      starTwinkleData.push({
        baseScale: Math.random() * 0.14 + 0.04,
        twinkleSpeed: 1.5 + Math.random() * 3.5,
        phase: Math.random() * Math.PI * 2
      });
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Custom 4-Point Diamond Flare Star Texture
    const createStarDiamondTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(56, 189, 248, 0.9)');
      grad.addColorStop(0.5, 'rgba(52, 211, 153, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);

      // Star flare cross
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(32, 8);
      ctx.lineTo(32, 56);
      ctx.moveTo(8, 32);
      ctx.lineTo(56, 32);
      ctx.stroke();

      return new THREE.CanvasTexture(canvas);
    };

    const starMat = new THREE.PointsMaterial({
      size: 0.16,
      map: createStarDiamondTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starParticles = new THREE.Points(starGeo, starMat);
    scene.add(starParticles);

    // =========================================================================
    // 3. MOUSE & SCROLL INTERACTIVE HANDLERS
    // =========================================================================

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 4. ANIMATION LOOP
    // =========================================================================

    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp with organic inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.035;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.035;

      // Update shader uniforms for each aurora curtain
      ribbonMeshes.forEach(({ mat }) => {
        mat.uniforms.uTime.value = elapsedTime;
      });

      // Subtle group tilt responsive to mouse
      mainAuroraGroup.rotation.y = mouseRef.current.x * 0.15 + Math.sin(elapsedTime * 0.15) * 0.03;
      mainAuroraGroup.rotation.x = mouseRef.current.y * 0.12;

      // Camera responds gently to vertical scroll
      camera.position.y = -scrollRef.current * 2.0;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);

      ribbonMeshes.forEach(({ geo, mat }) => {
        geo.dispose();
        mat.dispose();
      });
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        zIndex: 0,
        overflow: 'hidden',
        background: '#04060e' // Deep Midnight Black Sky
      }}
    >
      {/* Exact Soft Ambient Glow Underlays matching the reference image */}
      
      {/* 1. Emerald & Turquoise Neon Flare (Right Surge) */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: '750px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.22) 0%, rgba(16, 185, 129, 0.15) 35%, rgba(6, 182, 212, 0.08) 60%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      {/* 2. Magenta & Rose Neon Arc (Center Wave) */}
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          width: '800px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(244, 63, 94, 0.22) 0%, rgba(217, 70, 239, 0.16) 40%, rgba(129, 140, 248, 0.08) 65%, transparent 85%)',
          filter: 'blur(85px)',
          pointerEvents: 'none'
        }}
      />

      {/* 3. Deep Indigo & Cosmic Violet Cloud (Upper Right to Mid Left) */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          right: '15%',
          width: '900px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(67, 56, 202, 0.12) 45%, transparent 75%)',
          filter: 'blur(95px)',
          pointerEvents: 'none'
        }}
      />

      {/* WebGL 3D Aurora Canvas */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
