// optimize read from localStorage
export class KanbanAPI {
  constructor() {}

  static getTasks = (columnId) => {
    const columnTasks = readData().find((column) => column.id === columnId);
    if (!columnTasks) return [];

    return columnTasks?.items;
  };

  static insertTask = (columnId, content) => {
    const tasks = readData();
    const newTask = { id: crypto.randomUUID(), content };
    const updatedTasks = tasks?.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: [...column.items, newTask],
        };
      }
      return column;
    });
    saveData(updatedTasks);
    return newTask;
  };

  static updateTask = (columnId, data) => {
    const tasks = readData();
    const updatedTasks = tasks?.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: column.items?.map((item) => {
            if (item.id === data.id) {
              return data;
            }
            return item;
          }),
        };
      }
      return column;
    });
    saveData(updatedTasks);
  };

  static deleteTask = (itemId, columnId) => {
    const tasks = readData();
    const updatedTasks = tasks?.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: column.items?.filter((item) => item.id !== itemId),
        };
      }
      return column;
    });
    saveData(updatedTasks);
  };

  static updateTaskPosition = (columnId, itemId, position) => {
    const tasks = readData();
    let item = null;
    let updatedTasks = tasks?.map((column) => {
      const existingItem = column.items?.find((item) => item.id === itemId);
      if (existingItem) item = existingItem;
      const updatedColumn = item
        ? {
            ...column,
            items: column.items?.filter((item) => item.id != itemId),
          }
        : column;
      return updatedColumn;
    });
    updatedTasks = updatedTasks.map((column) => {
      if (column.id === columnId && item) {
        column.items.splice(position, 0, item);
        return {
          ...column,
          items: column.items.slice(),
        };
      }
      return column;
    });
    saveData(updatedTasks);
  };
}

const readData = () => {
  const tasks = localStorage.getItem("kanban-board");

  if (!tasks) {
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
    ];
  }

  return JSON.parse(tasks);
};

const saveData = (data) => {
  if (data.length > 0) {
    localStorage.setItem("kanban-board", JSON.stringify(data));
  }
};
