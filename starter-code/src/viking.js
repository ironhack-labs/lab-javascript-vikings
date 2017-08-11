// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function (){
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health <= 0){
    return this.name + " has died in act of combat";
  }
  else{
    return this.name + " has received " + damage + " points of damage";
  }
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  if(this.health <= 0){
    return "A Saxon has died in combat";
  }
  else{
    return "A Saxon has received " + damage + " points of damage";
  }
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
};
War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack= function(){
  var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
  var randomSaxon = this.saxonArmy[randomSaxonNumber];
  var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
  var randomViking= this.vikingArmy[randomVikingNumber];
  // NEED TO CATCH VALUE
  var returned = randomSaxon.receiveDamage(randomViking.strength);
  if(randomSaxon.health <= 0){
    this.saxonArmy.splice(randomSaxonNumber);
  }
  return returned;
};
War.prototype.saxonAttack = function(){
  var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
  var randomSaxon = this.saxonArmy[randomSaxonNumber];
  var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
  var randomViking= this.vikingArmy[randomVikingNumber];
  var returnedV = randomViking.receiveDamage(randomSaxon.strength);
  if(randomViking.health <= 0){
    this.vikingArmy.splice(randomVikingNumber);
  }
  return returnedV;
};

War.prototype.showStatus = function(){
  if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle."
  }
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }
  if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }
};
