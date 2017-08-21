'use strict';

var initAstoundTimeline = function($wrap, years, dataElements) {
    var $astoundTimeline = jQuery($wrap);

    if (!$astoundTimeline.hasClass('astound_timeline')) { $astoundTimeline.addClass('astound_timeline');
    }


    $astoundTimeline.append('<div class="astound_timeline-years"></div>');
    $astoundTimeline.append('<div class="astound_timeline-years_content"></div>');
    var $yearsBlock = $astoundTimeline.find('.astound_timeline-years');
    var $yearsContentBlock = $astoundTimeline.find('.astound_timeline-years_content');

    var addYearsMarkup = function(years) {

        var data = jQuery(dataElements + ' .wpb_text_column').clone();
        $yearsContentBlock.append(data);

        for (var i = 0; i < years.length; i++) {
            $yearsBlock.append(
                '<div class="astound_timeline-year">' + years[i] + '</div>'
            );
        }
    };

    addYearsMarkup(years);

    $yearsBlock.slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        asNavFor: $yearsContentBlock,
        arrows: true,
        dots: false,
        speed: 100,
        // centerMode 		: true,
        focusOnSelect: true,
        centerPadding: '10px',
        infinite: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '10px',
                    infinite: true,
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 720,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            }
        ]
    });



    $yearsContentBlock.slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        fade: false,
        autoplaySpeed: 5000,
        asNavFor: $yearsBlock,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

};
