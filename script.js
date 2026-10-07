const hosts = document.getElementById("hosts");
const bars = document.getElementById("bars");

// Static project snapshot — no external API/data is used.
const holderCount = 0;
hosts.textContent = String(holderCount).padStart(6, "0");

function renderBars(){
  const active = 7;
  bars.textContent = "█".repeat(active) + "░".repeat(7 - active);
}
renderBars();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const el = document.querySelector(a.getAttribute("href"));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth"});
    }
  });
});
