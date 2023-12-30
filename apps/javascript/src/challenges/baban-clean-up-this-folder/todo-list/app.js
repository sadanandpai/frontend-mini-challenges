// Use .js file extension while importing
import { Input } from "./input.js";
import { Item } from "./item.js";

const itemContainer = document.querySelector(".item__container");

const newTodoInput = new Input(addNewItem, "create new todo");

const searchTodoInput = new Input(searchInTodo, "search todo");

itemContainer.before(searchTodoInput.inputElement);
itemContainer.before(newTodoInput.inputElement);

function addNewItem(updatedValue) {
  // performance optimisation: only change updated/or newly added item
  const itemInstance = new Item(updatedValue);
  itemContainer.append(itemInstance.itemElement);
}

function searchInTodo(searchText) {
  const allTodos = document.querySelectorAll(".list__item");
  const isEdit = Array.from(allTodos).some((singleTodo) => {
    const editButton = singleTodo.querySelector("#edit");
    return editButton.dataset.action === "save";
  });
  !isEdit &&
    allTodos.forEach((singleTodo) => {
      const todoContent = singleTodo.querySelector(".item__title").textContent;
      const isVisible = todoContent
        .toLowerCase()
        .includes(searchText.toLowerCase());
      singleTodo.classList.toggle("hide__item", !isVisible);
    });
}
