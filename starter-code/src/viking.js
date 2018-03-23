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

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if(this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if( this.health > 0 ) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
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
  //random saxon
  var saxon = this.saxonArmy[ Math.floor(Math.random()*(this.saxonArmy.length)) ];

  //random viking
  var viking = this.vikingArmy[ Math.floor(Math.random()*(this.vikingArmy.length)) ];

  saxon.receiveDamage( viking.strength );

  // remove dead saxon
  this.saxonArmy = this.saxonArmy.filter( function(e) {
    return e.health > 0;
  });

  if( saxon.health < 0 ) {
    return "A Saxon has died in combat";
  }
}

War.prototype.saxonAttack = function() {
  //random viking
  var viking = this.vikingArmy[ Math.floor(Math.random()*(this.vikingArmy.length)) ];

  //random saxon
  var saxon = this.saxonArmy[ Math.floor(Math.random()*(this.saxonArmy.length)) ];

  viking.receiveDamage( saxon.strength );

  // remove dead vikings
  this.vikingArmy = this.vikingArmy.filter( function(e) {
    return e.health > 0;
  });

  return viking.name + " has received " + saxon.strength + " points of damage";
}