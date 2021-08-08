import SleepDiary from './modules/sleep-diary';
import { ThemeSwitcher } from './modules/theme-switcher';

export const Selector = {
  MAIN: '.sleep-diary-page__main',
  THEME_SWITCHER_BUTTON: '[data-theme-switcher]',
};

(() => {
  const mainElement = document.querySelector(Selector.MAIN);

  ThemeSwitcher.init();
  const themeSwitcherButton = document.querySelector(Selector.THEME_SWITCHER_BUTTON);
  themeSwitcherButton.addEventListener('click', ThemeSwitcher.toggleTheme);

  const sleepDiary = new SleepDiary(mainElement);
  sleepDiary.init();
})();

