// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking

function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};


Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else { 
    return `${this.name} has died in act of combat`; 
  }
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else { 
    return `A Saxon has died in combat`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  var army = this.vikingArmy
  army.push(Viking);
}

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function () {
  if (this.saxonArmy.length === 0) return;

  var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  var message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
  this.saxonArmy = this.saxonArmy.filter(function () {
    return this.health > 0;
  });

  return message;
}

War.prototype.saxonAttack = function () {
  if (this.vikingArmy.length === 0) return;

  var randomViking = Math.floor(Math.random(this.vikingArmy.length));
  var randomSaxon = Math.floor(Math.random(this.saxonArmy.length));

  var message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
  
  this.vikingArmy = this.vikingArmy.filter(() =>  this.health > 0 );
  
  return message;
}

War.prototype.showStatus = function () {
  if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  } else if (this.saxonArmy.length === 0){
    return 'Vikings have won the war of the century!';
  } else {
    return 'Vikings and Saxons are still in the thick of battle.'}
}


