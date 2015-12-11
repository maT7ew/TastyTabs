/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
declare module TastyTabs {
    class Tab {
        private element;
        constructor(element: JQuery);
        private getContentElement();
        getContentId(): string;
        show(): void;
        hide(): void;
    }
}
declare module TastyTabs {
    class Tabs {
        private tabs;
        constructor(element: JQuery);
        private hide(id);
        show(id: any): void;
        showTabByUrlAnchor(): void;
    }
}
