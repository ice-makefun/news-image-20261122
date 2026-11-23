// Sunday 22 November 2026 Front Page — a make.fun news-image entry.
//
// The finished front page is frontpage.png beside this file (1024x1024,
// drawn programmatically). This program copies it to the output directory
// as entry.png, after checking that it really is the PNG it expects.
// It writes the same bytes on every run: no network, no clock, no random.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const source = new URL('./frontpage.png', import.meta.url);
const bytes = readFileSync(source);

if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('frontpage.png is not a PNG file');
}
if (bytes.readUInt32BE(16) !== 1024 || bytes.readUInt32BE(20) !== 1024) {
  throw new Error('frontpage.png is not 1024x1024');
}
if (bytes.length > 1024 * 1024) {
  throw new Error('frontpage.png is over the 1 MiB cap');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), bytes);
