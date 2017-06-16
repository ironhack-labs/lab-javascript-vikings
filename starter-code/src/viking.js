// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health-=damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
 this.name = name;
 Soldier.call(this, health, strength);
}

Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return (this.name + " has received " + damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
}

Viking.prototype.battleCry = function(){
    return ("Odin Owns You All!");
  }

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
 }

 Saxon.prototype.receiveDamage = function(damage){
   this.health -= damage;
   if(this.health > 0){
     return ("A Saxon has received " + damage + " points of damage");
   } else {
     return ("A Saxon has died in combat");
   }
 }

// War
function War () {
  this.vikingArmy= [],
  this.saxonArmy= [],
  this.addViking =  function(Viking) {
    this.vikingArmy.push(Viking);
  },
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  },
  this.vikingAttack = function() {
    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0){
      this.saxonArmy.splice(0,1);
    }
    return result;
  },
  this.saxonAttack= function(){
    var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0){
      this.vikingArmy.splice(0,1);
    }
    return result;
  },

  this.showStatus= function(){

  }
  }
