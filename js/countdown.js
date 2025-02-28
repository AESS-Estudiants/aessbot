// Configurar la fecha límite - por ejemplo, 7 días desde ahora
const targetDate = new Date(2025, 5, 7, 11, 0);

function updateCountdown() {
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (difference < 0) {
    clearInterval(interval);
    document.querySelector('.countdown-container').innerHTML = '<div class="title">¡El periode d\'inscripció ha acabat!</div>';
  }
}

// Actualizar el contador cada segundo
updateCountdown();
const interval = setInterval(updateCountdown, 1000);