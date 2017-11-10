// Soldier
function Soldier (healthArg, strengthArg) {
this.health = healthArg;
this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
   this.healthArg = this.healthArg - damage;
};

function Viking (name, healthArg, strengthArg) {
Soldier.call(this, healthArg, strengthArg);
this.name = name;
};

Viking.prototype = object.create(Soldier.prototype);
return this.strength;

Viking.prototype.receiveDamage = function (damage) {
if (this.health > 0);
return (this.name + "has received " + DAMEGE + "points of damage");
else ();
return (this.name + "has died in act of combat");
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

function Saxon (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
Saxon.prototype.attack = object.create(soldier.prototye);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.healthArg = this.healthArg - damage;
  if ( healthArg > 0);
  return ("A Saxon has received" + damage);
  else ();
  return ("A Saxon has died in combat");
};



// Viking
function Viking () {}

// Saxon
function Saxon () {}

// War
function War () {}
