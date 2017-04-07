// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
  this.checkIfDeath(damage);
};

Soldier.prototype.checkIfDeath = function () {
};

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  console.log("Odin Owns You All!");
  this.weapon = "BattleCry";
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype.checkIfDeath = function (damage) {
  if (this.health < 1) {
    return this.name +  " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

var viking = new Viking("ThorBlessed", 100, 100);

// SAXONS
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.checkIfDeath = function () {
  if (this.health < 1) {
    return "A Saxon has died in act of combat";
  } else {
    return "A Saxon has received " + damage + " points of damage";
  }
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

var saxon = new Saxon(50, 75);
console.log(saxon.health);
console.log(saxon.strength);

function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];
}
War.prototype.addSaxon = function (saxon) {
  this.saxonsArmy.push(saxon);
};
War.prototype.addViking = function (viking) {
  this.vikingsArmy.push(viking);
};
War.prototype.saxonAttack = function () {
  return this.saxonsArmy[0].attack();
};
War.prototype.vikingAttack = function () {
  return this.vikingsArmy[0].attack();
};
War.prototype.constructor = War;

war = new War();
war.addSaxon(new Saxon(100, 100));
war.addViking(new Viking("ThorBlessed", 100, 100));

console.log(war.saxonsArmy.length);

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
