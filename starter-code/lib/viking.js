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
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);

this.receiveDamage =  function (damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return(this.name + " has died in combat");
    }
    return this.health;
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



Viking.prototype.battleCry = function() {
  return ("Odin Owns You All!");
};




function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
        if (this.health <= 0) {
          return("A Saxon has died in combat");
        }
    return this.health;
};
Saxon.prototype.battleCry = function() {
  return ("Odin Owns You All!");
};




function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];
}

War.prototype.fight = function() {
  this.addViking("Oleh", 50, 10);
  this.addSaxon(50, 8);
  this.vikingsArmy.forEach(function(warrior) {
    var string = warrior.battleCry();
    console.log(string);
  });
};

War.prototype.addViking = function(name, health, strength) {
  this.vikingsArmy.push(new Viking(name, health, strength));
};

War.prototype.addSaxon = function(health, strength) {
  this.saxonsArmy.push(new Saxon(health, strength));
};



War.prototype.saxonAttack = function(attacker, defender) {
  defender.receiveDamage(attacker.strength);
  return (defender.name + " has received " + attacker.strength + " points of damage.");
};




War.prototype.vikingAttack = function(attacker, defender) {
  defender.receiveDamage(attacker.strength);
  return("A Saxon has received " + attacker.strength + " points of damage.");
};

var viking1 = new Viking("Ariel", 25, 10);

console.log(viking1.health);
console.log(viking1.receiveDamage(5));

//  War();
//
module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
