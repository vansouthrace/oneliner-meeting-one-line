// The Meeting That Should Have Been One Line
// Writes the single sentence that could have replaced an entire pointless
// meeting to /output/entry.txt.
// Bounty: https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The decision was made before this meeting; this meeting is just the part where we pretend it wasn't.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.trim().split(/\s+/).length < 2) {
  throw new Error("Entry must be a sentence, not a single word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
