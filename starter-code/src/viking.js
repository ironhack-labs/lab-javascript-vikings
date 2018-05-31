// Soldier
function Soldier(health, strength) {
   this.health = health;
   this.strength = strength;
};

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receivedDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength); //we are calling the constructor of the soldier
  this.name = name; //and adding a new property
};

Viking.prototype = Object.create(Soldier.prototype); //Viking must have the methods of soldiers 
Viking.prototype.constructor = Viking;

Viking.prototype.receivedDamage = function(damage) { //but we are overriding the method with something else
  this.health -= damage;
  return (this.health > 0) ? 
  this.name + "has received" + damage + "points of damage" 
  : this.name + "has died in act of combat"; //if the health is bigger than 0, return first, else return second.
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receivedDamage = function(damage) {
  return (this.health < 0) ? 
  "A Saxon has received" + damage + "points of damage"
  : "A Saxon has died in combat"; //if the health is bigger than 0, return first, else return second.
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
};

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.vikingArmy.push(saxon);
};

War.prototype.vikingAttack = function(){
  var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length); //choosing a random Viking
  var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length); //choosing a random Saxon
  var randomViking = this.vikingArmy[vikingIndex];
  var randomSaxon = this.saxonArmy[saxonIndex];

  randomSaxon.receivedDamage(randomViking.attack());

  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1); //it the health of the saxon is less than 0, we need to remove the saxon from the array
  };
};

War.prototype.saxonAttack = function(){
  var vikingIndex = Math.floor(Math.random()*this.vikingArmy.length); //choosing a random index of a viking
  var saxonIndex = Math.floor(Math.random()*this.saxonArmy.length); //choosing a random index of a saxon
  var randomViking = this.vikingArmy[vikingIndex]; //choosing a random viking
  var randomSaxon = this.saxonArmy[saxonIndex]; //choosing a random saxon

  randomViking.receivedDamage(randomSaxon.attack()); //the damage received by a viking is equal to the health of a random saxon

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1); //it the health of the viking is less than 0, we need to remove the viking from the array
  };
};

War.prototype.showStatus = function(){
  if (saxonArmy.length == 0) {
    return "Vikings have won the war of the century!"
  }
  if (vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day..."
  } 
  else
    return "Vikings and Saxons are still in the thick of battle."
}
