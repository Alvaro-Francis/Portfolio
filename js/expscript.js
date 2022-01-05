$(document).ready(function() {
    //fades in the initial elements of the webpage
    $(".all").fadeIn(1000);
    //this is to indicate that you can click on the "Companies" text
    $("#job1").hover(function() {
        $(this).css('color', '#ffffff');},
        function() {$(this).css('color', '#88f06e');
    });

    $("#job2").hover(function() {
        $(this).css('color', '#ffffff');},
        function() {$(this).css('color', '#ebf06e');
    });

    $("#job3").hover(function() {
        $(this).css('color', '#ffffff');},
        function() {$(this).css('color', '#ebac6e');
    });

    $("#volunteer").hover(function() {
        $(this).css('color', '#ffffff');},
        function() {$(this).css('color', '#f09cd8');
    });

    $("#skills").hover(function() {
        $(this).css('color', '#ffffff');},
        function() {$(this).css('color', '#8bcbff');
    });

    //this code is for showing the the description of jobs. This is for Happy Code Club
    var clicked1 = false;
    $("#job1").on("click", function() {
        if (clicked1 == false) {
            $("#desc1").fadeIn(2000);
            clicked1 = true;
        }
        else {
            $("#desc1").fadeOut(2000);
            clicked1 = false;
        }
    });
    //This is for Beyond Limits
    var clicked2 = false;
    $("#job2").on("click", function() {
        if (clicked2 == false) {
            $("#desc2").fadeIn(2000);
            clicked2 = true;
        }
        else {
            $("#desc2").fadeOut(2000);
            clicked2 = false;
        }
    });
    
    var clicked3 = false;
    $("#job3").on("click", function() {
        if (clicked3 == false) {
            $("#desc3").fadeIn(2000);
            clicked3 = true;
        }
        else {
            $("#desc3").fadeOut(2000);
            clicked3 = false;
        }
    });

    var clicked4 = false;
    $("#volunteer").on("click", function() {
        if (clicked4 == false) {
            $("#desc4").fadeIn(2000);
            clicked4 = true;
        }
        else {
            $("#desc4").fadeOut(2000);
            clicked4 = false;
        }
    });

    var clicked5 = false;
    $("#skills").on("click", function() {
        if (clicked5 == false) {
            $("#desc5").fadeIn(2000);
            clicked5 = true;
        }
        else {
            $("#desc5").fadeOut(2000);
            clicked5 = false;
        }
    });
    
});
