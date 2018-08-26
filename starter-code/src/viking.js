// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg,
  this.strength = strengthArg,
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.constructor == Viking) {
      if (this.health > 0) {
        return (this.name + " has received " + damage + " points of damage");
      } else {
        return (this.name + " has died in act of combat");
      }
    } else if (this.constructor == Saxon) {
      if (this.health > 0) {
        return ("A Saxon has received " + damage + " points of damage");
      } else {
        return ("A Saxon has died in combat");
      }
    } 
  }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this);
  this.name = nameArg;
  this.health = healthArg;
  this.strength = strengthArg;
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
  }


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this);
  this.health = healthArg;
  this.strength = strengthArg;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function({Viking}) {    
    vikingArmy.push({Viking});
  }
  this.addSaxon = function(saxon) {
    saxonArmy.push(saxon);
  }
  this.vikingAttack = function() {
    
  }
  this.saxonAttack = function() {

  }
  this.showStatus = function() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle"
    }
  }
}
