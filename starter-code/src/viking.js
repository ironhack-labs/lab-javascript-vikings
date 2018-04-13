// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  }
}

// Viking
function Viking(name, health, strength) {
 Soldier.call(this, health, strength);
 this.name = name;

 this.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage';
  } else {
    return this.name + ' has died in act of combat';
  }
 }
 this.battleCry = function() {
   return 'Odin Owns You All!'
 }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
 Soldier.call(this, health, strength)

 this.receiveDamage = function(damage) {
   this.health = this.health - damage;
   if (this.health > 0) {
     return 'A Saxon has received ' + damage + ' points of damage';
   } else {
     return 'A Saxon has died in combat';
   }
 }
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  }
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  this.vikingAttack = function() {
    let chosenViking = Math.floor(Math.random()*this.vikingArmy.length);
    let chosenSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    let result = this.saxonArmy[chosenSaxon].receiveDamage(this.vikingArmy[chosenViking].strength);
    if (this.saxonArmy[chosenSaxon].health <= 0) {
      this.saxonArmy.splice(chosenSaxon, 1);
    }
    return result;  
  }
  this.saxonAttack = function() {
    let chosenViking = Math.floor(Math.random()*this.vikingArmy.length);
    let chosenSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    let result = this.vikingArmy[chosenViking].receiveDamage(this.saxonArmy[chosenSaxon].strength);
    if (this.vikingArmy[chosenViking].health <=0) {
      this.vikingArmy.splice(chosenViking,1);
    }
    return result;
  }
  this.showStatus = function() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}