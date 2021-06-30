export const createMonthSectionTemplate = ({ id, title, description }) => `
  <section class="sleep-diary-page__section">
    <h2 class="sleep-diary-page__title">${title}</h2>
    <p class="sleep-diary-page__description">${description}</p>
    <ul class="sleep-diary-page__list" data-month-id="${id}"></ul>
  </section>
`;
