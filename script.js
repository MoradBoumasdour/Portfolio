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
