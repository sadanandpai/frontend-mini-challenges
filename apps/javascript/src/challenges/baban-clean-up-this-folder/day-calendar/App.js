import { apiData } from "./data.js";
import { EventCard } from "./EventCard.js";
import { Layout } from "./Layout.js";

export class App {
  constructor() {
    this.taskData = apiData;
    this.layoutInstance = new Layout();
    this.eventCardInstance = new EventCard(this.taskData);
  }
}

new App();
