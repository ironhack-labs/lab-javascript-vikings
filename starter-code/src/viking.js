// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
}
Soldier.prototype.attack = function() {
  return this.strength
}
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name;
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`
  } else {
    return `${this.name} has died in act of combat`
  }
  
}
Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!'
}
Saxon.prototype = Object.create(Soldier.prototype)
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`
  } else {
    return `A Saxon has died in combat`
  }
  
}
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking)
}
War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon)
}
War.prototype.vikingAttack = function() {
  let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
  if (this.saxonArmy[0].health <= 0) {
    this.saxonArmy.splice(0, 1)
  } else {
    return result;
  }
}
War.prototype.saxonAttack = function() {
  let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
  if (this.vikingArmy[0].health <= 0) {
    this.vikingArmy.splice(0, 1)
  } else {
    return result;
  }
}
War.prototype.showStatus = function() {
  if (this.vikingArmy !== [] && this.saxonArmy !== []) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if (this.saxonArmy === []) {
    return "Vikings have won the war of the century!";
  } else {
    return "Saxons have fought for their lives and survive another day...";
  }
}