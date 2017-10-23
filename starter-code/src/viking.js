// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.health = health - damage;
  };

}

// Viking
function Viking (name, health, strength) {
  Soldier.call();

  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.health = health - damage;

    if (this.health > 0) {
      return(name + ' has received '+ damage +' points of damage');
    } else {
      return(name + " has died in act of combat");
    }
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength) {
  Soldier.call();

  this.health = health;
  this.strength = strength;
  this.attack =  function () {
    return strength;
  };
  this.receiveDamage = function (damage) {
    this.health = health - damage;

    if (this.health > 0) {
      return('A Saxon has received '+ damage +' points of damage');
  } else {
    return("A Saxon has died in combat");
}
};
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function () {
    this.saxonArmy[Math.floor(Math.random())].receiveDamage(this.vikingArmy[Math.floor(Math.random())].strength);
  };
}
