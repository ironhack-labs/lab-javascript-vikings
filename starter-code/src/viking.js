// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function attack() {
    return this.strength;
  };

  this.receiveDamage = function receiveDamage(damage) {
    this.health = health - damage; //can it be written better?
  };
};

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);

  this.name = name;
};

Viking.prototype = Object.create(Soldier.prototype);   //WTF

Viking.prototype.receiveDamage = function (damage) {
  this.health = health - damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  }

  return `${this.name} has died in act of combat`;
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function addViking(viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function vikingAttack() {

  }
};

var loki = new Viking("Loki", 150, 600);

console.log(loki.receiveDamage(50));

console.log(loki);