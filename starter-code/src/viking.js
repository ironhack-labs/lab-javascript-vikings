// Soldier
function Soldier (health, strength) {

 this.health = health;
 this.strength  = strength;

  }

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function () {
  return this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
this.name = name;
Soldier.call(this, health, strength);
}


Viking.prototype = Object.create(Soldier.prototype);


Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if(this.health <= 0){
  console.log(this.name + " has died in act of combat");
  } else {
  console.log(this.name + " has received " + damage);
}
};

Viking.prototype.battleCry = function(){
  return "Odin Owns To you All";

};
var soldier = new Soldier(1000,200);
var viking = new Viking("Arek", 1000, 400);

// Saxonc
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);


Saxon.prototype.receiveDamage = function (damage1) {
 this.health -= damage1;
 if (0 > this.health) {
   console.log ("A Saxon has received " + damage1);
 } else {
   console.log(" A Saxon has died in combat");
 }
};

var saxon = new Saxon (1000,300);
