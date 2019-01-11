// Soldier
function Soldier( healthArg , strengthArg ) {
  this.health = healthArg;
  this.strength = strengthArg;
}

// Attack

Soldier.prototype.attack = function(){
  return this.strength;
}

// Receive Damage

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}
  

// Viking

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;

function Viking(nameArg, healthArg, strengthArg) {
  this.name = nameArg;
  Soldier.call(this,healthArg, strengthArg);
}

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0 ){
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!"
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

function Saxon (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0 ){
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
}

// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
 
  var index = Math.floor(Math.random() * this.saxonArmy.length);
  var soldierSaxon = this.saxonArmy[index];
  var soldierViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
  var attackViking = soldierSaxon.receiveDamage(soldierViking.strength);
  
  if (soldierSaxon.health <= 0) {
    this.saxonArmy.splice(index, 1);
  }
  return attackViking;
}

War.prototype.saxonAttack = function(){

var index = Math.floor(Math.random() * this.vikingArmy.length);
  var soldierViking = this.vikingArmy[index];
  var soldierSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  
  var attackSaxon = soldierViking.receiveDamage(soldierSaxon.strength);
  
  if (soldierViking.health <= 0) {
    this.vikingArmy.splice(index, 1);
  }
  return attackSaxon;
}

War.prototype.showStatus = function (){
  if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
  }

  if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day..."
  }

  if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle."
  }
}