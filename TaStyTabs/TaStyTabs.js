/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
var TastyTabs;
(function (TastyTabs) {
    var Tab = (function () {
        function Tab(element) {
            this.element = element;
        }
        Tab.prototype.getContentElement = function () {
            return jQuery('#' + this.getContentId());
        };
        Tab.prototype.getContentId = function () {
            return this.element.attr('href').replace('#', '');
        };
        Tab.prototype.show = function () {
            this.getContentElement().show();
        };
        Tab.prototype.hide = function () {
            this.getContentElement().hide();
        };
        return Tab;
    })();
    TastyTabs.Tab = Tab;
})(TastyTabs || (TastyTabs = {}));
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="Tab.ts"/>
var TastyTabs;
(function (TastyTabs) {
    var Tabs = (function () {
        function Tabs(element) {
            this.tabs = new Array();
            var that = this;
            element.find('a').each(function () {
                var tab = new TastyTabs.Tab($(this));
                $(this).click(function () {
                    that.show($(this).attr('href').replace('#', ''));
                    return false;
                });
                that.tabs.push(tab);
            });
        }
        Tabs.prototype.hide = function (id) {
            for (var i = 0; i < this.tabs.length; i++)
                if (id === null || this.tabs[i].getContentId() == id)
                    this.tabs[i].hide();
        };
        Tabs.prototype.show = function (id) {
            for (var i = 0; i < this.tabs.length; i++)
                if (id === null || this.tabs[i].getContentId() == id) {
                    this.hide(null);
                    this.tabs[i].show();
                    if (id === null)
                        break;
                }
        };
        Tabs.prototype.showTabByUrlAnchor = function () {
            this.show(window.location.hash.replace('#', ''));
        };
        return Tabs;
    })();
    TastyTabs.Tabs = Tabs;
})(TastyTabs || (TastyTabs = {}));
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
}(jQuery));
//# sourceMappingURL=TastyTabs.js.map