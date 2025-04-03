$(document).ready(function () {
    

    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn"
        },
        out:{
            effect: "bounceOut"
        },
    });

    //Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1.4",
        speed: "0.10",
        autostart: true
      });
    
    //Siri message animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out:{
            effect: "fadeOutUp",
            sync: true,
        },
    });

    // Mic Button Click Event

    $(MicBtn).click(function (e) { 
        Element.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#Siriwave").attr("hidden", false);
        
    });

});