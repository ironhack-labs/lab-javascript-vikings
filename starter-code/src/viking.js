// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    console.log(this.strength);
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
    else if (this.health <= 0) {
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
    else if (this.health <= 0) {
      console.log("A Saxon has died in act of combat");
    }
  };
}

// War
function War (vikingArmy, saxonArmy) {
  this.vikingArmy = vikingArmy;
  this.saxonArmy = saxonArmy;
  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };
  this.vikingAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      return this.saxonArmy.splice(randomSaxon, 1);
    }
  };
  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0) {
      return this.vikingArmy.splice(randomSaxon, 1);
    }
  };
  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      console.log("Vikings have won the war of the century!");
    }
    else if (this.vikingArmy.length === 0) {
      console.log("Saxons have fought for their lives and survive another day...");
    }
    else if ((this.vikingArmy.length && this.saxonArmy.length) >= 1) {
      console.log("Vikings and Saxons are still in the thick of battle.");
    }
  };
}

var vikingsName = ["Ragnar", "Bjorn", "Rollo", "Ubbe", "Ivar"];
var saxonsName = ["Pedro", "Guti", "Lucas", "Manolo", "Jose"];
var randomHealth = Math.floor(Math.random() * 10);
var randomStrength = Math.floor(Math.random() * 10);

var newVikings = vikingsName.map(function(vikName) {
    console.log(vikName, "  Con ganas de aplastar cráneo Sajón");
    return new Viking(vikName, randomHealth, randomStrength);
});

var newSaxons = saxonsName.map(function(saxName) {
  console.log(saxName, "  Con ganas de matar Vikingos");
  return new Saxon(saxName, randomHealth, randomStrength);
});

console.log(newVikings, newSaxons);

var battle = new War(newVikings, newSaxons);
  // battle.vikingAttack();
  // battle.saxonAttack();
  // battle.showStatus();

while (battle.vikingArmy && battle.saxonArmy) {
  battle.vikingAttack();
  battle.saxonAttack();
  battle.showStatus();
}
