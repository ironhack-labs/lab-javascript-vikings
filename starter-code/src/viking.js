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

war.property.vikingAttack = function () {
  Saxon.receiveDamage(Viking.strength);
  for(var i = 0; i < War.saxonArmy.length; i++){
    
  }
};
