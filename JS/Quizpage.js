/* document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        quiznumber = buttonId;
        window.location.href = "index.html";
        window.localStorage.setItem("quizid", buttonId);
    });
}); */

/* Start Quiz */
/* Start Quiz */
/* Start Quiz */
/* Start Quiz */
/* Start Quiz */

// intital variables

// start Program
/* prepareResult(questions, showResult);
console.log(showResult);

let currentQuestionIndex = 0;

nextQuestion();

function nextQuestion() {
    const form = document.getElementById("quizForm");
    const errorDiv = document.getElementById("error");
    const selectedOption = form.querySelector('input[name="language"]:checked');

    questionNumber.innerHTML = currentQuestionIndex + 1;

    if (!selectedOption) {
        errorDiv.style.display = "block";
        return;
    }
    errorDiv.style.display = "none";
    console.log(selectedOption.value);
    questionNumber.innerHTML = currentQuestionIndex;
    console.log(questions[currentQuestionIndex].answer);

    updateResult(selectedOption, questions[currentQuestionIndex]);
    updateAnswers(selectedOption, questions[currentQuestionIndex]);

    currentQuestionIndex++;
    if (currentQuestionIndex < numberOfQuestions) {
        loadQuestion();
        if (currentQuestionIndex === 9) {
            button.innerText = "Submit";
        }
    } else {
        currentQuestionIndex = 0;

        console.log(`correct answer: ${result.correctAnswer}`);
        console.log(`wrong answer: ${result.wrongAnswer}`);
        window.localStorage.setItem("result", JSON.stringify(result));
        window.localStorage.setItem("ansers", JSON.stringify(showResult));

        result.correctAnswer = 0;
        result.wrongAnswer = 0;
        console.log(showResult);
        showResult = [];
        window.location.href = "resultPage.html";
    }
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const form = document.getElementById("quizForm");
    questionElement.innerText = questions[currentQuestionIndex].question;

    form.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="language" value="${option}"> ${option}`;
        form.appendChild(label);
    });

    const button = document.createElement("button");
    button.type = "button";
    button.onclick = nextQuestion;
    button.innerText = "Next";
    form.appendChild(button);
}

function updateResult(ele, question) {
    if (ele.value === question.answer) {
        result.correctAnswer++;
    } else {
        result.wrongAnswer++;
    }
}

function updateAnswers(ele, que) {
    if (ele.value === que.answer) {
        showResult.push({
            question: que.question,
            select: ele.value,
            answer: true,
            correctAnswer: que.answer,
        });
    } else {
        showResult.push({
            question: que.question,
            select: ele.value,
            answer: false,
            correctAnswer: que.answer,
        });
    }
}

// Bulid Function
// Bulid Function
// Bulid Function
// Bulid Function

function pageloadupdate() {
    const questionElement = document.getElementById("question");
    const form = document.getElementById("quizForm");
    questionElement.innerText = questions[currentQuestionIndex].question;
    questionNumber.innerHTML = currentQuestionIndex + 1;

    form.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="language" value="${option}"> ${option}`;
        form.appendChild(label);
    });

    button.type = "button";
    button.onclick = nextQuestion;
    button.innerText = "Next";
    form.appendChild(button);
}



function prepareResult(questionsarr, resarr) {
    for (let i = 0; i < questionsarr.length; i++) {
        resarr.push({
            question: questionsarr[i].question,
            select: " ",
            answer: false,
            correctAnswer: questionsarr[i].answer,
        });
    }
} */

