const quizData = [
    {
        question: "1. Which HTML tag is called the root element of an HTML document",
        a: "<html>",
        b: "<head>",
        c: "<body>",
        d: "<title>",
        correct: "a"
    },
    {
        question: "2. Which of the following tag is used to insert a line-break in HTML?",
        a: "<a>",
        b: "<hr>",
        c: "<b>",
        d: "<br>",
        correct: "d"
    },
    {
        question: "3. From the given options which is/are the valid way to represent a color?",
        a: "HEX code like '#0000ff'",
        b: "RGB Value like 'rgb(0,0,255)'",
        c: "A valid color name like 'blue'",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "4. The HTML attribute used to define the internal stylesheet is -",
        a: "style",
        b: "<style>",
        c: "<link>",
        d: "<script>",
        correct: "b",
    },
    {
        question: "5. Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "both a and b",
        d: "none",
        correct: "c",
    },

];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let yourQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const yourQuizData = quizData[yourQuiz]

    questionEl.innerText = yourQuizData.question
    a_text.innerText = yourQuizData.a
    b_text.innerText = yourQuizData.b
    c_text.innerText = yourQuizData.c
    d_text.innerText = yourQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[yourQuiz].correct) {
            score++
        }

        yourQuiz++

        if (yourQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You scored ${score}/${quizData.length}</h2>
            
            <button onclick="location.reload()">Restart</button>
            `
        }
    }
})