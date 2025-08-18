// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const btn = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
btn?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Rolamento suave + destaque do link ativo
const links = document.querySelectorAll('.menu__link');
const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));

// Observa qual seção está visível e destaca o link
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector('.menu__link[href="#' + id + '"]');
    if (entry.isIntersecting) {
      document.querySelectorAll('.menu__link').forEach(l => l.classList.remove('is-active'));
      link?.classList.add('is-active');
    }
  });
}, { rootMargin: '-50% 0px -45% 0px', threshold: 0 });

sections.forEach(sec => sec && observer.observe(sec));

// Fecha o menu ao clicar em um link no mobile
links.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));
