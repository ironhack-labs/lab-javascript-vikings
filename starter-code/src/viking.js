// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function attack () {
  return this.strength;
};
Soldier.prototype.receiveDamage = function receiveDamage (theDamage) {
  this.health -= theDamage;
};

// Viking prototype
Viking.prototype = Object.create(Soldier.prototype); //Create Viking soldier with inherance

// Function Viking

function Viking (name, health, strength){
  this.name = name;
  Viking.prototype.health = health;
  Viking.prototype.strength = strength;
}

//NO NEEDED TO BE DONE REPEATING
/*Viking.prototype.attack = function attack () {
  return this.strength;
};*/
Viking.prototype.receiveDamage = function (theDamage) {
  this.health -= theDamage;
  if (this.health > 0){
    return this.name + " has received " + theDamage + " points of damage";
  }else{
    return this.name + " has died in act of combat";
  }
};
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon prototype
Saxon.prototype = Object.create(Soldier.prototype); //Create Saxon soldier with inherance
// Saxon
function Saxon (health, strength) {
  Saxon.prototype.health = health;
  Saxon.prototype.strength = strength;
}
//NO NEDED TO BE DONE REPEATING
/*Saxon.prototype.attack = function (theDamage) {
  return this.strength;
};*/

Saxon.prototype.receiveDamage = function (theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return "A Saxon has received " + theDamage + " points of damage";
  }else {
    return "A Saxon has died in combat";
  }
};
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function () {
  var recDam = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  this.saxonArmy.splice(0, 1);
  return recDam;
};
War.prototype.saxonAttack = function () {
  var recDam = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  this.vikingArmy.splice(0, 1);
  return recDam;
};
War.prototype.showStatus = function () {

};
