function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
                `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
        );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (
            answerContainer.querySelector(selector) || { numCorrect }
        ).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
    {
        question: "1. Mikä on Suomen vanhin selviytynyt linna?",
        answers: {
            a: "Hämeenlinna",
            b: "Turun linna",
            c: "Olavinlinna",
        },
        correctAnswer: "a",
    },
    {
        question: "2. Kuka oli Suomen ensimmäinen presidentti?",
        answers: {
            a: "Halonen, Tarja Kaarina",
            b: "Kekkonen, Urho Kaleva",
            c: "Ståhlberg, Kaarlo Juho",
        },
        correctAnswer: "c",
    },
    {
        question: "3. Minä vuonna Suomi itsenäistyi?",
        answers: {
            a: "1337",
            b: "1689",
            c: "1887",
            d: "1917",
        },
        correctAnswer: "d",
    },
    {
        question: "4. Minä vuonna Suomi liittyi lopullisesti Ruotsiin?",
        answers: {
            a: "1809",
            b: "1475",
            c: "850",
            d: "420",
        },
        correctAnswer: "a",
    },
    {
        question: "5. Milloin alkoi toinen maailmansota?",
        answers: {
            a: "1939",
            b: "1875",
            c: "1420",
            d: "1945",
        },
        correctAnswer: "a",
    },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

//Ohjetta mitä seurattu https://www.sitepoint.com/simple-javascript-quiz/
