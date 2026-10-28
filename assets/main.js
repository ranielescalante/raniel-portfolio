(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-navigation');
  if (!button || !nav) return;
  function closeMenu() {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Open navigation menu');
    button.textContent = '☰';
  }
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    button.textContent = open ? '×' : '☰';
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
})();
