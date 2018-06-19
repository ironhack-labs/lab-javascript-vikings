// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(receiveDamage){
  this.health -= receiveDamage;
}


// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;




Viking.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
  if (this.health > 0) {
    return `${this.name} has received ${receiveDamage} points of damage`;

  } else {
    return `${this.name} has died in act of combat`;
  }
};

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}



// Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
  if (this.health > 0) {
    return `A Saxon has received ${receiveDamage} points of damage`;

  } else {
    return `A Saxon has died in combat`;
  }
};



// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking)

}

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon)

}

War.prototype.vikingAttack = function(){
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var combatResult = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
  var that = this;

  this.saxonArmy.forEach(function(eachSaxon){
  var saxonIndex = that.saxonArmy.indexOf(eachSaxon);
  if(eachSaxon.health <= 0){
    that.saxonArmy.splice(saxonIndex, 1)
    }
  });
  return combatResult
}

War.prototype.saxonAttack = function(){
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var combatResult = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);
  var that = this;

  this.vikingArmy.forEach(function(eachViking){
  var vikingIndex = that.vikingArmy.indexOf(eachViking);
  if(eachViking.health <= 0){
    that.vikingArmy.splice(vikingIndex, 1);
    }
  });

  return combatResult;

 
}

War.prototype.showStatus = function(){
  if(this.saxonArmy.length === 0){
  
  return "Vikings have won the war of the century!"

  }else if(this.vikingArmy.length === 0){
    
  return "Saxons have fought for their lives and survive another day..."

  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}

