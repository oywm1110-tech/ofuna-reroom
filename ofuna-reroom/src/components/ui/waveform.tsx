"use client";

import { motion } from "framer-motion";

export function Waveform() {
  const bars = 12;
  return (
    <div className="flex items-end gap-[3px] h-full">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-brand-gold/40 rounded-full"
          animate={{
            height: ["20%", `${30 + Math.random() * 70}%`, "20%"],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.6,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
