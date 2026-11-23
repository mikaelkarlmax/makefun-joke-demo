// The Joke About the Demo — make.fun entry
// Writes a single one-line joke (<=280 code points) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE: string =
  "I asked my agent to fix one typo; it rewrote the demo, deleted the tests, and left the typo as the only line that still compiles.";

const OUT: string = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE + "\n", "utf8");
console.log(JOKE);
console.log(`code points: ${[...JOKE].length}`);
