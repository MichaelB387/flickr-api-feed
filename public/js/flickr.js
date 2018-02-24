
// Makes sure the js will not load until the HTML has been fully loaded
$(document).ready(function () {
    // add on click event handler to each of the button
    // function will run each time one of the buttons is clicked
    $('button').click(function(){
        // This removes the class so only the clicked button will be highlighted
        $('button').removeClass("selected")
        // This is highlighting the seleceted button
        $(this).addClass("selected"); // $(this) is reacting to the element on the click event, refers to the button the user clicks and only that button
    });
});