const questions1 = [
    {
        question: "Who is the winner of the 2010 FIFA World Cup?",
        options: shuffleArray(["Spain", "Netherlands", "Germany", "Brazil"]),
        answer: "Spain",
    },
    {
        question: "Which country has won the most FIFA World Cup titles",
        options: shuffleArray(["Brazil", "Germany", "Italy", "Argentina"]),
        answer: "Brazil",
    },
    {
        question: "In which year did France win their first FIFA World Cup?",
        options: shuffleArray(["1994", "1998", "2002", "2006"]),
        answer: "1998",
    },
    {
        question: "Who is the top scorer in the history of the FIFA World Cup?",
        options: shuffleArray([
            "Ronaldo",
            "Lionel Messi",
            "Miroslav Klose",
            "Pele",
        ]),
        answer: "Lionel Messi",
    },
    {
        question: "Which national team won the FIFA World Cup in 1978?",
        options: shuffleArray(["Italy", "Brazil", "Netherlands", "Argentina"]),
        answer: "Argentina",
    },
    {
        question: "Which country won the first-ever FIFA World Cup in 1930?",
        options: shuffleArray(["Italy", "Germany", "Uruguay", "Brazil"]),
        answer: "Uruguay",
    },
    {
        question:
            "Who scored the famous 'Hand of God' goal in the 1986 FIFA World Cup?",
        options: shuffleArray([
            "Pele",
            "Diego Maradona",
            "Ronaldo",
            "Lionel Messi",
        ]),
        answer: "Diego Maradona",
    },
    {
        question: "Which country hosted and won the FIFA World Cup in 1998?",
        options: shuffleArray(["England", "France", "Italy", "Spain"]),
        answer: "France",
    },
    {
        question:
            "Who was the captain of the French national team when they won the FIFA World Cup in 2018?",
        options: shuffleArray([
            "Hugo Lloris",
            "Antoine Griezmann",
            "Kylian Mbappe",
            "Paul Pogba",
        ]),
        answer: "Hugo Lloris",
    },
    {
        question:
            "Who scored the winning goal for Germany in the 2014 FIFA World Cup final against Argentina?",
        options: shuffleArray([
            "Miroslav Klose",
            "Thomas Muller",
            "Mario Gotze",
            "Mesut Ozil",
        ]),
        answer: "Mario Gotze",
    },
    {
        question:
            "Which country won the FIFA World Cup in 1934, held in Italy?",
        options: shuffleArray(["Brazil", "Argentina", "Italy", "Germany"]),
        answer: "Italy",
    },
    {
        question:
            "Who was the coach of the Spanish national team when they won their first FIFA World Cup in 2010?",
        options: shuffleArray([
            "Vicente del Bosque",
            "Luis Aragones",
            "Pep Guardiola",
            "Fernando Hierro",
        ]),
        answer: "Vicente del Bosque",
    },
    {
        question:
            "Which national team won the FIFA World Cup in 1954, known for their Miracle of Bern victory?",
        options: shuffleArray(["Hungary", "Uruguay", "Brazil", "West Germany"]),
        answer: "West Germany",
    },
    {
        question:
            "Who was the Golden Boot winner at the 2018 FIFA World Cup in Russia?",
        options: shuffleArray([
            "Antoine Griezmann",
            "Harry Kane",
            "Kylian Mbappe",
            "Luka Modric",
        ]),
        answer: "Harry Kane",
    },
    {
        question:
            "Which country won the FIFA World Cup in 1974, held in West Germany?",
        options: shuffleArray([
            "Netherlands",
            "Argentina",
            "Brazil",
            "West Germany",
        ]),
        answer: "West Germany",
    },
    {
        question:
            "Who is the all-time leading scorer for the Brazilian national team in FIFA World Cup tournaments?",
        options: shuffleArray(["Ronaldo", "Pele", "Neymar", "Romario"]),
        answer: "Ronaldo",
    },
    {
        question:
            " Which national team won the FIFA World Cup in 1994, hosted by the United States?",
        options: shuffleArray(["Brazil", "Italy", "Germany", "Argentina"]),
        answer: "Brazil",
    },
    {
        question:
            "Who was the captain of the Italian national team when they won the FIFA World Cup in 2006?",
        options: shuffleArray([
            "Francesco Totti",
            "Gianluigi Buffon",
            "Fabio Cannavaro",
            "Alessandro Del Piero",
        ]),
        answer: "Fabio Cannavaro",
    },
    {
        question:
            "Which country won the FIFA World Cup in 2010, held in South Africa?",
        options: shuffleArray(["Spain", "Netherlands", "Germany", "Argentina"]),
        answer: "Spain",
    },
];

