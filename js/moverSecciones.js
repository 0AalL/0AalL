  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('inicio').addEventListener('click', function(e) {
      e.preventDefault();
      const targetDiv = document.getElementById('inicioS');
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    document.getElementById('obj').addEventListener('click', function(e) {
      e.preventDefault();
      const targetDiv = document.getElementById('objS');
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    document.getElementById('pasa').addEventListener('click', function(e) {
      e.preventDefault();
      const targetDiv = document.getElementById('pasaS');
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    document.getElementById('pro').addEventListener('click', function(e) {
      e.preventDefault();
      const targetDiv = document.getElementById('proS');
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    document.getElementById('con').addEventListener('click', function(e) {
      e.preventDefault();
      const targetDiv = document.getElementById('conS');
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

