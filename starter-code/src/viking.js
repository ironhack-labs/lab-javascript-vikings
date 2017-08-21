// Soldier
function Soldier (health, strength) {
  this.health = health ;
  this.strength = strength;
}

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
  };

// Viking

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  var result = this.name + " has died in act of combat";
  if (this.health > 0) {
    result = this.name + " has received " + damage + " points of damage";
  }
  return result;
};

Viking.prototype.battleCry = function battleCry () {
  return "Odin Owns You All!";
};


// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  var result = "A Saxon has died in combat";
  if (this.health > 0) {
    result = "A Saxon has received " + damage + " points of damage";
  }
  return result;
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  for (var i = 0; i < 10; i++) {
    this.vikingArmy = [Viking];
  }
};

War.prototype.addSaxon = function (Saxon) {
    this.saxonArmy = [Saxon];
};



War.prototype.vikingAttack = function (){
  var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
  var randomViking = Math.floor(Math.random() * (this.vikingArmy.length));
  var damage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
  if (this.saxonArmy[randomSaxon].health <= 0){
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return damage;
};

War.prototype.saxonAttack = function (){
  var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
  var randomViking = Math.floor(Math.random() * (this.vikingArmy.length));

  var damage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
  if (this.vikingArmy[randomViking].health <= 0){
    this.vikingArmy.splice(randomViking, 1);
  }
  return damage;
};

War.prototype.showStatus = function (){
  if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  }

  else if (this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  }

  return "Vikings and Saxons are still in the thick of battle.";


};
