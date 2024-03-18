var questions = [
  {
    question : "1. How did Luffy get the scar under his eye?",
    choices : ["Attacked by bandits", "Fight with animal", "Himself", "Fight with another villager"],
    correctAnswer : 2
  },
  {
    question : "2. Who was the first villain to defeat Luffy?",
    choices : ["Arlong", "Crocodile", "Don Krieg", "Buggy"],
    correctAnswer : 1
  },
  {
    question : "3. Gecko Moria's devil fruit?",
    choices : ["Ope Ope no mi", "Hito Hito no mi", "Kage Kage no mi", "Gura Gura no mi"],
    correctAnswer : 2
  },
  {
    question : "4. Which character is often addressed as 'Akagami'?",
    choices : ["Luffy", "Whitebeard", "Doflamingo", "Shanks"],
    correctAnswer : 3
  },
  {
    question : "5. Who is the navigator of Straw Hat Pirates?",
    choices : ["Nami", "Robin", "Zoro", "Chopper"],
    correctAnswer : 0
  },
  {
    question : "6. Which island does Robin hail from?",
    choices : ["Alabasta", "Ohara", "Water 7", "Amazon Lily"],
    correctAnswer : 1
  },
  {
    question : "7. Which character is often addressed as 'Snake Princess'?",
    choices : ["Vivi", "Rebecca", "Boa Hancock", "Shirahoshi"],
    correctAnswer : 2
  },
  {
    question : "8. Where was Gol D. Roger executed?",
    choices : ["Raftel", "Loguetown", "Goa Kingdom", "Grey Terminal"],
    correctAnswer : 1
  },
  {
    question : "9. Who is Ace's biological father?",
    choices : ["Whitebeard", "Dragon", "Gol D. Roger", "Garp"],
    correctAnswer : 2
  },
  {
    question : "10. Which devil fruit does Doflamingo have?",
    choices : ["Ope Ope no mi", "Hito Hito no mi", "Kage Kage no mi", "Gura Gura no mi"],
    correctAnswer : 1
  }
]

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
  $(this).find(".next").on("click", function () {

    if(!quizOver) {
      value = $("input[type='radio']:checked").val();
      if(value == undefined) {
        $(document).find(".quizMessage").text("Please select an option");
        $(document).find(".quizMessage").show();
      } else {
        $(document).find(".quizMessage").hide();
        if(value == questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }
        currentQuestion++;
        if(currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          $(document).find(".next").text("Play again?");
          quizOver = true;
        }
      }
    } else {
      $(document).find(".next").text("Next Question");
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
    }
  });
});


function displayCurrentQuestion() {

  console.log("Displaying Current Question");

  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  // Set questionClass text to current question
  $(questionClass).text(question);

  // Remove all current <li> elements (if any)
  $(choiceList).find("li").remove();

  var choice;
  for(var i=0; i<numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $('<li><input type="radio" value=' + i + ' name="dynradio"/>' + choice + '</li>').appendTo(choiceList);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}

function displayScore() {
  $(document).find(".quizContainer > .result").text("Your score : " + correctAnswers + "/" + questions.length);
  $(document).find(".quizContainer > .result").show();
}

function hideScore() {
  $(document).find(".result").hide();
}