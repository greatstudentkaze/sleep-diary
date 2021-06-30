import data from '../data.json';

import { createElement } from './utils/create-element';

import { createMonthSectionTemplate } from './templates/month-section';
import { createEntryTemplate } from './templates/entry';

const Selector = {
  main: '.sleep-diary-page__main',
  entriesList: '.sleep-diary-page__list',
};

const init = () => {
  const mainElement = document.querySelector(Selector.main);

  const { months } = data;
  if (!months) {
    return;
  }

  months.forEach((month) => {
    const monthSection = createElement(createMonthSectionTemplate(month));
    const listElement = monthSection.querySelector(Selector.entriesList);

    mainElement.appendChild(monthSection);

    month.entries.forEach((entry) => {
      const element = createElement(createEntryTemplate(entry));
      listElement.appendChild(element);
    });
  });
};

init();
