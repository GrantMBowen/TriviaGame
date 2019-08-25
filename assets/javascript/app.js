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
            answer: ["THE NAME OF A BAND", "A TYPE OF BAR", "A MUSICAL INSTRUMENT", "A CHORD USED IN COUNTRY MUSIC BALLADS"],
            correct: 1,
            image: ("assets/images/honkytonk.jpg")
        },
        {
            question: "'The Night the Lights Went Out in Georgia' has become a staple of country star Reba McEntire's music, but she was not the original singer. Who was the singer, who also starred alongside a redhead comedian in a comedy sketch show, who originally recorded the bloody ballad?",
            answer: ["FAITH HILL", "TAMMY WYNETTE", "VICKI LAWRENCE", "LORETTA LYNN"],
            correct: 2,
            image: ("assets/images/vickilawrence.jpg")
        },
        {
            question: "'The devil went down to Georgia He was looking for a soul to steal He was in a bind cos he was way behind He was willin to make a deal' This song became the signature song for which group?",
            answer: ["OLD CROW MEDICINE SHOW", "MERLE HAGGARD AND THE STRANGERS", "BOB WILLS AND HIS TEXAS PLAYBOYS", "THE CHARLIE DANIELS BAND"],
            correct: 3,
            image: ("assets/images/charliedaniels.png")
        },  
        {
            question: "Jimmy Dean had a huge crossover hit in 1961 with a song about a miner that spawned two sequels, neither of which garnered the same success as the original. Name Dean's hit.",
            answer: ["SIXTEEN TONS", "BLACK LUNG", "JOHN HENRY", "BIG BAD JOHN"],
            correct: 0,
            image: ("assets/images/jimmydean.jpg")
        },  
        {
            question: " This song tells the story of stealing a car from an assembly line 'One Piece at a Time'. Who had a hit with it in 1976?",
            answer: ["GARTH BROOKS", "JOHNNY CASH", "WILLIE NELSON", "JERRY REED"],
            correct: 1,
            image: ("assets/images/johnnycash.jpg")
        },  
        {
            question: "'Amarillo by Morning' is best known as a George Strait hit. What other cowboy singer released this song before George Strait did?",
            answer: ["DON WILLIAMS", "ROGER MILLER", "CHRIS LEDOUX", "JOHN MICHAEL MONTGOMERY"],
            correct: 2,
            image: ("assets/images/chrisledoux.jpg")
        },  
        {
            question: "Who is known for the song ’Hello Darlin’?",
            answer: ["GEORGE JONES", "CONWAY TWITTY", "CHRIS CHRISTOPHERSON", "JOHNNY HORTON"],
            correct: 1,
            image: ("assets/images/conwaytwitty.jpg")
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
                $('.question').html("<h3>The ANSWER is: <h3 style='color: red;'> " + triviaForGame[indexQandA].answer[correct] + "</h3></h3>");
                correctAnswer();
            } 
            else {
                answered = true;
                $('.question').html("<h3>You Chose: " + triviaForGame[indexQandA].answer[id] + "</h3><br><h3>---but the correct answer is: <h3 style='color: red;'> " + triviaForGame[indexQandA].answer[correct] + "</h3></h3>");
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining == 0) {
            answered != true;
            clearInterval(intervalId);
            $('.question').html("<h3>The Correct Answer is: <h3 style='color: red;'> " + triviaForGame[indexQandA].answer[correct] + "</h3></h3>");
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
        $('.answers').append('<img class=answerImage src="' + triviaForGame[indexQandA].image + '">');
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