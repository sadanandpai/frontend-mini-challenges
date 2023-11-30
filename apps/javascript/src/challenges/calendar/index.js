import { getDaysFragment, getMonthsFragment, getWeekDaysFragment, getYearsFragment } from './helper.js';

const prevBtn = document.querySelector('.prev');
const monthEl = document.querySelector('.month');
const yearEl = document.querySelector('.year');
const nextBtn = document.querySelector('.next');
const weekDaysEl = document.querySelector('.week-days');
const daysEl = document.querySelector('.days');
const todayBtn = document.querySelector('.btn-today');
const selectedDateEl = document.querySelector('.selected-date');

const date = new Date();
const calendar = {
  today: date,
  selectedDate: date,
  month: date.getMonth(),
  year: date.getFullYear(),
};
const calendarProxy = new Proxy(calendar, {
  set: function (target, key, value) {
    if (key === 'selectedDate') {
      target[key] = new Date(calendar.year, calendar.month, value);
      updateSelectedDate();
      return true;
    }

    target[key] = value;
    updateCalendar();
    calendar.selectedDate = new Date(calendar.year, calendar.month, calendar.today.getDate());
    updateSelectedDate();
    return true;
  },
});

const populateControls = (date = calendarProxy.today) => {
  const monthOptions = getMonthsFragment();
  monthEl.appendChild(monthOptions);
  monthEl.selectedIndex = date.getMonth();

  const yearOptions = getYearsFragment(date);
  yearEl.appendChild(yearOptions);
  yearEl.selectedIndex = 100;
};

const populateWeekDays = () => {
  weekDaysEl.innerHTML = '';
  weekDaysEl.appendChild(getWeekDaysFragment('span'));
};

const setMonthYear = (month = calendarProxy.month, year = calendarProxy.year) => {
  monthEl.selectedIndex = month;
  yearEl.value = year;
};

const populateDays = (date = calendarProxy.today) => {
  const days = getDaysFragment(calendarProxy.month, calendarProxy.year);
  daysEl.innerHTML = '';
  daysEl.appendChild(days);

  const isCurrentMonth = date.getMonth() === monthEl.selectedIndex && date.getFullYear() === +yearEl.value;
  if (isCurrentMonth) {
    daysEl.classList.add('current-month');
  } else {
    daysEl.classList.remove('current-month');
  }

  daysEl.querySelector(`.date-${date.getDate()}`)?.classList.add('today');
};

const updateCalendar = () => {
  setMonthYear();
  populateDays();
};

const updateSelectedDate = () => {
  daysEl.querySelector('.selected')?.classList.remove('selected');
  daysEl.querySelector(`.date-${calendarProxy.selectedDate.getDate()}`)?.classList.add('selected');
  selectedDateEl.textContent = calendarProxy.selectedDate.toDateString();
};

prevBtn.addEventListener('click', () => {
  const prevDate = new Date(calendarProxy.year, calendarProxy.month, 0);
  if (prevDate.getFullYear() < calendarProxy.today.getFullYear() - 100) {
    return;
  }

  if (prevDate) {
    calendarProxy.month = prevDate.getMonth();
    calendarProxy.year = prevDate.getFullYear();
  }
});

nextBtn.addEventListener('click', () => {
  const nextDate = new Date(calendarProxy.year, calendarProxy.month + 1, 1);
  if (nextDate.getFullYear() >= calendarProxy.today.getFullYear() + 10) {
    return;
  }

  if (nextDate) {
    calendarProxy.month = nextDate.getMonth();
    calendarProxy.year = nextDate.getFullYear();
  }
});

monthEl.addEventListener('change', () => (calendarProxy.month = monthEl.selectedIndex));
yearEl.addEventListener('change', () => (calendarProxy.year = +yearEl.value));
todayBtn.addEventListener('click', () => {
  calendarProxy.month = calendarProxy.today.getMonth();
  calendarProxy.year = calendarProxy.today.getFullYear();
});
daysEl.addEventListener('click', (e) => {
  if (e.target.className.includes('date')) {
    calendarProxy.selectedDate = e.target.textContent;
  }
});

populateControls();
populateWeekDays();
populateDays();
updateSelectedDate();
