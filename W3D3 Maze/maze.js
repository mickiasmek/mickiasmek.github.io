"use-strict";
$(document).ready(function () {
    $("#maze .boundary").mouseover(function () {
        $("#maze .boundary").addClass("youlose");
        $("#status").text("Sorry, you lost. :[");
    });

    $("#end").mouseover(function () {
        $("#status").text("You win! :]");

    });
    $("#start").click(function () {
        $("#status").text("Click the \"S\" to begin.");
        $("#maze .boundary").removeClass("youlose");

    });


});