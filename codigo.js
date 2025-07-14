window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btnAtrapar");
  const modal = document.querySelector("#modal");
  const contenedor = document.querySelector(".interactivo");

  if (!btn || !modal || !contenedor) {
    console.warn("Faltan elementos");
    return;
  }

  let animacionActiva = true;

const dejarHuella = () => {
  const huella = document.createElement("img");
  huella.src = "img/huella.png"; // tu imagen
  huella.classList.add("huella");

  const rect = btn.getBoundingClientRect();
  const contRect = contenedor.getBoundingClientRect();

  huella.style.left = `${rect.left - contRect.left}px`;
  huella.style.top = `${rect.top - contRect.top}px`;

  contenedor.appendChild(huella);

  setTimeout(() => {
    huella.style.opacity = 0;
    setTimeout(() => huella.remove(), 1000);
  }, 100);
};

  const moverLento = () => {
    dejarHuella();

    const maxX = contenedor.clientWidth - btn.offsetWidth;
    const maxY = contenedor.clientHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = "absolute";
    btn.style.transition = "all 1s ease";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  };

  const movimiento = setInterval(() => {
    if (animacionActiva) {
      moverLento();
    }
  }, 1300);

  btn.addEventListener("click", () => {
    animacionActiva = false;
    clearInterval(movimiento);
    btn.style.display = "none";
    modal.style.display = "block";
  });
});