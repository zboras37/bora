const quizContainer = document.getElementById("quiz");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
const result = document.getElementById("result");

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Madrid", "Berlin"],
    answer: 1
  },
  {
    question: "What is the largest country in the world by area?",
    choices: ["China", "India", "United States", "Russia"],
    answer: 3
  },
  {
    question: "What is the name of the world's longest river?",
    choices: ["Nile", "Yangtze", "Amazon", "Yellow"],
    answer: 0
  },
  {
    question: "What is the name of the world's largest ocean?",
    choices: ["Atlantic", "Indian", "Southern", "Pacific"],
    answer: 3
  },
  {
    question: "What is the currency used in Japan?",
    choices: ["Yen", "Dollar", "Euro", "Won"],
    answer: 0
  }
];

let currentQuestion = 0;

function renderQuestion() {
  question.innerHTML = questions[currentQuestion].question;
  for (let i = 0; i < 4; i++) {
    choices.children[i].innerHTML = questions[currentQuestion].choices[i];
  }
}

choices.addEventListener("click", function(event) {
  let selectedChoice = event.target.id;
  if (selectedChoice == questions[currentQuestion].answer) {
    result.innerHTML = "Correct!";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      quizContainer.innerHTML = "You've completed the quiz! <a href='https://google.com'>Click here to see your results</a>";
    }
  } else {
    result.innerHTML = "Incorrect.";
  }
});

renderQuestion();