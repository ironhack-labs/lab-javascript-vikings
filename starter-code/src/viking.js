// Soldier
function Soldier (healthParam, strengthParam) {
  this.health = healthParam;
  this.strength = strengthParam;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}
// Viking
function Viking(nameParam, healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = nameParam;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0)
    return this.name + " has received " + damage + " points of damage";
  else
    return this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}
// Saxon
function Saxon (healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0)
    return "A Saxon has received " + damage + " points of damage";
  else if(this.health <= 0)
    return "A Saxon has died in combat";
}
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(oneViking){
  this.vikingArmy.push(oneViking);
};

War.prototype.addSaxon = function(oneSaxon){
  this.saxonArmy.push(oneSaxon);
};

War.prototype.vikingAttack = function(){
  var oneViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var oneSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var attack = oneViking.strength;
  var attackStatus = oneSaxon.receiveDamage(attack);
  this.saxonArmy = this.saxonArmy.filter(function(saxon){
    return saxon.health > 0;
  });
  return attackStatus;
};

War.prototype.saxonAttack = function(){
  var oneViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var oneSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  var attack = oneSaxon.strength;
  var attackStatus = oneViking.receiveDamage(attack);
  this.vikingArmy = this.vikingArmy.filter(function(viking){
    return viking.health > 0;
  });
  return attackStatus;
};

War.prototype.showStatus = function(){
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
  }
  else if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day..."
  }
  else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}
