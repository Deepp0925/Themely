"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class ThemeStore {
    constructor() {
        this.themeMode = "light";
        const bodyTag = document.getElementsByTagName("body")[0];
        const currentTheme = bodyTag.getAttribute("data-theme");
        if (!currentTheme) {
            bodyTag.setAttribute("data-theme", this.themeMode);
        }
    }
    setTheme(theme) {
        this.themeMode = theme;
        mobx_1.reaction(() => { }, (arg, r) => {
            const bodyTag = document.getElementsByTagName("body")[0];
            bodyTag.setAttribute("data-theme", theme);
            r.dispose();
        }, { fireImmediately: true });
    }
    getTheme() {
        return this.themeMode;
    }
    toggleTheme() {
        const theme = this.themeMode === "dark" ? "light" : "dark";
        this.setTheme(theme);
    }
}
mobx_1.decorate(ThemeStore, {
    themeMode: mobx_1.observable,
    getTheme: mobx_1.computed,
    setTheme: mobx_1.action,
    toggleTheme: mobx_1.action
});
exports.Theme = new ThemeStore();
