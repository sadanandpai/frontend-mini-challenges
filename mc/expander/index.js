const base = document.getElementById("base");
const keyValueTemplate = document.querySelector(".key-value");

function getElementsOfTemplate(element) {
  return {
    container: element.querySelector(".key-value-container"),
    valueEl: element.querySelector(".value"),
    addEl: element.querySelector(".add"),
    removeEl: element.querySelector(".remove"),
    arrowEl: element.querySelector(".arrow"),
  };
}

function getNode() {
  const keyValueNode = keyValueTemplate.content.cloneNode(true);
  const { container, valueEl, addEl, removeEl, arrowEl } =
    getElementsOfTemplate(keyValueNode);

  arrowEl.addEventListener("click", () => {
    arrowEl.classList.toggle("open");
  });

  valueEl.addEventListener("input", () => {
    if (valueEl.value === "") {
      addEl.style.display = "inline";
    } else {
      addEl.style.display = "none";
    }
  });

  addEl.addEventListener("click", () => {
    valueEl.style.display = "none";

    const subItem = document.createElement("div");
    subItem.classList.add("sub-item");
    subItem.appendChild(getNode());

    container.appendChild(subItem);
    arrowEl.classList.remove("hide");
    arrowEl.classList.add("open");
  });

  removeEl.addEventListener("click", () => {
    const subItemEl = container.parentElement;
    const parentEl = subItemEl.parentElement;

    subItemEl.remove();
    if (!parentEl.querySelector(".sub-item")) {
      parentEl.querySelector(".value").style.display = "inline";
      parentEl.querySelector(".arrow").classList.remove("open");
      parentEl.querySelector(".arrow").classList.add("hide");
    }
  });

  return keyValueNode;
}

base.appendChild(getNode());
