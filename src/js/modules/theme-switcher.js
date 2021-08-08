export const Theme = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

const LOCAL_STORAGE_KEY = 'theme';

class ThemeSwitcher {
  static rootElement = document.documentElement;

  static ThemeClassname = {
    [Theme.LIGHT]: 'theme-light',
    [Theme.DARK]: 'theme-dark',
  };

  static init () {
    const themeName = localStorage.getItem(LOCAL_STORAGE_KEY);
    ThemeSwitcher.setTheme(themeName);
  }

  static resetTheme (themeName) {
    ThemeSwitcher.rootElement.classList.remove(ThemeSwitcher.ThemeClassname[themeName]);
  }

  static setTheme (themeName) {
    localStorage.setItem(LOCAL_STORAGE_KEY, themeName);
    ThemeSwitcher.rootElement.classList.add(ThemeSwitcher.ThemeClassname[themeName]);
  }

  static toggleTheme() {
    const themeName = localStorage.getItem(LOCAL_STORAGE_KEY);

    switch (themeName) {
      case Theme.LIGHT:
        ThemeSwitcher.resetTheme(Theme.LIGHT);
        ThemeSwitcher.setTheme(Theme.DARK);
        break;
      case Theme.DARK:
        ThemeSwitcher.resetTheme(Theme.DARK);
        ThemeSwitcher.setTheme(Theme.LIGHT);
        break;
      default:
        ThemeSwitcher.setTheme(Theme.LIGHT);
        break;
    }
  }
}

export { ThemeSwitcher };
