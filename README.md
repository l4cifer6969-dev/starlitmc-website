# Starlit MC Website

A responsive Minecraft server landing page for `play.starlitmc.fun`.

## Before deploying
The Discord button is already configured for `https://discord.gg/starlit`.

The store is currently set to **Coming Soon**. When you have a store URL, set `STORE_URL` in `script.js` to that URL.

The live status/player count uses the public MCSRVSTAT API and queries `play.starlitmc.fun`.

## Recommended hosting
Cloudflare Pages is a good fit for this static site. It can serve the apex domain `starlitmc.fun` and supports custom domains.

## Important DNS
Keep your existing Minecraft records for `play.starlitmc.fun`.

The website uses the root domain `starlitmc.fun`, so its DNS record must point to your web host. Do not replace the Minecraft `play` records.


## New sections
- Server Rules
- Staff
- Voting (Coming Soon)
- Discord button configured for `https://discord.gg/starlit`
- Store button configured as Coming Soon

You can replace the starter rules and staff names in `index.html` whenever you have your official information.
