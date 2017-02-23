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
  this.attach = this.strength;
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};


function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  // this.health = 300;
  // this.strength = 150;
  // this.damage = 150;
};
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



Viking.prototype.battleCry = function() {
  // console.log("Odin Owns You All!");
  return "Odin Owns You All!";
}

Viking.prototype.receiveDamage = function(damage) {
  // console.log("Health " + this.health + " Damage " + damage);
  this.health = this.health - damage;
  // console.log("Health Now " + this.health);
  // console.log(this.name + " has received " + this.damage + " points of damage");
  if (this.health < 0) {
    // console.log(this.name + " has died in act of combat");
    return this.name + " has died in act of combat"
  } else {
  return this.name + " has received " + damage + " points of damage";
  }

}


function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  // this.health = 60;
  // this.strength = 25;
  // this.damage = 25;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  // console.log("Saxon Health " + damage);
  // console.log("A Saxon has received " + {amountOfDamage} + " points of damage");
  if (this.health < 0) {
        // console.log("A Saxon has died in combat");
        return "A Saxon has died in combat";
      }
      return "A Saxon has received " + damage + " points of damage";
}

Saxon.prototype.attack = function() {
    return this.strength;
};

var saxonsArmy = [];
var vikingsArmy = [];

function War () {



  function generateViking () {
    var name     = "VikingName" + i;
    var health   = 300;
    var strength = 150;

    return new Viking(name, health, strength);

  }

  function generateSaxon () {
    var health   = 60;
    var strength = 25;
    return new Saxon(health, strength);
  }
  function arrayViking() {
    vikingsArmy.forEach(function(x) {
      vikingsArmy.push(x);
    });
  }

  for (var i = 0; i < 10; i++) {
    var viking99 = generateViking(i);
    vikingsArmy.push(i);
  }
  for (var j = 10; j < 20; j++) {
    var saxons99 = generateSaxon(i);
    saxonsArmy.push(j);
  }



}

var wars = new War();
console.log(vikingsArmy);
console.log(saxonsArmy);
var v = new Viking();
console.log(v);
console.log(v.battleCry);

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
