// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}


Viking.prototype.attack = function (){
  return this.strength;
};

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  }else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.attack = function () {
  return this.strength;
};

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};


// War

function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function (){
  var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
  var status = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].attack());
  if (this.saxonArmy[saxonRandom].health <= 0){
    this.saxonArmy.splice(saxonRandom, 1);
  }
  return status;
};

War.prototype.saxonAttack = function (){
  var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
  var status = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].attack());
  if (this.vikingArmy[vikingRandom].health <= 0) {
    this.vikingArmy.splice(vikingRandom, 1);
  }
  return status;
};

War.prototype.showStatus = function (){
  if (this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
