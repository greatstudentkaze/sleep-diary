import data from '../data.json';

const createElement = (template) => {
  const element = document.createElement('div');
  element.innerHTML = template;

  return element.firstElementChild;
};

const createEntryTemplate = (data) => {
  const { date, bedtime, comment } = data;

  const formattedDate = new Date(date).toLocaleDateString('ru', {
    month: 'long',
    day: 'numeric',
  });

  const startTime = bedtime.start.split(' ')[1];
  const endTime = bedtime.end.split(' ')[1];

  return `
    <li class="sleep-diary-page__item">
      <div class="sleep-diary-entry">
        <header class="sleep-diary-entry__header">
          <h3 class="sleep-diary-entry__title">
            <time datetime="${date}">${formattedDate}</time>
          </h3>
          <p class="sleep-diary-entry__bedtime">
            <time datetime="${bedtime.start}">${startTime}</time> - <time datetime="${bedtime.end}">${endTime}</time>
          </p>
        </header>
        <div class="sleep-diary-entry__main">
        <pre class="sleep-diary-entry__note">
${comment}
        </pre>
        </div>
      </div>
    </li>
  `;
};

const createMonthSectionTemplate = ({ id, title, description }) => `
  <section class="sleep-diary-page__section">
    <h2 class="sleep-diary-page__title">${title}</h2>
    <p class="sleep-diary-page__description">${description}</p>
    <ul class="sleep-diary-page__list" data-month-id="${id}"></ul>
  </section>
`;

const Selector = {
  main: '.sleep-diary-page__main',
  entriesList: '.sleep-diary-page__list',
};

const init = () => {

  const mainElement = document.querySelector(Selector.main);
  console.log();

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
