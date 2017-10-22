// Soldier constructor
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

// Soldier methods
Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};

// Viking prototype "merged" with Soldier but still a constructor.
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking constructor
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

//Viking methods
Viking.prototype.attack = function(){
  return this.strength;
};

Viking.prototype.receiveDamage =  function(damage){
  this.health -= damage;
  if (this.health > 0){
    return this.name+' has received '+ damage +' points of damage';
  }
  else{
    return this.name+' has died in act of combat';
  }
};

Viking.prototype.battleCry = function(){
  return 'Odin Owns You All!';
};

// Saxon prototype "merged" with Soldier but still a constructor
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// Saxon constructor
function Saxon (health, strength) {
  Soldier.call(this,health,strength);
}

// Saxon methods
Saxon.prototype.attack = function(){
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return 'A Saxon has received '+ damage +' points of damage';
  }
  else{
    return 'A Saxon has died in combat';
  }
};

// War constructor.
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

//War methods
War.prototype.addViking = function(newViking){
  this.vikingArmy.push(newViking);
};

War.prototype.addSaxon = function(newSaxon){
  this.saxonArmy.push(newSaxon);
};

War.prototype.vikingAttack = function(){

  var vRandom = Math.floor(Math.random()*this.vikingArmy.length);
  var sRandom = Math.floor(Math.random()*this.saxonArmy.length);
  // Store this iteration in a variable to return the resulting string later.
  var result = this.saxonArmy[sRandom].receiveDamage(this.vikingArmy[vRandom].attack());
  // In case the saxon died.
  if (this.saxonArmy[sRandom].health <= 0){
    this.saxonArmy.splice(sRandom,1);
  }
  // Return the string with the message.
  return result;
};

War.prototype.saxonAttack = function(){
  var vRandom = Math.floor(Math.random()*this.vikingArmy.length);
  var sRandom = Math.floor(Math.random()*this.saxonArmy.length);
  // Store this iteration in a variable to return the resulting string later.
  var result = this.vikingArmy[vRandom].receiveDamage(this.saxonArmy[sRandom].attack());
  // In case the viking died.
  if (this.vikingArmy[vRandom].health <= 0){
    this.vikingArmy.splice(vRandom,1);
  }
  // Return teh resulting string.
  return result;
};

// Status method for war.
War.prototype.showStatus = function(){
  if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }else{
   return "Vikings and Saxons are still in the thick of battle.";
  }
};
