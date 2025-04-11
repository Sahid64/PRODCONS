const userIcon = document.getElementById('user-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const logoutBtn = document.getElementById('logout-btn');
const overlay = document.getElementById('overlay');
const logo = document.querySelector('.logo');  // Seleccionamos el logo con la clase '.logo'

// Mostrar barra lateral al hacer clic en el ícono del usuario
userIcon.addEventListener('click', () => {
  sidebar.classList.add('visible');
  overlay.classList.remove('hidden');
  sidebar.setAttribute('aria-hidden', 'false');
  
  // Mover el logo y el ícono de usuario hacia la derecha fuera de la vista
  logo.classList.add('hide-logo-user');
  userIcon.classList.add('hide-logo-user');
});

// Cerrar la barra lateral al hacer clic en el botón de cierre
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('visible');
  overlay.classList.add('hidden');
  sidebar.setAttribute('aria-hidden', 'true');
  
  // Restaurar la posición original del logo y el ícono de usuario
  logo.classList.remove('hide-logo-user');
  userIcon.classList.remove('hide-logo-user');
});

// Cerrar la barra lateral al hacer clic en el overlay (área fuera de la barra lateral)
overlay.addEventListener('click', () => {
  sidebar.classList.remove('visible');
  overlay.classList.add('hidden');
  sidebar.setAttribute('aria-hidden', 'true');
  
  // Restaurar la posición original del logo y el ícono de usuario
  logo.classList.remove('hide-logo-user');
  userIcon.classList.remove('hide-logo-user');
});

// Redirigir al hacer clic en "Cerrar sesión"
logoutBtn.addEventListener('click', () => {
  window.location.href = '/login'; // Redirige a la página de login
});

function updateArticles() {
    const month = document.getElementById("month").value;
    console.log("Actualizar artículos para el mes: " + month);
}

function redirectToPost() {
    location.href = 'pagina1.html'; // Redirige a la página 1
}
