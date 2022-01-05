$(document).ready(function() {
    //fades in the initial elements of the webpage
    $(".all").fadeIn(1000);
    //this is to indicate that you can click on the "classes taken" text
    $(".taken").hover(function() {
        $(this).css('color', '#c997f7');},
        function() {$(this).css('color', '#83f7b5');
    });
    //this code is for showing the taken classes, which happens after clicking the word taken
    $(".taken").click(function() {
        $(".fade").fadeIn(2000);
    });
});
