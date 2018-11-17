// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(damage){
    this.health = this.health - damage;
  }
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  
  this.attack = function(){
    return this.strength;
  };

  this.receiveDamage = function (damage){
  this.health =  this.health - damage;

  if (this.health > 1) {
    return this.name + " has received " + damage + " points of damage"
  }

  if (this.health <= 0) {
    return this.name + " has died in act of combat"
  }
  };

  this.battleCry = function(){
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.attack = function(){
    return this.strength
  }

 this.receiveDamage = function (damage){
   this.health = this.health - damage;
 
   if (this.health > 1) {
     return "A Saxon has received " + damage + " points of damage"
   }
 
   if (this.health <= 0) {
     return "A Saxon has died in combat"
   }
   };
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (viking){
    this.vikingArmy.push(viking);
  }

  this.addSaxon = function (saxon){
    this.saxonArmy.push(saxon);
  }

  this.vikingAttack = function (){
    this.saxonDefending = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    this.vikingAttacking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    if (this.saxonDefending.health <= this.vikingAttacking.strength){
      var oldHealth = this.saxonDefending.receiveDamage(this.vikingAttacking.attack())
      this.saxonArmy.splice(this.saxonDefending, 1);
      return oldHealth
    } else {
      return this.saxonDefending.receiveDamage(this.vikingAttacking.attack())
    }

  }

  this.saxonAttack = function (){
    this.saxonAttacking = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    this.vikingDefending = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    
    if (this.vikingDefending.health <= this.saxonAttacking.strength){
      var oldHealth = this.vikingDefending.receiveDamage(this.saxonAttacking.attack())
      this.vikingArmy.splice(this.vikingDefending, 1);
      return oldHealth
    } else {
      return this.vikingDefending.receiveDamage(this.saxonAttacking.attack())
    }
 }

 this.showStatus = function() {
  if (this.saxonArmy.length == ""){
  return "Vikings have won the war of the century!"
} else if (this.vikingArmy.length == ""){
  return "Saxons have fought for their lives and survive another day..."
} else {
  return "Vikings and Saxons are still in the thick of battle."
}}
}