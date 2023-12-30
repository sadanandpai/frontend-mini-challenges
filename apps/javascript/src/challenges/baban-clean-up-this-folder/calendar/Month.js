import { dayNames } from "./data.js";
import { getDayOfMonth, getDaysCount, getElementFromHtml } from "./utils.js";

export class Month {
  constructor(currentMonth, currentYear, root) {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    this.rootElement = root;
    this.monthElement = document.createElement("div");
    this.maxRowCount = 6;
    this.maxColumnCount = 7;
    this.currentDate = null;
    this.selectedCell = null;

    this.renderMonthUI(this.currentMonth, this.currentYear);
    this.rootElement.append(this.monthElement);
  }

  handleDateClick() {
    this.monthElement.addEventListener("click", (e) => {
      this.selectedCell?.classList.remove("cell--selected");
      const cell = e.target;
      const value = cell.textContent;
      if (value && cell.classList.contains("cell")) {
        this.currentDate = value;
        cell.classList.add("cell--selected");
        this.selectedCell = cell;
      }
    });
  }

  renderColumnCell(value, isSunday) {
    let className = `cell`;
    if (isSunday) className += " sunday";
    let cellHtml = `<span class="${className}" data-date="${value}">${
      value ? value : ""
    }</span>`;

    return cellHtml;
  }

  renderDayNames() {
    let dayNameHtml = "";

    for (let i = 0; i < this.maxColumnCount; i++) {
      dayNameHtml += `<span class="day-names">${this.renderColumnCell(dayNames[i])}</span>`;
    }

    return dayNameHtml;
  }

  renderMonthUI(currentMonth, currentYear) {
    let monthHtml = "";

    const maxDaysCount = getDaysCount(currentMonth, currentYear);
    const startDayIndex = getDayOfMonth(currentMonth, currentYear);
    monthHtml += this.renderDayNames();

    // Appending day values
    let dayCount = 0;
    for (let i = 0; i < this.maxRowCount; i++) {
      if (dayCount === maxDaysCount) break;

      let rowHtml = "";

      for (let j = 0; j < this.maxColumnCount; j++) {
        let isSunday = false;
        if (i === 0 && j < startDayIndex) {
          rowHtml += this.renderColumnCell();
          continue;
        }

        if (j === 0) isSunday = true;

        dayCount++;
        rowHtml += this.renderColumnCell(dayCount, isSunday);

        if (dayCount === maxDaysCount) break;
      }

      monthHtml += rowHtml;
    }

    const monthContainerHtml = `<div class="grid">${monthHtml}</div>`;
    this.monthElement.innerHTML = monthContainerHtml;

    this.handleDateClick();
  }
}