///////////////////////////////////////Champions League////////////////////////////////////////////

const questions2 = [
    {
        question: "Who is the winner of the 2010 FIFA World Cup?",
        options: shuffleArray([
            "Barcelona",
            "Real Madrid",
            "Bayern Munich",
            "Liverpool",
        ]),
        answer: "Real Madrid",
    },
    {
        question:
            "Who is the all-time top scorer in UEFA Champions League history?",
        options: shuffleArray([
            "Lionel Messi",
            "Robert Lewandowski",
            "Cristiano Ronaldo",
            "Zlatan Ibrahimovic",
        ]),
        answer: "Cristiano Ronaldo",
    },
    {
        question: "Which club won the UEFA Champions League in 2019?",
        options: shuffleArray([
            "Liverpool",
            "Tottenham Hotspur",
            "20Manchester City02",
            "Chelsea",
        ]),
        answer: "Liverpool",
    },
    {
        question:
            "In which year did Barcelona win their first UEFA Champions League title?",
        options: shuffleArray(["1992", "1994", "2006", "2011"]),
        answer: "1992",
    },
    {
        question:
            "Which manager led Real Madrid to three consecutive UEFA Champions League titles (2016-2018)?",
        options: shuffleArray([
            "Pep Guardiola",
            "Zinedine Zidane",
            "Carlo Ancelotti",
            "Jose Mourinho",
        ]),
        answer: "Zinedine Zidane",
    },
    {
        question:
            "Which English club won the UEFA Champions League for the first time in 1999?",
        options: shuffleArray([
            "Liverpool",
            "Arsenal",
            "Manchester United",
            "Chelsea",
        ]),
        answer: "Manchester United",
    },
    {
        question:
            "Who is the player with the fastest goal in UEFA Champions League history?",
        options: shuffleArray([
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Roy Makaay",
            "Zlatan Ibrahimovic",
        ]),
        answer: "Roy Makaay",
    },
    {
        question:
            "Which club won the first edition of the UEFA Champions League in 1956?",
        options: shuffleArray(["Benfica", "Real Madrid", "AC Milan", "Ajax"]),
        answer: "Real Madrid",
    },
    {
        question: "Which club won the UEFA Champions League in 2012?",
        options: shuffleArray([
            "Barcelona",
            "Chelsea",
            "Bayern Munich",
            "Manchester United",
        ]),
        answer: "Chelsea",
    },
    {
        question:
            "Which club achieved the treble (domestic league, domestic cup, and UEFA Champions League) in 1999?",
        options: shuffleArray([
            "Real Madrid",
            "Barcelona",
            "Manchester United",
            "Bayern Munich",
        ]),
        answer: "Manchester United",
    },
    {
        question:
            "  Who is the player with the most appearances in UEFA Champions League history?",
        options: shuffleArray([
            "Lionel Messi ",
            "Cristiano Ronaldo",
            "Iker Casillas",
            "Andres Iniesta",
        ]),
        answer: "Andres Iniesta",
    },
    {
        question:
            "Which manager led Barcelona to win the UEFA Champions League twice (2009 and 2011)?",
        options: shuffleArray([
            "Tito Vilanova ",
            "Luis Enrique",
            "Pep Guardiola",
            "Frank Rijkaard",
        ]),
        answer: "Pep Guardiola",
    },

    {
        question:
            "Which club won the UEFA Champions League for the first time in 1997?",
        options: ["Real Madrid", "Juventus", "Borussia Dortmund", "Ajax"],
        answer: "Borussia Dortmund",
    },
    {
        question: "Which team lost in the UEFA Champions League final in 2020?",
        options: [
            "Barcelona",
            "Paris Saint-Germain",
            "Manchester City",
            "Chelsea",
        ],
        answer: "Paris Saint-Germain",
    },
    {
        question: "How many times has Juventus won the UEFA Champions League?",
        options: ["Once", "Twice", "Three times", "Four times"],
        answer: "Twice",
    },
    {
        question:
            "Which club won the UEFA Champions League in 2005 in a historic final against AC Milan?",
        options: ["Chelsea", "Liverpool", "Real Madrid", "Borussia Dortmund"],
        answer: "Liverpool",
    },
    {
        question:
            "In which year was the tournament name changed to 'UEFA Champions League'?",
        options: ["1990", "1992", "1994", "1996"],
        answer: "1992",
    },
    {
        question:
            "Who is the player who scored the fastest hat-trick in UEFA Champions League history?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Robert Lewandowski",
            "Marco van Basten",
        ],
        answer: "Robert Lewandowski",
    },
    {
        question: "Which club won the UEFA Champions League in 2013?",
        options: ["Real Madrid", "Barcelona", "Bayern Munich", "Chelsea"],
        answer: "Bayern Munich",
    },
    {
        question:
            "Which manager led AC Milan to win the UEFA Champions League in 2007?",
        options: [
            "Carlo Ancelotti",
            "Massimiliano Allegri",
            "Fabio Capello",
            "Arrigo Sacchi",
        ],
        answer: "Carlo Ancelotti",
    },
    {
        question: "Which club won the UEFA Champions League in 2004?",
        options: ["Real Madrid", "FC Porto", "AC Milan", "Manchester United"],
        answer: "FC Porto",
    },
    {
        question:
            "How many times has Liverpool won the UEFA Champions League so far?",
        options: ["Four times", "Five times", "Six times", "Seven times"],
        answer: "Six times",
    },
    {
        question:
            "Who scored the decisive goal in the UEFA Champions League final in 2014?",
        options: [
            "Cristiano Ronaldo",
            "Sergio Ramos",
            "Gareth Bale",
            "Didier Drogba",
        ],
        answer: "Sergio Ramos",
    },
    {
        question: "Which club won the UEFA Champions League in 2010?",
        options: ["Real Madrid", "Barcelona", "Inter Milan", "Bayern Munich"],
        answer: "Inter Milan",
    },
    {
        question:
            "Which club won the UEFA Champions League in 2008 after defeating Chelsea in the final?",
        options: [
            "Manchester United",
            "Barcelona",
            "Real Madrid",
            "Bayern Munich",
        ],
        answer: "Manchester United",
    },
    {
        question:
            "Who was the player awarded the Best Player in the UEFA Champions League final in 2015?",
        options: ["Lionel Messi", "Luis Suarez", "Neymar", "Andres Iniesta"],
        answer: "Andres Iniesta",
    },
    {
        question: "Which club won the UEFA Champions League in 1995?",
        options: ["Ajax", "AC Milan", "Juventus", "Borussia Dortmund"],
        answer: "Ajax",
    },
    {
        question:
            "Which manager led Real Madrid to win the UEFA Champions League in 2002?",
        options: [
            "Carlo Ancelotti",
            "Fabio Capello",
            "Vicente del Bosque",
            "Jose Mourinho",
        ],
        answer: "Vicente del Bosque",
    },
    {
        question: "Which club won the UEFA Champions League in 2021?",
        options: [
            "Manchester City",
            "Chelsea",
            "Bayern Munich",
            "Paris Saint-Germain",
        ],
        answer: "Chelsea",
    },
];

