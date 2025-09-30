
// Menu (protegido si no existe en esta página)
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

// Intersection Observer para animar la sección al hacer scroll (si existe)
    const section = document.getElementById('elegirnos');
    if (section) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('show');
          }
        });
      }, { threshold: 0.2 });
      sectionObserver.observe(section);
    }

    //MENU HAMBURGUESA
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      // actualizar atributo accesible
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // cerrar el menú al hacer clic en un enlace (en móvil)
  if (menu) {
    document.querySelectorAll("#navbar-menu a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 800 && menu.classList.contains("open")) {
          menu.classList.remove("open");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // si el usuario redimensiona a desktop, asegurar que quede visible
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menu && toggle) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

//Animación cards ¿Qué aprenderás?
  document.addEventListener('DOMContentLoaded', function () {
    // Toggle flip en touch (solo en pantallas táctiles/móviles)
    const tarjetas = document.querySelectorAll('.caja');
    tarjetas.forEach(t => {
      t.addEventListener('click', function (e) {
        // Si es móvil/pequeña pantalla, alterna la clase
        if (window.innerWidth <= 900) {
          this.classList.toggle('is-flipped');
        }
      });
    });

    // Opcional: cerrar otras tarjetas al tocar una (descomentar si quieres)
    /*
    tarjetas.forEach(t => {
      t.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
          tarjetas.forEach(x => { if (x !== this) x.classList.remove('is-flipped'); });
          this.classList.toggle('is-flipped');
        }
      });
    });
    */
  });


  /*Cristian*/
  // DROPDOWN MENU (mobile)
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 800) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});

// SMOOTH SCROLL para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#' && href !== '#contacto') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ANIMACIÓN DE APARICIÓN AL HACER SCROLL
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observar elementos con animación
document.querySelectorAll('.programa-card, .card, .benefit-card').forEach(el => {
  observer.observe(el);
});