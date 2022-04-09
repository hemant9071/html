jQuery(function ($) {

    var PARJAIN = window.PARJAIN || {};


    /********************************
            SCROLL TO TOP
    *********************************/
    PARJAIN.backToTop = function () {
        var windowWidth = $(window).width(),
            didScroll = false;

        var $arrow = $('#back-to-top');

        $arrow.click(function (e) {
            $('body,html').animate({ scrollTop: "0" }, 700);
            e.preventDefault();
        })

        $(window).scroll(function () {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                didScroll = false;

                if ($(window).scrollTop() > 100) {
                    $arrow.css('display', 'block');
                } else {
                    $arrow.css('display', 'none');
                }
            }
        }, 250);
    }




    /********************************
            INITIALIZATION
    *********************************/
    $(document).ready(function () {
        PARJAIN.backToTop();
    });

});