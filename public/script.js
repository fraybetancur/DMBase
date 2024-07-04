document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevenir el envío estándar del formulario
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    document.getElementById('result').innerText = `Gracias ${userName}, hemos recibido tu correo ${userEmail}.`;
};