//////////////////////////////////////////////////////////About players/////////////////////////////////////////////////////////////////////

const questions3 = [
    {
        question:
            "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        options: ["Just Fontaine", "Ronaldo", "Gerd Muller", "Pele"],
        answer: "Just Fontaine",
    },
    {
        question:
            "Which player has won the most Ballon d'Or awards as of 2023?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Michel Platini",
            "Johan Cruyff",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Who holds the record for the most assists in a single season of the English Premier League?",
        options: [
            "Kevin De Bruyne",
            "Thierry Henry",
            "Mesut Ozil",
            "Frank Lampard",
        ],
        answer: "Kevin De Bruyne",
    },
    {
        question:
            "Which player scored the fastest hat-trick in Premier League history?",
        options: [
            "Sadio Mane",
            "Robbie Fowler",
            "Sergio Aguero",
            "Alan Shearer",
        ],
        answer: "Sergio Aguero",
    },
    {
        question:
            "Who was the youngest player to debut for FC Barcelona's senior team?",
        options: [
            "Lionel Messi",
            "lamine yamal",
            "Andres Iniesta",
            "Xavi Hernandez",
        ],
        answer: "lamine yamal",
    },
    {
        question:
            "Which goalkeeper holds the record for the most clean sheets in the UEFA Champions League?",
        options: [
            "Iker Casillas",
            "Gianluigi Buffon",
            "Edwin van der Sar",
            "Petr Cech",
        ],
        answer: "Iker Casillas",
    },
    {
        question: "Who scored the fastest goal in FIFA World Cup history?",
        options: [
            "Hakan Sukur",
            "Clint Dempsey",
            "Bryan Robson",
            "Christian Benteke",
        ],
        answer: "Hakan Sukur",
    },
    {
        question:
            "Which player holds the record for the most appearances for the Spanish national team?",
        options: [
            "Sergio Ramos",
            "Iker Casillas",
            "Xavi Hernandez",
            "Andres Iniesta",
        ],
        answer: "Sergio Ramos",
    },
    {
        question:
            "Who has the most goals in a single UEFA European Championship tournament?",
        options: [
            "Michel Platini",
            "Cristiano Ronaldo",
            "Antoine Griezmann",
            "Alan Shearer",
        ],
        answer: "Michel Platini",
    },
    {
        question:
            "Which player has won the most Copa America titles as of 2023?",
        options: ["Lionel Messi", "Neymar", "Pelé", "Diego Maradona"],
        answer: "Lionel Messi",
    },
    {
        question:
            "Who scored the most goals in a single UEFA Champions League season?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Robert Lewandowski",
            "Ruud van Nistelrooy",
        ],
        answer: "Robert Lewandowski",
    },
    {
        question:
            "Which player has the most assists in the history of the FIFA World Cup?",
        options: ["Neymar", "Diego Maradona", "Thomas Müller", "Cafu"],
        answer: "Thomas Müller",
    },
    {
        question:
            "Who holds the record for the most goals scored in a single season of La Liga?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Telmo Zarra",
            "Hugo Sánchez",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Which player has won the most UEFA Men's Player of the Year awards?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Luka Modric",
            "Robert Lewandowski",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Who holds the record for the most consecutive matches scoring in La Liga?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Telmo Zarra",
            "Hugo Sánchez",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Which player has the most goals in the history of the English Premier League?",
        options: [
            "Alan Shearer",
            "Wayne Rooney",
            "Thierry Henry",
            "Sergio Agüero",
        ],
        answer: "Alan Shearer",
    },
    {
        question:
            "Who is the youngest player to score a hat-trick in the UEFA Champions League?",
        options: ["Kylian Mbappe", "Raúl", "Erling Haaland", "Lionel Messi"],
        answer: "Kylian Mbappe",
    },
    {
        question:
            "Which player has the most assists in the history of the UEFA European Championship?",
        options: [
            "Cristiano Ronaldo",
            "Luis Figo",
            "Thierry Henry",
            "David Beckham",
        ],
        answer: "Cristiano Ronaldo",
    },
    {
        question:
            "Who was the first player to score 100 goals in UEFA club competitions?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Raúl",
            "Filippo Inzaghi",
        ],
        answer: "Raúl",
    },
    {
        question:
            "Which player holds the record for the most goals in a single Bundesliga season?",
        options: [
            "Robert Lewandowski",
            "Gerd Müller",
            "Pierre-Emerick Aubameyang",
            "Mario Gomez",
        ],
        answer: "Robert Lewandowski",
    },
    {
        question:
            "Who has the most appearances for the Italian national team as of 2023?",
        options: [
            "Gianluigi Buffon",
            "Fabio Cannavaro",
            "Paolo Maldini",
            "Gianluca Zambrotta",
        ],
        answer: "Gianluigi Buffon",
    },
    {
        question:
            "Which player scored the most goals in a single FIFA Club World Cup tournament?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Luis Suárez",
            "Romário",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Who holds the record for the most goals in a single season of Serie A?",
        options: [
            "Gonzalo Higuaín",
            "Ciro Immobile",
            "Francesco Totti",
            "Gunnar Nordahl",
        ],
        answer: "Gunnar Nordahl",
    },
    {
        question:
            "Which player has the most consecutive matches scoring in the UEFA Champions League?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Robert Lewandowski",
            "Ruud van Nistelrooy",
        ],
        answer: "Cristiano Ronaldo",
    },
    {
        question:
            "Who is the youngest player to debut for the Argentina national team?",
        options: [
            "Diego Maradona",
            "Lionel Messi",
            "Juan Román Riquelme",
            "Sergio Agüero",
        ],
        answer: "Lionel Messi",
    },
    {
        question:
            "Which player has the most goals in a single Copa America tournament?",
        options: ["Pelé", "Lionel Messi", "Neymar", "Gabriel Batistuta"],
        answer: "Lionel Messi",
    },
    {
        question:
            "Who holds the record for the most appearances in the UEFA European Championship?",
        options: [
            "Cristiano Ronaldo",
            "Gianluigi Buffon",
            "Bastian Schweinsteiger",
            "Iker Casillas",
        ],
        answer: "Cristiano Ronaldo",
    },
    {
        question:
            "Which player has the most goals in a single season of the English Premier League?",
        options: [
            "Alan Shearer",
            "Mohamed Salah",
            "Harry Kane",
            "Thierry Henry",
        ],
        answer: "Mohamed Salah",
    },
    {
        question:
            "Who was the first player to score 50 goals in a single La Liga season?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Telmo Zarra",
            "Hugo Sánchez",
        ],
        answer: "Telmo Zarra",
    },
    {
        question:
            "Which player holds the record for the most goals scored in the history of the UEFA Europa League?",
        options: [
            "Radamel Falcao",
            "Henrik Larsson",
            "Klaas-Jan Huntelaar",
            "Antoine Griezmann",
        ],
        answer: "Radamel Falcao",
    },
];

