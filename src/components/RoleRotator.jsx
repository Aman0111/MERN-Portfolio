import { useEffect, useState } from "react";
import { roles } from "../data/content";

export default function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="role-rotator">
      {roles.map((role, i) => (
        <div key={role} className={`role-item ${i === index ? "active" : ""}`}>
          {role}
        </div>
      ))}
    </div>
  );
}
