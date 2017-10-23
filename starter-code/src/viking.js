// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function () {
  return this.strength;
};
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};
// Viking

function Viking  (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0){
    return (this.name + " has received " + damage + " points of damage");
  }else{
    return(this.name + " has died in act of combat");
  }
};
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if(this.health > 0){
    return ("A Saxon has received " + damage + " points of damage");
  }else{
    return("A Saxon has died in combat");
  }
};
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack = function () {
  var randomSaxon = this.saxonArmy[Math.Floor(Math.Random()* this.saxonArmy.length)];
  var randomViking = this.vikingArmy[Math.Floor(Math.Random()* this.vikingArmy.length)];
  console.log(randomSaxon.receiveDamage(randomViking.strength));
  if(randomSaxon.health < 1){
    this.saxonArmy.splice(this.saxonArmy.find(randomSaxon), 1);
  }
  console.log(randomViking.name + "'s strength is: " + randomViking.strength);
};
War.prototype.saxonAttack = function () {
  var randomSaxon = this.saxonArmy[Math.Floor(Math.Random()* this.saxonArmy.length)];
  var randomViking = this.vikingArmy[Math.Floor(Math.Random()* this.vikingArmy.length)];
  console.log(randomViking.receiveDamage(randomSaxon.strength));
  if(randomViking.health < 1){
    this.vikingArmy.splice(this.vikingArmy.find(randomViking), 1);
  }
  console.log("The Saxon's strength is: " + randomSaxon.strength);

};
War.prototype.showStatus = function () {
  if(saxonArmy.length === 0){
    console.log("Vikings have won the war of the century!");
    return false;
  } else if(vikingArmy.length ===0){
    console.log("Saxons have fought for their lives and survive another day...");
    return false;
  }else{
    console.log("Vikings and Saxons are still in the thick of battle.");
    return true;
  }
};
//-------Time For War!!!-------------------------
while(War.vikingArmy.length < 10){
  War.addViking("Olaf", Math.Floor(Math.Random(10-1)+1), Math.Floor(Math.Random(10-1)+1));
}
while(War.saxonArmy.length < 10){
  War.addSaxon(Math.Floor(Math.Random(10-1)+1), Math.Floor(Math.Random(10-1)+1));
}
while(War.showStatus){
  War.saxonAttack();
  War.vikingAttack();
}
