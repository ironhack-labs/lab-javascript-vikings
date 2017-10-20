// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
  if(this.health > 0){
    return this.name + " has received " + dmg + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }

};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};


// Saxon
function Saxon (health,strenght) {
  Soldier.call(this,health,strenght);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(dmg){
  this.health -= dmg;
  if(this.health > 0){
    return "A Saxon has received " + dmg + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {

  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack = function () {
  var atacante = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)].strength;
  var atacadoIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var atacado = this.saxonArmy[atacadoIndex];
  atacado.receiveDamage(atacante);
  if(atacado.health <= 0){
    this.saxonArmy.splice(atacadoIndex,1);
  }
  return "A Saxon has died in combat";
};

War.prototype.saxonAttack = function () {
  var atacante = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)].strength;
  var atacadoIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var atacado = this.vikingArmy[atacadoIndex];
  atacado.receiveDamage(atacante);
  if(atacado.health <= 0){
    this.vikingArmy.splice(atacadoIndex,1);
  }
  return atacado.name + " has received " + atacante + " points of damage";
};

War.prototype.showStatus = function () {
  if(this.vikingArmy.length <= 0){
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length <= 0){
    return "Vikings have won the war of the century!";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
