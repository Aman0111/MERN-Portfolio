import { useEffect, useRef } from "react";
import * as THREE from "three";

const nodeDefs = [
  { pos: [-3.2, 1.6, 0.2], color: 0x3b82f6 }, // React frontend
  { pos: [-3.3, -1.5, -0.6], color: 0x3b82f6 }, // React Native mobile
  { pos: [-1.0, 0.1, 0.6], color: 0x22d3ee }, // API gateway
  { pos: [1.1, 1.0, -0.2], color: 0x8b5cf6 }, // Node/Express
  { pos: [2.8, 2.1, -1.1], color: 0x3b82f6 }, // MongoDB
  { pos: [2.7, -1.4, -1.0], color: 0x22d3ee }, // Python AI microservice
  { pos: [4.3, -0.3, -2.0], color: 0x8b5cf6 } // LLM / RAG
];
const edgeDefs = [
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [5, 6]
];

export default function HeroCanvas() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    wrap.appendChild(renderer.domElement);

    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    const nodeMeshes = nodeDefs.map((def) => {
      const g = new THREE.Group();
      const ico = new THREE.IcosahedronGeometry(0.32, 0);
      const edges = new THREE.EdgesGeometry(ico);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: def.color, transparent: true, opacity: 0.85 })
      );
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 10, 10),
        new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.9 })
      );
      g.add(line);
      g.add(core);
      g.position.set(...def.pos);
      graphGroup.add(g);
      return g;
    });

    edgeDefs.forEach(([a, b]) => {
      const pa = nodeMeshes[a].position;
      const pb = nodeMeshes[b].position;
      const geo = new THREE.BufferGeometry().setFromPoints([pa, pb]);
      const colorA = new THREE.Color(nodeDefs[a].color);
      const colorB = new THREE.Color(nodeDefs[b].color);
      geo.setAttribute(
        "color",
        new THREE.Float32BufferAttribute([colorA.r, colorA.g, colorA.b, colorB.r, colorB.g, colorB.b], 3)
      );
      const mat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      graphGroup.add(new THREE.Line(geo, mat));
    });

    const particles = edgeDefs.map(([a, b], i) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
      );
      mesh.userData = { a, b, t: (i * 0.3) % 1, speed: 0.12 + (i % 3) * 0.03 };
      graphGroup.add(mesh);
      return mesh;
    });

    const starCount = 500;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      starPos[i * 3] = (Math.random() - 0.5) * 28;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x64748b, size: 0.03, transparent: true, opacity: 0.55 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    let targetRotX = 0;
    let targetRotY = 0;
    function handleMouseMove(e) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotY = nx * 0.35;
      targetRotX = ny * 0.18;
    }
    window.addEventListener("mousemove", handleMouseMove);

    function handleResize() {
      camera.aspect = wrap.clientWidth / wrap.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let frameId;
    function animate() {
      frameId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      if (!reduceMotion) {
        graphGroup.rotation.y += (targetRotY - graphGroup.rotation.y) * 0.04 + dt * 0.05;
        graphGroup.rotation.x += (targetRotX - graphGroup.rotation.x) * 0.04;
        stars.rotation.y += dt * 0.01;

        particles.forEach((p) => {
          p.userData.t += p.userData.speed * dt;
          if (p.userData.t > 1) p.userData.t -= 1;
          const pa = nodeMeshes[p.userData.a].position;
          const pb = nodeMeshes[p.userData.b].position;
          p.position.lerpVectors(pa, pb, p.userData.t);
        });

        nodeMeshes.forEach((n) => {
          n.rotation.y += dt * 0.3;
          n.rotation.x += dt * 0.15;
        });
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode === wrap) {
        wrap.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  return <div id="hero-canvas-wrap" ref={wrapRef} />;
}
