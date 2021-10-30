; (function () {

    'use strict';



    // Window Scroll
    var windowScroll = function () {
        //$(window).scroll(function (event) {

        //    var header = $('#navWrapper'),
        //    scrlTop = $(this).scrollTop();

        //    if (scrlTop > 50) {
        //        header.removeClass('bg-white10').addClass('bg-white100');
        //    } else {
        //        header.removeClass('bg-white100').addClass('bg-white10');
        //    }

        //});
    };

    var homeAnimate = function () {
        if ($('#home').length > 0) {

            $('#home').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#home .to-animate,#callouts .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }


            }, { offset: '80%' });

        }
    };

    var servicesAnimate = function () {
        if ($('#services').length > 0) {

            $('#services').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#services .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 500);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var ourTeamAnimate = function () {
        if ($('#ourstaff').length > 0) {

            $('#ourstaff').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#ourstaff .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 500);


                    $(this.element).addClass('animated');

                }
            }, { offset: '90%' });

        }
    };

    var contactUsAnimate = function () {
        if ($('#contactus').length > 0) {

            $('#contactus').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function () {
                        $('#contactus .to-animate').each(function (k) {
                            var el = $(this);

                            setTimeout(function () {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 500);


                    $(this.element).addClass('animated');

                }
            }, { offset: '90%' });

        }
    };

    // Document on load.
    $(function () {


        //windowScroll();

        // Animations
        homeAnimate();
        servicesAnimate();
        ourTeamAnimate();
        contactUsAnimate();

    });


}());