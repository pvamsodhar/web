const questions = [
    {
        question: "What is the name of the currency used in Red Dead Online?",
        answers: ["Gold Bars", "Dollar", "Credits"],
        correctAnswer: 0
    },
    {
        question: "Which city is a major hub for trading and activities in Red Dead Online?",
        answers: ["Valentine","Saint Denis", "Blackwater"],
        correctAnswer: 1
    },
    {
        question:" Which of these is NOT a specialist role in the game?",
        answers: ["Bounty Hunter","Trader","Outlaw"],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answer1Button = document.getElementById("answer1");
const answer2Button = document.getElementById("answer2");
const answer3Button = document.getElementById("answer3");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry"); 

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answer1Button.textContent = current.answers[0];
    answer2Button.textContent = current.answers[1];
    answer3Button.textContent = current.answers[2]; 
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        resultElement.textContent = `You finished the quiz! Your score: ${score} out of ${questions.length}`;
        retryButton.style.display = "block"; 
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    resultElement.textContent = ""; 
    retryButton.style.display = "none"; 
}

// Add event listeners
answer1Button.addEventListener("click", () => checkAnswer(0));
answer2Button.addEventListener("click", () => checkAnswer(1));
answer3Button.addEventListener("click", () => checkAnswer(2));
retryButton.addEventListener("click", resetQuiz); 

// Add an interactive element (e.g., a progress bar)
const progressBar = document.getElementById("progressBar"); // Get the progress bar element

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`; // Update progress bar width
}

// Call updateProgressBar after loading the first question and after each answer
loadQuestion();
updateProgressBar(); // Update progress bar initially

// Add event listeners to the answer buttons to update the progress bar
answer1Button.addEventListener("click", updateProgressBar);
answer2Button.addEventListener("click", updateProgressBar);
answer3Button.addEventListener("click", updateProgressBar);