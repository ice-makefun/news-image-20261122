# Sunday 22 November 2026 Front Page

[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/ice-makefun/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/ice-makefun/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

One image that sums up the world's news of Sunday 22 November 2026, drawn
as a newspaper front page. The program copies the finished image to the
output directory; run it twice and both runs write the same bytes.

## The day's stories

1. **Climate** — COP31 collapses in Antalya: the EU, Britain and some 130
   allies reject the Antalya Pact after 44 hours of overtime; the final
   text never names fossil fuels. Longest COP ever; first collapse since
   Copenhagen in 2009.
2. **Ukraine** — A Russian drone hits a five-storey block in Dymer, north
   of Kyiv: 4 killed, 14 missing; a boy of 7 is pulled alive from the
   rubble. 186 drones fired overnight; 161 downed.
3. **Libya** — The Russian corvette Merkury sinks in Benghazi after a
   suspected Ukrainian sea-drone strike; a Ka-27 helicopter is destroyed
   with it.
4. **Hormuz** — Iran says two supertankers hit mines east of the strait;
   Trump says he is inclined to strike Iran again after the New Year if
   talks fail.
5. **Indonesia** — Fire rips through a candy factory in Cikande, Banten:
   3 killed, 36 missing, survivors pulled from the wreckage on Sunday.

Around the world: a Delta systems outage delays 1,600+ flights; Democrats
clinch 258 House seats, the largest majority since 1992; a boat capsizes
in Nigeria on the way to a funeral, at least 24 dead; settlers torch 12
vehicles and homes in the West Bank; China eases margin-trading rules;
a Thai court upholds an opposition MP's royal-defamation conviction.

## How it is made

`work/compose.py` draws `frontpage.png` (1024×1024, under 1 MiB) with PIL
and the system DejaVu fonts — every pixel is drawn programmatically, no
photograph or downloaded image. `main.ts` (Node 22) copies that file to
`$MAKEFUN_OUTPUT_DIR/entry.png` after verifying its PNG signature and
dimensions.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
