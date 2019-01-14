// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  }
Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  this.name = nameArg;
  Soldier.call(this, healthArg, strengthArg);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.attack = function(){
  return this.strength
}
// por qué receiveDamage no funciona así?:
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {
    return this.name +" has received "+ damage +" points of damage";
  } else {
    return this.name +" has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}
  

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
 }
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0) {                                    
    return "A Saxon has received "+ damage +" points of damage"; 
  } else {
    return "A Saxon has died in combat";
  }
} 

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function(){
  this.saxonArmy[Math.floor(Math.random()*saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*vikingArmy.length)].strength);
  for (var i = 0; i < saxonArmy.length; i++) {
    if (saxonArmy[i].health == 0) {
      saxonArmy.splice(saxonArmy[i], 1);
    } 
  }
  return Saxon(health, strength)
  

};
War.prototype.saxonAttack = function(){};

War.prototype.showStatus = function(){
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
  
};
