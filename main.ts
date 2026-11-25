import * as fs from "node:fs";
import * as path from "node:path";

// One original office-life joke, a single line under 200 characters.
// It is written verbatim to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
const JOKE =
  "My out-of-office reply is the only coworker who answers emails faster than me, and it doesn't even work here.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JOKE, "utf8");
