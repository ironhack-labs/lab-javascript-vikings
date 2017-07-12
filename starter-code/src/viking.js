// Soldier
function Soldier (healthArg, strengthArg) {
 this.health = healthArg,
 this.strength = strengthArg,
 this.attack = function(){
   console.log(soldier.strength);
   return this.strength;
 },
 this.receiveDamage = function(damage){
 this.health = this.health - damage;
 console.log(this.health);
 };
}


// Viking
function Viking (name, healthArg, strengthArg) {
 this.name = name,
 Soldier.call(this, healthArg, strengthArg, Soldier.attack),
 this.receiveDamage = function(damage){
   this.health = this.health - damage;
   if(this.health > 0){
     return this.name + " has received " + damage + " points of damage!";
   } else{
     return this.name + " has died in the act of combat!";
   }
 },
 this.battleCry = function() {
   return "Odin owns you all!!!";
 };
}



// Saxon
function Saxon (healthArg, strengthArg) {
 Soldier.call(this, healthArg, strengthArg, Soldier.attack);
 this.receiveDamage = function(damage){
   this.health = this.health - damage;
   if (this.health >= 1){
     return "A Saxon has received " + damage + "points of damage.";
   } else { return "A Saxon has died in combat!";
   }
 };
 }



// War
function War () {
 this.vikingArmy=[],
 this.saxonArmy=[],
 this.addViking = function(newViking) {
   this.vikingArmy.push(newViking);
 },

 this.addSaxon = function(newSaxon) {
   this.saxonArmy.push(newSaxon);
 },

 this.vikingAttack = function() {
   function randomSaxon(array) {
   saxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
   return array[saxonIndex];
 }
   function randomViking(array) {
     vikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
     return array[vikingIndex];
   }
   var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());

   if (this.saxonArmy[randomSaxon].health<=0) {
     this.saxonArmy.splice(randomSaxon, 1);
   }

 },

 this.saxonAttack = function() {
   function randomViking(array) {
     vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
     return array[vikingIndex];
   }
   function randomSaxon(array) {
     saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
     return array[saxonIndex];
   }
   var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
   this.vikingArmy.splice(randomViking, 1);
 },

 this.showStatus = function() {
   if (this.saxonArmy.length === 0){
     return "Vikings have won the war of the century!";
   }
   else if (this.vikingArmy.length === 0) {
     return "Saxons have fought for their lives and survive another day...";
   }
   else {
     return "Vikings and Saxons are still in the thick of battle!";
   }
 }
};



var viking1 = new Viking("burgrawl",100,100);
var viking2 = new Viking("smurgrawl",100,100);
var viking3 = new Viking("krgrawl",100,100);
var viking4 = new Viking("turgrawl",100,100);
var viking5 = new Viking("lurgrawl",100,100);
var viking6 = new Viking("jurgrawl",100,100);
var viking7 = new Viking("furgrawl",100,100);
var viking8 = new Viking("zurgrawl",100,100);

var saxon1 = new Saxon(45,75);
var saxon2 = new Saxon(55,60);
var saxon3 = new Saxon(35,60);
var saxon4 = new Saxon(25,60);
var saxon5 = new Saxon(60,60);
var saxon6 = new Saxon(12,60);
var saxon7 = new Saxon(55,60);
var saxon8 = new Saxon(75,60);
var saxon9 = new Saxon(40,60);
var saxon10 = new Saxon(10,60);


var theWar = new War();

theWar.addViking(viking1);
theWar.addViking(viking2);
theWar.addViking(viking3);
theWar.addViking(viking4);
theWar.addViking(viking5);
theWar.addViking(viking6);
theWar.addViking(viking7);
theWar.addViking(viking8);


theWar.addSaxon(saxon1);
theWar.addSaxon(saxon2);
theWar.addSaxon(saxon3);
theWar.addSaxon(saxon4);
theWar.addSaxon(saxon5);
theWar.addSaxon(saxon6);
theWar.addSaxon(saxon7);
theWar.addSaxon(saxon8);
theWar.addSaxon(saxon9);
theWar.addSaxon(saxon10);

console.log(theWar);


// console.log(theWar.vikingAttack.)



// //Iteration 1. Random mistery
// function random_selector(array) {
//   randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }
