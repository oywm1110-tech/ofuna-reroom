"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, X } from "lucide-react";

export function VinylPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-lg shadow-brand-gold/20 hover:scale-110 transition-transform"
        data-hover
      >
        {open ? <X className="w-5 h-5" /> : <Music2 className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-[99]"
          >
            <div className="relative w-40 h-40">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-[6px] border-white/10 bg-brand-black flex items-center justify-center"
              >
                <div className="absolute inset-3 rounded-full border border-white/5" />
                <div className="absolute inset-6 rounded-full border border-white/5" />
                <div className="absolute inset-9 rounded-full border border-white/5" />
                <div className="absolute inset-12 rounded-full border border-white/5" />
                <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
                  <span className="text-[6px] font-bold text-black tracking-widest uppercase">RE:ROOM</span>
                </div>
              </motion.div>
            </div>
            <p className="text-center text-[9px] text-white/30 mt-3 tracking-widest uppercase">Now Spinning...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
