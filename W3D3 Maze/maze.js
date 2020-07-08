"use-strict";
$(document).ready(function () {
    $("#maze .boundary").mouseover(function () {
        $("#maze .boundary").addClass("youlose");
        setTimeout(function () { alert("Sorry, you lost. :["); }, 500);
    });

    $("#end").mouseover(function () {
        alert("You win! :]");
    })

    $("#start").click(function(){
        $("#maze .boundary").removeClass("youlose");
        
    })

    
});