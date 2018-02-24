
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
            // This is a Query string parameter
            tags: animal,
            // requires format to be JSON
            format: "json"
        };
        // When flickr returns its list of photos to the page this function displayPhotos will run.
        function displayPhotos (data) {
            var photoHTML = '<ul>';
            // Loop through each photo form the flickr feed
            $.each(data.items, function (i, photo){
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href=" ' + photo.link + ' " class="image">';
                photoHTML += '<img src=" ' + photo.media.m + ' "></a></li>';
            })
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos)
    });
});