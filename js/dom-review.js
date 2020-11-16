
$('#add-to-list').click(function (){
    $('#favorite-food').append($('<li>', {
        text: $('#input').val()
    }));
});

$('#change-me').dblclick(function (){
    $(this).css('background-color', 'purple')
});


$('#change-cohort').click(function (){
    $('#my-cohort').append($('<h4>', {
        text: $('#cohort-name').val()
    }));
});

$('#highlight').click(function (){
    $( "h4" ).last().addClass( "highlight" );

})


// $('#container')(function ()
// $('div').last().addClass( "main-background" );


setTimeout(function(){
    $(".container").css('background', 'pink')
},3000)


