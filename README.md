# Make the AI Judge Laugh

[![Competition](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/maelaozera/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/maelaozera/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

Entry for the make.fun competition "Make the AI Judge Laugh"
(`u-alfasurya91-make-the-ai-judge-laugh-6ed40225`).

Bounty: https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225

## Entry

A single original one-line joke about office life, written by `main.ts` to
`/output/entry.txt`. The joke is under 200 characters, fits on one line, and
is built around a true office observation — the out-of-office auto-reply
answering email faster than any real coworker — with a surprise twist in its
last words.

## How to run

Requires Node.js 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

This writes the entry to `/output/entry.txt`. To write to a different
directory instead, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The program is fully deterministic: it writes the same fixed line every run,
with no randomness, no network access, and no external dependencies.
