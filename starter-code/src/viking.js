// Soldier
function Soldier (health, strength) {
 this.health = health;
 this.strength = strength;
 }

 Soldier.prototype.attack = function() {
   return this.strength;
 };

 Soldier.prototype.receiveDamage = function(daDamage) {
   this.health -= daDamage;
 };

// Viking
function Viking (name, health, strength) {
Soldier.call(this, health, strength);
this.name = name;
this.battleCry = function () {
  return "Odin Owns You All!";
};
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(daDamage) {
  this.health -= daDamage;
  if(this.health > 0) {
  return this.name + " has received " + daDamage + " points of damage";
}
 else {
   return this.name + " has died in act of combat";
 }
};

var viking = new Viking('Harald', 150, 300);
viking.receiveDamage(50);
viking.receiveDamage(75);
// console.log(viking.health);
// Saxon
function Saxon (health, strength) {
Soldier.call(this, health, strength);
}
var saxon = new Saxon (60, 25);
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(daDamage) {
  this.health -= daDamage;
  if(this.health > 0) {
  return "A Saxon has received " + daDamage + " points of damage";
}
 else {
   return "A Saxon has died in combat";
 }
};
saxon.receiveDamage(45);
saxon.receiveDamage(10);
// War


function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function () {
     this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
     saxonArmy.forEach(function(fighter) {
       if (fighter.health < 0) {
         saxonArmy.splice(fighter);
       }
     });
    //  return this.saxonArmy
  };
}
// var war = new War();
// war.vikingAttack();
// War.prototype = Object.create(Saxon.prototype);

// War.prototype.addViking = function (viking) {
//   this.vikingArmy.push(viking);
// };
// War.prototype.addSaxon = function (saxon) {
//   this.saxonArmy.push(saxon);
// };
// War.prototype.vikingAttack = function () {
//    saxon.receiveDamage(viking.strength);
// };

// War.prototype.addViking = function (viking) {
//   this.vikingArmy.push(viking);
// // };
