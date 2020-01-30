let score = 0;
let yourChoice;
let enemy;

updateScore(score);
//Overlay rules
$(".rules").on("click", function() {
    $(".overlay").fadeIn('slow');
});      
  $(".return").on("click", function() {
    $(".overlay").fadeOut();
    $(".content").fadeIn();
  })

//Score update
function updateScore(score) {
    $("#highscore").text(score);
}

//Transition to step 2
function transition(fadeOut, fadeIn) {
    fadeOut.fadeOut("slow").promise().done(function() {
        fadeIn.fadeIn('slow');
    });
}

//Display choice made
function makeChoice(clicked_id) {
    yourChoice = parseInt(clicked_id);
    switch (yourChoice) {
        case 1:
            $(".selectionImg").css("background-image", "url(images/icon-rock.svg)");
            $(".selection").css("background", "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))");
            $(".selection").css("box-shadow", "0px 5px #991834");
            break;
        case 2:
            $(".selectionImg").css("background-image", "url(images/icon-paper.svg)");
            $(".selection").css("background", "linear-gradient(to bottom, hsl(230, 89%, 62%),  hsl(230, 89%, 65%))");
            $(".selection").css("box-shadow", "0px 5px #2a43c0");
            break;
        case 3:
            $(".selectionImg").css("background-image", "url(images/icon-scissors.svg)");
            $(".selection").css("background", "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))");
            $(".selection").css("box-shadow", "0px 5px #c86d1c");
            break;
    }
}

//Display enemy choice
function enemyChoice(number) {
    setTimeout(function(){
        switch (number) {
            case 1:
                $(".enemyImg").css("background-image", "url(images/icon-rock.svg)");
                $(".enemy").css("background", "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))");
                $(".enemy").css("box-shadow", "0px 5px #991834");
                $(".enemyImg").css("background-color", "white");
                break;
            case 2:
                $(".enemyImg").css("background-image", "url(images/icon-paper.svg)");
                $(".enemy").css("background", "linear-gradient(to bottom, hsl(230, 89%, 62%),  hsl(230, 89%, 65%))");
                $(".enemy").css("box-shadow", "0px 5px #2a43c0");
                $(".enemyImg").css("background-color", "white");
                break;
            case 3:
                $(".enemyImg").css("background-image", "url(images/icon-scissors.svg)");
                $(".enemy").css("background", "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))");
                $(".enemy").css("box-shadow", "0px 5px #c86d1c");
                $(".enemyImg").css("background-color", "white");
                break;
        }
    }, 2000);

}

function resetEnemy() {
    setTimeout(function() {
        $(".enemyImg").css("background-image", "none");
        $(".enemy").css("background", "none");
        $(".enemy").css("box-shadow", "none");
        $(".enemyImg").css("background-color", "rgba(0, 0, 0, 0.15)");
    }, 1000)
}

function play(clicked_id) {
    transition($( ".content1"), $( ".content2"));
    makeChoice(clicked_id);
    enemy = Math.floor(Math.random() * 3) + 1;
    enemyChoice(enemy);
    setTimeout(function() {
        if ((yourChoice == 1 && enemy == 3) || (yourChoice == 2 && enemy == 1) || (yourChoice == 3 && enemy == 2)) {
            $(".winText").text("YOU WIN");
            $(".win").fadeIn("fast");
            score++;
            updateScore(score);
        }
        else if ((yourChoice == 1 && enemy == 2) || (yourChoice == 2 && enemy == 3) || (yourChoice == 3 && enemy == 1)) {
            $(".winText").text("YOU LOSE");
            $(".win").fadeIn("fast");
            score = 0;
            updateScore(score);
        }
        else {
            $(".winText").text("DRAW");
            $(".win").fadeIn("fast");
        }
    }, 2500);

};

function playAgain() {
    resetEnemy();
    $(".win").fadeOut("slow");
    transition($( ".content2"), $( ".content1"));
}