// MENÚ MÓVIL: muestra u oculta los enlaces de navegación.
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Cierra el menú cuando el usuario selecciona una sección.
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// FORMULARIO DE DEMOSTRACIÓN: valida los campos en el navegador.
// Para recibir solicitudes reales, conecta este formulario a un backend.
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const nombre = formData.get("nombre");

  formMessage.textContent = `¡Gracias, ${nombre}! La demostración del formulario funcionó. Aún falta conectarlo para recibir datos.`;
  contactForm.reset();
});

// Actualiza automáticamente el año del pie de página.
document.querySelector("#year").textContent = new Date().getFullYear();
