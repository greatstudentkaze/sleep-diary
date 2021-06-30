import { createElement } from '../utils/create-element';
import { createMonthSectionTemplate } from '../templates/month-section';
import { createEntryTemplate } from '../templates/entry';

class SleepDiary {
  constructor (container) {
    this._container = container;

    this._data = null;

    this._Selector = {
      entriesList: '.sleep-diary-page__list',
    };
  }

  async init() {
    await this._fetchData();
    this._render();
  }

  async _fetchData() {
    const response = await fetch('data.json');
    this._data = await response.json();
  }

  _render() {
    const { months } = this._data;
    if (!months) {
      console.error('No data');
      return;
    }

    months.forEach((month) => {
      const monthSection = createElement(createMonthSectionTemplate(month));
      const listElement = monthSection.querySelector(this._Selector.entriesList);

      this._container.appendChild(monthSection);

      month.entries.forEach((entry) => {
        const element = createElement(createEntryTemplate(entry));
        listElement.appendChild(element);
      });
    });
  }
}

export default SleepDiary;
