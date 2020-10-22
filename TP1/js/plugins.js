(function ($) {
    "use strict";
    function exo1(){let o=$("section#tp1-1"),t=o.children("p.description"),e=o.find("ul");e.find("li").first().css("font-weight","bold"),o.remove("p.description"),t.insertBefore(e)}function exo2(){$("section#tp1-2").children("input").focusout(function(o){console.log($(o.target).val())})}function exo3(){$("body").find("p.todo").each(function(){$(this).closest("section").children("p.todo").remove()})}function exo4(){let o=$("section#tp1-4").children("ul#chuck");$.ajax({url:"chuck.html",dataType:"html",success:function(t){o.html(t),console.log(t)}})}$.fn.tpeappmain=function(){return exo1(),exo2(),exo3(),exo4(),this};    
}(jQuery));

