// ==========================Активная страница=====================================================
const navLinks = document.querySelectorAll('.nav_list');
const mobNavLinks = document.querySelectorAll('.mobile-nav-list');

navLinks.forEach(link => {
if (link.href === window.location.href) {
link.classList.add('active');
} else {
link.classList.remove('active');
}
});

mobNavLinks.forEach(link => {
  if (link.href === window.location.href) {
  link.classList.add('active');
  } else {
  link.classList.remove('active');
  }
  });

// ====================================Мобильное меню====================================

const menuButton = document.getElementById('menu');
const modal = document.getElementById('modal');
const backdrop = document.getElementById('backdrop');

menuButton.addEventListener('click', function() {
  modal.classList.add('open');
  backdrop.style.display = 'block';
});

backdrop.addEventListener('click', function(event) {
  if (event.target === backdrop) {
    modal.classList.remove('open');
    backdrop.style.display = 'none';
  }
});

document.addEventListener('click', function(event) {
  if (!modal.contains(event.target) && event.target !== menuButton) {
    modal.classList.remove('open');
    backdrop.style.display = 'none';
  }
});

// =========================Переключатель темы======================================================
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const logoText = document.querySelector('.logo_text');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  body.classList.toggle('white');
  if (body.classList.contains('white')) {
    document.documentElement.style.setProperty('--primary-text-color', '#282828');
  } else {
    document.documentElement.style.setProperty('--primary-text-color', '#ffffff');
  }
});







