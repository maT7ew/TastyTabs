/// <reference path="Tab.ts" />

module TaStyTabs {
    export class Tabs {
        private cssClass: string;
        private displayStyle: string;
        private tabs: Tab[] = [];

        constructor(cssClass: string, displayStyle = 'block') {
            this.cssClass = cssClass;
            this.displayStyle = displayStyle;
            this.init();
        }

        private init(): void {
            this.clearTabs();
            this.loadTabs();
            this.showTab(this.getTabById(this.getIdFromHash()));
            this.registerOnClickListeners();
        }

        private clearTabs(): void {
            this.tabs.splice(0, this.tabs.length);
        }

        private loadTabs(): void {
            var elements: NodeList = document.querySelectorAll('.' + this.cssClass + ' a');
            for (var index: number = 0; index < elements.length; index++) {
                var element: HTMLElement = <HTMLElement>elements[index];
                var id: string = element.getAttribute('href');
                if (!id)
                    continue;
                this.tabs.push(new Tab(id, element, this.displayStyle));
            }
        }

        private getTabById(id: string): Tab {
            for (var index: number = 0; index < this.tabs.length; index++)
                if (this.tabs[index].id == id)
                    return this.tabs[index];
            return this.tabs[0];
        }

        private getActiveTab(): Tab {
            for (var index: number = 0; index < this.tabs.length; index++)
                if (this.tabs[index].isActive())
                    return this.tabs[index];
            return this.tabs[0];
        }

        private registerOnClickListeners(): void {
            for (var index: number = 0; index < this.tabs.length; index++) {
                this.tabs[index].addEventListener();
                this.tabs[index].tabElement.addEventListener('click', this.showTab.bind(this, this.tabs[index]), false);
            }
        }

        private unregisterOnClickListeners(): void {
            for (var index: number = 0; index < this.tabs.length; index++) {
                this.tabs[index].removeEventListener();
                this.tabs[index].tabElement.removeEventListener('click', this.showTab.bind(this, this.tabs[index]), false);
            }
        }

        private getIdFromHash(): string {
            return window.location.hash.replace('#', '');
        }

        hideAllTabs(): void {
            for (var index: number = 0; index < this.tabs.length; index++)
                this.tabs[index].hide();
        }

        showTab(tab: string): void;
        showTab(tab: Tab): void;
        showTab(tab): void {
            if (typeof tab === 'string')
                tab = this.getTabById(tab);
            this.hideAllTabs();
            tab.show();
        }

        refresh(): void {
            var active = this.getActiveTab();
            this.unregisterOnClickListeners();
            this.clearTabs();
            this.loadTabs();
            this.showTab(this.getTabById(active.id));
            this.registerOnClickListeners();
        }
    }
}