"use strict";
jQuery(document).ready(function() {
    var coreValuesNavigation = [
            ["Integrity", "#285c4d"],
            ["Respect", "#1b365d"],
            ["Passion", "#e87722"],
            ["Commitment", "#6bbbae"],
            ["Continuous Improvement", "#1b365d"],
            ["Shared Success", "#75787b"],
            ["Teamwork", "#307FE2"]
        ],
        $naw = jQuery(".astound_core_values-nav > .wpb_wrapper"),
        navClass = "astound_core_values-nav-item",
        $astoundCoreValuesWrap = jQuery(".astound_core_values"),
        activeClass = "active-nav-item";


    // add ancors
    for (var i = 0; i < coreValuesNavigation.length; i++) {
        var item = jQuery("<span></span>")
            .addClass(navClass)
            .text(coreValuesNavigation[i][0])
            .data("color", coreValuesNavigation[i][1])
            .data("pos", i);
        $naw.append(item);

    }

    //activate first ancor
    $astoundCoreValuesWrap.css("background-color", coreValuesNavigation[0][1]);
    jQuery("." + "astound_core_values-nav-item").first().addClass(activeClass);

    // init carousel
    var $coreValuesCarusel = jQuery(".astound_core_values-slides > .vc_column-inner > .wpb_wrapper");
    $coreValuesCarusel.owlCarousel({
        items: 1,
        center: true,
        nav: true,
        dots: false,
        navText: ["", ""]
    });
    
    $coreValuesCarusel.on('translate.owl.carousel', function(event) {
        var index = (event.item.index)
            , $navItems = jQuery(".astound_core_values-nav-item");

            $navItems.removeClass(activeClass).eq(index).addClass(activeClass);
            $astoundCoreValuesWrap.css("background-color", coreValuesNavigation[index][1]);
    });

    jQuery("body").on("click", ".astound_core_values-nav-item", function() {
        var $this = jQuery(this),
            pos = $this.data("pos"),
            color = $this.data("color");

        jQuery(".astound_core_values-nav-item").removeClass(activeClass).eq($this).addClass(activeClass);
        $astoundCoreValuesWrap.css("background-color", color);
        $coreValuesCarusel.trigger('to.owl.carousel', [pos, 300]);
    });
});
