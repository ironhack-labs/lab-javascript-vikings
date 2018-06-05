// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}


//Why doesn't it work with healthA and strengthA

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return (this.health > 0) ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return (this.health > 0) ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
}

// War
function War() {
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
  //Change with random soldier for 1 & 2
  //1. Find a viking (here, last one)
  var numberViking = this.vikingArmy.length-1;
  var choosenViking = this.vikingArmy[numberViking];
  //2. Find a saxon (here, last one)
  var numberSaxon = this.saxonArmy.length-1;
  var choosenSaxon = this.saxonArmy[numberSaxon];
  
  //3. Identify health of Saxon
  var health = this.saxonArmy[numberSaxon].health;

  //4. If strength of viking superior to health of Saxon --> Saxon will die --> erase Saxon for Army and update his health
  if (choosenViking.strength >= health) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(choosenSaxon),1);
    return choosenSaxon.receiveDamage(choosenViking.strength);
    //5. If Saxon alive, only update his health
  } else {
    return choosenSaxon.receiveDamage(choosenViking.strength)
  }
  // Faster solution?:
  // return (choosenViking.strength >= health) ? choosenSaxon.receiveDamage(choosenViking.strength) && this.saxonArmy.splice(this.saxonArmy.indexOf(choosenSaxon),1): choosenSaxon.receiveDamage(choosenViking.strength);
  // return choosenSaxon.receiveDamage(choosenViking.strength);
}

War.prototype.saxonAttack = function() {
  //Change with random soldier for 1 & 2
  //1. Find a viking (here, last one)
  var numberViking = this.vikingArmy.length-1;
  var choosenViking = this.vikingArmy[numberViking];
  //2. Find a saxon (here, last one)
  var numberSaxon = this.saxonArmy.length-1;
  var choosenSaxon = this.saxonArmy[numberSaxon];
  
  //3. Identify health of Viking
  var health = this.vikingArmy[numberViking].health;

  //4. If strength of Saxon superior to health of Viking --> Viking will die --> erase Viking for Army and update his health
  if (choosenSaxon.strength >= health) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(choosenViking),1);
    return choosenViking.receiveDamage(choosenSaxon.strength);
    //5. If Viking alive, only update his health
  } else {
    return choosenViking.receiveDamage(choosenSaxon.strength)
  }
}

War.prototype.showStatus = function() {
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if (this.vikingArmy.length > 0) {
    return "Vikings have won the war of the century!";
  } else if (this.saxonArmy.length > 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Death everywhere!"
  }
}
