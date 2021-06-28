var question = "TODO Study List";
var options = ["JavaScript", "HTML", "CSS", "React", "Angular", "Zustand", "NextJS", "TypeScript"];

var listContainer = document.getElementById("listContainer");
var animationDuration = 500;

function createTodos(optionsArray) {
  var optionsFragment = document.createDocumentFragment();

  optionsArray.forEach(function (optionText, index) {
    optionsFragment.appendChild(createTodo(optionText, index));
  });

  return optionsFragment;
}

function createTodo(text, index) {
  var todo = document.createElement("div");
  var description = document.createElement("span");
  var button = document.createElement("button");

  description.textContent = text;
  button.textContent = "Done";
  button.classList.add("dont-button");
  button.dataset.index = index;

  todo.appendChild(description);
  todo.appendChild(button);
  return todo;
}

function deleteTodo(button) {
  var element = button.parentNode;
  element.classList.add("hide-smooth");

  // Remove after delay for animation to finish
  setTimeout(function () {
    element.remove();
  }, animationDuration);
}

function buttonClickLinstener(event) {
  var target = event.target;

  if (target.classList.contains("dont-button")) {
    deleteTodo(target);
  }
}

// Function calls
listContainer.appendChild(createTodos(options));
listContainer.addEventListener("click", buttonClickLinstener);
