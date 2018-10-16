"use strict"

const startGame = () => {
    let play = prompt("Would you like to play?");
    if (play === "yes") {
        let name = prompt("Enter your name.");
        startCombat(play, name);
    } else {
        console.log("Come back later!");
    }
};

const startCombat = (play, name) => {
    let userHealth = 40;
    let grantHealth = 10;
    let userWins = 0;
    let addhealth = 3;
    while (play) {
        let attack = prompt("Choose: attack, add health, or quit");
        if (attack === "attack") {
            userHealth -= getDmg();
            grantHealth -= getDmg();
            console.log(`${name} was attacked. ${name} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
            
        } else if (attack === "add health") {
            if (addhealth > 0) {
                userHealth += getHlth();
                console.log (`${name} added to their health.  ${name} has ${userHealth} health left.`);
                addhealth--;
            } else if (addhealth === 0) {
                console.log("Sorry, you've used all of your healing ability. You're on your own.");
            }   
        } else {
            console.log("You are a coward.");
            break;
        }
        if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
            if (userWins === 3) {
                console.log(`${name} is victorious!`);
                break;
            } else {
                console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
            }
        }
        if (userHealth <= 0) {
            console.log("Grant beat you. Sucks to suck.");
            break;
        }
    
    }
};

const getDmg = () => {
    return Math.floor(Math.random() * 5) + 1;
};

const getHlth = () => {return Math.floor(Math.random() * 3) + 1};
    


startGame();