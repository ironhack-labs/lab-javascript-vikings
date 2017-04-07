// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };

/*
Soldier

Create a new soldier constructor function that allows you to create soldiers.
A soldier should be able to have health, strength, attack, and receiveDamage.
The soldier attack will use all his strength to create damage.
When he receives a damage, that damage will be removed from his health.
*/


function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

}

Soldier.prototype.receiveDamage = function(damage){
   this.health -= damage;
};

Soldier.prototype.attack = function(enemy){
  return enemy.receiveDamage(this.strength);
};

/*
Viking

Create a new viking function that allows you to create vikings.
The vikings will be soldiers with a name.
Each viking in the army will have a battleCry, a console.log that writes "Odin Owns You All!". (Learn more about battle cries)
The application should inform us when the vikings receive damage, by logging "{vikingName} has received {amountOfDamage} points of damage".
If a Viking dies in combat, the application should log "{vikingName} has died in act of combat".

*/

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
};

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
};


/*
Saxons

Create a new saxons function that allows you to create saxons, that will be weaker than vikings.
The application should inform us when the saxons receive damage, by logging "A Saxon has received {amountOfDamage} points of damage".
If a Saxon dies in combat, the application should log "A Saxon has died in combat".
*/

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
};

/*
War

Create a new war function that allows us to have a Vikings army and a Saxons army to fight between them.
It should has a saxonAttack function to attack the vikings.
It should has a vikingAttack function to attack the saxons.
It should has a showStats function to show a message of how have won the combat.

*/

function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];


}


War.prototype.addViking = function(viking){
  this.vikingsArmy.push(viking);
};

War.prototype.addSaxon = function(saxon){
  this.saxonsArmy.push(saxon);
};


War.prototype.vikingAttack = function (){
  var result = "";
  var saxons = this.saxonsArmy;
  this.vikingsArmy.forEach(function (warrior, index){
    result = warrior.attack(saxons[index]);
    if(saxons[index].health < 1 ) saxons.splice(index, 1);
  });
  return result;
};

War.prototype.saxonAttack = function(){
  var result = "";
  var vikings = this.vikingsArmy;
  this.saxonsArmy.forEach(function (warrior, index){
    result = warrior.attack(vikings[index]);
    if(vikings[index].health < 1 ) vikings.splice(index, 1);
  });
  return result;
};


War.prototype.fight = function(){
  //random starting order
  if(Math.floor(Math.random() * 2)){
    this.vikingAttack();
    this.saxonAttack();
  } else {
    this.saxonAttack();
    this.vikingAttack();
  }
};


War.prototype.showStats = function () {
  return this.vikingsArmy.length >= this.saxonsArmy.length ? "Vikings have won the war of the century!" : "Saxons have won!";
};

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
