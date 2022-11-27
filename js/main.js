/*!
 * webquest45 - Military-Patriotic quest game dedicated to the 75th anniversary of the Victory in the great Patriotic war (https://webquest45.github.io)
 * Copyright 2022 webquest45
 * Licensed under MIT (https://github.com/webquest45/webquest45.github.io/blob/master/LICENSE)
 */
! function(e) {
    "use strict";
    e(function() {
        e(".group").hide();
        var a = "";
        "undefined" != typeof localStorage && (a = localStorage.getItem("activetab")), "" != a && e(a).length ? e(a).fadeIn() : e(".group:first").fadeIn(), "" != a && e(a + "-tab").length ? e(a + "-tab").addClass("nav-tab-active") : e(".app-navigaion-tab-wrapper a:first").addClass("nav-tab-active"), e(".app-navigaion-tab-wrapper a").click(function(a) {
            e(".app-navigaion-tab-wrapper a").removeClass("nav-tab-active"), e(this).addClass("nav-tab-active");
            var t = e(this).attr("href");
            "undefined" != typeof localStorage && localStorage.setItem("activetab", e(this).attr("href")), e(".group").hide(), e(t).fadeIn(), a.preventDefault()
        }), e('a[data-app-section="true"]').on("click", function(a) {
            a.preventDefault(), e("html, body").animate({
                scrollTop: e(e(this).attr("href")).offset().top
            }, 500, "linear")
        })
    })
}(jQuery);