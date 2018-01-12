// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  this.name = name;

  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received" + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };

  function battleCry() {
    return "Odin Owns You All!";
  }
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strenght) {
  Soldier.call(this, health, strenght);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received" + damage + " points of damage";
    } else {
      return "A Saxon has died in act of combat";
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  var vikingArmy = [];
  var saxonArmy = [];
  var addViking = function(viking) {
    vikingArmy.push(viking);
  };
  var addSaxon = function(saxon) {
    saxonArmy.push(saxon);
  };
  var vikingAttack = function(damage) {
    var damage = saxonArmy.receiveDamage(damage);
    var saxonArray = saxonArmy.map(function() {
      if (saxonArmy.health < 1) {
        saxonArmy.splice(0, 1);
      }
    });
  };
  var saxonAttack = function() {};
  var showStatut = function() {};
}
