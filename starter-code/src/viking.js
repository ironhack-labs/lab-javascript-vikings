// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
  return this.strength;
  }
  this.receiveDamage = function (damage) {
  this.health = health - damage;
  }
}


// Viking
function Viking(name, health, strength) {
  Soldier.call(this);
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function (damage) {
  this.health = health - damage;
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage';
    }
  if (this.health <= 0) {
    return this.name + ' has died in act of combat';
    }
  }
  this.battleCry = function battleCry() {
    return 'Odin Owns You All!';
  }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this);
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function (damage) {
  this.health = health - damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage';
    }
  if (this.health <= 0) {
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
  this.vikingArmy = [Viking];
  }
  this.addSaxon = function(Saxon) {
  this.saxonArmy = [Saxon];
  }
  this.vikingAttack = function() {
    Saxon.call(this);
    Viking.call(this);
    Saxon.prototype.receiveDamage = function(damage){
    damage = Vikin.prototype.strength;
    Saxon.prototype.health = Saxon.prototype.health - damage;
    }
  }
}
