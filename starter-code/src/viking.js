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
  if(this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
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
  this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack = function(){
  
  var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  var result = saxon.receiveDamage(viking.strength);

  if(saxon.health <= 0) { this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1); }

  return result;
}

War.prototype.saxonAttack = function() {
  var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  var result = viking.receiveDamage(saxon.strength);

  if(viking.health < 1) { this.vikingArmy.splice(this.vikingArmy.indexOf(saxon), 1); }

  return result;
}

War.prototype.showStatus = function(){
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.vikingArmy.length === this.saxonArmy.length) {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}