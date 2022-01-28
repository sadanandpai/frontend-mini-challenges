const paginationElement = document.getElementById("pagination");
const pagesElement = document.getElementById("pages");
const sibblingElement = document.getElementById("sibbling");
const boundaryElement = document.getElementById("boundary");
let totalPages = 12;
let activePage = 1;
let sibblingCount = 1;
let customBoundary = 1;

function createPaginator(element) {
  paginationElement.innerHTML = "";
  const boundary = sibblingCount * 2 + 2 + customBoundary;
  let isLastDot = false;

  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");

    if (i === activePage) {
      button.innerText = i;
      button.dataset.value = i;
      isLastDot = false;
      button.classList.add("active");
    } else if (i <= customBoundary || i > totalPages - customBoundary) {
      button.innerText = i;
      button.dataset.value = i;
      isLastDot = false;
    } else if (
      (activePage <= boundary - sibblingCount && i <= boundary) ||
      (activePage > totalPages - boundary + sibblingCount && i > totalPages - boundary)
    ) {
      button.innerText = i;
      button.dataset.value = i;
      isLastDot = false;
    } else if (i >= activePage - sibblingCount && i <= activePage + sibblingCount) {
      button.innerText = i;
      button.dataset.value = i;
      isLastDot = false;
    } else if (!isLastDot) {
      button.innerText = "...";
      button.classList.add("dot");
      button.dataset.value = i;

      if (activePage > i) {
        button.classList.add("dot-left");
        
      } else {
        button.classList.add("dot-right");
      }

      isLastDot = true;
    } else {
      continue;
    }

    button.classList.add("page-number");
    fragment.appendChild(button);
  }

  element.appendChild(fragment);
}

paginationElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("page-number")) {
    activePage = +event.target.dataset.value;
    createPaginator(paginationElement);
  }
});

sibblingElement.addEventListener("keyup", () => {
  sibblingCount = +sibblingElement.value || 1;
  createPaginator(paginationElement);
});

boundaryElement.addEventListener("keyup", () => {
  customBoundary = +boundaryElement.value || 1;
  createPaginator(paginationElement);
});

pagesElement.addEventListener("keyup", () => {
  totalPages = +pagesElement.value || 12;
  createPaginator(paginationElement);
});

createPaginator(paginationElement);
