// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}


Soldier.prototype.attack = function () {
return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
this.health -= damage
};
  

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
};
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  };
  
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
    }else{
      return "A Saxon has died in combat";
    }
  }

// War
function War() {
this.vikingArmy = []
this.saxonArmy = []
}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
  };

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function () {
  var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
  var randomSaxon =  Math.floor(Math.random()*this.saxonArmy.length);
  var attackingViking = this.vikingArmy[randomViking];
  var attackedSaxon = this.saxonArmy[randomSaxon];
  var result = attackedSaxon.receiveDamage(attackingViking.strength);
  if (attackedSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxon,1);
  }
  return result;
  };



War.prototype.saxonAttack = function () {
  var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
  var randomSaxon =  Math.floor(Math.random()*this.saxonArmy.length);
  var attackedViking = this.vikingArmy[randomViking];
  var attackingSaxon = this.saxonArmy[randomSaxon];
  var result = attackedViking.receiveDamage(attackingSaxon.strength);
  if (attackedViking.health <= 0) {
    this.vikingArmy.splice(randomViking,1);
  }
  return result;
  };

War.prototype.showStatus = function () {
  if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle.";
  }
  else if (this.saxonArmy.length === 0){
   return  "Vikings have won the war of the century!"
  }else{
    return "Saxons have fought for their lives and survive another day..."
  }
  };

  


