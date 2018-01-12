
// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health != 0) {
    return (this.name + ' has received ' + damage + ' points of damage');
  }
  return (this.name + ' has died in act of combat');
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health != 0) {
    return ('A Saxon has received ' + damage + ' points of damage');
  }
  return ('A Saxon has died in combat');
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (vikingo) {
  this.vikingArmy.push(vikingo);
};

War.prototype.addSaxon = function (saxono) {
  this.saxonArmy.push(saxono);
};

War.prototype.vikingAttack = function () {
  var mySaxon = this.saxonArmy[0];
  var theViking = this.vikingArmy[0];
  var fullSaxonHealth = mySaxon.health;
  mySaxon.receiveDamage(theViking.strength);
  var mySaxonHealth = (fullSaxonHealth - theViking.strength);
  if (mySaxonHealth <= 0) {
    this.saxonArmy.shift();
  }
  return ('A Saxon has died in combat');
};

War.prototype.saxonAttack = function () {
  var mySaxon = this.saxonArmy[0];
  var theViking = this.vikingArmy[0];
  var fullVikingHealth = theViking.health;
  theViking.receiveDamage(mySaxon.strength);
  var theVikingHealth = (fullVikingHealth - mySaxon.strength);
  if (theVikingHealth <= 0) {
    this.vikingArmy.shift();
    return ('The viking has died in combat');
  }
  return (this.vikingArmy[0].name + ' has received ' + mySaxon.strength + ' points of damage');
};

War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return ('Vikings have won the war of the century!');
  }
  if (this.vikingArmy.length === 0) {
    return ('Saxons have fought for their lives and survive another day...');
  }

  return ('Vikings and Saxons are still in the thick of battle.');
};
