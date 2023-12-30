let loadedRowsCount = 1;

const parentTable = document.querySelector("#table-info");
const loadCSVInput = document.querySelector("#load-csv");
const searchInput = document.querySelector("#table-search");
const tableContainer = document.querySelector(".table__container");

/*
[
  {col0: '', col1: ''}
]
*/

let tableData = {};
let headers = [];

function renderHeaders(headers) {
  const tableHeader = document.createElement("thead");
  const tableHeaderRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerText = header;
    tableHeaderRow.append(th);
  });
  tableHeader.append(tableHeaderRow);
  parentTable.append(tableHeader);
}

function populateTableData(tableData, renderHeaders = true) {
  const parentElement = document.createDocumentFragment();

  let rowItems = Object.keys(tableData);
  if (renderHeaders) {
    rowItems = rowItems.slice(1);
  }

  const tableBody = document.createElement("tbody");
  rowItems.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    tableRow.dataset.rowNumber = index + 1;
    tableData[row].forEach((col) => {
      const tableCol = document.createElement("td");
      tableCol.innerText = col;
      tableRow.append(tableCol);
    });
    tableBody.append(tableRow);
  });
  parentElement.append(tableBody);
  parentTable.append(parentElement);
}

function transformCSV(fileContent) {
  if (fileContent) {
    parentTable.innerHTML = "";
    const lines = fileContent.split("\n");
    tableData = lines.reduce((result, line, index) => {
      if (line) {
        const cols = line.split(",");
        result[`row${index}`] = cols;
      }
      return result;
    }, {});
    let rowItems = Object.keys(tableData);
    headers = tableData[rowItems[0]];
    renderHeaders(headers);
    populateTableData(tableData);
  }
}

function searchInTable(searchQuery) {
  const tableBodyTag = document.querySelector("tbody");
  tableBodyTag?.remove();
  const searchResult = Object.keys(tableData).reduce((searchResult, row) => {
    if (tableData[row].includes(searchQuery.toLowerCase())) {
      searchResult[row] = [].concat(tableData[row]);
    }
    return searchResult;
  }, {});
  populateTableData(searchResult, false);
}

loadCSVInput.addEventListener("change", (e) => {
  searchInput.value = "";
  const fileReader = new FileReader();
  const file = e.target.files[0];
  fileReader.readAsText(file, "utf-8");
  fileReader.addEventListener("load", () => transformCSV(fileReader.result));
});

searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value;
  searchInTable(searchQuery);
});

tableContainer.addEventListener("scroll", () => {
  const rowInMultipleOf20 = parentTable.querySelector(
    `[data-row-number="${loadedRowsCount * 20}"]`
  );
  const rowObserver = new IntersectionObserver(
    (entries, observer) => {
      observer.unobserve(rowInMultipleOf20);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          loadedRowsCount += 1;
          const nextRowInMultipleOf20 = parentTable.querySelector(
            `[data-row-number="${loadedRowsCount * 20}"]`
          );
          observer.observe(nextRowInMultipleOf20);
        }
      });
    },
    {
      root: tableContainer,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );
  if (rowInMultipleOf20 && loadedRowsCount === 1) {
    rowObserver.observe(rowInMultipleOf20);
  }
});
