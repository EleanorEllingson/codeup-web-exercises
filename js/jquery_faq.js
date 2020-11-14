$('#definitions').click(function () {
    $('dd').toggle();

});




$('.park-button').click(function () {

    $('ul').each(function (i, e) {
        $(e).children().last().css('background-color', 'yellow')

    });
    });

// $('h3').click(function () {
//
//     $('ul').each(function (i, e) {
//         $(e).parent().children().css('font-weight', 'bold')
//         $(this).next('ul').slideToggle(500)
//     });
// });

$('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold')
        $(this).next().slideToggle(500)

});

// $('h3').click(function (){
//     $(this).parent().children('li').css('font-weight', 'bold');
//     $(this).next('ul').slideToggle(500)
// })

$('ul').click(function () {

        $(this).children().first().css('color', 'blue')
});

$('#x').click(function () {

    $('#first').toggle();

});


$('#register').fadeIn(8000);

