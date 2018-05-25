// Soldier
function Soldier(hpArg, strArg) {
  this.health = hpArg;
  this.strength = strArg;
}

Soldier.prototype.attack = function() { return this.strength; };
Soldier.prototype.receiveDamage = function(dmgArg) { this.health -= dmgArg; };

// Viking
function Viking(nameArg, hpArg, strArg) {
  Soldier.call(this, hpArg, strArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(dmgArg) {
  if ((this.health -= dmgArg) > 0) {
    return `${ this.name } has received ${ dmgArg } points of damage`;
  }
  return `${ this.name } has died in act of combat`;
};
Viking.prototype.battleCry = function() { return "Odin Owns You All!"; };

// Saxon
function Saxon(hpArg, strArg) {
  Soldier.call(this, hpArg, strArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(dmgArg) {
  if ((this.health -= dmgArg) > 0) {
    return `A Saxon has received ${ dmgArg } points of damage`;
  }
  return `A Saxon has died in combat`;
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikArg) { this.vikingArmy.push(vikArg); };
War.prototype.addSaxon = function(saxArg) { this.saxonArmy.push(saxArg); };
War.prototype.vikingAttack = function() {
  var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var result = saxon.receiveDamage(viking.attack());
  this.saxonArmy = this.saxonArmy.filter(function(currentSaxon) {
    return (currentSaxon.health > 0);
  });
  return result;
};
War.prototype.saxonAttack = function() {
  var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var result = viking.receiveDamage(saxon.attack());
  this.vikingArmy = this.vikingArmy.filter(function(currentViking) {
    return (currentViking.health > 0);
  });
  return result;
};
War.prototype.showStatus = function() {
  if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)) {
    return 'Vikings and Saxons are still in the thick of battle.';
  } else if (this.saxonArmy.length === 0) { return 'Vikings have won the war of the century!'; }
  else { return 'Saxons have fought for their lives and survive another day...'; }
};
