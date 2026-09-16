// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-scroll offset fix for sticky header on anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var id = this.getAttribute('href').slice(1);
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    var headerHeight = document.querySelector('.site-header').offsetHeight;
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});
