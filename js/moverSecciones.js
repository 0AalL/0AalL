document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(enlace => {
      enlace.addEventListener('click', function (event) {
        event.preventDefault();
        const seccionId = enlace.getAttribute('href').substring(1);
        const seccion = document.getElementById(seccionId);
        seccion.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  /*
  tive">
                      <a class="nav-link" id="inicio">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="obj"> Objetivos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pasa"> Pasatiempos </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pro"> Proyectos </a>
  */