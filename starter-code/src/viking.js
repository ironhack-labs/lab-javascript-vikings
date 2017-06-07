// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
  return this.strength;
  };
  this.receiveDamage = function (theDamage) {
  this.health -= theDamage;
  };
}


Viking.prototype = Object.create(Soldier.prototype);
// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function (theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return name + ' has received ' + theDamage + ' points of damage';
  }
  else {
    return (name + " has died in act of combat");
  }

  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}

Saxon.prototype = Object.create(Viking.prototype);
Saxon.prototype.name = "A Saxon";
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}


// War
function War () {}
