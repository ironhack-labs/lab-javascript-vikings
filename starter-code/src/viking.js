// Soldier
function Soldier (health, strength){
  this.health = health;
  this.strength = strength;
};
Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return this.name + ' has received ' + damage + ' points of damage';
  }
  else{
    return this.name + ' has died in act of combat';
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if (this.health > 0){
    return 'A Saxon has received ' + damage + ' points of damage';
  }
  else{
    return 'A Saxon has died in combat';
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
  var saxonFighter = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var vikingFighter = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var resultOfAttack = saxonFighter.receiveDamage(vikingFighter.strength);

  if (saxonFighter.health <= 0){
    this.saxonArmy.splice(saxonFighter,1);
  } 
  return resultOfAttack;
}

War.prototype.saxonAttack = function(){
  var saxonFighter = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var vikingFighter = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var resultOfAttack = vikingFighter.receiveDamage(saxonFighter.strength);

  if (vikingFighter.health <= 0){
    this.vikingArmy.splice(vikingFighter,1);
  } 
  return resultOfAttack;
}

War.prototype.showStatus = function(){
  if (this.saxonArmy <= 0){
    return "Vikings have won the war of the century!";
  }
  else if(this.vikingArmy <=0){
    return "Saxons have fought for their lives and survive another day...";
  }
  else if ((this.saxonArmy.length > 0) && (this.vikingArmy.length > 0)){
    return "Vikings and Saxons are still in the thick of battle."
  }
}