const SERVER = "play.starlitmc.fun";
const API = `https://api.mcsrvstat.us/3/${SERVER}`;

// Replace these two URLs when your real links are ready.
const STORE_URL = "store";
const DISCORD_URL = "https://www.discord.gg/starlittt";

document.getElementById("storeLink").href = STORE_URL;
document.getElementById("discordLink").href = DISCORD_URL;

function setStatus(online, players, max, version) {
  const status = document.getElementById("serverStatus");
  const heroStatus = document.getElementById("heroStatus");
  const heroPlayers = document.getElementById("heroPlayers");
  const playerCount = document.getElementById("playerCount");
  const serverVersion = document.getElementById("serverVersion");

  status.textContent = online ? "Online" : "Offline";
  status.style.color = online ? "#62e89b" : "#ff6b7d";
  heroStatus.innerHTML = `<span style="background:${online ? "#62e89b" : "#ff6b7d"}"></span> ${online ? "Online now" : "Offline"}`;
  heroPlayers.textContent = online ? players : "0";
  playerCount.textContent = online ? `${players} / ${max}` : "0 / 0";
  serverVersion.textContent = online ? (version || "Online") : "Offline";
}

async function fetchStatus() {
  const status = document.getElementById("serverStatus");
  status.textContent = "Checking...";
  try {
    const response = await fetch(API, { cache: "no-store" });
    const data = await response.json();
    const online = data.online === true;
    const players = data.players?.online ?? 0;
    const max = data.players?.max ?? 0;
    const version = Array.isArray(data.version) ? data.version.join(", ") : (data.version || "Unknown");
    setStatus(online, players, max, version);
    document.getElementById("lastUpdated").textContent =
      `Last checked: ${new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})} · status may be cached for a few minutes.`;
  } catch (e) {
    setStatus(false, 0, 0, "Unavailable");
    document.getElementById("lastUpdated").textContent = "Unable to reach the status service right now.";
  }
}

async function copyIp() {
  try {
    await navigator.clipboard.writeText(SERVER);
    document.querySelectorAll("#copyIp, #copyHeroIp").forEach(btn => {
      const old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => btn.textContent = old, 1400);
    });
  } catch {
    alert(`Server IP: ${SERVER}`);
  }
}

document.getElementById("copyIp").addEventListener("click", copyIp);
document.getElementById("copyHeroIp").addEventListener("click", copyIp);
document.getElementById("refreshStatus").addEventListener("click", fetchStatus);

fetchStatus();
setInterval(fetchStatus, 60000);