const quizzes = [questions1, questions2, questions3]; // Replace with your actual question arrays

let showResult = [];
let quiznumber = Number(window.localStorage.getItem("quizid"));
let questions = shuffleArray(quizzes[quiznumber]).splice(0, 10); // Select 10 random questions
let numberOfQuestions = questions.length;

console.log(questions);

const questionNumber = document.getElementById("cNumber");
const totqes = document.getElementById("totq");

let quizzesTitle = ["World Cup", "Champions League", "Team Celebration"];

// Select Elements
let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");
let category = document.querySelector(".category");

// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

let result = {
    qNumber: numberOfQuestions,
    correctAnswer: 0,
    wrongAnswer: 0,
};

category.innerHTML = quizzesTitle[quiznumber];

// Initialize quiz
getQuestions();

// Function to generate questions and start quiz
function getQuestions() {
    let questionsObject = questions;
    let qCount = questionsObject.length;

    createBullets(qCount, currentIndex); // Create bullets for navigation

    addQuestionData(questionsObject[currentIndex], qCount); // Display first question

    updateSubmitButtonText();

    preventAnswer(); // Start listening for answers

    countdown(4 * 60); // Start the timer with 5 minutes (5 * 60 seconds)
}

// Function to create navigation bullets
function createBullets(num, currentIndex) {
    countSpan.innerHTML = currentIndex + 1;
    for (let i = 0; i < num; i++) {
        let theBullet = document.createElement("span");

        if (i === 0) {
            theBullet.className = "on";
        }

        bulletsSpanContainer.appendChild(theBullet);
    }
}

