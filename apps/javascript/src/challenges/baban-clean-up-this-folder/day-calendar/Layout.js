export class Layout {
  constructor() {
    this.root = document.querySelector(".calendar__container");
    this.renderDayLayout();
  }

  renderDayLayout() {
    const hourArray = new Array(24).fill(0);
    const hourContainerFragment = document.createDocumentFragment();

    hourArray.forEach((_, index) => {
      const hourContainer = document.createElement("div");
      hourContainer.classList.add("hour__container");

      const hourElement = document.createElement("span");
      hourElement.classList.add("event__time")
      hourElement.textContent = `${index > 12 ? index % 12 : index}:00 ${
        index > 11 ? "PM" : "AM"
      }`;

      const divider = document.createElement("div");
      divider.classList.add("divider");

      const taskContainer = document.createElement("div");
      taskContainer.classList.add("event__container");
      taskContainer.dataset.hour = index
      taskContainer.appendChild(divider);

      hourContainer.appendChild(hourElement);
      hourContainer.appendChild(taskContainer);
      hourContainerFragment.appendChild(hourContainer);
    });

    this.root.appendChild(hourContainerFragment);
  }
}
