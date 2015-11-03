/// <reference path="DefinitelyTyped/jquery.d.ts"/>
/// <reference path="Tab.ts"/>

module TaStyTabs {
    export class Tabs {
        private tabs: Array<Tab>;

        constructor(element: JQuery) {
            this.tabs = new Array<Tab>();
            var that = this;
            element.find('a').each(function () {
                var tab = new Tab($(this));

                $(this).click(function () {
                    that.show($(this).attr('href').replace('#', ''));
                    return false;
                });

                that.tabs.push(tab);
            });
        }

        private hide(id): void {
            for (var i = 0; i < this.tabs.length; i++)
                if (id === null || this.tabs[i].getContentId() == id)
                    this.tabs[i].hide();
        }

        public show(id): void {
            for (var i = 0; i < this.tabs.length; i++)
                if (id === null || this.tabs[i].getContentId() == id) {
                    this.hide(null);
                    this.tabs[i].show();
                    if (id === null)
                        break;
                }
        }

        public showTabByUrlAnchor() {
            this.show(window.location.hash.replace('#', ''));
        }
    }
}