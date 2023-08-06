const mainContainer = document.getElementById('main__container');
const loadingContainer = document.getElementById('loading__container');
const form = document.getElementById('submitForm');

// Build URL to fetch from OpenTDB API
function buildURL() {
  return 'https://opentdb.com/api.php?amount=1&type=multiple';
}

// display question in labels
function displayLabels(choice) {
  for (let i = 1; i <= choice.length; i++) {
    const choiceElement = document.getElementById(`choice_${i}`);
    const labelEle = document.getElementById(`choice${i}`);
    choiceElement.value = choice[i - 1];
    labelEle.innerHTML = choice[i - 1];
  }
}

// Build question from API response data
function buildQuestion(question) {
  const { question: questionText, correct_answer, incorrect_answers } = question;

  document.getElementById('question').innerHTML = questionText;

  const choiceArray = randomizeQuestion(correct_answer, incorrect_answers);

  displayLabels(choiceArray);
}

// Function to generate an array that contains correct and incorrect answers in randomized order
function randomizeQuestion(correctAnswer, incorrectAnswers) {
  const randomArray = [correctAnswer, ...incorrectAnswers];

  // Shuffle the array to change the order of the elements
  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }

  return randomArray;
}

// Async function that handles API call
async function callingAPI(url) {
  // Show loading gif when data is being fetched
  mainContainer.style.display = 'none';
  loadingContainer.style.display = 'block';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const questionObj = data.results[0];
    buildQuestion(questionObj);
    return questionObj.correct_answer;
  } catch (err) {
    console.error(err);
  } finally {
    mainContainer.style.display = 'block';
    loadingContainer.style.display = 'none';
  }
}

// Async function that processes the API call function
async function processAPICall() {
  const reqURL = buildURL();
  const correctAnswer = await callingAPI(reqURL);

  // Form submit event to check the answer against the correct and user-selected answer
  checkAnswer(correctAnswer);
}

function checkAnswer(correctAns) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedAnswer = document.querySelector('input[name="choices"]:checked');

    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      const correctAnswerElement = document.querySelector(`input[value="${correctAns}"]`);

      if (correctAnswerElement && selectedValue === correctAnswerElement.value) {
        displayAlert('correct');
        setTimeout(() => {
          clearDisplayAlert();
          form.reset();
          processAPICall();
        }, 1000);
      } else {
        displayAlert('wrong');
        setTimeout(() => {
          clearDisplayAlert();
          form.reset();
        }, 1000);
      }
    } else {
      alert('Please select an answer');
    }
  });
}

// Event listener to trigger API call when the DOM is loaded
document.addEventListener('DOMContentLoaded', processAPICall);

// Function to display the alert
function displayAlert(status) {
  const alertElement = document.getElementById(`${status}__alert`);
  alertElement.style.display = 'inline-block';
}

// Function to clear the displayed alert
function clearDisplayAlert() {
  const correctAlert = document.getElementById('correct__alert');
  const wrongAlert = document.getElementById('wrong__alert');

  correctAlert.style.display = 'none';
  wrongAlert.style.display = 'none';
}
