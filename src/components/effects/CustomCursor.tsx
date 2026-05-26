"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 38 });
  const springY = useSpring(y, { stiffness: 500, damping: 38 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor='pointer']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden mix-blend-difference md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: hovering ? 56 : clicking ? 28 : 40,
            height: hovering ? 56 : clicking ? 28 : 40,
            opacity: hovering ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-full border border-white bg-white/10"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: clicking ? 0.5 : 1 }}
          className="h-1.5 w-1.5 rounded-full bg-indigo-400"
        />
      </motion.div>
    </>
  );
}
