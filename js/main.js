/*!
 * cityks - Home page of city Krasnoslobodsk (https://cityks.github.io)
 * Copyright 2018 cityks
 * Licensed under MIT (https://github.com/cityks/cityks.github.io/blob/master/LICENSE)
 */
!function(e) {
    "use strict";
    e(function() {
        e(".group").hide();
        var a = "";
        "undefined" != typeof localStorage && (a = localStorage.getItem("activetab")), "" != a && e(a).length ? e(a).fadeIn() : e(".group:first").fadeIn(), "" != a && e(a + "-tab").length ? e(a + "-tab").addClass("nav-tab-active") : e(".nav-tab-wrapper a:first").addClass("nav-tab-active"), e(".nav-tab-wrapper a").click(function(a) {
            e(".nav-tab-wrapper a").removeClass("nav-tab-active"), e(this).addClass("nav-tab-active");
            var t = e(this).attr("href");
            "undefined" != typeof localStorage && localStorage.setItem("activetab", e(this).attr("href")), e(".group").hide(), e(t).fadeIn(), a.preventDefault()
        }), e('a[href*="#"]').on("click", function(a) {
            a.preventDefault(), e("html, body").animate({
                scrollTop: e(e(this).attr("href")).offset().top
            }, 500, "linear")
        })
    })
}(jQuery);