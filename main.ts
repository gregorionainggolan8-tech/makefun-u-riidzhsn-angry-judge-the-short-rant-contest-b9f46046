// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, funny rant about an everyday annoyance to
// /output/entry.txt (the grader's output path). For local testing the
// output path can be overridden with a first argument or OUTPUT_PATH.
// No network access, no model calls, no randomness: the output is a
// fixed string, so every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const RANT =
  "The office printer has had one job for four years and never does it on time. " +
  "It prints blank sheets and a manual in Swedish like a dream — " +
  "but the report due in ten minutes? Paper jam, an error code Google doesn't know, " +
  "and a blinking light that feels personal. I don't hate machines. I hate one " +
  "that waits until I'm late, then develops feelings.";

const outPath =
  process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, RANT, "utf8");
console.log(`Wrote ${[...RANT].length} characters to ${outPath}`);
