// elementos aparecem na página de forma suave
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200); // atraso entre os elementos para efeito em cascata
  });
});