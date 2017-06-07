// Soldier
function Soldier (health, strength) {
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
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if ( this.health === 0 ) {
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
};

Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!';
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if ( this.health === 0 ) {
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " + damage + " points of damage";
  }
};

// War
function War () {
  vikingArmy = [];
  saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var chosenViking = vikingArmy[Math.round(Math.random() * (vikingArmy.length - 1))];
  var chosenSaxonIndex = [Math.round(Math.random() * (saxonArmy.length - 1))];
  var chosenSaxon = saxonArmy[chosenSaxonIndex];

  chosenSaxon.receiveDamage(chosenViking.strength);

  if (chosenSaxon.health === 0) {
    saxonArmy.splice(chosenSaxonIndex, 1);
    return "A Saxon has died in combat";
  }
};

War.prototype.saxonAttack = function() {
  var chosenSaxon = saxonArmy[Math.round(Math.random() * (saxonArmy.length - 1))];
  var chosenVikingIndex = [Math.round(Math.random() * (vikingArmy.length - 1))];
  var chosenViking = vikingArmy[chosenVikingIndex];

  chosenViking.receiveDamage(chosenSaxon.strength);

  if (chosenViking.health === 0) {
    vikingArmy.splice(chosenVikingIndex, 1);
  }

  return chosenViking.name + " has received " + chosenSaxon.strength + " points of damage";
};

War.prototype.showStatus = function () {
  if (saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
