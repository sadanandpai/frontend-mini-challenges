const prevBtn = document.querySelector('.prev');
const monthEl = document.querySelector('.month');
const yearEl = document.querySelector('.year');
const nextBtn = document.querySelector('.next');
const weekDaysEl = document.querySelector('.week-days');
const daysEl = document.querySelector('.days');
const todayBtn = document.querySelector('.btn-today');
const weekStartEl = document.querySelector('#week-start');

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
const todayDate = new Date();

const getMonths = () => {
  const fragment = document.createDocumentFragment();
  MONTHS.map(month => {
    const option = document.createElement('option');
    option.textContent = month;
    fragment.appendChild(option);
  });
  return fragment;
};

const getYears = (date = todayDate) => {
  const fragment = document.createDocumentFragment();
  const currentYear = date.getFullYear();

  for (let year = currentYear - 100; year < currentYear + 10; year++) {
    const option = document.createElement('option');
    option.textContent = year;
    fragment.appendChild(option);
  }

  return fragment;
};

const getWeekDays = type => {
  const fragment = document.createDocumentFragment();
  WEEK_DAYS.map(weekDay => {
    const span = document.createElement(type);
    span.textContent = weekDay;
    fragment.appendChild(span);
  });
  return fragment;
};

const getDays = (month, year) => {
  const fragment = document.createDocumentFragment();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let day = 0; day < firstDay; day++) {
    const span = document.createElement('span');
    span.textContent = '';
    fragment.appendChild(span);
  }

  for (let date = 1; date <= lastDate; date++) {
    const span = document.createElement('span');
    span.textContent = date;
    span.classList.add('date-' + date);
    fragment.appendChild(span);
  }

  return fragment;
};

const populateControls = (date = todayDate) => {
  const monthOptions = getMonths();
  monthEl.appendChild(monthOptions);
  monthEl.selectedIndex = date.getMonth();

  const yearOptions = getYears(date);
  yearEl.appendChild(yearOptions);
  yearEl.selectedIndex = 100;
};

const populateWeekDays = () => {
  const weekDays = getWeekDays('span');
  weekDaysEl.innerHTML = '';
  weekDaysEl.appendChild(weekDays);
};

const populateDays = (date = todayDate) => {
  const days = getDays(monthEl.selectedIndex, +yearEl.value);
  daysEl.innerHTML = '';
  daysEl.appendChild(days);

  const isCurrentMonth = date.getMonth() === monthEl.selectedIndex && date.getFullYear() === +yearEl.value;
  if (isCurrentMonth) {
    daysEl.classList.add('current-month');
  } else {
    daysEl.classList.remove('current-month');
  }

  daysEl.querySelector(`.date-${date.getDate()}`).classList.add('today');
};

const setDate = (date = todayDate) => {
  monthEl.selectedIndex = date.getMonth();
  yearEl.value = date.getFullYear();
};

const setPreviousMonth = () => {
  const previousDate = new Date(+yearEl.value, monthEl.selectedIndex, 0);
  if (previousDate.getFullYear() < todayDate.getFullYear() - 100) {
    return;
  }

  setDate(previousDate);
  return true;
};

const setNextMonth = () => {
  const nextDate = new Date(+yearEl.value, monthEl.selectedIndex + 1, 1);
  if (nextDate.getFullYear() >= todayDate.getFullYear() + 10) {
    return false;
  }

  setDate(nextDate);
  return true;
};

prevBtn.addEventListener('click', () => {
  if (setPreviousMonth()) {
    populateDays();
  }
});
nextBtn.addEventListener('click', () => {
  if (setNextMonth()) {
    populateDays();
  }
});
monthEl.addEventListener('change', () => populateDays());
yearEl.addEventListener('change', () => populateDays());
todayBtn.addEventListener('click', () => {
  setDate();
  populateDays();
});

populateWeekDays();
populateControls();
populateDays();
