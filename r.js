        var choice = prompt("Do you choose rock, paper or scissors?");
        if (! choice) {
             document.write("<p>you cheated! ); </p>");
        } else {
          
            document.write("<p>Player 1:" + " " + choice + "</p>");
        }
        
        var rekhil = Math.random();
        if (rekhil < 0.34) {
            rekhil = "rock";
        } else if(rekhil <= 0.67) {
            rekhil = "paper";
        } else {
            rekhil = "scissors";
        }
     
        document.write("<p>Computer:" + " " + rekhil + "</p>");
     
		
		
		var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        };
        
		var results = compare(choice,rekhil);
        
        document.write("<br><hr><br>" + results);