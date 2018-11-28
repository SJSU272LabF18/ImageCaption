$(document).ready(function () {

    var counter = 0;
    var check = false;
    var i = setInterval(function () {
        if (localStorage.getItem("flag")) {
            counter = 0;
            check = true;
            localStorage.removeItem("flag");
        }
        if (check) {
            counter++;
        }
        if (counter < 30) {
            $("#staging").html("Preprocessing the Data Bro!");
        }
        else if (counter > 30 && counter < 60) {
            $("#staging").html("Photo In");
        }
        else if (counter > 60) {
            $("#staging").html("Output Out");
        }

        var percentage = counter / 100;
        drawProgress(aProgress, percentage, $pCaption);
        if (counter == 100) {
            clearInterval(i);
        }
    }, 175);
    var $pc = $('#progressController');
    var $pCaption = $('.progress-bar p');
    var iProgress = document.getElementById('inactiveProgress');
    var aProgress = document.getElementById('activeProgress');
    var iProgressCTX = iProgress.getContext('2d');
    drawInactive(iProgressCTX);


    var percentage = $pc.val() / 100;
    drawProgress(aProgress, percentage, $pCaption);
});