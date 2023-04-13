

function sendEmail(form){
    var params = {

        from_name : document.getElementById("user-name").value,
        email_id : document.getElementById("email").value,
        mobile_number : document.getElementById("mobile-number").value,
        subject : document.getElementById("email-subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_2t6oy4q", "template_6qb5w1d", params).then(function(res){

        alert("Your message was successfully sent! "+ res.status);

    })
}

