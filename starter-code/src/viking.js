// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function attack (){
    return this.strength;
  }
  this.receiveDamage = function receiveDamage(damage){
    this.health = this.health - damage;
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Soldier;

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack = function attack(){
    return this.strength;
  };
  this.receiveDamage = function receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name +  " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function battleCry(){
    return "Odin Owns You All!";
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Soldier;

// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function attack(){
    return this.attack = strength;
  };
  this.receiveDamage = function receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received "+damage+" points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

War.prototype = Object.create(Viking.prototype);
War.prototype.constructor = Viking;
War.prototype = Object.create(Saxon.prototype);
War.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function addViking(Viking) {
    this.vikingArmy = [Viking];
  };
  this.addSaxon = function addSaxon(Saxon) {
    this.saxonArmy = [Saxon];
  };
  
  this.vikingAttack = function vikingAttack (){
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var injuredSaxon = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if (this.saxonArmy[randomSaxon].health <= 0){
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return injuredSaxon;
  };
   this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var injuredViking = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    if (this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy.splice(randomViking, 1);
    }
    return injuredViking;
  };
  this.showStatus = function() {
   if (this.saxonArmy.length === 0){
     return "Vikings have won the war of the century!";
   }
   else if (this.vikingArmy.length === 0){
     return "Saxons have fought for their lives and survive another day...";
   }
   else {
     return "Vikings and Saxons are still in the thick of battle.";
   }
 };
}