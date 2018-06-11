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

Viking.prototype.attack = function() {
  return this.strength;
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
}

Viking.prototype.battleCry = function () {
  console.log("Odin Owns You All!");
}


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype.attack = function() {
  this.strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


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
  // var selectedViking = this.vikingArmy[Math.random()*this.vikingArmy.length];
  // var selectedSaxon = this.saxonArmy[Math.random()*this.saxonArmy.length]
  var selectedViking = this.vikingArmy[0];
  var selectedSaxon = this.saxonArmy[0];
  if (selectedSaxon.health < 0) {    
    this.saxonArmy.splice(this.saxonArmy.indexOf(selectedSaxon),1);
    return selectedSaxon.receiveDamage(selectedViking.attack());
  } else {
    return selectedSaxon.receiveDamage(selectedViking.attack());
  }
}

War.prototype.saxonAttack = function() {
  // var selectedSaxon = this.saxonArmy[Math.random()*this.saxonArmy.length]
  // var selectedViking = this.vikingArmy[Math.random()*this.vikingArmy.length];
  var selectedSaxon = this.saxonArmy[0];
  var selectedViking = this.vikingArmy[0]; 
  if (selectedViking.health <= 0) {   
    this.vikingArmy.splice(this.vikingArmy.indexOf(selectedViking),1);
    return selectedViking.receiveDamage(selectedSaxon.attack());
  } else {
    return selectedViking.receiveDamage(selectedSaxon.attack());
  }
}

War.prototype.showStatus = function() {
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return 'Vikings and Saxons are still in the thick of battle.'
  } else if (this.vikingArmy.length > 0) {
    return 'Vikings have won the war of the century!'
  } else {
    return 'Saxons have fought for their lives and survive another day...'
  }
}

var viking1 = new Viking("Thor", "110", "200");
var saxon1 = new Saxon("100", "300");
war1 = new War();
war1.addViking(viking1);
war1.addSaxon(saxon1);

console.log(war1.saxonAttack());
console.log(war1.vikingArmy);

console.log(war1.showStatus());
