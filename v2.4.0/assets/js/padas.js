
$(document).ready(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();   
});

function deleteItemConfirm(formId, itemId, postUrl, successUrl){

  const XHR = new XMLHttpRequest();

  // Bind the FormData object and the form element
  const FD = new FormData( document.getElementById( formId ) );
  FD.append( 'itemId', itemId );

  // Define what happens on successful data submission
  XHR.addEventListener( "load", function(event) {
    //alert( event.target.responseText );
    location.href = successUrl;
  } );

  // Define what happens in case of error
  XHR.addEventListener( "error", function( event ) {
    alert( 'Oops! Something went wrong.  Please refresh the page and try again.' );
  } );

  // Set up our request
  XHR.open( "POST", postUrl );

  // The data sent is what the user provided in the form
  XHR.send( FD );
  //$('form').submit();

}