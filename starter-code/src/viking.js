// Soldier
function Soldier (health,strength) {
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
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health>0){
    return this.name + " has received "+ damage +" points of damage";
  }
  else{
    return this.name + " has died in act of combat";
  }
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this,health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health>0){
    return "A Saxon has received "+ damage +" points of damage";
  }
  else{
    return "A Saxon has died in combat";
  }
}



// War
function War () {
  this.vikingArmy= [];
  this.saxonArmy= [];
}

War.prototype.addViking = function( viking ){
  vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
  saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function (){
  var randomIndReceiving = Math.floor(Math.random()*saxonArmy.length);
  var randomIndAttacking = Math.floor(Math.random()*vikingArmy.length);
  saxonArmy[randomIndReceiving].receiveDamage( vikingArmy[randomIndAttacking].attack() );
  if(saxonArmy[randomIndReceiving].health <=0){
    saxonArmy.slice(randomIndReceiving,1);
  }
}

War.prototype.saxonAttack = function (){
  var randomIndReceiving = Math.floor(Math.random()*vikingArmy.length);
  var randomIndAttacking = Math.floor(Math.random()*saxonArmy.length);
  vikingArmy[randomIndReceiving].receiveDamage( saxonArmy[randomIndAttacking].attack() );
  if(vikingArmy[randomIndReceiving].health <=0){
    vikingArmy.slice(randomIndReceiving,1);
  }
}

War.prototype.showStatus = function(){
  if( saxonArmy.length ===0 ){
    return "Vikings have won the war of the century!";
  }
  if( vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }

  if( saxonArmy.length !==0 && vikingArmy.length !==0){
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
