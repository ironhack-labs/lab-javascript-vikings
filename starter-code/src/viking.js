// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  Soldier.prototype.attack = function() {
    return this.strength;
  };

  Soldier.prototype.receiveDamage = function(damage){
   this.health = this.health - damage;
  }
}

// Viking
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;

function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;

  Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
   }

   Viking.prototype.battleCry = function() {
     return "Odin Owns You All!";
   }
}

// Saxon
   Saxon.prototype = Object.create(Soldier.prototype);
   Saxon.prototype.constructor = Saxon;

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);

  
  Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
   if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
     } else {
      return "A Saxon has died in combat" ;
    }
   }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

 War.prototype.addViking = function(vikingOb){
   this.vikingArmy.push(vikingOb);
 };

 War.prototype.addSaxon = function(saxonOb){
   this.saxonArmy.push(saxonOb);
 };
 
 War.prototype.vikingAttack = function(){
  var randomSaxon = this.saxonArmy [Math.floor(Math.random()*this.saxonArmy.length)];
  var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  randomSaxon.receiveDamage(randomViking.strength);

  var deadSaxon = this.saxonArmy.filter(function(dead){
    return dead.health <= 0 
     });
     this.saxonArmy.splice(deadSaxon);
     return randomSaxon.receiveDamage(0);
 };

 War.prototype.saxonAttack = function(){
  var randomSaxon = this.saxonArmy [Math.floor(Math.random()*this.saxonArmy.length)];
  var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  
  randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomViking);
    return randomViking.name + " has died in act of combat";
  } 
  return randomViking.name + " has received " + randomSaxon.strength + " points of damage";
    
 };
 War.prototype.showStatus = function(){
   if (this.saxonArmy.length == 0){
     return "Vikings have won the war of the century!"
   }else if (this.vikingArmy.length == 0){
     return "Saxons have fought for their lives and survive another day..."
   }else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
     return "Vikings and Saxons are still in the thick of battle."
   }
   
 };
}
