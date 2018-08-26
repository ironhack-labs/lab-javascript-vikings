// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(newViking){
  this.vikingArmy.push(newViking);
}

War.prototype.addSaxon = function(newSaxon){
  this.saxonArmy.push(newSaxon);
}

War.prototype.vikingAttack = function(){
  for (var i = 0; i < this.vikingArmy.length; i++){
    var newDamage = this.vikingArmy[i].attack();
    var result = this.saxonArmy[i].receiveDamage(newDamage);
    if (this.saxonArmy[i].health <= 0) {
      this.saxonArmy.shift()
    }
    return result;
  }
}

War.prototype.saxonAttack = function(){
  for (var i = 0; i < this.saxonArmy.length; i++){
    var newDamage = this.saxonArmy[i].attack();
    var result = this.vikingArmy[i].receiveDamage(newDamage);
    if (this.vikingArmy[i].health <= 0) {
      this.vikingArmy.shift()
    }
    return result;
  }
}

War.prototype.showStatus = function (){
  if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle.";
  } else if (this.saxonArmy.length <= 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length <= 0){
    return "Saxons have fought for their lives and survive another day...";
  }
}