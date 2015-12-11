/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="Tabs.ts"/>

(function ($) {
    $.fn.tastyTabs = function (options) {
        options = $.extend({
            // These are the defaults.
            urlAnchor: true
        }, options);

        this.each(function () {
            var tabs = new TastyTabs.Tabs($(this));
            if (options.urlAnchor && window.location.hash.length > 1)
                tabs.showTabByUrlAnchor();
            else
                tabs.show(null);
        });

        return this;
    };

    $(function () {
        $('.tastyTabs').tastyTabs({});
    });
} (jQuery));