// Gestione semplice del form di contatto
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Grazie per aver inviato il messaggio!';
        form.reset();
    });
}

// Animazione di apertura pagina
window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-loaded');

    // Overlay logica
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('open-portfolio');
    if (overlay && openBtn) {
        openBtn.style.display = 'inline-block';
        openBtn.addEventListener('click', function() {
            overlay.classList.add('opened');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        });
    }
});