// Function to display question and answer options
function addQuestionData(obj, count) {
    if (currentIndex < count) {
        let questionTitle = document.createElement("h2");
        questionTitle.appendChild(document.createTextNode(obj["question"]));
        quizArea.appendChild(questionTitle);

        for (let i = 0; i < obj.options.length; i++) {
            let mainDiv = document.createElement("div");
            mainDiv.className = "answer";

            let radioInput = document.createElement("input");
            radioInput.name = "radioOption"; // Use the same name for all options to group them
            radioInput.type = "radio";
            radioInput.id = `answer_${i}`;
            radioInput.value = obj.options[i];

            let theLabel = document.createElement("label");
            theLabel.htmlFor = `answer_${i}`;
            theLabel.appendChild(document.createTextNode(obj.options[i]));

            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);
            answersArea.appendChild(mainDiv);
        }
    }
}

// Function to handle answer submission and validation
function preventAnswer() {
    submitButton.disabled = true; // Initially disable submit button

    answersArea.addEventListener("change", function (event) {
        submitButton.disabled = false; // Enable submit button when an option is selected
    });

    submitButton.addEventListener("click", function () {
        let selectedOption = document.querySelector(
            'input[name="radioOption"]:checked'
        );

        if (selectedOption) {
            let theRightAnswer = questions[currentIndex].answer;
            console.log(theRightAnswer);

            if (selectedOption.value === theRightAnswer) {
                result.correctAnswer++;
                showResult.push({
                    ques: questions[currentIndex].question,
                    select: selectedOption.value,
                    answer: true,
                    correctAnswer: theRightAnswer,
                });
            } else {
                result.wrongAnswer++;
                showResult.push({
                    ques: questions[currentIndex].question,
                    select: selectedOption.value,
                    answer: false,
                    correctAnswer: theRightAnswer,
                });
            }

            // Increase index to move to the next question
            currentIndex++;

            // Update question number
            countSpan.innerHTML = currentIndex + 1;

            // Clear quiz area for next question
            quizArea.innerHTML = "";
            answersArea.innerHTML = "";

            // Check if quiz is completed
            showResults(numberOfQuestions);

            // Display next question if not completed
            if (currentIndex < numberOfQuestions) {
                addQuestionData(questions[currentIndex], numberOfQuestions);
                handleBullets();
            }
        }
    });
}

