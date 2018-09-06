// QUIZ AREA ON WEBPAGE
let panel = $("#quiz-area");

// THE GAME:
    // QUESTIONS!
let questions = [{
  question: " 'Occasionally, I'll hit somebody with my car. So sue me.' ",
  answers: ["Michael Scott", "Jim Halpert", "Creed Bratton", "Kevin Malone"],
  correctAnswer: "Michael Scott"
}, {
  question: "There are too many people on this earth. We need a new plague.",
  answers: ["Creed Bratton", "Stanley Hudson", "Dwight Schrute", "Ryan Howard"],
  correctAnswer: "Dwight Schrute"
}, {
  question: "In any cheating movie, the person being cheated on is the hero. You're Ali Larter, I'm Beyonce.",
  answers: ["Gabe Lewis", "Pam Beesley Halpert ", "Andy Bernard", "Kelly Kapour"],
  correctAnswer: "Andy Bernard"
}, {
  question: "Bears.Beets.Battlestar Galactica.",
  answers: ["Dwight Schrute", "Toby Flenderson", "Ryan Howard", "Jim Halpert"],
  correctAnswer: "Jim Halpert"
}, {
  question: "There is a master key and a spare key for the office. Dwight has them both. When I asked, 'what if you die, Dwight? How will we get into the office?'He said, 'if I'm dead, you guys have been dead for weeks.'",
  answers: ["Pam Beesley Halpert", "Jim Halpert", "Michael Scott", "Toby Flenderson"],
  correctAnswer: "Pam Beesley Halpert"
}, {
  question: "Damnit Meredith, where are your panties?!",
  answers: ["Oscar Martinez", "Angela Martin", "Kelly Kapour", "Pam Beesley Halpert"],
  correctAnswer: "Kelly Kapour"
}, {
  question: "Did I stutter?",
  answers: ["Dwight Schrute", "Stanley Hudson", "Michael Scott", "Phyliss Vance"],
  correctAnswer: "Stanley Hudson"
}, {
  question: "And I feel God in this Chili's tonight.",
  answers: ["Michael Scott", "Pam Beesley", "Anglea Martin", "Dwight Schrute"],
  correctAnswer: "Pam Beesley Halpert"
}, {
    question: "Dwight, you ignorant slut!",
    answers: ["Anglea Martin", "Kelly Kapour", "Jim Halpert", "Michael Scott"],
    correctAnswer: "Michael Scott"
}, {
    question: "I love catching people in the act. That's why I always whip open doors.",
    answers: ["Michael Scott", "Dwight Schrute", "Creed Bratton", "Ryan Howard"],
    correctAnswer: "Dwight Schrute"
  },];


// setINTERVAL VARIABLES:
  //TIMER (KEEP 120, BEST TIME AT MULTIPLE TESTS)
let timer;
let game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (let i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (let j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },

    // FUNCTION/: CORRECT ACTION v INCORRECT ACTION (per Question; google simpler way?)
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
    this.result();
  },

    // RESULT FUNCTION 
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

  // CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});