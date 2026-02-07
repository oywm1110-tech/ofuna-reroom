"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Instagram,
  Facebook,
  MapPin,
  ArrowUpRight,
  Music2,
  Volume2,
  Clock,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { VinylPlayer } from "@/components/ui/vinyl-player";
import { Waveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 700 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 700 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    window.addEventListener("mousemove", move);
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold/60 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ x: springX, y: springY }}
      animate={{
        scale: hovered ? 2.5 : 1,
        borderColor: hovered ? "rgba(212,175,55,0.9)" : "rgba(212,175,55,0.4)",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 400 }}
    />
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold via-brand-gold to-brand-red origin-left z-[9998]"
      style={{ scaleX }}
    />
  );
}

function NoiseOverlay() {
  const noiseUrl = "data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E";
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.03]"
      style={{
        backgroundImage: "url(\"" + noiseUrl + "\")",
        backgroundRepeat: "repeat",
      }}
    />
  );
}

function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.on("change", (v) => setVisible(v > 400));
  }, [scrollY]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[9990] glass-panel px-8 py-3 rounded-full flex items-center gap-8 border border-white/10"
        >
          <span className="font-playfair font-bold text-sm tracking-tight">
            RE<span className="text-brand-gold">:</span>ROOM
          </span>
          <div className="h-4 w-[1px] bg-white/10" />
          {[
            { label: "Experience", href: "#system" },
            { label: "Events", href: "#schedule" },
            { label: "Access", href: "#access" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-hover
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-brand-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <span ref={ref} className="font-oswald font-bold">
      {display}{suffix}
    </span>
  );
}

function AnimatedTitle({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.3 + i * 0.04,
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function Marquee({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);

  return (
    <main className="min-h-screen bg-brand-black text-white">
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <FloatingNav />
      <VinylPlayer />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/10 via-brand-black/60 to-brand-black" />
        </motion.div>

        <div className="absolute top-0 left-12 w-[1px] h-32 bg-gradient-to-b from-brand-gold/40 to-transparent hidden md:block" />
        <div className="absolute top-0 right-12 w-[1px] h-32 bg-gradient-to-b from-brand-gold/40 to-transparent hidden md:block" />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="text-xs font-bold text-brand-gold uppercase block mb-4"
            >
              Established in Ofuna
            </motion.span>

            <h1 className="text-[15vw] md:text-[11vw] font-playfair font-black leading-[0.85] tracking-tighter uppercase">
              <AnimatedTitle text="Ofuna" />
              <br />
              <span className="text-brand-gold italic">
                <AnimatedTitle text="Re:Room" />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
              className="pt-8 flex items-center justify-center gap-6 overflow-hidden"
            >
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-sm md:text-base font-medium tracking-widest text-white/50 uppercase whitespace-nowrap">
                Authentic Rock & Vinyl Bar
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white/30" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#system"
              data-hover
              className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:border-brand-gold/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-sm font-bold tracking-widest uppercase flex items-center gap-3">
                Explore
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="#schedule"
              data-hover
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-brand-gold text-black hover:bg-white transition-colors duration-500"
            >
              <span className="relative z-10 text-sm font-bold tracking-widest uppercase flex items-center gap-3">
                Events
                <Calendar className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-16 left-12 h-12 w-32 hidden md:block">
          <Waveform />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE 1 */}
      <div className="py-6 border-y border-white/5 bg-brand-black">
        <Marquee speed={40}>
          <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-white/15 flex items-center gap-12">
            <span>ROCK & ROLL</span>
            <span className="text-brand-gold/30">{"◆"}</span>
            <span>VINYL RECORDS</span>
            <span className="text-brand-gold/30">{"◆"}</span>
            <span>WHISKY & BEER</span>
            <span className="text-brand-gold/30">{"◆"}</span>
            <span>OFUNA BASEMENT</span>
            <span className="text-brand-gold/30">{"◆"}</span>
            <span>LIVE MUSIC</span>
            <span className="text-brand-gold/30">{"◆"}</span>
            <span>SINCE OFUNA</span>
            <span className="text-brand-gold/30">{"◆"}</span>
          </span>
        </Marquee>
      </div>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 2000, suffix: "+", label: "Vinyl Records" },
            { value: 50, suffix: "+", label: "Whisky Selection" },
            { value: 3, suffix: "min", label: "From Station" },
            { value: 15, suffix: "yrs", label: "Of Rock & Soul" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl text-brand-gold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-2">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE BENTO */}
      <section id="system" className="max-w-7xl mx-auto px-6 py-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold block mb-4">What We Offer</span>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-[0.9]">The<br />Experience</h2>
            </div>
            <p className="max-w-sm text-white/40 text-sm leading-relaxed">
              大船の地下に隠された、ロックを愛する大人たちのためのリビングルーム。ヴィンテージスピーカーから流れる70年代の鼓動を感じてください。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <div className="h-full glass-panel p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-1000 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-[1]" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-8">
                  <Volume2 className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4 italic leading-tight">Uncompromising<br />Sound</h3>
                <p className="text-white/50 leading-relaxed max-w-sm">
                  好きなレコードをリクエストしてください。最高品質の音響システムで、アーティストの吐息まで再現します。
                </p>
              </div>
              <div className="relative z-10 pt-12 flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold/80">Sound System / 70s-90s Rock</span>
                <div data-hover className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="md:col-span-2">
            <div className="glass-panel p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  <Music2 className="w-4 h-4 text-brand-gold" />
                </div>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase">Table System</h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <span className="text-white/50">Table Charge</span>
                  <span className="text-2xl font-oswald font-bold text-brand-gold">¥500</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <span className="text-white/50">Music Request</span>
                  <span className="text-2xl font-oswald font-bold text-white">FREE</span>
                </div>
                <p className="text-[10px] text-white/30 mt-4 italic">* No tax / Service charge included</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div data-hover className="glass-panel p-8 group cursor-pointer overflow-hidden relative h-full min-h-[200px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-wine/80 to-brand-wine/40 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1 tracking-tight">WHISKY</h3>
                <p className="text-xs text-white/40">Selected Malts & Bourbon</p>
              </div>
              <div className="relative z-10 text-3xl font-oswald font-bold">¥900<span className="text-base text-white/40">~</span></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div data-hover className="glass-panel p-8 group cursor-pointer overflow-hidden relative h-full min-h-[200px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1 tracking-tight">CRAFT BEER</h3>
                <p className="text-xs text-white/40">Heartland & Bass On Tap</p>
              </div>
              <div className="relative z-10 text-3xl font-oswald font-bold">¥800<span className="text-base text-white/40">~</span></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="md:col-span-2">
            <div data-hover className="glass-panel p-8 group cursor-pointer overflow-hidden relative flex items-center justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1 tracking-tight">COCKTAILS & MORE</h3>
                <p className="text-xs text-white/40">Signature Mixes / Soft Drinks / Food</p>
              </div>
              <div className="relative z-10 text-3xl font-oswald font-bold">¥700<span className="text-base text-white/40">~</span></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="md:col-span-2">
            <div className="glass-panel p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-1">Opening Hours</h3>
                <p className="text-white/50 text-sm">
                  <span className="text-white font-oswald text-lg">19:00</span>
                  <span className="mx-2 text-white/30">→</span>
                  <span className="text-white font-oswald text-lg">02:00</span>
                  <span className="ml-3 text-[10px] text-white/30 uppercase tracking-widest">Closed on Sundays</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE 2 */}
      <div className="py-4 border-y border-white/5">
        <Marquee speed={25}>
          <span className="text-7xl md:text-9xl font-playfair font-black uppercase text-white/[0.02] flex items-center gap-16">
            <span>ROCK</span>
            <span className="italic text-brand-gold/[0.08]">VINYL</span>
            <span>WHISKY</span>
            <span className="italic text-brand-gold/[0.08]">SOUL</span>
            <span>OFUNA</span>
            <span className="italic text-brand-gold/[0.08]">GROOVE</span>
          </span>
        </Marquee>
      </div>

      {/* EVENTS */}
      <section id="schedule" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold block mb-4">What&apos;s On</span>
                <h2 className="text-5xl md:text-7xl font-playfair font-bold">Events</h2>
              </div>
              <span className="text-brand-gold font-oswald text-2xl tracking-widest">FEB 2026</span>
            </div>
          </ScrollReveal>

          <div className="grid gap-3">
            {[
              { date: "02.14", day: "FRI", title: "VALENTINE ROCK NIGHT", dj: "Resident DJ", badge: "SPECIAL", badgeColor: "bg-brand-red" },
              { date: "02.21", day: "FRI", title: "90s UK ROCK SPECIAL", dj: "Guest DJ Select", badge: "GUEST", badgeColor: "bg-brand-gold text-black" },
              { date: "02.28", day: "SAT", title: "VINYL ONLY SESSION", dj: "BYOR — Bring Your Own Records", badge: "", badgeColor: "" },
            ].map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  data-hover
                  className={cn(
                    "glass-panel p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/[0.04] transition-all duration-500 cursor-pointer",
                    i === 0 && "border-brand-gold/20"
                  )}
                >
                  <div className="flex items-center gap-4 md:w-56">
                    <span className="text-4xl font-oswald font-bold text-brand-gold leading-none">{event.date}</span>
                    <span className="text-[10px] font-bold px-3 py-1.5 bg-white/10 rounded-full uppercase tracking-wider">{event.day}</span>
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-playfair font-bold uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-500">{event.title}</h3>
                      <p className="text-[10px] text-white/30 mt-1.5 uppercase tracking-[0.3em] flex items-center gap-2">
                        <Music2 className="w-3 h-3" /> {event.dj}
                      </p>
                    </div>
                    {event.badge && (
                      <span className={cn("text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest", event.badgeColor)}>{event.badge}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block h-10 w-[1px] bg-white/5" />
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="access" className="pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-32">
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold block mb-4">Find Us</span>
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-[0.9]">Locate<br />Us<span className="text-brand-gold">.</span></h2>
                </div>
                <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                  <p>〒247-0056<br />神奈川県鎌倉市大船 X-X-X</p>
                  <p className="text-brand-gold font-bold text-base tracking-wider">OFUNA RE:ROOM B1F</p>
                  <p className="text-sm italic text-white/30">大船駅から徒歩3分、路地裏の秘密基地。</p>
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/ofuna.reroom/" },
                    { icon: Instagram, href: "https://www.instagram.com/reroomofu7/" },
                    { icon: MapPin, href: "#" },
                  ].map(({ icon: Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" data-hover className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="aspect-video glass-panel overflow-hidden relative group rounded-2xl">
                <div className="absolute inset-0 bg-brand-black/50 z-10 group-hover:bg-brand-black/20 transition-colors duration-700" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.9213!2d139.5312!3d35.3533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzExLjkiTiAxMznCsDMxJzUyLjMiRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                  className="w-full h-full grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="pt-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="font-playfair font-bold text-2xl tracking-tight">OFUNA <span className="text-brand-gold italic">RE:ROOM</span></div>
              <div className="text-[9px] tracking-[0.4em] uppercase text-white/30">© 2026 OFUNA RE:ROOM. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-8 text-[10px] tracking-widest text-white/40 uppercase">
                <Link href="#" data-hover className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" data-hover className="hover:text-brand-gold transition-colors duration-300">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
