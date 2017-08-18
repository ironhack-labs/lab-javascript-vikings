// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  // this.attack = function() {
  //   return this.strength;
  // };
  // this.receiveDamage = function(damage) {
  //   this.health -= damage;
  // };
}

Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  //Soldier.call(this, health, strength);
}

  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;
  Viking.prototype.receiveDamage = function (damage){
    this.health -= damage;
      if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
      } else{
        return this.name + " has die in act of combat";
      }
  };

Viking.prototype.battleCry = function () {
   return "Odin Owns You All";
 };

// Saxon
function Saxon (health,strength) {
  this.health = health;
  this.strength = strength;
}
  Saxon.prototype = Object.create(Saxon.prototype);
  Saxon.prototype.constructor = Saxon;
  Saxon.prototype.receiveDamage = function (damage){
    this.health -= damage;
      if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
      } else{
        return  "A Saxon has die in act of combat";
      }
  };
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.property.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};

War.property.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};

War.property.vikingAttack = function () {
  var random = Math.floor(Math.random()*(this.vikingArmy.length));
  var myVicking = this.vikingArmy[random].strength;
  Saxon.receiveDamage(myVicking);
  for(var i = 0; i < this.saxonArmy.length; i++){
    if(this.saxonArmy[i].health <= 0){
      this.saxonArmy.splice(i,1);
    }
  }
  return Viking.receiveDamage(Saxon.strength);
};

War.property.saxonAttack = function () {
  var random = Math.floor(Math.random()*(this.saxonArmy.length));
  var mySaxon = this.saxonArmy[random].strength;
  Viking.receiveDamage(mySaxon);
  for(var i = 0; i < this.vikingArmy.length; i++){
    if(this.vikingArmy[i].health <= 0){
      this.vikingArmy.splice(i,1);
    }
  }
  return Saxon.receiveDamage(Viking.strength);
};

War.property.showStatus = function() {
  if (this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  }else if (this.vikingArmy.length == 0){
    return "Saxons have fought for their lives and survive another day...";
  }else{
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
