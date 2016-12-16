//alert("Hello world. I AM ALIVE!!!");

var scenarios = ["In a library", "At a gas station", "At the mall"];
var weapons = ["Axe", "Gun", "Chainsaw", "Machete"];
var outcome;

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

window.alert(scenarios[randomNumber(scenarios.length - 1)]);


var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    intelligence: 0,
    name: window.prompt("What is your name?"),
    profession: window.prompt("What class are you? (Choose from: warrior, wizard, thief)").toLowerCase()
};

//protect against blank name
if (!character.name) {
    character.name = window.prompt("Why didn't you enter a name? Please enter your name");
    

    if (!character.name) {
        character.name = window.alert("I did try to warn you.  Gunther piddles it is then.");
        character.name = "Gunther Piddles";
    }
}

//protect against blank profession
if (!character.profession || (character.profession !== "warrior" && character.profession !== "wizard" && character.profession !== "thief")) {
    character.profession = window.prompt("Why didn't you enter a profession? Please choose one. (Choose from: warrior, wizard, thief)").toLowerCase();
    
    if (!character.profession) {
        character.profession = window.alert("I did try to warn you.  You are now a wizard.");
        character.profession = "wizard";
    }
}

if (character.profession === "warrior") {
    character.strength = 5;
}
if (character.profession === "wizard") {
    character.intelligence = 5;
}
if (character.profession === "thief") {
    character.stealth = 5;
}

var choice = window.prompt("The brave " + character.profession + " " + character.name + " does something blah blah blah.  Would you like to attack or sneak?");


if (choice === "attack") {
    if (character.strength === 5 || character.intelligence === 5) {
        window.alert("You kill the zombie");
        outcome = "win";
    } else if (character.strength <= 5) {
        window.alert("You lose to the zombie");
        outcome = "lose";
    }
}

if (choice === "sneak") {
    if (character.stealth === 5) {
        window.alert("You sneak by the zombie");
        outcome = "win";
    } else if (character.strength <= 5) {
        window.alert("Zombie catches you and you die.");
        outcome = "lose";
    }
}


if (outcome === "win") {
    window.alert("You survived!");
} else {
    window.alert("You're dead.  Better luck next time.");
}
