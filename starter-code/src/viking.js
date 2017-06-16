// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + this.damage + " points of damage";
    } else {
      return this.name + " has died in the act of combat";
    }
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return "A Saxon has received " + this.damage + " points of damage";
      } else {
        return "A Saxon has died in the act of combat";
      }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
function getRandomArrayKey(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function(saxon){
  this.saxonArmy.puhs(saxon);
};
War.prototype.vikingAttack = function(){
  var saxonDamaged = getRandomArrayKey(this.saxonArmy);
  var vikingAttacker = getRandomArrayKey(this.vikingArmy);
  var result = saxonDamaged.receiveDamage(vikingAttacker.strength);
  this.saxonArmy = this.saxonArmy.filter(function (saxon) {
    return saxon.health > 0;
  });
  return result;
};
War.prototype.saxonAttack = function() {
  var vikingDamaged = getRandomArrayKey(this.vikingArmy);
  var saxonAttacker = getRandomArrayKey(this.saxonArmy);
  var result = vikingDamaged.receiveDamage(saxonAttacker.strength);
  this.vikingArmy = this.vikingArmy.filter(function (viking) {
    return viking.health > 0;
  });
  return result;
};
War.prototype.showStatus = function(){
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle.";
};
