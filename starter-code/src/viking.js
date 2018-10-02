// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function() {
    return this.strength;
  };

  this.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;
  };
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
  
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;

    if (this.health > 0) {
      return this.name + " has received " + theDamage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  
  Soldier.call(this, health, strength);

  this.receiveDamage = function(theDamage) {
    this.health -= theDamage;

    if (this.health > 0) {
      return (
        "A Saxon has received " + theDamage + " points of damage"
      );
    } else {
      return "A Saxon has died in combat";
    }
  };
}

// War
function War() {}