// Function to handle navigation bullets
function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span");

    bulletsSpans.forEach((span, index) => {
        if (index === currentIndex) {
            span.className = "on";
        } else {
            span.className = "";
        }
    });
}

// Function to display quiz results
function showResults(count) {
    if (currentIndex === count) {
        localStorage.setItem("result", JSON.stringify(result));
        localStorage.setItem("answers", JSON.stringify(showResult));
        location.href = "resultPage.html"; // Redirect to results page
    }
}

// Function to shuffle an array (already provided in your code)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateSubmitButtonText() {
    if (currentIndex === numberOfQuestions - 1) {
        submitButton.innerText = "Submit";
    } else {
        submitButton.innerText = "Next";
    }
}

function countdown(duration) {
    let minutes, seconds;
    countdownInterval = setInterval(function () {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        countdownElement.innerHTML = `${minutes}:${seconds}`;

        if (--duration < 0) {
            clearInterval(countdownInterval);
            for (let i = currentIndex; i < numberOfQuestions; i++) {
                result.wrongAnswer++;
                showResult.push({
                    ques: questions[currentIndex].question,
                    select: " ",
                    answer: false,
                    correctAnswer: questions[currentIndex].answer,
                });
            }

            // Save the data to localStorage
            localStorage.setItem("result", JSON.stringify(result));
            localStorage.setItem("answers", JSON.stringify(showResult));

            // Delay the redirection slightly to ensure the data is saved
            setTimeout(function () {
                window.location.href = "resultPage.html";
            }, 100); // 100 milliseconds delay
        }
    }, 1000);
}

window.addEventListener("load", () => {
    if (user && user.loginstate) {
        uname.innerHTML = user.username;
        btns.innerHTML = `<button type="button" onclick="logout() ">
                        LogOut
                    </button>`;
        console.log(`from event`);
    }
});

function logout() {
    sessionStorage.clear();
    location.href = "Home.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const btns = document.querySelector(".btns");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    let user = JSON.parse(sessionStorage.getItem("user"));

    if (user && user.loginstate) {
        btns.innerHTML = `<button type="button" onclick="logout() ">
            LogOut
        </button>`;
        console.log(`from event`);
    }
});

function logout() {
    sessionStorage.clear();
    location.href = "Home.html";
}
