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
console.log(soldierOne);

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
  this.receiveDamage = function(damage) {
    if (this.health - damage > 0) {
      // still alive!
      this.health -= damage;
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

var vikingBraum = new Viking("Braum", 50, 10);
console.log(vikingBraum.receiveDamage(30));
console.log(vikingBraum.receiveDamage(30));

// Saxon
function Saxon() {}

// War
function War() {}
