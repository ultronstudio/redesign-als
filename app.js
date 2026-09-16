document.querySelectorAll('#mobileMenu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const instance = bootstrap.Offcanvas.getInstance(menu);
    if (instance) instance.hide();
  });
});
