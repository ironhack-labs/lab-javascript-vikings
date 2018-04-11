// Soldier

// Soldier Constructor
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  // attack method
  Soldier.prototype.attack = function() {
    return this.strength;
  }

  // receiveDamage method
  Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  }
}

// Viking

// Viking Constructor. Inherits Soldier props and defines a name prop
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  // receiveDamage method
  Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return this.name + ' has received ' + damage + ' points of damage'
    } else {
      return this.name + ' has died in act of combat'
    }
  }

  // battleCry method
  Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!'
  }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health,strength);

  Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return 'A Saxon has received ' + damage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {}
