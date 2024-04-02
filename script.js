

// Add click event that allows smaller screen users to see an "x" or original hamburger menu logo upon clicking.

$('#navbar-toggler').on('click', function(){

    $('.navbar-toggler-icon').toggle();

    $('#x-icon').toggle();
})


// Add click event to contact button.

$("#contact-link").on('click', function() { 

    // trigger a double click, ensuring that iPhone users can reach "mailto:" page on a single click.
    $(this).dblclick(); 

    // ensure button no longer displays hover effect after being clicked.
    (this).addClass('no-hover');
  });