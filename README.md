# StarlitMC Website

A responsive Minecraft server landing page for `play.starlitmc.fun`.

## Before deploying
Open `script.js` and replace:
- `STORE_URL = "#"` with your real store URL
- `DISCORD_URL = "#"` with your Discord invite

The live status/player count uses the public MCSRVSTAT API and queries `play.starlitmc.fun`.

## Recommended hosting
Cloudflare Pages is a good fit for this static site. It can serve the apex domain `starlitmc.fun` and supports custom domains.

## Important DNS
Keep your existing Minecraft records for `play.starlitmc.fun`.

The website uses the root domain `starlitmc.fun`, so its DNS record must point to your web host. Do not replace the Minecraft `play` records.
