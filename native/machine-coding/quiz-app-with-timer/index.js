// References to HTML elements
const timeLeft = document.querySelector(".time-left");
const quizContainer = document.getElementById("container");
const nextBtn = document.getElementById("next-button");
const countOfQuestion = document.querySelector(".number-of-question");
const displayContainer = document.getElementById("display-container");
const scoreContainer = document.querySelector(".score-container");
const restart = document.getElementById("restart");
const userScore = document.getElementById("user-score");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");
let questionCount = 0;
let scoreCount = 0;
let count = 10; // Timer set to 10 seconds
let countdown;
let selectedQuestions; // Declare selectedQuestions variable

// Quiz questions array
let quizArray;

// Function to shuffle and select random questions
function selectRandomQuestions(questions, count) {
  const shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);
  return shuffledQuestions.slice(0, count);
}

// Fetch the questions from the JSON file and initialize the quiz
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    quizArray = data;
    initial(); // Initialize the quiz with random questions
  })
  .catch((error) => {
    console.error("Error loading questions:", error);
  });

// Define the displayNext function
function displayNext() {
  questionCount += 1;
  clearInterval(countdown); // Clear the timer interval

  if (questionCount === selectedQuestions.length) {
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + selectedQuestions.length;
  } else {
    count = 10; // Reset the timer immediately to 10 seconds
    timeLeft.innerHTML = `${count}s`; // Update the timer display
    countOfQuestion.innerHTML =
      questionCount + 1 + " of " + selectedQuestions.length + " Question";
    quizDisplay(questionCount);
    timerDisplay(); // Start the timer for the next question
  }
}

// Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

// Next Button
nextBtn.addEventListener("click", displayNext);

// Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count === 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

// Display quiz
const quizDisplay = (questionCount) => {
  const quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
}

// Quiz Creation
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (const i of selectedQuestions) {
    i.options.sort(() => Math.random() - 0.5);
    const div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + selectedQuestions.length + " Question";
    const question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick "checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function
function checker(userOption) {
  const userSolution = userOption.innerText;
  const question =
    document.getElementsByClassName("container-mid")[questionCount];
  const options = question.querySelectorAll(".option-div");

  if (userSolution === selectedQuestions[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText == selectedQuestions[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

// Initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 10; // Reset the timer to 10 seconds
  clearInterval(countdown);

  // Select 10 random questions from the pool of questions
  selectedQuestions = selectRandomQuestions(quizArray, 10);

  timeLeft.innerHTML = `${count}s`; // Update the initial timer display
  countOfQuestion.innerHTML =
    questionCount + 1 + " of " + selectedQuestions.length + " Question";

  quizCreator();
  quizDisplay(questionCount);

  // Start the timer for the first question
  timerDisplay();
}

// Start button click event
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

// Hide the quiz and display the start screen on page load
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

// Call initial() when the page loads
initial();
