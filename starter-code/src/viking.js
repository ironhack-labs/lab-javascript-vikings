// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
  this.attack = function (){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) 
      return this.name + " has received " + damage +" points of damage";
    else if (this.health <= 0) return this.name + " has died in act of combat";
  };
  
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) 
      return "A Saxon has received " + damage +" points of damage";
    else if (this.health <= 0) return "A Saxon has died in combat";
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War

function randomIndex(array){
  return Math.floor(Math.random() * array.length)
}

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  };
  
  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };
  
  this.vikingAttack = function() {
    var saxonIndex = randomIndex(this.saxonArmy);
    var saxonSoldier = this.saxonArmy[saxonIndex];
    var vikingSoldier = this.vikingArmy[randomIndex(this.vikingArmy)];
    
    if (vikingSoldier.strength >= saxonSoldier.health)
      this.saxonArmy.splice(saxonIndex, 1);
    return saxonSoldier.receiveDamage(vikingSoldier.strength);
  };
  
  this.saxonAttack = function() {
    var vikingIndex = randomIndex(this.vikingArmy);
    var vikingSoldier = this.vikingArmy[vikingIndex];
    var saxonSoldier = this.saxonArmy[randomIndex(this.saxonArmy)];
    
    if (saxonSoldier.strength >= vikingSoldier.health)
      this.vikingArmy.splice(vikingIndex, 1);
    return vikingSoldier.receiveDamage(saxonSoldier.strength);
  };
  
  this.showStatus = function() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    
    if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";
    
    else return "Vikings and Saxons are still in the thick of battle.";
  };
}

War.prototype = Object.create(Viking.prototype);
War.prototype = Object.create(Saxon.prototype);
War.prototype.constructor = War;



