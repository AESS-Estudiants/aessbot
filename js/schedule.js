document.addEventListener('DOMContentLoaded', () => {
    // Obtenim els elements
    const scheduleIcon = document.getElementById('schedule-icon');
    const schedulePopup = document.getElementById('schedule-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Quan es fa clic a l'icona, mostrem la finestra emergent
    scheduleIcon.addEventListener('click', function(e) {
    e.preventDefault(); // Evitem que el link faci una acció per defecte
    schedulePopup.style.display = 'block';
    });

    // Quan es fa clic al botó de tancar, amaguem la finestra emergent
    closePopupButton.addEventListener('click', function() {
    schedulePopup.style.display = 'none';
    });

    // Quan es fa clic fora de la finestra emergent, també l'amaguem
    window.addEventListener('click', function(e) {
    if (e.target === schedulePopup) {
        schedulePopup.style.display = 'none';
    }
    });
}); 