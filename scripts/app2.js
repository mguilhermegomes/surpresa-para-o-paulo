document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // 10% visível na tela já ativa a animação
  });

  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));
});
