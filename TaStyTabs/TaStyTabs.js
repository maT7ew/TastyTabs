var Tab = (function () {
    function Tab(id, tabElement, displayStyle) {
        this._id = id.replace('#', '');
        this._tabElement = tabElement;
        this.displayStyle = displayStyle;
    }
    Object.defineProperty(Tab.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "element", {
        get: function () {
            if (!this._element)
                this._element = document.getElementById(this.id);
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "tabElement", {
        get: function () {
            return this._tabElement;
        },
        enumerable: true,
        configurable: true
    });
    Tab.prototype.hide = function () {
        this.element.style.display = 'none';
    };
    Tab.prototype.show = function () {
        this.element.style.display = this.displayStyle;
    };
    Tab.prototype.isActive = function () {
        return !(this.element.style.display == 'none');
    };
    Tab.click = function (e) {
        e.preventDefault();
        return false;
    };
    Tab.prototype.addEventListener = function () {
        this.tabElement.addEventListener('click', Tab.click, false);
    };
    Tab.prototype.removeEventListener = function () {
        this.tabElement.removeEventListener('click', Tab.click, false);
    };
    return Tab;
})();
var Tabs = (function () {
    function Tabs(cssClass, displayStyle) {
        if (displayStyle === void 0) { displayStyle = 'block'; }
        this.tabs = [];
        this.cssClass = cssClass;
        this.displayStyle = displayStyle;
        this.init();
    }
    Tabs.prototype.init = function () {
        this.clearTabs();
        this.loadTabs();
        this.showTab(this.getTabById(this.getIdFromHash()));
        this.registerOnClickListeners();
    };
    Tabs.prototype.clearTabs = function () {
        this.tabs.splice(0, this.tabs.length);
    };
    Tabs.prototype.loadTabs = function () {
        var elements = document.querySelectorAll('.' + this.cssClass + ' a');
        for (var index = 0; index < elements.length; index++) {
            var element = elements[index];
            var id = element.getAttribute('href');
            if (!id)
                continue;
            this.tabs.push(new Tab(id, element, this.displayStyle));
        }
    };
    Tabs.prototype.getTabById = function (id) {
        for (var index = 0; index < this.tabs.length; index++)
            if (this.tabs[index].id == id)
                return this.tabs[index];
        return this.tabs[0];
    };
    Tabs.prototype.getActiveTab = function () {
        for (var index = 0; index < this.tabs.length; index++)
            if (this.tabs[index].isActive())
                return this.tabs[index];
        return this.tabs[0];
    };
    Tabs.prototype.registerOnClickListeners = function () {
        for (var index = 0; index < this.tabs.length; index++) {
            this.tabs[index].addEventListener();
            this.tabs[index].tabElement.addEventListener('click', this.showTab.bind(this, this.tabs[index]), false);
        }
    };
    Tabs.prototype.unregisterOnClickListeners = function () {
        for (var index = 0; index < this.tabs.length; index++) {
            this.tabs[index].removeEventListener();
            this.tabs[index].tabElement.removeEventListener('click', this.showTab.bind(this, this.tabs[index]), false);
        }
    };
    Tabs.prototype.getIdFromHash = function () {
        return window.location.hash.replace('#', '');
    };
    Tabs.prototype.hideAllTabs = function () {
        for (var index = 0; index < this.tabs.length; index++)
            this.tabs[index].hide();
    };
    Tabs.prototype.showTab = function (tab) {
        if (typeof tab === 'string')
            tab = this.getTabById(tab);
        this.hideAllTabs();
        tab.show();
    };
    Tabs.prototype.refresh = function () {
        var active = this.getActiveTab();
        this.unregisterOnClickListeners();
        this.clearTabs();
        this.loadTabs();
        this.showTab(this.getTabById(active.id));
        this.registerOnClickListeners();
    };
    return Tabs;
})();
window.onload = function () {
    window['tabs'] = new Tabs('tabs');
};
//# sourceMappingURL=TaStyTabs.js.map