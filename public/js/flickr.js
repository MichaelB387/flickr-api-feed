
// Makes sure the js will not load until the HTML has been fully loaded
$(document).ready(function () {
    // add on click event handler to each of the button
    // function will run each time one of the buttons is clicked
    $('button').click(function(){
        // This removes the class so only the clicked button will be highlighted
        $('button').removeClass("selected")
        // This is highlighting the seleceted button
        $(this).addClass("selected"); // $(this) is reacting to the element on the click event, refers to the button the user clicks and only that button
        // Basic structure of jquery's get json method
        // $.getJSON(flickerAPI, flickrOptions, displayPhotos)
        //              URL-------Data-----------Callback     

        // This is a query string
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
        var animal = $(this).text();
        var flickrOptions = { 
            // value wiil change depending on which button is clicked according to the animal variable
            tags: animal
        };
        $.getJSON(flickerAPI, flickrOptions, displayPhotos)
    });
});