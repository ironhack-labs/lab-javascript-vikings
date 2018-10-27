// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
}
Soldier.prototype.receiveDamage = function(damage){
  this.health -= 50;
}
Soldier.prototype.attack = function(){
  return this.strength;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.attack = function(){
  return this.strength;
}
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  }else{
    return `${this.name} has died in act of combat`;
  }  
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health,strength) {
  this.health = health;
  this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.attack = function(){
  return this.strength;
}
Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
  }else{
    return `A Saxon has died in combat`;
  }  
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function(objViking){
  this.vikingArmy.push(objViking);
  
}
War.prototype.addSaxon = function(objSaxon){
  this.saxonArmy.push(objSaxon);
}
War.prototype.vikingAttack = function(){
  var randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var attack = this.saxonArmy[randomIndex].receiveDamage(this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))].strength)
 
  if(this.saxonArmy[randomIndex].health <= 0){
    this.saxonArmy.splice(randomIndex,1);
  }
  return attack;  
}
War.prototype.saxonAttack = function(){
  var randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var attack = this.vikingArmy[randomIndex].receiveDamage(this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))].strength)
 
  if(this.vikingArmy[randomIndex].health <= 0){
    this.vikingArmy.splice(randomIndex,1);
  }
  return attack;   
}
War.prototype.showStatus = function(){
  
  if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }

  if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
    return "Vikings and Saxons are still in the thick of battle.";
  }
}



