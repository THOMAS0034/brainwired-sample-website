
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Rotatingtext.css";

export default function RotatingText({
  texts,
  rotationInterval = 2000,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className={`rotating-text-wrapper ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .5 }}
          className="rotating-text"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
