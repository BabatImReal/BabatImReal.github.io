function sendEmail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value

    }

    email.js("service_lud4628", "template_i3f3psj", parms).then(alert("Email sent successfully"))
}

