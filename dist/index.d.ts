declare type Theme = "dark" | "light";
declare class ThemeStore {
    themeMode: Theme;
    constructor();
    setTheme(theme: Theme): void;
    getTheme(): Theme;
    toggleTheme(): void;
}
export declare const Theme: ThemeStore;
export default Theme;
