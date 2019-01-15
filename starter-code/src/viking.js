// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking

function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return this.name + " has died in act of combat";
  }
  return this.name + " has received " + damage + " points of damage";
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return "A Saxon has died in combat";
  }
  return "A Saxon has received " + damage + " points of damage";
};

// // War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = []; // xq war es una funcion y no una variable y punto??
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  var randomSaxon = this.saxonArmy[
    Math.floor(Math.random() * this.saxonArmy.length)
  ];

  var randomViking = this.vikingArmy[
    Math.floor(Math.random() * this.vikingArmy.length)
  ];

  if (randomSaxon.health - randomViking.strength <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);

    return randomSaxon.receiveDamage(randomViking.strength);
  }
  return randomSaxon.receiveDamage(randomViking.strength);
};

War.prototype.saxonAttack = function() {
    var randomSaxon = this.saxonArmy[
        Math.floor(Math.random() * this.saxonArmy.length)
      ];
    
      var randomViking = this.vikingArmy[
        Math.floor(Math.random() * this.vikingArmy.length)
      ];
    
      if (randomViking.health - randomSaxon.strength <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    
        return randomViking.receiveDamage(randomSaxon.strength);
      }
      return randomViking.receiveDamage(randomSaxon.strength);
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length <= 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length <= 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
      return "Vikings and Saxons are still in the thick of battle."
  }


};

// showStatus() method
// Returns the current status of the War based on the size of the armies.

// should be a function
// should receive 0 arguments
// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
