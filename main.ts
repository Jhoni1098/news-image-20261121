// news-image-20261121 — sums up the world news of Saturday 21 November 2026.
// The image is built into this repository as entry.png; this program simply
// copies it to the output directory the harness provides, with no network
// access and no other input, so both runs write identical bytes.
//
// Before copying, the program checks the source really is a PNG of the
// required size (1024x1024), creates the output directory if it is missing,
// and after copying verifies the written bytes match the source exactly.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
const srcPath = new URL("./entry.png", import.meta.url);
const dstPath = join(outDir, "entry.png");

const source = readFileSync(srcPath);
if (!source.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a PNG file");
}
const width = source.readUInt32BE(16);
const height = source.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (source.length > 1048576) {
  throw new Error(`entry.png exceeds 1 MiB (${source.length} bytes)`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, dstPath);

const written = readFileSync(dstPath);
if (!written.equals(source)) {
  throw new Error("written entry.png does not match the source bytes");
}
