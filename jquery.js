var playing=false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function(){
                            
                    //Click on start/reset button
    
    $("#startreset").click(function(){
        if(playing==true)                //are we playing?
                                                //yes 
                                                    // Reload the page 
        {
         location.reload();   
        }
                //No
        else{
            playing=true;           //start the game 
            score=0;
            $("#scorevalue").html(score);
            $("#trialsLeft").show();                     /// Show Trialsleft box
            trialsLeft=3;
            addHearts();
            $("#gameOver").hide();
            $("#startreset").html("Reset Game");         //Change start button to reset 
            startAction(); 
            
        } 
    });
    

    
    
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
//    document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound
    
    //stop fruit
    clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startAction, 800);
});


   
        

            //slice fruit
                ///explode sound
                    ////Increase score by 1.

//function
function addHearts(){
    $("#trialsLeft").empty();
    for(i=0; i<trialsLeft; i++){
    $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}
function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({
        'left' : Math.round(550*Math.random()), 'top': -50});
    
    step = 1+ Math.round(5*Math.random());
    
    action = setInterval(function(){                //move down the fruit in every 30 sec
        $("#fruit1").css('top',
            $("#fruit1").position() .top + step);
        
        if($("#fruit1").position().top > $("#fruitsContainer").height()){    //check->too low?
                                ///yes
            
            
           ////if one left-> reduce one life and repeat random fruit
            if(trialsLeft > 1) {                                             //Any trial left
                    $("#fruit1").show();
                    chooseFruit();
                    $("#fruit1").css({
                        'left' : Math.round(550*Math.random()), 'top': -50});
    
                    step = 1+ Math.round(5*Math.random());
                    trialsLeft--;
            
                    addHearts(); //populate trialsLeft box.
            
                    }else{                                                          ////if no life left -> game over,button text:start game
                        playing=false;
                        $("#startreset").html("Start Game");
                        $("#gameOver").show();
                        $("#gameOver").html('<p>Game Over!</p><p>your score is '+ score +'</p>');
                        $("#trialsLeft").hide();
                        stopAction();
                        
                }
        }
    },10);
}

function chooseFruit(){                         ////1.create random fruits->definea random step
    
    $("#fruit1").attr('src' , 'images/'  + fruits[Math.round(8*Math.random())] +'.png');
}

//check if the fruit is too low --->

function stopAction(){
     clearInterval(action);
     $("#fruit1").hide();
}

});
