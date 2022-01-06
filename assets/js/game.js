var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all the enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is still alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // Prompt to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");

    // if player chooses to "skip" confirm and then end loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;
        }
      }

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );
        
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //break;

        // awards player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loops since enemy is dead
        break;
      } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
      }
    };

    // function to start new game
    var startGame = function() {
        //reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
  
        
    // fight each enemy-robot by looking over them and fighting one at a time
      for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
          // let the player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
          window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

          // pick anew enemy to fight based on the index of the enemyNames array
          var pickedEnemyName = enemyNames[i];

          // reset enemyHealth before starting new fight
          enemyHealth = 50;

          // use debugger to pause script form running and check what's going on at that moment in the code
          // debugger;

          // pass the pickedEnemyname variable's value into the fight function, where it will assume the value of the enemyName parameter
          fight(pickedEnemyName);
    }

        // if player isn't alive, stop the game
        else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
        }
      }
//play again  
        endGame();
    };


    // function to end the entire game
    var endGame = function() {
        window.alert("The game has now ended. Let's see how you did!");
      
       // if player is still alive, player win's!
      if (playerHealth > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
      else {
          window.alert("You've lost your robot in battle.");
    }

    //ask player if they would like to play again
    var playAgainConfirm = window.confirm(" Would you like to play again?");

      if (playAgainConfirm) {
      //restart the game
      startGame();
    }
      else {
      window.alert("Thank you for playing Robot Gladiatos! Come back soon!");
    }
};



// start game when the page loads
startGame();
    















    // run fight function to start game
    //fight()