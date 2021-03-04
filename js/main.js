var hamburger = $('.header-right > a');
var hamburgerMenu = $('.hamburger-menu');
var close = $('.hamburger-menu > a');

hamburger.click( function() {
    hamburgerMenu.toggle(true);
});

close.click( function() {
    hamburgerMenu.toggle(false);
});