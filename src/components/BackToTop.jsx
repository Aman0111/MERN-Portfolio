import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 700);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button id="back-to-top" className={show ? "show" : ""} aria-label="Back to top" onClick={scrollToTop}>
      <ArrowUpIcon />
    </button>
  );
}
