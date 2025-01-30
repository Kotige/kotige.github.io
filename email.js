emailjs.init("6TGYbrcHQ-2R20Wwp")

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value 
    var email = document.getElementById('email').value 
    var subject = document.getElementById('subject').value
    var message = document.getElementById('message').value

    emailjs.send("service_r246orp", "template_ob9oo7t", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then((response) => {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('form').reset()
    }).catch((error) => {
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(error));
    });
})