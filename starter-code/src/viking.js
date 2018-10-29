// Soldier
function Soldier( health , strength )  {
  this.health = health
  this.strength = strength
  
  }
Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}
Soldier.prototype.attack = function(){
  return this.strength
}
    
  


// Viking
function Viking(name, health, strength) {
  Soldier.call(this,health,strength)
  this.name = name
  
  
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage
  if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  }
  else{
    return `${this.name} has died in act of combat`
  }
}
Viking.prototype.battleCry = function(){
  return `Odin Owns You All!`
}

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength)
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage
  if(this.health > 0){
    return `A Saxon has received ${damage} points of damage`
  }
  else{
    return `A Saxon has died in combat`
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
War.prototype.vikingAttack = function (){
  var randomViking = Math.floor(Math.random() * this.vikingArmy.length); 
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  
  //console.log(randomViking)
  //console.log(this.vikingArmy[randomViking].strength)
  //console.log(this.saxonArmy[randomSaxon].health)
  //this.saxonArmy[randomSaxon].health -= this.vikingArmy[randomViking].strength;

  //if (this.saxonArmy[randomSaxon].health <= this.vikingArmy[randomViking].strength)
  //{
  //  console.log(this.vikingArmy[randomViking].strength);
  //  console.log(this.saxonArmy.splice(randomSaxon,1));
  //}

  return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
}
War.prototype.saxonAttack = function(){
  var randomViking = Math.floor(Math.random() * this.vikingArmy.length); 
  var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  //this.vikingArmy[randomViking].health -= this.saxonArmy[randomViking].strength;
  console.log(this.saxonArmy[randomSaxon].attack)
  console.log(this.vikingArmy[randomViking])

  if(this.vikingArmy[randomViking].health <= this.saxonArmy[randomSaxon].strength){
    this.vikingArmy.splice(randomViking,1);
  }

  return this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
}
War.prototype.showStatus = function(){

}

