// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage"
  } else {
    return this.name + " has died in act of combat"
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Viking;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage"
  } else {
    return "A Saxon has died in combat"
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObj){
  this.vikingArmy.push(vikingObj)
}

War.prototype.addSaxon = function(saxonObj){
  this.saxonArmy.push(saxonObj)
}

War.prototype.vikingAttack = function(){
  var aleatViking = Math.floor(Math.random() * this.vikingArmy.length);
  var aleatSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var viking = this.vikingArmy[aleatViking];
  var saxon =  this.saxonArmy[aleatSaxon];
  var msg = saxon.receiveDamage (viking.attack());
  if (saxon.health > 0) {
    this.saxonArmy[aleatSaxon].health = saxon.health;
  } else {
    this.saxonArmy.splice(aleatSaxon, 1);
  }
  return msg;
}

War.prototype.saxonAttack = function(){
  var aleatViking = Math.floor(Math.random() * this.vikingArmy.length);
  var aleatSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var viking = this.vikingArmy[aleatViking];
  var saxon =  this.saxonArmy[aleatSaxon];
  var msg = viking.receiveDamage (saxon.attack());
  if (viking.health > 0) {
    this.vikingArmy[aleatViking].health = viking.health;
  } else {
    this.vikingArmy.splice(aleatViking, 1);
  }
  return msg;
}

War.prototype.showStatus = function(){
  if (this.saxonArmy.length < 1) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length < 1) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}