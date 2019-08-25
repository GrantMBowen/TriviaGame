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

$(document).ready(function () {

    //Define Global Variables

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 16;
    var intervalId;
    var indexQandA = 0;
    var answered = false;
    var correct;


    var triviaForGame = [{

            question: "What is a Honky-Tonk?",
            answer: ["the name of a band", "a type of bar", "a musical instrument", "a chord used in country music ballads"],
            correct: 1,
            image: ("assets/images/honkytonk.jpg")
        },
        {
            question: "'The Night the Lights Went Out in Georgia' has become a staple of country star Reba McEntire's music, but she was not the original singer. Who was the singer, who also starred alongside a redhead comedian in a comedy sketch show, who originally recorded the bloody ballad?",
            answer: ["Faith Hill", "Tammy Wynette", "Vicki lawrence", "Loretta Lynn"],
            correct: 2,
            image: ("assets/images/vickilawrence.jpg")
        },
        {
            question: "'The devil went down to Georgia He was looking for a soul to steal He was in a bind cos he was way behind He was willin to make a deal' This song became the signature song for which group?",
            answer: ["Old Crow Medicine Show", "Merle Haggard and the Strangers", "Bob Wills and His Texas Playboys", "The Charlie Daniels Band"],
            correct: 3,
            image: ("assets/image/vickylawrence.jpg")
        },  

    ];

//--Game Start (reset) document.onload

//         --press start to Begin 
//  Define Function that sets the start of the game

    function startGame() {
        console.log("now we're starting");
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false;
        timeRemaining = 16;
        intervalId = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaForGame[indexQandA].correct;
        var question = triviaForGame[indexQandA].question;
        $('.question').html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaForGame[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $('h4').click(function () {
            id = $(this).attr('id');
            if (id == correct) {
                answered = true;
                $('.question').text("The ANSWER is: " + triviaForGame[indexQandA].answer[correct]);
                correctAnswer();
            } 
            else {
                answered = true;
                $('.question').text("You Chose: " + triviaForGame[indexQandA].answer[id] + "---but the correct answer is: " + triviaForGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining == 0) {
            answered != true;
            clearInterval(intervalId);
            $('.question').text('The correct answer is: ' + triviaForGame[indexQandA].answer[correct]);
            UA();
        } else if (answered == true) {
            clearInterval(intervalId);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('Time Remaining: ' + timeRemaining);
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text('YOU ARE CORRECT!').css({
            'color': '#cc0000'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text('YOU ARE WRONG!').css({
            'color': '#cc0000'
        });
        resetRound();
    }

    var UA = function unansweredQs() {
        unansweredQuestions++;
        $('.timeRemaining').text("TIME'S UP!").css({
            'color': '#cc0000'
        });
        resetRound();
    }


    function resetRound() {
        $('.answersAll').remove();
        $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaForGame[indexQandA].image + '">');
        indexQandA++;
        if (indexQandA < triviaForGame.length) {
            setTimeout(function () {
                loadQandA();
                $('.answerImage').remove();
            }, 5000);
        } else {
            setTimeout(function () {
                $('.question').remove();
                $('.timeRemaining').remove();
                $('.answerImage').remove();
                $('.answers').append('<h4 class= answersAll end>Correct Answers: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Incorrect Answers: ' + incorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Unanswered Questions: ' + unansweredQuestions + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 1000 * 10);


            }, 5000);
        }
    };

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();
    });

});






// $("#question").text(questions[i].question);
//     for (let i = 0; i < questions.length; i++) {

//         for (let y = 0; y < questions[i].possibles.length; y++) {
//             $("<button>").addClass(".answer-btn");
//             $(".answer-btn").attr("data-id", y);

//         }


//     }


//     function updateScore() {
//         // pull selected buton's data-id value
//         // compare to questions[i].correctAnswer
//         // if equal then correct ++ else ....
//     }


// }
// $(document).ready(function() {

//    game (); 

// })

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