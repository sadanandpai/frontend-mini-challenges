import { Evaluator } from './evaluator.js';

const evaluators = [];
const methodListElement = document.getElementById('methodList');

function addNewMethod(event, dropdownValue, inputValue) {
  const evaluator = new Evaluator(dropdownValue, inputValue);

  const methodHolder = document.createElement('div');
  const userInput = document.createElement('div');
  userInput.appendChild(evaluator.dropdown);
  userInput.appendChild(evaluator.input);

  const userOutput = document.createElement('div');
  userOutput.appendChild(evaluator.output);

  methodHolder.appendChild(userInput);
  methodHolder.appendChild(userOutput);
  methodListElement.appendChild(methodHolder);
  evaluators.push(evaluator);
}

function onEvaluation() {
  const array = convertStringToArray(document.querySelector('[name="array_values"]').value);

  evaluators.reduce((array, evaluator) => {
    const result = evaluator.evaluate(array);
    evaluator.setOutput(result);
    return result;
  }, array);
}

function convertStringToArray(string) {
  return string.split(',');
}

document.getElementById('add').addEventListener('click', addNewMethod);
document.getElementById('evaluate').addEventListener('click', onEvaluation);

// code
addNewMethod(null, 'filter', 'index > 3');
addNewMethod(null, 'map', 'value / 5');
