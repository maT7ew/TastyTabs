/// <reference path="DefinitelyTyped/jquery.d.ts"/>
var TaStyTabs;
(function (TaStyTabs) {
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
    TaStyTabs.Tab = Tab;
})(TaStyTabs || (TaStyTabs = {}));
/// <reference path="DefinitelyTyped/jquery.d.ts"/>
/// <reference path="Tab.ts"/>
var TaStyTabs;
(function (TaStyTabs) {
    var Tabs = (function () {
        function Tabs(element) {
            this.tabs = new Array();
            var that = this;
            element.find('a').each(function () {
                var tab = new TaStyTabs.Tab($(this));
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
    TaStyTabs.Tabs = Tabs;
})(TaStyTabs || (TaStyTabs = {}));
/// <reference path="DefinitelyTyped/jquery.d.ts"/>
/// <reference path="Tabs.ts"/>
(function ($) {
    $.fn.tastyTabs = function (options) {
        options = $.extend({
            // These are the defaults.
            urlAnchor: true
        }, options);
        this.each(function () {
            var tabs = new TaStyTabs.Tabs($(this));
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
//# sourceMappingURL=TaStyTabs.js.map