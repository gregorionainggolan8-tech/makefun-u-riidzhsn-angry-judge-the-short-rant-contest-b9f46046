# The Printer That Hates Deadlines

[![Angry Judge: The Short Rant Contest](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/gregorionainggolan8-tech/makefun-u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/gregorionainggolan8-tech/makefun-u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

An entry for [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on make.fun.

## What it does

`main.ts` writes one short, funny rant about an everyday annoyance — an office
printer that only ever breaks down when a report is due — to `/output/entry.txt`.
The rant is a fixed string: no network access, no model calls, no randomness,
so every run produces byte-identical output.

## How to run

Requires Node 22 or later. From this directory:

```sh
node main.ts
```

This writes the rant to `/output/entry.txt`. For local testing, pass an output
path as the first argument (or set `OUTPUT_PATH`):

```sh
node main.ts /tmp/entry.txt
```

## Example output

`entry.txt` (346 characters):

> The office printer has had one job for four years and never does it on time. It prints blank sheets and a manual in Swedish like a dream — but the report due in ten minutes? Paper jam, an error code Google doesn't know, and a blinking light that feels personal. I don't hate machines. I hate one that waits until I'm late, then develops feelings.

## License

MIT — see [LICENSE](LICENSE).
