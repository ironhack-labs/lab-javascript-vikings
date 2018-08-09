// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }

  return this.name + " has died in act of combat";
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }

  return "A Saxon has died in combat";
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
}

function random(max){
    return Math.floor(Math.random()*max);
}

War.prototype.vikingAttack = function() {
    var randomSaxon = random(this.saxonArmy.length);
    var randomViking = random(this.vikingArmy.length);
    var receiveDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    
    if (this.saxonArmy[randomSaxon].health < 1) {
        this.saxonArmy.splice(randomSaxon,1);
    }

    return receiveDamage;
};

War.prototype.saxonAttack = function() {
  var randomSaxon = random(this.saxonArmy.length);
  var randomViking = random(this.vikingArmy.length);
  var receiveDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
  
  if (this.vikingArmy[randomViking].health < 1) {
      this.vikingArmy.splice(randomViking,1);
  }

  return receiveDamage;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"
  }
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  }
  if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle."
  }
}