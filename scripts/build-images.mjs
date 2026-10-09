// Builds optimized portrait assets from the original photo in the project root.
// mypic.png = high-resolution portrait shot on a pure black background.
// The background is removed with a flood fill from the image edges (so dark hair inside
// the silhouette is kept), then the mask is feathered and applied to the photo.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const SRC = 'mypic.png';
const BG_THRESHOLD = 10; // max channel value still treated as background
mkdirSync(OUT, { recursive: true });

const { data: rgb, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const n = width * height;

const isDark = (p) => Math.max(rgb[p * 3], rgb[p * 3 + 1], rgb[p * 3 + 2]) <= BG_THRESHOLD;
const bg = new Uint8Array(n);
const stack = [];
const seed = (p) => {
  if (!bg[p] && isDark(p)) {
    bg[p] = 1;
    stack.push(p);
  }
};
for (let x = 0; x < width; x++) {
  seed(x);
  seed((height - 1) * width + x);
}
for (let y = 0; y < height; y++) {
  seed(y * width);
  seed(y * width + width - 1);
}
while (stack.length) {
  const p = stack.pop();
  const x = p % width;
  if (x > 0) seed(p - 1);
  if (x < width - 1) seed(p + 1);
  if (p >= width) seed(p - width);
  if (p < n - width) seed(p + width);
}

const mask = Buffer.alloc(n);
for (let i = 0; i < n; i++) mask[i] = bg[i] ? 0 : 255;
const alpha = await sharp(mask, { raw: { width, height, channels: 1 } }).blur(1.4).extractChannel(0).raw().toBuffer();

const rgba = Buffer.alloc(n * 4);
for (let i = 0; i < n; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">SAHIL</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">SOFTWARE ENGINEER • IIT GUWAHATI</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
