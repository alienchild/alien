"use strict";
$(document).ready(function(){
    if($( window ).width() >= 991 ) {
        $('.navbar-nav a').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 75
            }, 1000);
        });
    }else {
        $('.navbar-nav a').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });
    }
});
