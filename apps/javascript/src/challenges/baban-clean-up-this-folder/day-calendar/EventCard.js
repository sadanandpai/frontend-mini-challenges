export class EventCard {
  constructor(taskData) {
    this.taskData = taskData;
    this.queue = [];
    this.eventContainerList = Array.from(
      document.querySelectorAll(".event__container")
    );

    this.sortTaskData();
    this.renderDayEvents();
  }

  transformData() {}

  findEventContainer(startHour) {
    return this.eventContainerList.find(
      (event) => Number(event.dataset.hour) === startHour
    );
  }

  getEventOverlap({ startHour, startMin, endHour, endMin }) {
    let deleteCount = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const { endHour: endHours, endMin: endMinute } = this.queue[i];
      if (
        endHours < startHour ||
        (endHours === startHour && startMin > endMinute)
      ) {
        deleteCount++;
      }
    }

    this.queue.splice(0, deleteCount, { startHour, startMin, endHour, endMin });
    return this.queue.length;
  }

  getStringPadding(value) {
    return value.toString().padStart(2, "0");
  }

  // shift to utils file
  getLocaleTime(value) {
    return this.getStringPadding(value > 12 ? value % 12 : value);
  }

  getEventFormattedTime({ startHour, startMin, endHour, endMin }) {
    const meridian = startHour > 11 ? "PM" : "AM";
    return `${this.getLocaleTime(startHour)}:${this.getStringPadding(
      startMin
    )} ${meridian} - ${this.getLocaleTime(endHour)}:${this.getStringPadding(
      endMin
    )} ${meridian}`;
  }

  renderDayEvents() {
    this.taskData.forEach(({ startHour, startMin, endHour, endMin, color }) => {
      const eventContainer = this.findEventContainer(startHour);
      const eventCard = document.createElement("div");
      const top = (startHour + startMin / 60) * 60;
      const height = (endHour - startHour + (endMin - startMin) / 60) * 60;

      const overlaps = this.getEventOverlap({
        startHour,
        startMin,
        endHour,
        endMin,
      });

      eventCard.classList.add("event__card");
      eventCard.style.top = `${top}px`;
      eventCard.style.height = `${height}px`;
      eventCard.style.width = `${Math.floor(93.5 / overlaps)}%`;
      eventCard.style.backgroundColor = color;
      eventCard.textContent = this.getEventFormattedTime({
        startHour,
        startMin,
        endHour,
        endMin,
      });

      eventContainer.appendChild(eventCard);
    });
  }

  sortTaskData() {
    this.taskData = this.taskData.map(({ startTime, endTime, ...rest }) => {
      let [startHour, startMin] = startTime.split(":");
      let [endHour, endMin] = endTime.split(":");
      startHour = parseInt(startHour);
      startMin = parseInt(startMin);
      endHour = parseInt(endHour);
      endMin = parseInt(endMin);

      return {
        ...rest,
        startHour,
        startMin,
        endHour,
        endMin,
      };
    });

    this.taskData.sort((a, b) => {
      if (a.endHour < b.endHour) {
        return -1;
      }
      if (a.startHour < b.startHour) {
        return -1;
      }
      if (a.startHour === b.startHour) {
        console.log(a, b);
        return a.startMin - b.startMin;
      }
      return 1;
    });
  }
}
