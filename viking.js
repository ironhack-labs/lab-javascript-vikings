// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage ){
  this.health -= damage;
}

// Viking
function Viking (name, health, strength ) {
  this.name = name;
  Soldier.call (this, health, strength );
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if ( this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  }else{
    return "A Saxon has died in combat";
  }
}

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.delete = function(value) {
  this.slice(this.indexOf(value), 1);
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  viking = this.vikingArmy.random();
  saxon = this.saxonArmy.random();
  damageCall = saxon.receiveDamage(viking.attack());
  if (saxon.health <= 0) {
    this.saxonArmy.delete(saxon);
  }
  return damageCall;
}

War.prototype.saxonAttack = function() {
  viking = this.vikingArmy.random();
  saxon = this.saxonArmy.random();
  damageCall = viking.receiveDamage(saxon.attack());
  if (viking.health <= 0) {
    this.vikingArmy.delete(viking);
  }
  return damageCall;
}

War.prototype.showStatus = function() {
  if (this.vikingArmy.length < 1) {
    return "Vikings have won the war of the century!";
  }
  else {
    if (this.saxonArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
