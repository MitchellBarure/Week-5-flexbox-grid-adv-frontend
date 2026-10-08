// Sidebar collapse/expand: flip aria-expanded, the CSS handles the rest
document.querySelectorAll('.sidebar-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });
});
