// SOLDIER FUNCTION  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function Soldier (health, strength, attack, receiveDamange) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(enemy) {
  enemy.health = (enemy.health - this.strength);
};

Soldier.prototype.receiveDamage = function(enemy) {
  this.health = (this.health - enemy.strength);
  // console.log('a soldier has received Damage!');
};

var soldier1 = new Soldier(10, 50);
var soldier2 = new Soldier(70, 80);

soldier1.attack(soldier2);
soldier1.receiveDamage(soldier2);

// VIKING FUNCTION  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function Viking (health, strength, name, battleCry) {
  Soldier.call (this, health, strength);
  this.name = name;
  this.battleCry = "Odin Owns You All!";
}

Viking.prototype.receiveDamage = function(enemy) {
  console.log(this.name + " has received " + enemy.strength + " amount of damage");
  if (enemy.strength >= this.health) {
    console.log(this.name + " has died in the act of combat.");
  }
  this.health = this.health - enemy.strength;
};

var viking1 = new Viking(90, 34, "Thor");

/// SAXON FUNCTION --------

function Saxon(health, strength) {
  Soldier.call (this, health, strength);
}

Saxon.prototype.receiveDamage = function(enemy) {
  console.log("A Saxon has received " + enemy.strength + " points of damage");
    if (enemy.strength >= this.health) {
    console.log("A saxon has died in the act of combat.");
  }
  this.health = this.health - enemy.strength;
};

var lilSaxon = new Saxon (10, 90);


// WAR

var vikingAttack = function(){

};

var saxonAttack = function(){

};

var war = function() {

};
