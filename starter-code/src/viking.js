// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage
};

var soldier = new Soldier(300, 150)


// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
};

var viking = new Viking("Viking", 300, 150)

// Viking inheritance
Viking.prototype = Object.create(Soldier.prototype);

// Viking damage
Viking.prototype.receiveDamage = function (damage) {
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage.")
  };
  if (this.health <= 0) {
    return this.name + " has died in act of combat."
  };
};

//battleCry
Viking.prototype.battleCry = function () {
  return "Odin owns you all!";
};

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, name);
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage.")
  };
  if (this.health <= 0) {
    return "A Saxon has died in act of combat."
  };
};

// War
function War () {
  this.vikingArmy: [];
  this.saxonArmy: [];
}

War.prototype.addViking(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack() {
  var vikingFighter = this.vikingArmy[_.random(this.vikingArmy.length)];
  var saxonFigther = this.saxonArmy[_.random(this.saxonArmy.length)];
  var result = saxonFighter.receiveDamage(vikingFighter.attack())
  if (saxonFigther.health <= 0) {
    var deadSaxonIndex = saxonArmy.indexOf(saxonFigther);
    _.remove(this.saxonArmy, deadSaxonIndex);
  };
  return result;
};

War.prototype.saxonAttack() {
  var vikingFighter = this.vikingArmy[_.random(this.vikingArmy.length)];
  var saxonFigther = this.saxonArmy[_.random(this.saxonArmy.length)];
  var result = vikingFighter.receiveDamage(saxonFighter.attack())
  if (vikingFigther.health <= 0) {
    var deadVikingIndex = vikingArmy.indexOf(vikingFigther);
    _.remove(this.vikingArmy, deadVikingIndex);
  };
  return result
};

War.prototype.showStatus() {
  if(this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"
  };
  else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  };
  else {
    return "Vikings and Saxons are still in the thick of battle."
  }
};
