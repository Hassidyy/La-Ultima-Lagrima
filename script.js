/* Video audiovisual */

document.getElementById('ver-btn').addEventListener('click', () => {
  document.getElementById('seccion-video').style.display = 'flex';
});

document.getElementById('cerrar-video').addEventListener('click', () => {
  document.getElementById('seccion-video').style.display = 'none';
});

document.getElementById('verVideoBtn').addEventListener('click', () => {
  document.getElementById('seccion-video').style.display = 'flex';
  window.scrollTo({
    top: document.getElementById('seccion-video').offsetTop,
    behavior: 'smooth'
  });
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const link = this.querySelector('a').getAttribute('href');
    
    if (link === '#reparto') {
      document.querySelector(link).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.href = link;
    }
  });
});

// Menú hamburguesa toggle
document.getElementById('hamburguesa-btn').addEventListener('click', () => {
  const menuMovil = document.getElementById('menu-movil');
  const visible = menuMovil.style.display === 'flex';
  menuMovil.style.display = visible ? 'none' : 'flex';
});

// Menú hamburguesa
const toggleMenuBtn = document.getElementById('toggle-menu');
const opcionesMenu = document.getElementById('opciones-hamburguesa');

toggleMenuBtn.addEventListener('click', () => {
  opcionesMenu.classList.toggle('activo');
});

/* Página proyecto */

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const link = item.getAttribute('data-link');
    if (link) window.location.href = link;
  });
});

const gallery = document.getElementById('gallery');
const scrollAmount = 320;

function scrollGallery(direction) {
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}



/* PRODUCTORA */

const sections = document.querySelectorAll('.content-section');
const buttons = document.querySelectorAll('.menu-btn');
let currentIndex = 0;
let intervalId;

function showSection(index) {
  sections.forEach((section, i) => {
    section.classList.toggle('active', i === index);
  });
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showSection(index);
    resetInterval();
  });
});

function autoNext() {
  currentIndex = (currentIndex + 1) % sections.length;
  showSection(currentIndex);
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(autoNext, 5000);
}

// Iniciar automático
intervalId = setInterval(autoNext, 5000);