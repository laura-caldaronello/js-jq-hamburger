var hamburger = $('.header-right > a');
var hamburgerMenu = $('.hamburger-menu');
var close = $('.hamburger-menu > a');

// sol 1
// hamburger.click( function() {
//     hamburgerMenu.toggle(true);
// });

// close.click( function() {
//     hamburgerMenu.toggle(false);
// });

// sol 2
// hamburger.click( function() {
//     hamburgerMenu.addClass('active');
// });
// close.click( function() {
//     hamburgerMenu.removeClass('active');
// });

// sol 3
hamburger.click( function() {
    hamburgerMenu.toggle();
});
close.click( function() {
    hamburgerMenu.toggle();
});
