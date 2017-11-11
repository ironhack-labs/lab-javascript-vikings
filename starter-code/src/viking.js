Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

Soldier.prototype.isAlive = function (damage) {
  return this.health > 0;
};

// Viking
function Viking (nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
};

// Saxon
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();

    damage = saxon.receiveDamage(viking.attack());

    if (!saxon.isAlive()){
      this.removeSaxon(saxon);
    }
    return damage;
};

War.prototype.saxonAttack = function() {
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();

    damage = viking.receiveDamage(saxon.strength);
    if (!viking.isAlive()){
      this.removeViking(viking);
    }
    return damage;
};

War.prototype.showStatus = function(){
    if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};

War.prototype.removeSaxon = function(saxon) {
  index = this.saxonArmy.indexOf(saxon);
  if (index !== -1) {
    this.saxonArmy.splice(index, 1);
  }
};

War.prototype.removeViking = function(viking) {
  index = this.vikingArmy.indexOf(viking);
  if (index !== -1) {
    this.vikingArmy.splice(index, 1);
  }
};
