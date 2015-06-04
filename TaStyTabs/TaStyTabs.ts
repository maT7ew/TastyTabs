class Tab {
    private _id: string;
    private displayStyle: string;
    private _element: HTMLElement;
    private _tabElement: HTMLElement;

    constructor(id: string, tabElement: HTMLElement, displayStyle: string) {
        this._id = id.replace('#', '');
        this._tabElement = tabElement;
        this.displayStyle = displayStyle;
    }

    get id(): string {
        return this._id;
    }

    get element(): HTMLElement {
        if (!this._element)
            this._element = <HTMLElement>document.getElementById(this.id);
        return this._element;
    }

    get tabElement(): HTMLElement {
        return this._tabElement;
    }

    hide(): void {
        this.element.style.display = 'none';
    }

    show(): void {
        this.element.style.display = this.displayStyle;
    }

    isActive(): boolean {
        return !(this.element.style.display == 'none');
    }

    static click(e): boolean {
        e.preventDefault();
        return false;
    }

    addEventListener(): void {
        this.tabElement.addEventListener('click', Tab.click, false);
    }

    removeEventListener(): void {
        this.tabElement.removeEventListener('click', Tab.click, false);
    }
}

class Tabs {
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

window.onload = () => {
    window['tabs'] = new Tabs('tabs');
};