// Soldier
class Soldier {
  // constructor will define the parameters that need to be passed when creating a new element of the class
  constructor(health, strength) {
    this.health = health; // this.health will create a new attribute. health will be the value passed from the parameter when creating the element.
    this.strength = strength; // same for strength
  }

  // method that returns the strength attribute
  attack() {
    return this.strength;
  }

  // method that will reduce the damage being passed as an argument to the current health
  receiveDamage(damage) {
    this.health = this.health - damage; // also works this.health -= damage
  }
}

// Viking. Comes from parent class Soldier. Will inherit attributes and methods from Soldier
class Viking extends Soldier {
  constructor(name, health, strength) {
    // constructor with the same parameters of Soldier + a new one (name)
    super(health, strength); // this super will pass the values health and strength as a parameter to the parent class.
    this.name = name;
  }

  // by default the receiveDamage method will be inherit from Soldier, but because in this case we want it to do something a little difference, we can overwrite the function with the same name
  receiveDamage(damage) {
    this.health = this.health - damage; // same function as Soldier receiveDamage

    // conditional that checks if the Viking is still alive. (this.health > 0)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  // simple method
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon. Comes from parent class Soldier. Will inherit attributes and methods from Soldier
class Saxon extends Soldier {
  // below constructor is optional. Since Saxon will have the exact same arguments/attributes as Soldier.
  constructor(health, strength) {
    // constructor with the same parameters as Soldier, will pass both values through the super
    super(health, strength);
  }

  // same as Viking method
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []; // the armies will start as empty array. These are atributes of the War class.
    this.saxonArmy = []; // same as above
  }

  // to add a viking, simply push the viking being passed as an argument to the vikingArmy attribute
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  // same as above for saxons
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // method for a random viking to attack a random saxon
  vikingAttack() {
    // the following 3 lines are to determine a random viking within the vikingArmy array
    const randomVikingNumber = Math.random() * this.vikingArmy.length; // this will give me a random number between 0 and the length of the army
    const randomVikingIndex = Math.floor(randomVikingNumber); // this will floor the number. We are trying to obtain the index, and index are integers
    const randomViking = this.vikingArmy[randomVikingIndex]; // using the index we can target a random viking from the array and save it inside a variable

    // same as above but for a random saxon from the saxonArmy array
    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = Math.floor(randomSaxonNumber);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // below we want to call the receiveDamage method of the saxon with the strength of the viking
    // receiveDamage(): will reduce the health of a saxon why whatever number is passed as a parameter. See the methods of the Saxon class.
    // attack(): will hold the strength value of the viking. See the methods in the Viking class.
    // IMPORTANT: we save the result inside a variable because we want to return at the end of the function, but we also need to run it BEFORE we check for dead saxons.
    const result = randomSaxon.receiveDamage(randomViking.attack());

    // now we want to check if the saxon died and if he did, remove it from the array

    // One way, iterate over the whole array to check if any saxon died
    //   this.saxonArmy.forEach((saxon, i) => {
    //     if (saxon.health <= 0) {
    //       this.saxonArmy.splice(i, 1);
    //     }
    //   });

    // Better approach, target the saxon that received damage. check if it died.
    // randomSaxon is the saxon that received damage. randomSaxonIndex is its index.
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    // exact same approach as before. just for one saxon attacking a viking.
    const randomVikingNumber = Math.random() * this.vikingArmy.length;
    const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomViking.receiveDamage(randomSaxon.attack());

    // this.vikingArmy.forEach((viking, i) => {
    //   if (viking.health <= 0) {
    //     this.vikingArmy.splice(i, 1);
    //   }
    // });

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  // below is simply returning a string depending on if any array is empty or not.
  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// Super Bonus Iteration 5 War
// bonusWar accepts one optional argument which controls the level of logging
class bonusWar extends War {
  // By providing a value to a constructor param, we can use it as a default value
  constructor(quiet = false) {
    super(); // Call the constructor of War to instatiate the armies
    this.armies = [this.vikingArmy, this.saxonArmy]; // put both armies in an array for ease of access later on
    this.turnCount = 0; // Let's keep track of how many attacks have taken place
    this.quiet = quiet; // Lets us control the level of console logging
  }

  // Below is how we know when a war has ended. We return an array containing two values, a numeric representation of the outcome, and a string describing it.
  // We can use one or both of these return values depending on what we need to do with the result
  // This can be seen as a type of EXIT STATUS
  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return [0, "Saxons fought for their lives, surviving another day..."];
    } else if (this.saxonArmy.length <= 0) {
      return [1, "Vikings have won the war of the century!"];
    } else {
      return [2, "Vikings and Saxons are still in the thick of battle."];
    }
  }

  // method for a random soldier of either subclass to attack another random soldier
  genericAttack() {
    // Instantiate variables to store selected armies
    let attackingArmy, defendingArmy;

    // Increment the turn counter
    this.turnCount++;

    // Lets' randomly decide which army is attacking
    // Math.round() will round as is generally understood by humans, since Math.random() returns a number between 0 and 1, it will return a random integer, 0 or 1, after rounding
    if (Math.round(Math.random()) == 0) {
      [attackingArmy, defendingArmy] = [this.armies[0], this.armies[1]];
    } else {
      [attackingArmy, defendingArmy] = [this.armies[1], this.armies[0]];
    }

    // the following 3 lines are to determine a random attacker within the attacking array
    const randomAttackerNumber = Math.random() * attackingArmy.length; // this will give me a random number between 0 and the length of the army
    const randomAttackerIndex = Math.floor(randomAttackerNumber); // this will floor the number. We are trying to obtain the index, and index are integers
    const randomAttacker = attackingArmy[randomAttackerIndex]; // using the index we can target a random attacker from the array and save it inside a variable

    // same as above but for a random defender in the defending army
    const randomDefenderNumber = Math.random() * defendingArmy.length;
    const randomDefenderIndex = Math.floor(randomDefenderNumber);
    const randomDefender = defendingArmy[randomDefenderIndex];

    // If the bonusWar instance was invoked with quiet = true, we don't console log the rounds
    if (this.quiet != true) {
      // DONT DO THIS
      console.log(
        `Turn ${this.turnCount}: ${attackingArmy[0].constructor.name}s are attacking!`,
        "Attacker:",
        randomAttacker,
        "Defender:",
        randomDefender
      );
    }

    // below we want to call the receiveDamage method of the defender with the strength of the attacker
    // receiveDamage(): will reduce the health of a soldier by whatever number is passed as a param. See the methods of the saxon and viking classes.
    // attack(): will hold the strength value of the attacker.
    // IMPORTANT: we save the result inside a variable because we want to return at the end of the function, but we also need to run it BEFORE we check for dead soldiers.
    const result = randomDefender.receiveDamage(randomAttacker.attack());

    // randomDefender is the soldier that received damage. randomdefenderIndex is its index.
    if (randomDefender.health <= 0) {
      defendingArmy.splice(randomDefenderIndex, 1);
    }

    const statusAfterAttack = this.showStatus();

    // After the attack, if both armies still have living fighters, it returns, itself?! Do some research on Recursive Functions for greater understanding on what's going on here.
    // Note we use the numeric exit status to check the outcome where 2 corresponds to both armies containing living soldiers
    return statusAfterAttack[0] === 2
      ? this.genericAttack()
      : randomAttacker.constructor.name === "Viking"
      ? [
          statusAfterAttack[0],
          result +
            " and the " +
            statusAfterAttack[1] +
            " " +
            randomAttacker.battleCry(),
        ]
      : [statusAfterAttack[0], result + " and the " + statusAfterAttack[1]];
  }
}

// This is a function to encapsulate logic that allows us to run a standardized instace of a War with a single function call.
// A user calling letsBattle doesn't have to know how the war works to test it! Abstraction and encapsulation are what programming is built upon!
function letsBattle(quiet = false) {
  // Helper function to generate some random numbers within given ranges, min and max included
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let vikingNames = [
    "Arne",
    "Birger",
    "Bjørn",
    "Bo",
    "Erik",
    "Frode",
    "Gorm",
    "Halfdan",
  ];

  // Helper function to generate psudo-random vikings within a range of strength and health
  function generateViking() {
    const name = vikingNames[randomIntFromInterval(0, vikingNames.length)];
    const strength = randomIntFromInterval(100, 150);
    const health = randomIntFromInterval(200, 300);
    return new Viking(name, health, strength);
  }

  // Helper function to generate psudo-random Saxons within a range of strength and health
  function generateSaxon() {
    const strength = randomIntFromInterval(80, 125);
    const health = randomIntFromInterval(150, 225);
    return new Saxon(health, strength);
  }

  // Helper function to generate a new instance of bonusWar with psudo-balanced sides
  function warSetup() {
    const bonusWarTest = new bonusWar(quiet);

    // Let's even things about by making the saxon army between 1 and 2 people strong
    for (let i = 0; i < randomIntFromInterval(1, 2); i++) {
      bonusWarTest.addSaxon(generateSaxon());
    }

    bonusWarTest.addViking(generateViking());

    return bonusWarTest;
  }

  // Get an instace of bonusWar from warSetup
  let bonusWarTest = warSetup(quiet);

  let result = bonusWarTest.genericAttack();
  return quiet === true ? result[0] : result[1];
}

// Fun function that allows us to run lots and lots of battles and keeps track of who won. This allows us to tweak the values of our soldiers to balance our "game"
function balanceTest(sampleSize) {
  // We can use a conditional based on parseInt to determine wether the value of the argument sampleSize is an integer like we want it to be, if it's not we throw an error!
  if (parseInt(sampleSize) !== sampleSize) {
    throw TypeError(
      "Please provide an interger Sample Size to the function balanceTest"
    );
  }
  let saxonWinCount = 0;
  let vikingWinCount = 0;
  // Loop sampleSize times, each time we create and run a new instace of letsBattle and keep track of the result
  for (let i = 0; i < sampleSize; i++) {
    result = letsBattle(true);
    result === 0 ? saxonWinCount++ : vikingWinCount++;
  }

  // After we have run our battle simulation, we return a win rate based on the sample size to a fixed number of decimal places using toFixed()
  return `In the balance testing, after ${sampleSize} battles, Vikings won ${(
    (vikingWinCount / sampleSize) *
    100
  ).toFixed(2)}% of the time!`;
}

// A single call to letsBattle with no argument looks like this
console.log(letsBattle());

// And here is our balanceTest
console.log(balanceTest(100000));
