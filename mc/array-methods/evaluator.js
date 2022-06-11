const methods = ['map', 'filter'];

export function Evaluator(dropDownValue, inputValue) {
  this.dropdown = createDropdown(dropDownValue);
  this.input = createInput(inputValue);
  this.output = createOutput();
}

Evaluator.prototype.setOutput = function (output) {
  this.output.value = output;
  return output;
};

Evaluator.prototype.evaluate = function (array) {
  const func = Function(`return function func(value, index, array){ return ${this.input.value} }`);
  return array[this.dropdown.value](func());
};

function createDropdown(dropDownValue = methods[0]) {
  const select = document.createElement('select');
  methods.forEach(method => {
    const option = document.createElement('option');
    option.value = method;
    option.textContent = method;
    select.appendChild(option);
  });
  select.value = dropDownValue;
  return select;
}

function createInput(inputValue) {
  const input = document.createElement('input');
  input.value = inputValue ?? 'value';
  return input;
}

function createOutput() {
  return document.createElement('output');
}
