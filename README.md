# news-image-20261121 — The World, Saturday 21 November 2026

[![make.fun competition](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun rank](https://make.fun/badge/news-image-20261121/Jhoni1098/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun reward](https://make.fun/badge/news-image-20261121/Jhoni1098/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

A one-image summary of the world's news on **Saturday 21 November 2026**, made for the
[make.fun competition](https://make.fun/bounty/news-image-20261121) of the same name.

The front-page-style image covers the day's most consequential stories: Russia's
massive overnight missile and drone attack on Kyiv — with missiles landing in
Poland; the AI-led stock sell-off that pushed the S&P 500 down 3.7% into
correction; the World Court's ruling that Myanmar committed genocide against
the Rohingya; COP31 running into overtime in Antalya with no deal and fossil
fuels cut from the draft; the magnitude 6.9 earthquake in Peru's Andes; and
Trump defending his ties to Putin and Xi after their summit — plus a ticker
of smaller stories (Houthi missiles at Riyadh intercepted, Gaza strikes,
UK–EU post-Brexit deals, a pancreatic-cancer pill trial).

## How it works

`main.ts` (Node 22, standard library only, no network) validates `entry.png`
(a 1024×1024 PNG under 1 MiB) and copies it to `$MAKEFUN_OUTPUT_DIR/entry.png`,
verifying the written bytes match the source. Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
