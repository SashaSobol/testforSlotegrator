$(function(){

$('.accordion__head').on('click', function(){
    var el = $(this);
    el.next('.accordion__body').slideToggle();
    el.toggleClass('open');
    return false;
});
$('.toggle-filter').click(function(){
    $(this).toggleClass('active');
    $('.leftblock').toggleClass('open');
    $('.box-product').toggleClass('full');
});

});

$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
});
