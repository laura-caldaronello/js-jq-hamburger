var hamburger = $('.header-right > a');
var hamburgerMenu = $('.hamburger-menu');
var close = $('.hamburger-menu > a');

// hamburger.click( function() {
//     hamburgerMenu.toggle(true);
// });

// close.click( function() {
//     hamburgerMenu.toggle(false);
// });

hamburger.click( function() {
    hamburgerMenu.addClass('active');
});
close.click( function() {
    hamburgerMenu.removeClass('active');
});