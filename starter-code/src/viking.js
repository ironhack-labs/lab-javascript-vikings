// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health === 0){
    return this.name + " has died in act of combat";
  }
  return this.name + " has received " + damage + " points of damage";
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
}
// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health === 0){
    return "A Saxon has died in combat";
  }
  return "A Saxon has received " + damage + " points of damage";
}

// War
function War() {
  this.vikingArmy = [ ];
  this.saxonArmy = [ ];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function (){
  var saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  return saxonSoldier.receiveDamage(vikingSoldier.strength);
  if (saxonSoldier.strength === 0){
    this.saxonArmy.slice(saxonSoldier,1);
  }
}

War.prototype.saxonAttack = function (){
  var saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  return vikingSoldier.receiveDamage(saxonSoldier.strength);
  if (vikingSoldier.strength === 0){
    this.vikingArmy.slice(vikingSoldier,1);
  }
}

War.prototype.showStatus = function (){
  if (this.saxonArmy=== []){
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy=== []){
    return "Saxons have fought for their lives and survive another day...";
  } else return "Vikings and Saxons are still in the thick of battle."
}

