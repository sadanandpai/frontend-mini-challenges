import DATA from './data.js';

const timelineTemplate = document.getElementById('timeline-template')! as HTMLTemplateElement;
const timelineListEl = document.querySelector('.timeline_list')!;

DATA.forEach((item) => {
  const listItem = timelineTemplate.content.cloneNode(true) as HTMLElement;
  listItem.querySelector('.date')!.textContent = item.date;
  listItem.querySelector('.title')!.textContent = item.title;
  listItem.querySelector('.content')!.textContent = item.content;
  timelineListEl.appendChild(listItem);
});
