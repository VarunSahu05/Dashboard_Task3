// script.js

const questions = [

    {
        text: "Who co-founded Google?",
        options: ["Larry Page and Sergey Brin", "Mark Zuckerberg and Eduardo Saverin", "Steve Jobs and Steve Wozniak", "Bill Gates and Paul Allen"],
        answer: 0
    },
    {
        text: "What is the most widely used programming language?",
        options: ["C++", "Java", "Python", "JavaScript"],
        answer: 2
    },
    {
        text: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        text: "Which river is the longest in South America?",
        options: ["Amazon River", "Parana River", "Sao Francisco River", "Magdalena River"],
        answer: 0
    },
];

let currentQuestion = 0;

document.getElementById("question-text").textContent = questions[currentQuestion].text;

document.getElementById("options").innerHTML = "";
questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" id="option${index + 1}" name="answer"><label for="option${index + 1}">${option}</label>`;
    document.getElementById("options").appendChild(li);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
        document.getElementById("result-message").textContent = "";
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
        document.getElementById("result-message").textContent = "";

    }
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const userAnswer = document.querySelector("input[name='answer']:checked");
    if (userAnswer) {
        const correctAnswer = questions[currentQuestion].answer;
        if (userAnswer.id === `option${correctAnswer + 1}`) {
            document.getElementById("result-message").textContent = "Correct!";
        } else {
            document.getElementById("result-message").textContent = `Incorrect. The correct answer is ${questions[currentQuestion].options[correctAnswer]}`;
        }
    } else {
        document.getElementById("result-message").textContent = "Please select an answer.";
    }
});


function updateQuestion() {
    document.getElementById("question-text").textContent = questions[currentQuestion].text;
    document.getElementById("options").innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" id="option${index + 1}" name="answer"><label for="option${index + 1}">${option}</label>`;
        document.getElementById("options").appendChild(li);
    });
}