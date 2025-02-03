document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('service_yglpe9q', 'template_p7oi11c', this)
    .then(function () {
      alert('Missatge enviat correctament!');
      document.getElementById('contact-form').reset();
    }, function (error) {
      alert('Error en l\'enviament. Prova-ho més tard.');
      console.log(error);
    });
});
  