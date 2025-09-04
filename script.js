// FORMULARIO
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
document.getElementById('formRecuperar').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    document.getElementById('mensajeRecuperacion').classList.remove('d-none');
    form.classList.add('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});

