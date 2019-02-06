// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength

  this.attack = function () {
    return this.strength
  }

  this.receiveDamage = function (the_damage) {
    this.health = the_damage * 5
  }
}
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name
  this.health = health
  this.strength = strength

  this.receiveDamage = function (the_damage) {
    this.health -= the_damage
    if (this.health === 0) {
      return (name + " has died in act of combat");
    } else {
      return (name + " has received " + the_damage + " points of damage");
    }
  }
  this.battleCry = function () {
    return "Odin Owns You All!";
  }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (the_damage) {
    this.the_damage = the_damage
    this.health = the_damage / 5
    if (this.the_damage < 60) {
      return "A Saxon has received " + the_damage + " points of damage"
    }
    return "A Saxon has died in combat"
  }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
var vikingArmy = [];
var saxonArmy = [];

function War() {
 
  this.vikingArmy = vikingArmy;
  this.saxonArmy = saxonArmy;
  this.addViking = function (viking) {
    vikingArmy.push(viking);
  }
  this.addSaxon = function (saxon) {
    saxonArmy.push(saxon);
  }
  this.vikingAttack = function () {
  /*  this.max = vikingArmy.lenght
    this.vikingTurn = function (min, max) {
      return Math.random() * (max - min) + min;
    }
    saxonArmy[vikingturn].push(Saxon.receiveDamage(Viking.strength));
    max--;*/
  }
  this.saxonAttack = function () {

  }
  this.showStatus = function () {
    if (saxonArmy.length !== 0 && saxonArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle."
    } if (saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }  if (vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day..."
          }
  }
}