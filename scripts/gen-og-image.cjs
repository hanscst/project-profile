// Generates a 1200x630 RGB PNG (dark slate -> teal gradient + glows) with zero deps.
const zlib = require('zlib');
const fs = require('fs');

const W = 1200, H = 630;

// ---- CRC32 (PNG chunk checksums) ----
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

// ---- Pixel generation ----
// Base vertical gradient: #0b1220 (top) -> #022c22 (bottom)
function lerp(a, b, t) { return Math.round(a + (b - a) * t); }
function mix(c1, c2, t) {
  return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
}
function addGlow(base, cx, cy, radius, color, strength) {
  return (x, y) => {
    const dx = x - cx, dy = y - cy;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d > radius) return base(x, y);
    const t = (1 - d / radius) * strength;
    const p = mix(base(x, y), color, t);
    const gx = ((x + y) % 70);
    const stripe = gx < 7 ? 0.92 : 1;
    return [p[0] * stripe, p[1] * stripe, p[2] * stripe];
  };
}

const top = [11, 18, 32];        // #0b1220
const bottom = [2, 26, 18];      // #021c12
const teal = [45, 212, 191];     // #2dd4bf
const emerald = [16, 185, 129];  // #10b981

const render = addGlow(addGlow(addGlow(
  (x, y) => mix(top, bottom, y / H),
  320, 160, 520, teal, 0.16
), 980, 520, 460, emerald, 0.12), 1100, 90, 300, [56, 189, 248], 0.10);

const raw = Buffer.alloc(H * (1 + W * 3));
for (let y = 0; y < H; y++) {
  const rowStart = y * (1 + W * 3);
  raw[rowStart] = 0; // filter: none
  for (let x = 0; x < W; x++) {
    const [r, g, b] = render(x, y);
    const i = rowStart + 1 + x * 3;
    raw[i] = r; raw[i + 1] = g; raw[i + 2] = b;
  }
}

// ---- PNG assembly ----
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;  // bit depth
ihdr[9] = 2;  // color type RGB
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // interlace

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

fs.writeFileSync('public/og-image.png', png);
console.log('wrote public/og-image.png', png.length, 'bytes');