// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
};
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  return this.name + " has died in act of combat";
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage"
  }
  return "A Saxon has died in combat"
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function() {
  // this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)],
      saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)],
      attack = saxon.receiveDamage(viking.attack());
  
  if (saxon.health < 1) {
    this.saxonArmy.splice(saxon);
  }

  return attack;
};
War.prototype.saxonAttack = function() {
  var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)],
      saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)],
      attack = viking.receiveDamage(saxon.attack());
  
  if (viking.health < 1) {
    this.vikingArmy.splice(viking);
  }

  return attack;
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
  if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle.";
};



nameNum = 1;
war = new War();

/* *********************************
   ¿¿ MEJOR FORMA DE HACERLO ??
********************************* */
war.addViking(new Viking("Vikingo "+(nameNum++),(Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));
war.addViking(new Viking("Vikingo "+(nameNum++),(Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));
war.addViking(new Viking("Vikingo "+(nameNum++),(Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));
war.addSaxon(new Saxon((Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));
war.addSaxon(new Saxon((Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));
war.addSaxon(new Saxon((Math.floor(Math.random() * 100)),(Math.floor(Math.random() * 100))));

console.log("-- START OF WAR:\n",war);

war.vikingAttack();
war.saxonAttack();

console.log("-- END OF WAR:\n",war);
console.log(war.showStatus());
