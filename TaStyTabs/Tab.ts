module TaStyTabs {
    export class Tab {
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
}