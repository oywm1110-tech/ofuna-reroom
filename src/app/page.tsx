"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, ArrowUpRight, Music2, Volume2, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { VinylPlayer } from "@/components/ui/vinyl-player";
import { Waveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-gold selection:text-black">
      <VinylPlayer />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Modern Background with Depth */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-brand-gold uppercase block mb-4">Established in Ofuna</span>
              <h1 className="text-[15vw] md:text-[12vw] font-playfair font-black leading-[0.85] tracking-tighter uppercase">
                Ofuna<br />
                <span className="text-brand-gold italic">Re:Room</span>
              </h1>
              <div className="pt-8 flex items-center justify-center gap-6">
                <div className="h-[1px] w-12 bg-white/20"></div>
                <p className="text-sm md:text-base font-medium tracking-widest text-white/60 uppercase">
                  Authentic Rock & Vinyl Bar
                </p>
                <div className="h-[1px] w-12 bg-white/20"></div>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <Link href="#system" className="group relative px-8 py-4 overflow-hidden rounded-full border border-white/10 glass-panel">
              <span className="relative z-10 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                Explore Menu <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Floating Waveform in Hero */}
        <div className="absolute bottom-12 left-12 h-12 w-32 hidden md:block">
          <Waveform />
        </div>
      </section>

      {/* Bento Grid Concept & System */}
      <section id="system" className="max-w-7xl mx-auto px-6 py-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold">The Experience</h2>
            <p className="max-w-md text-white/50 text-sm leading-relaxed">
              大船の地下に隠された、ロックを愛する大人たちのためのリビングルーム。
              ヴィンテージスピーカーから流れる70年代の鼓動。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Content Box */}
          <div className="md:col-span-2 md:row-span-2 glass-panel p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
            <div className="relative z-10">
              <Volume2 className="w-8 h-8 text-brand-gold mb-8" />
              <h3 className="text-3xl font-playfair font-bold mb-4 italic">Uncompromising Sound</h3>
              <p className="text-white/60 leading-relaxed">
                好きなレコードをリクエストしてください。
                最高品質の音響システムで、アーティストの吐息まで再現します。
              </p>
            </div>
            <div className="relative z-10 pt-12 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold">Sound System / 70s-90s Rock</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Charge Info */}
          <div className="md:col-span-2 glass-panel p-8">
            <div className="flex items-center gap-3 mb-6">
              <Music2 className="w-5 h-5 text-brand-gold" />
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase">Table System</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-white/60">Table Charge</span>
                <span className="text-xl font-oswald text-brand-gold">¥500</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-white/60">Music Request</span>
                <span className="text-xl font-oswald">FREE</span>
              </div>
              <p className="text-[10px] text-white/40 mt-4 italic">* No tax / Service charge included</p>
            </div>
          </div>

          {/* Drink Highlight */}
          <div className="glass-panel p-8 group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-wine opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">WHISKY</h3>
              <p className="text-sm text-white/60">Selected Malts & Bourbon</p>
              <div className="mt-8 text-2xl font-oswald font-bold">¥900~</div>
            </div>
          </div>

          {/* Beer Highlight */}
          <div className="glass-panel p-8 group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">CRAFT BEER</h3>
              <p className="text-sm text-white/60">Heartland & Bass On Tap</p>
              <div className="mt-8 text-2xl font-oswald font-bold">¥800~</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Bento Style List */}
      <section id="schedule" className="bg-neutral-900/40 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-20">
              <h2 className="text-5xl md:text-7xl font-playfair font-bold">Events</h2>
              <span className="text-brand-gold font-oswald text-xl tracking-widest">FEB 2026</span>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {[
              { date: "02.14", day: "FRI", title: "VALENTINE ROCK NIGHT", dj: "Resident DJ", color: "bg-brand-red/10" },
              { date: "02.21", day: "FRI", title: "90s UK ROCK SPECIAL", dj: "Guest DJ Select", color: "bg-brand-gold/10" },
              { date: "02.28", day: "SAT", title: "VINYL ONLY SESSION", dj: "BYOR - Bring Your Own Records", color: "bg-white/5" },
            ].map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={cn(
                  "glass-panel p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:scale-[1.01] transition-transform",
                  i === 0 && "border-brand-gold/20"
                )}>
                  <div className="flex items-center gap-6 md:w-48">
                    <span className="text-3xl font-oswald font-bold text-brand-gold">{event.date}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded uppercase tracking-tighter">{event.day}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-playfair font-bold uppercase tracking-tight group-hover:text-brand-gold transition-colors">{event.title}</h3>
                    <p className="text-xs text-white/40 mt-1 uppercase tracking-widest flex items-center gap-2">
                      <Music2 className="w-3 h-3" /> {event.dj}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block h-8 w-[1px] bg-white/10"></div>
                    <Link href="#" className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                      More Info
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Access & Footer */}
      <footer id="access" className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold">Locate Us.</h2>
                <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                  <p>〒247-0056<br />神奈川県鎌倉市大船 X-X-X</p>
                  <p className="text-brand-gold font-bold">OFUNA RE:ROOM B1F</p>
                  <p className="text-sm italic">大船駅から徒歩3分、路地裏の秘密基地。</p>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/ofuna.reroom/" target="_blank" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/reroomofu7/" target="_blank" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="aspect-video glass-panel overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.9213!2d139.5312!3d35.3533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzExLjkiTiAxMznCsDMxJzUyLjMiRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-playfair font-bold text-xl">OFUNA <span className="text-brand-gold italic">RE:ROOM</span></div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              © 2026 OFUNA RE:ROOM. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] tracking-widest text-white/60 uppercase">
              <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-gold transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
