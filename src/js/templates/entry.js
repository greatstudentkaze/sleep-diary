export const createEntryTemplate = (data) => {
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
