// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= this.damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= this.damage;
    if (this.health > 0) {
      console.log(name + " has received " + damage + " points of damage");
    }
    else {
      console.log(name + " has died in act of combat");
    }
  };
  this.battleCry = function() {
    console.log("Odin Owns You All!");
  };
}

// Saxon
function Saxon(name, health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.health -= this.damage;
    if (this.health > 0) {
      console.log("A Saxon has received " + damage + " points of damage");
    }
    else {
      console.log("A Saxon has died in act of combat");
    }
  };
}

// War
function War (newVikings, newSaxons) {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };
  console.log(this.vikingArmy);

  this.vikingAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    console.log(this.saxonAmy[randomSaxon]);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      console.log("I'm a dead Saxon");
      this.saxonArmy.splice(randomSaxon, 1);
    }
  };

  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0) {
      console.log("I'm a dead Viking");
      this.vikingArmy.splice(randomViking, 1);
    }
  };

  this.showStatus = function() {
    console.log(this.saxonArmy, this.vikingArmy);
    if (this.saxonArmy.length <= 0) {
      console.log("Vikings have won the war of the century!");
    }
    else if (this.vikingArmy.length <= 0) {
      console.log("Saxons have fought for their lives and survive another day...");
    }
    else if ((this.vikingArmy.length && this.saxonArmy.length) >= 1) {
      console.log("Vikings and Saxons are still in the thick of battle.");
    }
  };
}

// I'm adding the newSaxons inside WAR constructor
var startBattle = new War(newVikings, newSaxons);

// Variables that then I gonna use for names

var vikingsName = ["Ragnar", "Bjorn", "Rollo", "Ubbe", "Ivar"];
var saxonsName = ["Saxon1", "Saxon2", "Saxon3", "Saxon4", "Saxon5"];

// this variable is iterating with map, but the health, and strength is inside because I want warriors with
// his own and independent stats, now it's working!

var newVikings = vikingsName.map(function(vikName) {
  var randomVikingHealth = Math.floor(Math.random() * 10) + 1;
  var randomVikingStrength = Math.floor(Math.random() * 20) + 1;
    console.log(vikName, "  Con ganas de aplastar cráneo Sajón");
    new Viking(vikName, randomVikingHealth, randomVikingStrength);
});

var newSaxons = saxonsName.map(function(saxName) {
  var randomSaxonHealth = Math.floor(Math.random() * 20) + 1;
  var randomSaxonStrength = Math.floor(Math.random() * 10) + 1;
  console.log(saxName, "  Con ganas de matar Vikingos");
  new Saxon(saxName, randomSaxonHealth, randomSaxonStrength);
});

console.log(newVikings, newSaxons);

// This function must activate the game

function play() {
  console.log("The Battle between Vikings and Saxons is about to start");
while (startBattle.vikingArmy.length !== 0 && startBattle.saxonArmy.length !== 0) {
    startBattle.vikingAttack();
    startBattle.saxonAttack();
  }
    startBattle.showStatus();
}
play();
