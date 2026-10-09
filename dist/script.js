const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileNav.classList.toggle('open', !open);
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const examples = {
  ventas: {
    kicker: 'EJEMPLO DE SOLUCIÓN', title: 'Convierte interés<br>en oportunidades.',
    text: 'Una landing enfocada en explicar, generar confianza y facilitar el contacto, conectada con el flujo comercial de tu equipo.',
    items: ['Landing de conversión', 'Captura organizada de leads', 'Seguimiento automatizado']
  },
  operaciones: {
    kicker: 'EJEMPLO DE SOLUCIÓN', title: 'Elimina tareas<br>que frenan al equipo.',
    text: 'Un flujo que conecta tus herramientas, actualiza información y activa avisos sin depender de procesos manuales.',
    items: ['Integración entre plataformas', 'Alertas y asignaciones', 'Datos siempre actualizados']
  },
  gestion: {
    kicker: 'EJEMPLO DE SOLUCIÓN', title: 'Decide con<br>información clara.',
    text: 'Una herramienta interna para centralizar datos, visualizar avances y mantener el control de la operación.',
    items: ['Paneles personalizados', 'Roles y permisos', 'Reportes accionables']
  }
};
document.querySelectorAll('.solution-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.solution-tabs button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-selected', 'true');
  const data = examples[button.dataset.tab];
  const panel = document.querySelector('.solution-content > div:first-child');
  panel.style.opacity = '0';
  setTimeout(() => {
    panel.innerHTML = `<p class="card-kicker">${data.kicker}</p><h3>${data.title}</h3><p>${data.text}</p><ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    panel.style.opacity = '1';
  }, 160);
}));
document.getElementById('year').textContent = new Date().getFullYear();
