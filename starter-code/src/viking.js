// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function (){
  return this.strength
}

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}


// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.attack = function (){
  return this.strength
}

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage"
  }
  else{
    return this.name + " has died in act of combat"
  }
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You ALL";
}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function (){
  return this.strength
}

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage"
  }
  else{
    return this.name + " has died in combat"
  }
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (numViking){
  this.vikingArmy += [numViking];
}

War.prototype.addSaxon = function (numSaxon){
  this.saxonArmy += [numSaxon];
}

War.prototype.vikingAttack = function (){
  var oldHealth = saxon.health;
  war.vikingAttack = oldHealth - viking.strength;
  
}























// var mySoldier = new Soldier(300,150)
