import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return undefined;

    document.body.classList.add("has-fine-pointer");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glowLayer = document.getElementById("glow-layer");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
      if (glowLayer) {
        glowLayer.style.setProperty("--gx", `${mouseX}px`);
        glowLayer.style.setProperty("--gy", `${mouseY}px`);
      }
    }

    function ringLoop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(ringLoop);
    }

    function handleOver(e) {
      if (e.target.closest("a, button, .tilt-card, .tag, input, textarea")) {
        ring.classList.add("hover");
      }
    }
    function handleOut(e) {
      if (e.target.closest("a, button, .tilt-card, .tag, input, textarea")) {
        ring.classList.remove("hover");
      }
    }
    function handleDown() {
      ring.classList.add("click");
    }
    function handleUp() {
      ring.classList.remove("click");
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    rafId = requestAnimationFrame(ringLoop);

    return () => {
      document.body.classList.remove("has-fine-pointer");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
