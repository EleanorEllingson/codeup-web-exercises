$('#definitions').click(function () {
    $('dd').toggle();

});




$('#park-button').click(function () {

    $('ul').each(function (i, e) {
        $(e).children().last().css('background-color', 'yellow')

    });
    });

$('h3').click(function () {

    $('ul').each(function (i, e) {
        $(e).children().css('font-weight', 'bold')

    });
});
// $('h3').click(function (){
//     $(this).parent().children('li').addClass('bold');
//     $(this).next('ul').slideToggle(500)
// })

$('li').click(function () {

    $('ul').each(function (i, e) {
        $(e).children().first().css('color', 'blue')

    });
});