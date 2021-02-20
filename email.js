$(".emailButton").click(function() {
    var name = $("#name").val();
    var userEmail = $("#email").val();
    var userMessage = $("#message").val();

    Email.send({
        SecureToken : "f5c4c564-0768-4e39-9db9-6584d53ffd23",
        To : 'jasoncjorgensen@gmail.com',
        From : "JasonJorgensenPortfolio@portolio.com",
        Subject : "Someone is trying to reach you on your portolio.",
        Body : `${name} | ${userEmail} | ${userMessage}`,
    }).then(function (message) {
        $(".emailNotification").empty();
        console.log(message);
        if (message=="OK"){
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"Sent successfully!"+"</p>");
        }
        else {
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"ERROR"+"</p>")
        }
    })


})