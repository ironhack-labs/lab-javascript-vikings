// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
};

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
};
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

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
};



// War
function War () {
  this.vikingArmy= [];
  this.saxonArmy= [];
}

War.prototype.addViking = function( viking ){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function (){
  var randomIndReceiving = Math.floor(Math.random()*this.saxonArmy.length);
  var randomIndAttacking = Math.floor(Math.random()*this.vikingArmy.length);
  var resultStr =
  this.saxonArmy[randomIndReceiving].receiveDamage( this.vikingArmy[randomIndAttacking].attack() );
  if(this.saxonArmy[randomIndReceiving].health <=0){
    this.saxonArmy.splice(randomIndReceiving,1);
  }
  return resultStr;
};

War.prototype.saxonAttack = function (){
  var randomIndReceiving = Math.floor(Math.random()*this.vikingArmy.length);
  var randomIndAttacking = Math.floor(Math.random()*this.saxonArmy.length);
  var resultStr =
  this.vikingArmy[randomIndReceiving].receiveDamage( this.saxonArmy[randomIndAttacking].attack() );
  if(this.vikingArmy[randomIndReceiving].health <=0){
    this.vikingArmy.splice(randomIndReceiving,1);
  }
  return resultStr;
};

War.prototype.showStatus = function(){
  if( this.saxonArmy.length ===0 ){
    return "Vikings have won the war of the century!";
  }
  if( this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }

  if( this.saxonArmy.length !==0 && this.vikingArmy.length !==0){
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
