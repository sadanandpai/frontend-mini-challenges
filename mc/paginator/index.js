const paginationElement = document.getElementById('pagination');
const pagesElement = document.getElementById('pages');
const siblingElement = document.getElementById('siblings');
const boundaryElement = document.getElementById('boundary');

class Paginator {
  constructor(paginatorElement, totalPages, siblingCount, boundary, activePage = 1) {
    this.paginatorElement = paginatorElement;
    this.totalPages = totalPages;
    this.activePage = activePage;
    this.siblingCount = siblingCount;
    this.boundary = boundary;

    this.addListener();
    this.populate();
  }

  addListener() {
    this.paginatorElement.addEventListener('click', event => {
      if (event.target.classList.contains('page-number')) {
        this.activePage = +event.target.dataset.value;
        this.populate();
        return;
      }

      if (event.target.classList.contains('page-decrement')) {
        this.activePage = Math.max(1, this.activePage - 1);
        this.populate();
        return;
      }

      if (event.target.classList.contains('page-increment')) {
        this.activePage = Math.min(this.totalPages, this.activePage + 1);
        this.populate();
        return;
      }
    });
  }

  populate() {
    this.paginatorElement.innerHTML = '';
    const boundaryLength = this.siblingCount * 2 + 2 + this.boundary;
    let isLastDot = false;

    const fragment = document.createDocumentFragment();

    let button = document.createElement('button');
    button.classList.add('page-modifier');
    button.classList.add('page-decrement');
    button.textContent = '<';
    if (this.activePage === 1) {
      button.disabled = true;
    }
    fragment.appendChild(button);

    for (let i = 1; i <= this.totalPages; i++) {
      const button = document.createElement('button');
      let buttonValue = i;

      if (
        !(
          i <= this.boundary ||
          i > this.totalPages - this.boundary ||
          (this.activePage <= boundaryLength - this.siblingCount && i <= boundaryLength) ||
          (this.activePage > this.totalPages - boundaryLength + this.siblingCount &&
            i > this.totalPages - boundaryLength) ||
          (i >= this.activePage - this.siblingCount && i <= this.activePage + this.siblingCount)
        )
      ) {
        if (isLastDot) continue;

        buttonValue = '...';
        button.classList.add('dot');
        button.classList.add(this.activePage > i ? 'dot-left' : 'dot-right');
        button.dataset.value =
          this.activePage > i
            ? Math.max(1, this.activePage - boundaryLength)
            : Math.min(this.totalPages, this.activePage + boundaryLength);
      }

      button.textContent = buttonValue;
      if (typeof buttonValue === 'number') {
        button.dataset.value = i;
        button.setAttribute('tabindex', 0);
      }
      isLastDot = typeof buttonValue === 'string';
      button.classList.add('page-number');
      fragment.appendChild(button);
    }

    button = document.createElement('button');
    button.classList.add('page-modifier');
    button.classList.add('page-increment');
    button.textContent = '>';
    if (this.activePage === this.totalPages) {
      button.disabled = true;
    }
    fragment.appendChild(button);

    this.paginatorElement.appendChild(fragment);
    const activeElement = this.paginatorElement.querySelector(`[data-value='${this.activePage}']`);
    activeElement.classList.add('active');
    activeElement.focus();
  }

  setTotalPages(totalPages) {
    this.totalPages = totalPages;
    this.activePage = Math.min(this.activePage, this.totalPages);
    this.populate();
  }

  setBoundary(boundary) {
    this.boundary = boundary;
    this.populate();
  }

  setSiblingCount(siblingCount) {
    this.siblingCount = siblingCount;
    this.populate();
  }
}

const paginator = new Paginator(paginationElement, +pagesElement.value, +siblingElement.value, +boundaryElement.value);

pagesElement.addEventListener('input', () => {
  paginator.setTotalPages(+pagesElement.value);
});

siblingElement.addEventListener('input', () => {
  paginator.setSiblingCount(+siblingElement.value);
});

boundaryElement.addEventListener('input', () => {
  paginator.setBoundary(+boundaryElement.value);
});
