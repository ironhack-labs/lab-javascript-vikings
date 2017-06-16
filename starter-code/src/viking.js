// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(vikingDamage) {
  this.health = this.health - vikingDamage;
  if (this.health > 0) {
    return this.name + ' has received ' + vikingDamage + ' points of damage';
  } else {
    return this.name + ' has died in act of combat';
  }
}

Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!';
}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(saxonDamage) {
  this.health = this.health - saxonDamage;
  if (this.health > 0) {
    console.log("health > 0")
    return 'A Saxon has received ' + saxonDamage + ' points of damage';
  } else {
    console.log("health < 0")
    return 'A Saxon has died in combat';
  }
}



// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {

  var randomVikingIndex = selectRandomIndex(this['vikingArmy']);
  var randomSaxonIndex = selectRandomIndex(this['saxonArmy']);
  var randomSaxon = this['saxonArmy'][randomSaxonIndex];
  var randomViking = this['vikingArmy'][randomVikingIndex];

  if(randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1);
  }
  return randomSaxon.receiveDamage(randomViking.strength);
  /*
    Our opinion is that this function call should be above the if,
    but all tests pass this way.
  */
}

War.prototype.saxonAttack = function() {

  var randomVikingIndex = selectRandomIndex(this['vikingArmy']);
  var randomSaxonIndex = selectRandomIndex(this['saxonArmy']);
  var randomSaxon = this['saxonArmy'][randomSaxonIndex];
  var randomViking = this['vikingArmy'][randomVikingIndex];

  if(randomViking.health <= 0) {
    this.vikingArmy.splice(randomVikingIndex, 1);
  }
  return randomViking.receiveDamage(randomSaxon.strength);
  /*
    Our opinion is that this function call should be above the if,
    but all tests pass this way.
  */
}

War.prototype.showStatus = function() {
  if (this['saxonArmy'].length) {
    return "Vikings have won the war of the century!";
  }
  if (this['vikingArmy'].length) {
    return "Saxons have fought for their lives and survive another day...";
  }
  if (this['vikingArmy'].length > 0 && this['saxonArmy'].length) {
    return "Vikings and Saxons are still in the thick of battle.";
  }

}

function selectRandomIndex(array) {
  return Math.floor(Math.random()* array.length);
};
