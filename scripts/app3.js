let isMouseDown = false;
let lastEffectTime = 0;
const throttleDelay = 60;

let lastX = 0;
let lastY = 0;

document.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  lastX = e.pageX;
  lastY = e.pageY;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    const now = Date.now();
    if (now - lastEffectTime > throttleDelay) {
      const dx = e.pageX - lastX;
      const dy = e.pageY - lastY;

      triggerEffect(e.pageX, e.pageY, dx, dy);

      lastEffectTime = now;
      lastX = e.pageX;
      lastY = e.pageY;
    }
  }
});

document.addEventListener("click", (e) => {
  triggerEffect(e.pageX, e.pageY, 0, -100);
});

function triggerEffect(x, y, dx, dy) {
  const quantity = 8;
  for (let i = 0; i < quantity; i++) {
    createHeartWithImage(x, y, dx, dy);
  }
}

function createHeartWithImage(x, y, dx, dy) {
  const container = document.createElement("div");
  container.classList.add("heart-container");
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;

  const magnitude = Math.sqrt(dx * dx + dy * dy) || 1;
  const directionX = dx / magnitude;
  const directionY = dy / magnitude;

  const randomOffset = (val) => Math.random() * val - val / 2;

  const moveX = directionX * 120 + randomOffset(100);
  const moveY = directionY * 120 + randomOffset(100);

  const scale = (Math.random() * 0.8 + 0.8).toFixed(2); // 0.8 – 1.6
  const rotate = `${Math.floor(Math.random() * 360 - 180)}deg`;
  const opacity = (Math.random() * 0.4 + 0.6).toFixed(2); // 0.6 – 1.0

  container.style.setProperty(
    "--transform-end",
    `translate(${moveX}px, ${moveY}px) scale(${scale}) rotate(${rotate})`
  );
  container.style.setProperty("--scale", scale);
  container.style.setProperty(
    "--rotate",
    `${Math.floor(Math.random() * 360 - 180)}deg`
  );
  container.style.setProperty("--opacity", opacity);

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  const images = ["assets/ceara.png", "assets/paulo.jpg"];

  const img = document.createElement("img");
  img.classList.add("icon");
  img.src = images[Math.floor(Math.random() * images.length)];

  if (Math.random() > 0.5) {
    container.appendChild(heart);
    container.appendChild(img);
  } else {
    container.appendChild(img);
    container.appendChild(heart);
  }

  document.body.appendChild(container);

  setTimeout(() => {
    container.remove();
  }, 1600);
}

// tocar a música
const button = document.getElementById("tocar_musica");
const audio = document.getElementById("musica");

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
window.addEventListener("load", () => {
  const elements = document.querySelectorAll("body");
  elements.forEach((el) => el.classList.add("visible"));
});
