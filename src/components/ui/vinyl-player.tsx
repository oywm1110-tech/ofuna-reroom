"use client";

import { motion } from "framer-motion";
import { Disc, Music } from "lucide-react";

export function VinylPlayer() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/5 p-3 pr-6 rounded-full shadow-2xl"
        >
            <div className="relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="flex items-center justify-center"
                >
                    <Disc className="w-10 h-10 text-brand-gold" />
                </motion.div>
                <Music className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Today's Vinyl</p>
                <p className="text-xs font-medium text-white">Stairway to Heaven</p>
                <p className="text-[10px] text-white/50">Led Zeppelin</p>
            </div>
        </motion.div>
    );
}
