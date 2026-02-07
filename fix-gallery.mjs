import fs from "fs";

let c = fs.readFileSync("src/app/page.tsx", "utf8");

const oldGallery = /function Gallery\(\)[\s\S]*?^  \);?\n\}/m;

const newGallery = `function Gallery() {
  const [current, setCurrent] = useState(0);
  const images = [
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", caption: "DJ Night" },
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", caption: "Vinyl Collection" },
    { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop", caption: "Live Performance" },
    { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", caption: "Weekend Vibes" },
    { url: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?q=80&w=800&auto=format&fit=crop", caption: "Sound System" },
  ];
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] relative group cursor-pointer" onClick={next}>
        {images.map((img, i) => (
          <div
            key={i}
            className={"absolute inset-0 transition-all duration-700 " + (i === current ? "opacity-100 scale-100" : "opacity-0 scale-105")}
          >
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
          </div>
        ))}
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-sm font-bold tracking-widest uppercase text-brand-gold">{images[current].caption}</p>
          <p className="text-xs text-white/40 mt-1">{current + 1} / {images.length}</p>
        </div>
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={"rounded-full transition-all h-2 " + (i === current ? "bg-brand-gold w-6" : "bg-white/20 w-2")}
          />
        ))}
      </div>
    </div>
  );
}`;

c = c.replace(oldGallery, newGallery);
fs.writeFileSync("src/app/page.tsx", c, "utf8");
console.log("Gallery fixed!");
