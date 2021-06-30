import SleepDiary from './modules/sleep-diary';

export const Selector = {
  main: '.sleep-diary-page__main',
};

(() => {
  const mainElement = document.querySelector(Selector.main);

  const sleepDiary = new SleepDiary(mainElement);
  sleepDiary.init();
})();

