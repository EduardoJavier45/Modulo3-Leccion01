// ============================================
// JAVASCRIPT PRINCIPAL - CSS METHODOLOGIES
// ============================================

// Ejecutar código cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // 1. NAVBAR SCROLL EFFECT
  // ============================================

  // Obtener elemento del navbar
  const navbar = document.querySelector(".navbar");

  // Agregar evento scroll a la ventana
  window.addEventListener("scroll", function () {
    // Si se desplazó más de 50px, agregar sombra
    if (window.scrollY > 50) {
      navbar.classList.add("shadow");
    } else {
      // Si está arriba, remover sombra
      navbar.classList.remove("shadow");
    }
  });

  // ============================================
  // 2. SMOOTH SCROLL NAVIGATION
  // ============================================

  // Obtener todos los links de navegación
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  // Iterar sobre cada link
  navLinks.forEach((link) => {
    // Agregar evento click a cada link
    link.addEventListener("click", function (e) {
      // Prevenir comportamiento por defecto
      e.preventDefault();

      // Obtener el ID de destino del atributo href
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      // Buscar el elemento con ese ID
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calcular la posición del scroll
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        // Hacer scroll suave a esa posición
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Cerrar menú móvil si está abierto
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          // Usar Bootstrap Collapse API
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          // Cerrar el menú
          bsCollapse.hide();
        }
      }
    });
  });

  // ============================================
  // 3. ACTIVE NAVIGATION HIGHLIGHT
  // ============================================

  // Obtener todas las secciones con ID
  const sections = document.querySelectorAll("section[id]");

  // Agregar evento scroll para actualizar link activo
  window.addEventListener("scroll", function () {
    // Variable para guardar sección actual
    let current = "";

    // Recorrer todas las secciones
    sections.forEach((section) => {
      // Obtener posición del top de la sección
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Si hemos pasado esta sección, es la actual
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    // Actualizar clase active en navlinks
    navLinks.forEach((link) => {
      // Remover clase active de todos
      link.classList.remove("active");
      // Agregar active al link correspondiente
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ============================================
  // 4. FORM VALIDATION
  // ============================================

  // Obtener formulario de contacto si existe
  const contactForm = document.querySelector("#contact form");

  if (contactForm) {
    // Agregar evento submit al formulario
    contactForm.addEventListener("submit", function (e) {
      // Prevenir envío por defecto
      e.preventDefault();

      // Obtener valores de los campos
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const asunto = document.getElementById("asunto").value;
      const mensaje = document.getElementById("mensaje").value.trim();

      // Validar que todos los campos estén completos
      if (!nombre || !email || asunto === "Selecciona un tema" || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
      }

      // Expresión regular para validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
      }

      // Si todo es válido, simular envío exitoso
      alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`);

      // Limpiar formulario
      contactForm.reset();
    });
  }

  // ============================================
  // 5. TOOLTIP INITIALIZATION
  // ============================================

  // Inicializar tooltips de Bootstrap si existen
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  // Crear instancias de tooltips
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // ============================================
  // 6. SCROLL TO TOP BUTTON
  // ============================================

  // Crear botón scroll to top dinámicamente
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  document.body.appendChild(scrollToTopBtn);

  // Evento scroll para mostrar/ocultar botón
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Evento click en botón scroll to top
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ============================================
  // 7. CONSOLE MESSAGE
  // ============================================

  // Mensaje en consola para desarrolladores
  console.log(
    "%c🎓 CSS Methodologies - Módulo 2",
    "color: #0d6efd; font-size: 20px; font-weight: bold;"
  );
  console.log(
    "%cBEM | OOCSS | SMACSS | Buenas Prácticas",
    "color: #6c757d; font-size: 14px;"
  );
  console.log(
    "%c⚡ Developed by Eduardo Javier",
    "color: #198754; font-size: 12px;"
  );
});

// ============================================
// FIN DEL ARCHIVO
// ============================================
