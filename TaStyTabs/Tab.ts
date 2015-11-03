/// <reference path="DefinitelyTyped/jquery.d.ts"/>

module TaStyTabs {
    export class Tab {
        private element: JQuery;

        constructor(element: JQuery) {
            this.element = element;
        }

        private getContentElement(): JQuery {
            return jQuery('#' + this.getContentId());
        }

        public getContentId(): string {
            return this.element.attr('href').replace('#', '');
        }

        public show(): void {
            this.getContentElement().show();
        }

        public hide(): void {
            this.getContentElement().hide();
        }
    }
}