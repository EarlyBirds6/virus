const hosts = document.getElementById("hosts");
const bars = document.getElementById("bars");

let n = 0;
const target = 0;
function renderBars(){
  const active = 7;
  bars.textContent = "█".repeat(active) + "░".repeat(7);
}
renderBars();

setInterval(() => {
  // Placeholder UI: no external data is requested or used.
  // It stays deliberately classified until the real launch data exists.
  hosts.textContent = n === 0 ? "000000" : String(n).padStart(6,"0");
}, 1000);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const el = document.querySelector(a.getAttribute("href"));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth"});
    }
  });
});
