"use client";

import { motion } from "framer-motion";

export function Waveform() {
    return (
        <div className="flex items-end gap-[2px] h-full opacity-20">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-brand-gold rounded-t-full"
                    animate={{
                        height: [
                            "20%",
                            `${Math.random() * 60 + 40}%`,
                            `${Math.random() * 30 + 10}%`,
                            "20%",
                        ],
                    }}
                    transition={{
                        duration: Math.random() * 1 + 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
