userClickedPattern=[];
var started=false;
var level=0;
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];



$('.btn').click(function(){
    var userChosenColour=$(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });

  $(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
  }});

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    
    var randomChosenColor=buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    console.log(randomNumber);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        var audio=new Audio("wrong.mp3");
        audio.play();
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200)
        $('h1').text("Game Over, Press Any Key to Restart");
        startover();
        console.log("wrong");
    }
}

function startover(){
    level=0;
    gamePattern=[];
    started=false;
}