import { Kanban } from "./Kanban.js";
/*
const tasks = [
  {
    id:1,
    items:[
      { id:'', content:''}
    ]
  },
  {
    id:2,
    items:[],
  },
  {
    id:3,    
    items:[]
  }
]
}
*/

export class App {
  constructor() {
    this.elements = {};
    this.elements.root = document.querySelector(".task__board");
    this.elements.Kanban = new Kanban(this.elements.root);
  }
}

const app = new App();
