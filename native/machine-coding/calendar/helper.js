const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const getMonthsFragment = () => {
  const fragment = document.createDocumentFragment();
  MONTHS.map((month) => {
    const option = document.createElement('option');
    option.textContent = month;
    fragment.appendChild(option);
  });
  return fragment;
};

export const getYearsFragment = (date = proxy.today) => {
  const fragment = document.createDocumentFragment();
  const currentYear = date.getFullYear();

  for (let year = currentYear - 100; year < currentYear + 10; year++) {
    const option = document.createElement('option');
    option.textContent = year;
    fragment.appendChild(option);
  }

  return fragment;
};

export const getWeekDaysFragment = (type) => {
  const fragment = document.createDocumentFragment();
  WEEK_DAYS.map((weekDay) => {
    const span = document.createElement(type);
    span.textContent = weekDay;
    fragment.appendChild(span);
  });
  return fragment;
};

export const getDaysFragment = (month, year) => {
  const fragment = document.createDocumentFragment();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let day = 0; day < firstDay; day++) {
    const span = document.createElement('span');
    span.textContent = '';
    fragment.appendChild(span);
  }

  for (let date = 1; date <= lastDate; date++) {
    const button = document.createElement('button');
    button.textContent = date;
    button.classList.add('date-' + date);
    fragment.appendChild(button);
  }

  return fragment;
};
