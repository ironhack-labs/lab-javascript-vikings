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
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.damage = 0;
  this.attack = function(enemy){
    if (enemy.health > 0) {
      enemy.health = enemy.health - this.strength;
      enemy.damage = this.strength;
    } else {
      console.log("stop it man, he's gone");
    }
  };
}
function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.battleCry = function(){
    console.log("Odin Owns You All!");
  };
  this.state = function(){
    if (this.damage !== 0) {
      console.log(this.name + " has received " + this.damage + " points of damage");
      this.damage = 0;
    }
    if (this.health <= 0) {
      console.log(this.name + " has died in act of combat");
    }
  };
}
function Saxon (health, strength) {
  Soldier.call(this,health,strength);
  this.state = function(){
    if (this.damage !== 0) {
      console.log("A Saxon has received " + this.damage + " points of damage");
      this.damage = 0;
    }
    if (this.health <= 0) {
      console.log("A Saxon has died in act of combat");
    }
  };
}
var viking1 = new Viking("Thor", 100, 90);
var viking2 = new Viking("Odin", 100, 90);
var saxon1 = new Saxon(70, 40);
var saxon2 = new Saxon(60, 45);
// console.log(viking1);
// console.log(saxon2);

var vikingsArmy =[];
var saxonsArmy =[];

function creatingViking () {
  for (i=1; i<= 10; i++);
  vikingsArmy.push(new Viking());
  return vikingsArmy;
}

function creatingSaxon() {
  for (i=1; i<= Math.round(Math.random()*10); i++);
  saxonsArmy.push(new Saxon());
  return saxonsArmy;
}
console.log(vikingsarmy);
creatingViking();
creatingSaxon();

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.damage = 0;
  this.attack = function(enemy){
    if (enemy.health > 0) {
      enemy.health = enemy.health - this.strength;
      enemy.damage = this.strength;
    } else {
      console.log("stop it man, he's gone");
    }
  };
}

function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.battleCry = function(){
    console.log("Odin Owns You All!");
  };
  this.state = function(){
    if (this.damage !== 0) {
      console.log(this.name + " has received " + this.damage + " points of damage");
      this.damage = 0;
    }
    if (this.health <= 0) {
      console.log(this.name + " has died in act of combat");
    }
  };
}

function Saxon (health, strength) {
  Soldier.call(this,health,strength);
  this.state = function(){
    if (this.damage !== 0) {
      console.log("A Saxon has received " + this.damage + " points of damage");
      this.damage = 0;
    }
    if (this.health <= 0) {
      console.log("A Saxon has died in act of combat");
    }
  };
}

var viking1 = new Viking("Thor", 100, 90);
var viking2 = new Viking("Odin", 100, 90);
var saxon1 = new Saxon(70, 40);
var saxon2 = new Saxon(60, 45);
console.log(viking1);
console.log(saxon2);


function creatingViking () {
  var vikingsArmy =[];
  for (i=1; i<= Math.round(Math.random()*10); i++);
  vikingsArmy.push(new Viking());
  return vikingsArmy;
}
function creationSaxon() {
  var saxonsArmy =[];
  for (i=1; i<= Math.round(Math.random()*10); i++);
  saxonsArmy.push(new Saxon());
  return saxonsArmy;
}

console.log (vikingsArmy);
console.log(saxonsArmy);


//
// viking2.attack(viking1);
// viking1.state();
function War () {}
module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
