import { Month } from "./Month.js";
import { monthNameMapping } from "./data.js";
import { getElementFromHtml } from "./utils.js";

const todayMonth = new Date().getMonth();
const todayYear = new Date().getFullYear();

export class Calendar {
  constructor(root) {
    this.selectedMonth = todayMonth;
    this.selectedYear = todayYear;
    this.rootElement = root;
    this.maxYearsRangeCount = 25;
    const calendarHTML = `<section class="calendar__header"></section>`;
    // TODO: Create separate section foe header, month, footer.
    this.calendarElement = getElementFromHtml(calendarHTML);
    this.rootElement.append(this.calendarElement);

    this.calendarMonth = new Month(
      this.selectedMonth,
      this.selectedYear,
      this.rootElement
    );

    this.renderCalendarHeader();
    this.renderUpdatedMonthUI(this.selectedMonth, this.selectedYear);
    this.renderCalendarFooter();
  }

  renderCalendarHeader() {
    this.renderCalendarMonthSelect();
    this.renderCalendarYearSelect();
  }

  renderCalendarMonthSelect() {
    let optionHtml = "";
    for (let i = 0; i < 12; i++) {
      optionHtml += `<option value="${i}">${monthNameMapping[i]}</option>`;
    }

    const monthInputHtml = `<select name="month-selection">${optionHtml}</select>`;
    this.monthInputElement = getElementFromHtml(monthInputHtml);

    if (this.selectedMonth) {
      this.monthInputElement.value = this.selectedMonth;
    }

    this.monthInputElement.addEventListener("change", (e) => {
      const value = e.target.value;
      if (value) {
        this.selectedMonth = Number(value);
        this.renderUpdatedMonthUI(this.selectedMonth, this.selectedYear);
      }
    });

    this.calendarElement.appendChild(this.monthInputElement);
  }

  renderCalendarYearSelect() {
    let optionHtml = "";
    const low = this.selectedYear - this.maxYearsRangeCount;
    const high = this.selectedYear + this.maxYearsRangeCount;
    for (let i = low; i <= high; i++) {
      optionHtml += `<option value="${i}">${i}</option>`;
    }

    const yearInputHtml = `<select name="year-selection">${optionHtml}</select>`;
    this.yearInputElement = getElementFromHtml(yearInputHtml);

    if (this.selectedYear) {
      this.yearInputElement.value = this.selectedYear;
    }

    this.yearInputElement.addEventListener("change", (e) => {
      const value = e.target.value;
      if (value) {
        this.selectedYear = Number(value);
        this.renderUpdatedMonthUI(this.selectedMonth, this.selectedYear);
      }
    });

    this.calendarElement.appendChild(this.yearInputElement);
  }

  renderUpdatedMonthUI(month, year) {
    this.calendarMonth.renderMonthUI(month, year);
  }

  renderCalendarFooter() {
    const buttonHtml = `<button class="today--primary">Today</button>`;
    const todayButton = getElementFromHtml(buttonHtml);

    todayButton.addEventListener("click", () => {
      this.renderUpdatedMonthUI(todayMonth, todayYear);
      this.selectedMonth = todayMonth;
      this.selectedYear = todayYear;
      this.monthInputElement.value = this.selectedMonth;
      this.yearInputElement.value = this.selectedYear;
      const todayDate = new Date().getDate();

      const todayDateCell = document.querySelector(
        `span[data-date="${todayDate}"]`
      );
      todayDateCell.click();
    });

    this.rootElement.append(todayButton);
  }
}
