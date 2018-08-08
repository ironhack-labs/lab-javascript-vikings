// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    // this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) return this.name + " has received " + damage + " points of damage";
    if (this.health <= 0) return this.name + " has died in act of combat";
  }
  this.battleCry = function(){
    return "Odin Owns You All!";
  }
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) return "A Saxon has received " + damage + " points of damage";
    if (this.health <= 0) return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  }

  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  this.vikingAttack = function() {
    var randNumbSax = Math.floor(Math.random() * Math.floor(saxonArmy.length));
    var randNumbVik = Math.floor(Math.random() * Math.floor(vikingArmy.length));
    this.saxonArmy[randNumbSax].receiveDamage() = this.vikingArmy[randNumbVik].strength;
  }
}
