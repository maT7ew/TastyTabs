/// <reference path="DefinitelyTyped/jquery.d.ts" />
declare module TaStyTabs {
    class Tab {
        private element;
        constructor(element: JQuery);
        private getContentElement();
        getContentId(): string;
        show(): void;
        hide(): void;
    }
}
declare module TaStyTabs {
    class Tabs {
        private tabs;
        constructor(element: JQuery);
        private hide(id);
        show(id: any): void;
        showTabByUrlAnchor(): void;
    }
}
