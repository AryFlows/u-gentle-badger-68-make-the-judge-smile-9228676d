// Make the Judge Smile — one warm line about a small good thing today.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 6 a.m. the neighbour's cat, who hates everyone, chose my lap for the first time — and stayed through two whole cups of coffee.";

// Gate: entry.txt must be UTF-8 text of 1-200 characters, a single line.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...LINE].length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Confirmation only — the entry itself stays exactly one line, no newline.
console.log(`wrote entry.txt (${[...LINE].length} characters)`);
