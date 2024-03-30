

// Add event listener that allows smaller screen users to see an "x" or original hamburger menu logo upon clicking.

$('#navbar-toggler').on('click', function(){

    $('.navbar-toggler-icon').toggle();

    $('#x-icon').toggle();
})
