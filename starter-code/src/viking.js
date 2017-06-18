// Soldier
function Soldier (health, strength) {

  this.health = health;
  this.strength = strength;

  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };

};

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (health > 0) {
      return this.name + " has received " + this.damage + " points of damage";
    }
    else {
      return this.name + " has died in combat! URGH!";
    }
  };
  this.battleCry = function() {
    return "HEL WILL DRAG YOU TO NIFFLEHEIM!";
  };
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (health > 0) {
      return "A Saxon has received " + this.damage + " points of damage";
    }
    else {
      return "Alfred, save me! --DEATH--";
    }
  };
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(vikingObj) {
    this.vikingArmy.push(vikingObj);
  };

  this.addSaxon = function(saxonObj) {
    this.saxonArmy.push(saxonObj);
  };

  this.vikingAttack = function() {
    var randomViking = Math.floor(Math.random()*vikingArmy.length);
    var randomSaxon = Math.floor(Math.random()*saxonArmy.length);
    randomSaxon.receiveDamage(randomViking.attack());
    if (randomViking.health <= 0) {
      vikingArmy.splice(vikingArmy.indexOf(vikingObj), 1);
    }
  };

  this.saxonAttack = function() {
    var randomViking = Math.floor(Math.random()*vikingArmy.length);
    var randomSaxon = Math.floor(Math.random()*saxonArmy.length);
    randomViking.receiveDamage(randomSaxon.attack());
    if (randomSaxon.health <= 0) {
      saxonArmy.splice(saxonArmy.indexOf(saxonObj), 1);
    }
  };

  this.showStatus = function() {
    if (saxonArmy.length === 0) {
      console.log("Vikings have won the war of the century!");
      return false;
    }
    else if (vikingArmy.length === 0) {
      console.log("Saxons have fought for their lives and survive another day...");
      return false;
    }
    else {
      console.log("Vikings and Saxons are still in the thick of battle.");
      return true;
    }
  }

};

var armySize = 4;
var theWar = new War();
var saxon1 = new Saxon(10, 5);
var viking1 = new Viking("Lordi", 8, 9);

theWar.addSaxon(saxon1);
theWar.addViking(viking1);


for (var i = 0; i < armySize; i++) {
  var saxon = new Saxon(10, 5);
  saxonArmy = theWar.addSaxon(saxon);
  var viking = new Viking("Lordi", 8, 9);
  theWar.addViking(viking);
}

console.log("theWar.saxonArmy", theWar.saxonArmy);
console.log("theWar.vikingArmy", theWar.vikingArmy);
