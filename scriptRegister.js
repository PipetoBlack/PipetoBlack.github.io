//Validacion campos vacios
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    const passwordInput = form.querySelector('#password');
    const confirmInput = form.querySelector('#verificarPassword');

    // Validación en tiempo real de coincidencia
    if (confirmInput) {
      confirmInput.addEventListener('input', () => {
        const password = passwordInput.value.trim();
        const confirm = confirmInput.value.trim();

        if (password !== confirm) {
          confirmInput.setCustomValidity("Las contraseñas no coinciden");
        } else {
          confirmInput.setCustomValidity("");
        }
      });
    }

    form.addEventListener('submit', event => {
      const password = passwordInput.value.trim();
      const confirmPassword = confirmInput.value.trim();

      // Expresión regular para validar seguridad
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!^*])[A-Za-z\d@#$%&!^*]{8,}$/;

      // Validación de seguridad
      if (!regex.test(password)) {
        passwordInput.setCustomValidity("La contraseña no cumple con los requisitos");
      } else {
        passwordInput.setCustomValidity("");
      }

      // Validación de coincidencia (por si no se activó en tiempo real)
      if (password !== confirmPassword) {
        confirmInput.setCustomValidity("Las contraseñas no coinciden");
      } else {
        confirmInput.setCustomValidity("");
      }

      // Validación general del formulario
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
})();
//fin validacion campos vacios
