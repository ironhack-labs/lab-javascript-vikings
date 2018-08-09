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
var viking = new Viking("Yo",10,10),
    saxon = new Saxon(10,10),
    war = new War();

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
// War.prototype = Object.create(Viking.prototype);
// War.prototype = Object.create(Saxon.prototype);

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};
war.addViking(viking);
console.log(war);

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function() {
  
};



war.addViking(viking);
war.addViking(viking);
war.addViking(viking);
war.addSaxon(saxon);
war.vikingAttack();
console.log(war);