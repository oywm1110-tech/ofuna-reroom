import fs from "fs";

let c = fs.readFileSync("src/app/page.tsx", "utf8");

// 1. セクション間の余白を縮小（py-32 → レスポンシブ対応）
c = c.replace(/className="max-w-7xl mx-auto px-6 py-32"/g, 'className="max-w-7xl mx-auto px-6 py-16 md:py-32"');
c = c.replace(/className="py-32 border-y border-white\/5"/g, 'className="py-16 md:py-32 border-y border-white/5"');
c = c.replace(/className="py-32">/g, 'className="py-16 md:py-32">');
c = c.replace(/className="py-32 border-t border-white\/5"/g, 'className="py-16 md:py-32 border-t border-white/5"');

// 2. フッターの余白縮小
c = c.replace(/className="pt-32 pb-12 border-t border-white\/5"/g, 'className="pt-16 md:pt-32 pb-12 border-t border-white/5"');

// 3. セクション見出しの下マージン縮小
c = c.replace(/gap-8 mb-20">/g, 'gap-6 mb-10 md:mb-20">');

// 4. Bentoカードの最小高さをモバイルで縮小
c = c.replace(/min-h-\[400px\]/g, 'min-h-[280px] md:min-h-[400px]');
c = c.replace(/min-h-\[200px\]/g, 'min-h-[150px] md:min-h-[200px]');

// 5. Stats セクションの余白縮小
c = c.replace(/className="max-w-7xl mx-auto px-6 py-20"/g, 'className="max-w-7xl mx-auto px-6 py-10 md:py-20"');

// 6. マーキーの余白縮小
c = c.replace(/className="py-6 border-y border-white\/5 bg-brand-black"/g, 'className="py-3 md:py-6 border-y border-white/5 bg-brand-black"');
c = c.replace(/className="py-4 border-y border-white\/5"/g, 'className="py-2 md:py-4 border-y border-white/5"');

// 7. gap-16 md:gap-20 mb-20 を縮小
c = c.replace(/gap-16 md:gap-20 mb-20/g, 'gap-10 md:gap-20 mb-10 md:mb-20');

// 8. mb-32 を縮小
c = c.replace(/mb-20">\n/g, 'mb-10 md:mb-20">\n');

// 9. The Experience の説明テキストを変更
c = c.replace(
  /\u5927\u8239\u306E\u5730\u4E0B\u306B\u96A0\u3055\u308C\u305F\u3001\u30ED\u30C3\u30AF\u3092\u611B\u3059\u308B\u5927\u4EBA\u305F\u3061\u306E\u305F\u3081\u306E\u30EA\u30D3\u30F3\u30B0\u30EB\u30FC\u30E0\u3002\u30F4\u30A3\u30F3\u30C6\u30FC\u30B8\u30B9\u30D4\u30FC\u30AB\u30FC\u304B\u3089\u6D41\u308C\u308B70\u5E74\u4EE3\u306E\u9F13\u52D5\u3092\u611F\u3058\u3066\u304F\u3060\u3055\u3044\u3002/g,
  "\u30EC\u30B3\u30FC\u30C9\u3068\u30A6\u30A3\u30B9\u30AD\u30FC\u3002\u6700\u9AD8\u306E\u97F3\u3068\u9152\u3092\u3001\u5927\u8239\u306E\u5730\u4E0B\u3067\u3002"
);

// 10. space-y-10 を縮小
c = c.replace(/className="space-y-10">/g, 'className="space-y-6 md:space-y-10">');

fs.writeFileSync("src/app/page.tsx", c, "utf8");
console.log("Mobile spacing + text updated!");
