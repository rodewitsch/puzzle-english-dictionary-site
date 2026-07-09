// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Go to top button
const goToTop = document.getElementById('goToTop');
window.addEventListener('scroll', () => {
  goToTop.classList.toggle('visible', window.scrollY > 400);
});

goToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Browser detection — redirect install links for Firefox
const FIREFOX_URL = 'https://addons.mozilla.org/en-CA/firefox/addon/puzzle-english-dict-unofficial/';
const CHROME_URL = 'https://chromewebstore.google.com/detail/puzzle-english-dictionary/gjaleekpebchkichhnhjollkhhkhpcgp';

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

if (isFirefox) {
  const links = [
    document.getElementById('installNav'),
    document.getElementById('installHero'),
    document.getElementById('installCta')
  ];

  links.forEach(link => {
    if (link) {
      link.href = FIREFOX_URL;
    }
  });

  const badge = document.getElementById('heroBadgeText');
  if (badge) {
    badge.textContent = 'Доступно в Firefox Add-ons';
  }

  const ctaDesc = document.getElementById('ctaDescription');
  if (ctaDesc) {
    ctaDesc.textContent = 'Расширение полностью бесплатно. Установите его из Firefox Add-ons и начните пополнять свой словарный запас.';
  }

  const ctaBtnText = document.getElementById('ctaButtonText');
  if (ctaBtnText) {
    ctaBtnText.textContent = 'Установить из Firefox Add-ons';
  }

  document.title = 'Puzzle English Dictionary — Расширение для Firefox';
}
