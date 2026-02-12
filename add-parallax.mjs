import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// 1. ParallaxSection コンポーネントを追加（ScrollReveal の import の後に）
const parallaxComponent = `
/* ─── Parallax Section ─── */
function ParallaxSection({ children, className, speed = 0.3, id }: { children: React.ReactNode; className?: string; speed?: number; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  return (
    <section ref={ref} id={id} className={className}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </section>
  );
}

/* ─── Section Divider ─── */
function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0]);
  return (
    <div ref={ref} className="relative py-8 md:py-16 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scaleX, opacity: glowOpacity }}
        className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
      />
      <motion.div
        style={{ scaleX, opacity: glowOpacity }}
        className="absolute h-[30px] w-full max-w-2xl bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent blur-xl"
      />
    </div>
  );
}

/* ─── Floating Background Orbs ─── */
function FloatingOrbs() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />
      <motion.div style={{ y: y2 }} className="absolute top-[50%] right-[5%] w-[400px] h-[400px] rounded-full bg-red-500/[0.015] blur-[100px]" />
      <motion.div style={{ y: y3 }} className="absolute top-[80%] left-[30%] w-[600px] h-[600px] rounded-full bg-brand-gold/[0.015] blur-[150px]" />
    </div>
  );
}`;

// ScrollReveal importの後に追加
code = code.replace(
  'import { ScrollReveal } from "@/components/ui/scroll-reveal";',
  'import { ScrollReveal } from "@/components/ui/scroll-reveal";\n' + parallaxComponent
);

// 2. FloatingOrbs を ScrollProgress の後に追加
code = code.replace(
  '      <ScrollProgress />',
  '      <ScrollProgress />\n      <FloatingOrbs />'
);

// 3. EXPERIENCE セクションをParallaxSectionに変更
code = code.replace(
  '{/* ═══ EXPERIENCE ═══ */}\n      <section id="system" className="max-w-7xl mx-auto px-6 py-16 md:py-32">',
  '{/* ═══ EXPERIENCE ═══ */}\n      <SectionDivider />\n      <ParallaxSection id="system" className="max-w-7xl mx-auto px-6 py-16 md:py-32">'
);

// EXPERIENCEの閉じタグ - EQUIPMENTの直前
code = code.replace(
  '      {/* ═══ EQUIPMENT ═══ */}',
  '      {/* ═══ EQUIPMENT ═══ */}\n      <SectionDivider />'
);

// 4. EQUIPMENT セクションをParallaxSectionに変更
code = code.replace(
  '<section id="equipment" className="py-16 md:py-32 border-y border-white/5">',
  '<ParallaxSection id="equipment" className="py-16 md:py-32 border-y border-white/5" speed={0.2}>'
);

// 5. EVENTS セクションをParallaxSectionに変更
code = code.replace(
  '{/* ═══ EVENTS ═══ */}\n      <section id="schedule" className="py-16 md:py-32">',
  '{/* ═══ EVENTS ═══ */}\n      <SectionDivider />\n      <ParallaxSection id="schedule" className="py-16 md:py-32" speed={0.25}>'
);

// 6. GALLERY セクションの前にもディバイダー
code = code.replace(
  '      {/* ═══ GALLERY ═══ */}',
  '      <SectionDivider />\n      {/* ═══ GALLERY ═══ */}'
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("ParallaxSection added:", updated.includes("ParallaxSection") ? "YES" : "NO");
console.log("SectionDivider added:", updated.includes("SectionDivider") ? "YES" : "NO");
console.log("FloatingOrbs added:", updated.includes("FloatingOrbs") ? "YES" : "NO");
console.log("Done!");
