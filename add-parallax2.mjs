import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// 1. ParallaxImage コンポーネントを追加（セクション間の固定背景バンド）
const newComponents = `
/* ─── Parallax Image Band ─── */
function ParallaxBand({ src, children }: { src: string; children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1.1]);
  return (
    <div ref={ref} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-[-20%] bg-cover bg-center"
        {...{ style: { y, scale, backgroundImage: \`url(\${src})\` } }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Horizontal Slide In ─── */
function SlideIn({ children, from = "left", delay = 0, className }: { children: React.ReactNode; from?: "left" | "right"; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scale On Scroll ─── */
function ScaleOnScroll({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [5, 0, 0, -5]);
  return (
    <motion.div ref={ref} style={{ scale, rotateX }} className={className}>
      {children}
    </motion.div>
  );
}`;

// FloatingOrbs の後に追加
code = code.replace(
  "/* ─── Custom Cursor ─── */",
  newComponents + "\n\n/* ─── Custom Cursor ─── */"
);

// 2. STATS と EXPERIENCE の間にパララックスバンド追加
code = code.replace(
  "      {/* ═══ EXPERIENCE ═══ */}\n      <SectionDivider />",
  `      {/* ═══ PARALLAX BAND 1 ═══ */}
      <ParallaxBand src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-3xl font-playfair italic text-white/80 text-center px-6"
        >
          Where Music Lovers Belong
        </motion.p>
      </ParallaxBand>

      {/* ═══ EXPERIENCE ═══ */}
      <SectionDivider />`
);

// 3. EQUIPMENT と MARQUEE2 の間にパララックスバンド追加
code = code.replace(
  "      {/* ═══ MARQUEE 2 ═══ */}",
  `      {/* ═══ PARALLAX BAND 2 ═══ */}
      <ParallaxBand src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2000&auto=format&fit=crop">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-3xl font-playfair italic text-white/80 text-center px-6"
        >
          Analog Meets Digital
        </motion.p>
      </ParallaxBand>

      {/* ═══ MARQUEE 2 ═══ */}`
);

// 4. GALLERY の前にパララックスバンド追加
code = code.replace(
  "      <SectionDivider />\n      {/* ═══ GALLERY ═══ */}",
  `      {/* ═══ PARALLAX BAND 3 ═══ */}
      <ParallaxBand src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2000&auto=format&fit=crop">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-3xl font-playfair italic text-white/80 text-center px-6"
        >
          Every Night Tells a Story
        </motion.p>
      </ParallaxBand>

      {/* ═══ GALLERY ═══ */}`
);

// 5. FloatingOrbs の背景光をもっと強く
code = code.replace(
  'bg-brand-gold/[0.02] blur-[120px]',
  'bg-brand-gold/[0.04] blur-[120px]'
);
code = code.replace(
  'bg-red-500/[0.015] blur-[100px]',
  'bg-red-500/[0.03] blur-[100px]'
);
code = code.replace(
  'bg-brand-gold/[0.015] blur-[150px]',
  'bg-brand-gold/[0.035] blur-[150px]'
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("ParallaxBand added:", updated.includes("ParallaxBand") ? "YES" : "NO");
console.log("SlideIn added:", updated.includes("SlideIn") ? "YES" : "NO");
console.log("ScaleOnScroll added:", updated.includes("ScaleOnScroll") ? "YES" : "NO");
console.log("Band count:", (updated.match(/PARALLAX BAND/g) || []).length);
console.log("Orbs boosted:", updated.includes("0.04") ? "YES" : "NO");
console.log("Done!");
