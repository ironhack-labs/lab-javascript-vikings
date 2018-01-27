// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health= this.health - damage;
  
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}
Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health > 0){
    return this.name + " has received " + damage + " points of damage"
  } else { 
  return this.name + " has died in act of combat"
  }
}

// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health > 0){
    return "A Saxon has received "+ damage +" points of damage"
  } else { 
  return "A Saxon has died in combat"
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking){
  this.vikingArmy = [viking];
}
  this.addSaxon = function(saxon){
  this.saxonArmy = [saxon];
}
}

War.prototype.vikingAttack = function(){
  var deadSaxon = Math.floor(Math.random() * this.saxonArmy.length)
  var attkViking = Math.floor(Math.random() * this.vikingArmy.length)
      this.saxonArmy[deadSaxon].receiveDamage(this.vikingArmy[attkViking].strength)
      if(this.saxonArmy[deadSaxon].health > 0){
        return "A Saxon has received "+ this.vikingArmy[attkViking].strength +" points of damage"
      } else { 
        this.saxonArmy.splice(deadSaxon,1);
        return "A Saxon has died in combat"
      }
}
War.prototype.saxonAttack = function(){
  var deadViking = Math.floor(Math.random() * this.vikingArmy.length)
  var attkSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      this.vikingArmy[deadViking].receiveDamage(this.saxonArmy[attkSaxon].strength)
      if(this.vikingArmy[deadViking].health > 0){
        return this.vikingArmy[deadViking].name + " has received "+ this.saxonArmy[attkSaxon].strength +" points of damage"
      } else { 
        this.vikingArmy.splice(deadViking,1);
        return "A Viking has died in combat"
      }
}

War.prototype.showStatus = function(){
  if(this.saxonArmy.length == 0){
  return "Vikings have won the war of the century!"
} else if (this.vikingArmy.length == 0){
  return "Saxons have fought for their lives and survive another day..."
} else {
  return "Vikings and Saxons are still in the thick of battle."
}
}
