// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}
// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this,health,strength);
}
Viking.prototype = Object.create(Soldier.prototype);//inheritance Vicking -> Soldier
// Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
    if (this.health > 0) {
    console.log(this.name + " has received " + damage + " points of damage!");
  } else {
    console.log(this.name + " has died in act of combat");
  }
}
Viking.prototype.battleCry = function() {
  console.log(this.name + " Owns You All!");
}
var soldier = new Soldier(1000,100);
var viking = new Viking("Brad",100,10);
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype); //inheritance Saxon -> Soldiers
// Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      console.log("A Saxon has received " + damage + " points of damage!");
    } else {
      console.log("A Saxon has died in act of combat");
    }
  }
var saxon = new Saxon(50,2);
// // War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
var war = new War();
// War.prototype = Object.create(War.prototype); //inheritance War -> Viking
// War.prototype.constructor = War;
War.prototype.addViking = function (viking) {
  war.vikingArmy.push(viking);
}
War.prototype.addSaxon = function (saxon) {
  war.saxonArmy.push(saxon);
}
War.prototype.vikingAttack = function () {
  war.saxonArmy.
}
// War.prototype.saxonAttack = function () {
//
// }
War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    console.log("Viking have won the war of the century!");
  } else if (this.vikingArmy.length === 0){
    console.log("Saxon have fought for their lives and survive another day...");
  } else {
    console.log("Vikings and Saxons are still in the thick of battle");
  }
}
