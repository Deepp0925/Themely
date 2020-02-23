import { observable, action, computed, reaction, decorate } from "mobx";

type Theme = "dark" | "light";
class ThemeStore {
  themeMode: Theme = "light";

  constructor() {
    const bodyTag = document.getElementsByTagName("body")[0];
    const currentTheme = bodyTag.getAttribute("data-theme");
    if (!currentTheme) {
      bodyTag.setAttribute("data-theme", this.themeMode);
    }
  }

  setTheme(theme: Theme) {
    this.themeMode = theme;

    reaction(
      () => {},
      (arg, r) => {
        const bodyTag = document.getElementsByTagName("body")[0];
        bodyTag.setAttribute("data-theme", theme);
        r.dispose();
      },
      { fireImmediately: true }
    );
  }

  getTheme(): Theme {
    return this.themeMode;
  }

  toggleTheme() {
    const theme = this.themeMode === "dark" ? "light" : "dark";
    this.setTheme(theme);
  }
}

decorate(ThemeStore, {
  themeMode: observable,
  getTheme: computed,
  setTheme: action,
  toggleTheme: action
});

export const Theme = new ThemeStore();
export default Theme;
