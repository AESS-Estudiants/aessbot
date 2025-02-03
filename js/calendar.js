document.addEventListener('DOMContentLoaded', () => {

  const calendarHeader = document.querySelector('.current-month');
  const calendarGrid = document.querySelector('.calendar-grid');
  // Botons per canviar de mes
  const prevButton = document.querySelector('.prev-month');
  const nextButton = document.querySelector('.next-month');

  // Actualització de dates especials:
  // Recorda que els mesos en JavaScript són 0-indexats:
  // Gener=0, Febrer=1, Març=2, Abril=3, Maig=4
  const specialDates = [
    { day: 26, month: 1, year: 2025, description: "Taller Introducció" },
    { day: 5, month: 2, year: 2025, description: "Taller Actuadors" },
    { day: 12, month: 2, year: 2025, description: "Taller Sensors" },
    { day: 19, month: 2, year: 2025, description: "Taller PCB" },
    { day: 26, month: 2, year: 2025, description: "Taller Disseny 3D" },
    { day: 23, month: 3, year: 2025, description: "Tallers de seguiment" },
    { day: 30, month: 3, year: 2025, description: "Tallers de seguiment" },
  ];

  const competiDates = [
    { day: 7, month: 4, year: 2025, description: "Competició" },
  ];
  
  let currentDate = new Date(); // Data actual
  
  // Funció per renderitzar el calendari
  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // Primer dia del mes (0=diumenge)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Dies del mes actual
  
    // Actualitza el títol del mes i any
    const monthNames = [
      'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
      'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
    ];
    calendarHeader.textContent = `${monthNames[month]} ${year}`;
  
    // Esborra el contingut del calendari abans de tornar a renderitzar-lo
    calendarGrid.innerHTML = `
      <div class="day-name">Dl</div>
      <div class="day-name">Dt</div>
      <div class="day-name">Dc</div>
      <div class="day-name">Dj</div>
      <div class="day-name">Dv</div>
      <div class="day-name">Ds</div>
      <div class="day-name">Dg</div>
    `;
  
    // Afegeix buits per als dies abans del primer dia del mes.
    // Si el primer dia és diumenge (0) posem 6 espais, sinó (firstDay - 1)
    const blanks = (firstDay === 0 ? 6 : firstDay - 1);
    for (let i = 0; i < blanks; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }
  
    // Afegeix els dies del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
  
      calendarGrid.innerHTML += `<div class="day ${isToday ? 'today' : ''}">${day}</div>`;
    }
  
    // Marca les dates especials
    markSpecialDates(month, year);
  }
  
  // Funció per marcar dates especials
  function markSpecialDates(currentMonth, currentYear) {
    const days = document.querySelectorAll('.day');
  
    days.forEach(day => {
      const dayNumber = parseInt(day.textContent, 10);
  
      // Cerca si aquesta data és especial
      const specialDate = specialDates.find(
        date => date.day === dayNumber && date.month === currentMonth && date.year === currentYear
      );
  
      // Cerca si aquesta data és de competició
      const competiDate = competiDates.find(
        date => date.day === dayNumber && date.month === currentMonth && date.year === currentYear
      );
  
      if (specialDate) {
        day.classList.add('special');
        day.title = specialDate.description;
      }
  
      if (competiDate) {
        day.classList.add('competition');
        day.title = competiDate.description;
      }
    });
  }
  
  prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });
  
  nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });
  
  // Render inicial
  renderCalendar(currentDate);
});
