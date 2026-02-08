import fs from "fs";

let c = fs.readFileSync("src/app/page.tsx", "utf8");

c = c.replace(/\u795E\u5948\u5DDD\u770C\u938C\u5009\u5E02\u5927\u8239 X-X-X/g, "\u795E\u5948\u5DDD\u770C\u938C\u5009\u5E02\u5927\u8239 1-20-5 \u30A8\u30B9\u30DD\u30EF\u30FC\u30EB7, 4F");

c = c.replace(/https:\/\/maps\.google\.com\/\?q=35\.3533,139\.5312/g, "https://map.yahoo.co.jp/v3/place/LoTzc64j59Q");

c = c.replace(/src="https:\/\/www\.google\.com\/maps\/embed\?pb=![^"]*"/g, 'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.9!2d139.5335!3d35.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184e1c1b5b0f07%3A0x0!2z5aSn6Ii5MS0yMC01!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"');

c = c.replace(/\u5927\u8239\u99C5\u304B\u3089\u5F92\u6B693\u5206\u3001\u8DEF\u5730\u88CF\u306E\u79D8\u5BC6\u57FA\u5730\u3002/g, "\u5927\u8239\u99C5\u6771\u53E3\u304B\u3089\u5F92\u6B693\u5206");

c = c.replace(/\u5927\u8239\u99C5\u304B\u3089\u306E\u30EB\u30FC\u30C8\u3092\u78BA\u8A8D/g, "\u5730\u56F3\u30A2\u30D7\u30EA\u3067\u958B\u304F");

fs.writeFileSync("src/app/page.tsx", c, "utf8");
console.log("Address and map updated!");
