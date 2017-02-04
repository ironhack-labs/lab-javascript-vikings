function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  return this;
}

Soldier.prototype.receiveDamage = function(receivedamage) {
  this.health -= damage;
};

Soldier.prototype.attack = function() {
  return this.strength;
};



function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  return this;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  console.log(this.name + " has received " + damage + " points of damage");
  if (this.health <= 0) {
    return name + " has died in act of combat";
  }
};



function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  console.log("A saxon has received " + damage + " points of damage");
  if (this.health <= 0) {
    return "A Saxon has died in combat";
  }
};



function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];

  this.addViking(this.generateViking());
    this.addSaxon(this.generateSaxon());
}

War.prototype.generateViking = function() {
  var name = "Thor";
  var health = 300;
  var strength = 150;
  return  new Viking(name, health, strength);
};

War.prototype.generateSaxon = function() {
  var health = 60;
  var strength = 25;
  return  new Saxon(health, strength);
};

War.prototype.addViking = function(viking) {
  this.vikingsArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonsArmy.push(saxon);
};

War.prototype.saxonAttack = function() {
  this.vikingsArmy[0].receiveDamage(this.saxonsArmy[0].strength);
};

War.prototype.vikingAttack = function() {
  this.saxonsArmy[0].receiveDamage(this.vikingsArmy[0].strength);
};

War.prototype.fight = function() {
  this.vikingAttack();
  this.saxonAttack();
};

War.prototype.showStats = function() {
  var remainingVikings = 0;
  var remainingSaxons = 0;
  this.vikingsArmy.forEach(function(viking) {
    if (viking.health > 0) {
      remainingVikings += 1;
    }
  });
  this.saxonsArmy.forEach(function(saxon) {
    if  (saxon.health > 0) {
      remainingSaxons += 1;
    }

  });
  console.log("Remaining Vikings: " + remainingVikings + ", " + "Remaining Saxons: " + remainingSaxons + ".");
  if (remainingVikings > remainingSaxons) {
    console.log(this.vikingsArmy[0].battleCry());
    return "Vikings have won the war of the century!";
  }
};

var northumberland = new War();
northumberland.fight();
northumberland.showStats();

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
