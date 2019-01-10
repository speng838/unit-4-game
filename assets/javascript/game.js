
$(document).ready(function(){
       
    var wins = 0;
    var loses = 0;

    var randomNumber1 = 0;
    var randomNumber2 = 0;
    var randomNumber3 = 0;
    var randomNumber4 = 0;

    var number = 0;

    redo();

        function redo(){
        number = Math.floor((Math.random() * 102) + 19);
        $("#computerNumber").text(number);
      
        randomNumber1 = Math.floor((Math.random() * 12) + 1);
        randomNumber2 = Math.floor((Math.random() * 12) + 1);
        randomNumber3 = Math.floor((Math.random() * 12) + 1);
        randomNumber4 = Math.floor((Math.random() * 12) + 1);
        };

        var total = 0;

        $("#red").on("click", function(){

            total = total + randomNumber1;
            $("#yourNumber").text(total);
            check(); 
        });
        $("#blue").on("click", function(){

            total = total + randomNumber2;
            $("#yourNumber").text(total);
            check();
        });
        $("#yellow").on("click", function(){

            total = total + randomNumber3;
            $("#yourNumber").text(total);
            check();
        });
        $("#green").on("click", function(){

            total = total + randomNumber4;
            $("#yourNumber").text(total);
            check();
            
        });
  

       function check(){
            
            if (total === number){
                wins++;
                total=0;
                $("#win").text("wins:   " + wins);
                $("#winOrLose").text("You won!");
                $("#yourNumber").text(total);
                redo();
            }

            else if(total > number){
                loses++;
                total=0;
                $("#lose").text("losses: " + loses);
                $("#winOrLose").text("You lost");
                $("#yourNumber").text(total);
                redo();
            }
        
        };
    
});
    