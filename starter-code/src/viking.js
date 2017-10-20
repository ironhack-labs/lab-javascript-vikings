// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
  // this.health = health;
  // this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// Saxon
function Saxon (health, strength) {
Soldier.call(this, health, strength);
this.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0) {
    return  "A Saxon has received " + damage + " points of damage";
  } else {
    return  "A Saxon has died in combat";
  }
};
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);

  };
  this.vikingAttack = function() {
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var isDied = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    if(this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return isDied;
  };
  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var isDied = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
    if(this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return isDied;
  };

  this.showStatus = function() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
