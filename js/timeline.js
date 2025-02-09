
document.addEventListener('DOMContentLoaded', () => {
    // Recollim tots els contenidors del timeline
    const timelineContainers = document.querySelectorAll('.timeline .container');
    // Data actual (per a proves, pots canviar-la manualment, per exemple, a "2025-03-15")
    const currentDate = new Date(); // La data actual del navegador

    // Mapa de les abreviatures de mes (Català) als índexs de mes (0-indexats)
    const monthMap = {
        "Gen": 1,   // Gener
        "Feb": 2,   // Febrer
        "Mar": 3,   // Març
        "Abr": 4,   // Abril
        "Mai": 5,  // Maig
        "Jun": 6,   // Juny
        "Jul": 7,   // Juliol
        "Ago": 8,   // Agost
        "Set": 9,   // Setembre
        "Oct": 10,   // Octubre
        "Nov": 11,  // Novembre
        "Des": 12   // Desembre
    };


    timelineContainers.forEach(container => {
        // Cerquem l'element que conté la data dins del contenidor
        const dateElem = container.querySelector('.date');
        if (dateElem) {
            // Exemple: "26 Feb"
            const dateText = dateElem.textContent.trim();
            const parts = dateText.split(" ");
            if (parts.length >= 2) {
                const day = parseInt(parts[0], 10);
                const monthAbbrev = parts[1];
                const monthIndex = monthMap[monthAbbrev];
                // Creem un objecte Date per a l'esdeveniment (assumim l'any 2025)
                const eventDate = new Date(2025, monthIndex, day);
                // Si la data de l'esdeveniment és anterior a la data actual, ajustem l'opacitat
                if (eventDate < currentDate) {
                    container.style.opacity = "0.5"; // Fent-lo més translúcid
                }
            }
        }
    });
});