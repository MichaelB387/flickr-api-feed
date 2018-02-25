// Makes sure the js will not load until the HTML has been fully loaded
$(document).ready(function() {
  // add on click event handler to each of the button
  // function will run each time one of the buttons is clicked
  $("form").submit(function(evt) {
    evt.preventDefault();
    var $searchField = $("#search");
    var $submitButton = $("#submit");

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching.....");

    var flickerAPI =
      "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $searchField.val();
    var flickrOptions = {
      // value wiil change depending on which button is clicked according to the animal variable
      // This is a Query string parameter
      tags: animal,
      // requires format to be JSON
      format: "json"
    };
    // When flickr returns its list of photos to the page this function displayPhotos will run.
    function displayPhotos(data) {
      var photoHTML = "<ul>";
      // Loop through each photo form the flickr feed
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href=" ' + photo.link + ' " class="image">';
        photoHTML += '<img src=" ' + photo.media.m + ' "></a></li>';
      });
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});
