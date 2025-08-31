// tocar a música
const audio = document.getElementById("hino-audio");
const button = document.getElementById("hino-ouvir");

// Clique simples → Toca
button.addEventListener("click", () => {
  // Só dá play se o áudio estiver pausado
  if (audio.paused) {
    audio.play().catch((error) => {
      console.error("Erro ao tentar tocar a música:", error);
    });
  }
});

// Clique duplo → Pausa
button.addEventListener("dblclick", () => {
  if (!audio.paused) {
    audio.pause();
  }
});

// elementos aparecem na página de forma suave
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200); // atraso entre os elementos para efeito em cascata
  });
});
