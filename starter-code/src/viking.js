// Soldier
function Soldier(health,strength) {
  this.health   = health;
  this.strength = strength;  
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {  
  this.health -= damage;
}

// Viking
function Viking(name,health,strength) {
  Soldier.call(this,health,strength,name);
  this.name = name; 
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {  
  this.damage = damage;         // PREGUNTAR DESPUES
  this.health -= damage;
  var message;
  if (this.health > 0) {
    message = `${this.name} has received ${this.damage} points of damage`;
  }
  else {
    message = `${this.name} has died in act of combat`;
  }

  return message;
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}


// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.damage = damage;
  this.health -= damage;

  var message;
  if (this.health > 0) {
    message = `A Saxon has received ${this.damage} points of damage`;
  }
  else {
    message = `A Saxon has died in combat`;
  }

  return message;
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
  var randomNumSaxon  = parseInt(Math.random() * this.saxonArmy.length);
  var randomNumViking = parseInt(Math.random() * this.vikingArmy.length);

  var randomSaxon  = this.saxonArmy[randomNumSaxon];
  var randomViking = this.vikingArmy[randomNumViking];

  var result = randomSaxon.receiveDamage(randomViking.strength);

  if(randomSaxon.health <= 0){
    this.saxonArmy.splice(randomNumSaxon,1);
  }
  return result;
}

War.prototype.saxonAttack = function(){
  var randomNumSaxon  = parseInt(Math.random() * this.saxonArmy.length);
  var randomNumViking = parseInt(Math.random() * this.vikingArmy.length);

  var randomSaxon  = this.saxonArmy[randomNumSaxon];
  var randomViking = this.vikingArmy[randomNumViking];

  var result = randomViking.receiveDamage(randomSaxon.strength);

  if(randomViking.health <= 0){
    this.vikingArmy.splice(randomNumViking,1);
  }
  return result;
}

War.prototype.showStatus = function() {
  var message;
  if (!this.saxonArmy.length) {
    message = "Vikings have won the war of the century!";
  } 
  else if (!this.vikingArmy.length) {
    message = "Saxons have fought for their lives and survive another day...";
  }
  else message = "Vikings and Saxons are still in the thick of battle.";

  return message;
}