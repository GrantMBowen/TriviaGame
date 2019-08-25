//Triva Game!

//--Game Start (reset) document.onload

//         --press start to Begin 


// -- On Start (

//     --Timer (setTimeout) starts 
//     --Question posted to <div> 
//     --Answer choices post onto 4 buttons 

// )

// -- On Click (
//     --Record to answer array 
//     --or--
//     --settimeout = null 
// )

//Global Variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 16;
var intervalId;
var indexQandA = 0;
var answered = false;
var correct;


var triviaForGame = [{

        question: "who is Johnny Cash?",
        answer: ["a singer", "a writer", "an athlete", "all of the above"],
        correct: 0 
        image: ("assets/images/cash.jpg")
    }, 
    {
        question: "who is Michael Phelps?",
        answer: ["a singer", "a writer", "an athlete", "all of the above"],
        correct: 3 
        image: ("assets/image/phelps.jpg")
    }

];



function startGame () {
    console.log("now we're starting");
    $('.start-button').remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
}

function load
    $("#question").text(questions[i].question);
    for (let i = 0; i < questions.length; i++) {
        
        for (let y = 0; y < questions[i].possibles.length; y++) {
            $("<button>").addClass(".answer-btn");
            $(".answer-btn").attr("data-id", y);
            
        }

        
    }


    function updateScore() {
        // pull selected buton's data-id value
        // compare to questions[i].correctAnswer
        // if equal then correct ++ else ....
    }


}
$(document).ready(function() {

   game (); 

})

// $("#button").on("click", game())

// event delegation -- assign/delegate event listener to parent element



// $('#questions-rendered-here').on('click', '.answer-btn', function() {
//     console.log($(this));
//     let selectedAnswersIndexValue = $(this).attr('data-id');
//     console.log(selectedAnswersIndexValue);
// })

// let questionTimer = setTimeout(function() {
//     //do something
// }, 5000);

// clearTimeout(questionTimer);

// -- Timer Restarts

// -- loop question code through array.length 

// ---END OF LOOP---

// --Compare userAnswerArr against triviaAnswerArr

//     --loop through array 
//         if userAnswerArray[i] === triviaAnswerArr [i] {
//             add 1 to correctAnswer IDBCursorWithValue
//         }
//         else if !== {add 1 to incorrect value}

//         else if (null) {Add 1 to Unanswered value}

//         --END LOOP--

// --IF CORRECTANSWER > INCORRECT+UNANSWERED {
//     --alert("YOU'RE AN EXPERT!")

// --ELSE {
//     --alert("YOU NEED MORE LEARNING!")

// ONCLICK OR setTimeout 10 SECONDS (RESET);
// }
// }
