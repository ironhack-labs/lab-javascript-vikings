// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received "  + this.damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength); 
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function(strength){
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return ("A Saxon has received " + this.damage + " points of damage");
  } else {
    return ("A Saxon has died in combat");
  }
}

// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];
}
  War.prototype.addViking = function(Viking){
  this.Viking = this.vikingArmy.push(Viking);
  }

  War.prototype.addSaxon = function(Saxon){
    this.Saxon = this.saxonArmy.push(Saxon);
  }
  War.prototype.vikingAttack = function(){
  var saxonRandom = Math.floor(Math.random(this.saxonArmy.length));
  var vikingRandom = Math.floor(Math.random(this.vikingArmy.length));

  saxonRandom = this.saxonArmy[saxonRandom]
  vikingRandom = this.saxonArmy[vikingRandom]

  var warDamage = vikingRandom.strength;
  var warHealth = saxonRandom.health;

  saxonRandom.health = warHealth - warDamage;
  console.log(warDamage)
  console.log(warHealth)
  console.log(Saxon.health)
  if (saxonRandom.health <= 0){
    this.saxonArmy.pop(this.saxonRandom);
  }
  return Saxon.prototype.receiveDamage();
  }

  War.prototype.saxonAttack = function(){

  }
  War.prototype.showStatus = function(){
    //War.call(this, saxonArmy, vikingArmy); 

    if (saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

