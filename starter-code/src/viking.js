// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

var viking1 = new Viking("Faromir", 400, 122);

War.prototype.addViking = function (viking1) {
  this.vikingArmy.push(viking1);
};

var saxon1 = new Saxon("Legolas", 400, 250);

War.prototype.addSaxon = function (saxon1) {
  this.saxonArmy.push(saxon1);
};

War.prototype.vikingAttack = function () {
  var r = Math.floor(Math.random() * (max - min)) + min;
  saxonArmy[r].receiveDamage();
};

War.prototype.saxonAttack = function () {

};

War.prototype.showStatus = function () {

};
