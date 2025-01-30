// Exemple de codi JavaScript que podria afegir funcionalitat
document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('details');

    faqs.forEach(faq => {
        faq.addEventListener('toggle', function() {
            if (faq.open) {
                console.log('Pregunta oberta:', faq.querySelector('summary').textContent);
            } else {
                console.log('Pregunta tancada:', faq.querySelector('summary').textContent);
            }
        });
    });
});
