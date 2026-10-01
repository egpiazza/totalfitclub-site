/* ===== DADOS EDITÁVEIS DA ACADEMIA ===== */
const CONFIG = {
  phoneDisplay: "(11) 94256-9062",
  phoneIntl: "5511942569062",
  whatsappMessage: "Olá! Vim pelo site da Total Fit Club e gostaria de mais informações.",
  instagramHandle: "@totalfit.club",
  instagramUrl: "https://www.instagram.com/totalfit.club/",
  address: "Rua João Cordeiro, 145, 2º andar, Quitaúna, Osasco - SP",
  hours: [
    ["Segunda a sexta", "A confirmar"],
    ["Sábado", "A confirmar"],
    ["Domingo e feriados", "A confirmar"]
  ]
};
/* ======================================= */
const wa = "https://wa.me/" + CONFIG.phoneIntl + "?text=" + encodeURIComponent(CONFIG.whatsappMessage);
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa);
document.querySelectorAll("[data-ig]").forEach(a => a.href = CONFIG.instagramUrl);
document.querySelectorAll("[data-phone]").forEach(e => e.textContent = CONFIG.phoneDisplay);
document.querySelectorAll("[data-handle]").forEach(e => e.textContent = CONFIG.instagramHandle);
document.getElementById("map-link").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.address);
const li = ([d, h]) => "<li><span>" + d + "</span><span>" + h + "</span></li>";
document.getElementById("hours-list").innerHTML = CONFIG.hours.map(li).join("");
document.getElementById("foot-hours").innerHTML = CONFIG.hours.map(([d, h]) => "<li>" + d + ": " + h + "</li>").join("");
