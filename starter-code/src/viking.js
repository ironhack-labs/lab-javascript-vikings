// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health -= damage;
  }
};

var soldierOne = new Soldier(20,5);
// console.log(soldierOne);

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health> 0) {
      // still alive!
      return this.name + " has received " + damage + " points of damage";
    } else {
      // dead
      return this.name + " has died in act of combat";
    }
  }
};

// get prototype inheritance
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// testing Braum
var vikingBraum = new Viking("Braum", 50, 10);

// Saxon
function Saxon(healthArg, damageArg) {
  Soldier.call(this, healthArg, damageArg);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
};

// get prototype inheritance
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// test saxon
var Frank = new Saxon(10,8);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy =[];
  this.addViking = function(vikingUnit) {
    this.vikingArmy.push(vikingUnit);
  };
  this.addSaxon = function(saxonUnit) {
    this.saxonArmy.push(saxonUnit);
  };
  // VIKING ATTACK //
  this.vikingAttack = function() {
    var randomSaxonIndex = getRandomNumber(this.saxonArmy);
    var saxon = this.saxonArmy[randomSaxonIndex];
    var randomVikingIndex = getRandomNumber(this.vikingArmy);
    var viking = this.vikingArmy[randomVikingIndex];
    // storing new health for console logging
    var saxonNewHealth = saxon.health - viking.strength;
    // hurting the random saxon
    console.log("Viking " + viking.name + " (strength = " + viking.strength + ") attacked Saxon " + randomSaxonIndex + " (health " + saxon.health + " => " + saxonNewHealth + ")");
    console.log(saxon.receiveDamage(viking.strength));
    // remove dead saxons from army
    if(saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex,1);
      console.log("Dead saxon is removed from the party: " + this.saxonArmy.length + " Saxon(s) remaining");
      // return "A Saxon has died in combat"; // (this one is needed for passing Jasmin)
    }
    console.log("\x1b[31m%s\x1b[0m",this.showStatus()); // (red text)
    return "Saxon " + randomSaxonIndex + " has received " + viking.strength + " points of damage";
  };
  // SAXON ATTACK //
  this.saxonAttack = function() {
    var randomSaxonIndex = getRandomNumber(this.saxonArmy);
    var saxon = this.saxonArmy[randomSaxonIndex];
    var randomVikingIndex = getRandomNumber(this.vikingArmy);
    var viking = this.vikingArmy[randomVikingIndex];
    // storing old health for console logging
    var vikingNewHealth = viking.health - saxon.strength;
    // hurting the random viking
    console.log("Saxon " + randomSaxonIndex + " (strength = " + saxon.strength + ") attacked Viking " + viking.name + " (health " + viking.health + " => " + vikingNewHealth + ")");
    console.log(viking.receiveDamage(saxon.strength));
    // remove dead vikings from army
    if(viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex,1);
      console.log("Dead viking is removed from the party: " + this.vikingArmy.length + " Viking(s) remaining");
      //return "A Viking has died in combat";
    }
    console.log("\x1b[31m%s\x1b[0m",this.showStatus()); // (red text)
    return viking.name + " has received " + saxon.strength + " points of damage";
  };
  this.showStatus = function() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  };
};

function getRandomNumber(array) {
  return Math.floor(Math.random()*array.length);
}

// Simulate a war
var firstWar = new War(); 

// building an army
var Han = new Viking("Han", 60, 20);
var Jorg = new Viking("Jorg", 55, 17);
firstWar.addViking(vikingBraum);
firstWar.addViking(Han);   
firstWar.addViking(Jorg);
var saxonTwo = new Saxon(5,10);
var saxonThree = new Saxon(100,25);
firstWar.addSaxon(saxonTwo);
firstWar.addSaxon(saxonThree);
firstWar.addSaxon(Frank);

console.log(startWar(firstWar));

// Fight till one of the armies has lost
function startWar(warArray) {
  console.log("-- WAR HAS STARTED --");
  counter = 0;
  while(true){
    if(warArray.saxonArmy.length > 0 && warArray.vikingArmy.length > 0) {
      firstWar.vikingAttack(); 
      counter += 1;
    } else { 
      return "War is over after " + counter + " attacks!";  
    }
    if(warArray.saxonArmy.length > 0 && warArray.vikingArmy.length > 0) {
      firstWar.saxonAttack(); 
      counter += 1;
    } else { 
      return "War is over after " + counter + " attacks!"; 
    }
  }
};


 
