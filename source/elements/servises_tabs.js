"use strict";
jQuery(document).ready(function(){
  var onloadUrlAction = function(){
    var location = window.location
      , search = location.search.substring(1)
      , searchVars = search.split('&')
      , scrollMark = '#servises_tabs'
      , $html = jQuery('html, body')
      , $scrollElem = jQuery(scrollMark)
      , $tabLinks = jQuery('#servises_tabs .ui-tabs-nav a')
      , tab = '';

      for (var i = 0; i < searchVars.length; i++) {
          var pair = searchVars[i].split('=');
          if (decodeURIComponent(pair[0]) == 'tabid') {
            tab = pair[1];
            break;
          }
      }

      if (location !== '' && $tabLinks.length) {

        setTimeout(function(){
          $tabLinks[parseInt(tab)].click(function(e){
            e.preventDefault()
          });
        }, 300);
        $html.delay(200).animate({
          scrollTop: $scrollElem.offset().top - 400
         }, 800);
      }
  };

  onloadUrlAction();

});