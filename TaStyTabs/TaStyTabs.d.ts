declare module TaStyTabs {
    class Tab {
        private _id;
        private displayStyle;
        private _element;
        private _tabElement;
        constructor(id: string, tabElement: HTMLElement, displayStyle: string);
        id: string;
        element: HTMLElement;
        tabElement: HTMLElement;
        hide(): void;
        show(): void;
        isActive(): boolean;
        static click(e: any): boolean;
        addEventListener(): void;
        removeEventListener(): void;
    }
}
declare module TaStyTabs {
    class Tabs {
        private cssClass;
        private displayStyle;
        private tabs;
        constructor(cssClass: string, displayStyle?: string);
        private init();
        private clearTabs();
        private loadTabs();
        private getTabById(id);
        private getActiveTab();
        private registerOnClickListeners();
        private unregisterOnClickListeners();
        private getIdFromHash();
        hideAllTabs(): void;
        showTab(tab: string): void;
        showTab(tab: Tab): void;
        refresh(): void;
    }
}
