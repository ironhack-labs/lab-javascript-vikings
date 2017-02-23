// https://www.npmjs.com/package/faker
var faker  = require('faker');
var Viking = require('./lib/viking.js');

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype = Object.create(Object.prototype);

Soldier.prototype.attack = function(){
    return this.strength;
};

Soldier.prototype.receiveDamage = function(attacker){
  this.health -= attacker.attack();
  return this.health;
};

function MakeViking(health, strength, name){
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = "Odin Owns You All!";
}

MakeViking.prototype = Object.create(Soldier.prototype);
// Viking.prototype.constructor = Viking;

// function War()

var viking = new MakeViking(120,60,"Thor");
var saxon = new Soldier(100,40,0);

function vikingAttack(){
  viking.attack();
  saxon.receiveDamage(viking);
  console.log("Saxon has received " + viking.strength + " points of damage.");
}

function saxonAttack(){
  saxon.attack();
  viking.receiveDamage(saxon);
  console.log(viking.name + " has received " + saxon.strength + " points of damage.");
}

vikingAttack();
saxonAttack();

var attack = function() {
  var turn = Math.floor(Math.random() * 2);
  if (turn === 0){
    vikingAttack();
  }
  if (turn === 1){
    saxonAttack();
  }
};

function showStats(){
  console.log("Viking has " + viking.health + " HP.");
  console.log("Saxon has " + saxon.health + " HP.");
  console.log("Restart battle? Run again");
}

var war = function() {
  while ((viking.health > 0) && (saxon.health > 0)) {
    attack();
  }
  if (viking.health < 0){
    console.log(viking.name + " has died in act of combat.");
    viking.health = 0;
  }
  else if (saxon.health < 0){
    saxon.health = 0;
    console.log("Saxon has died in combat.");
  }

  showStats();
};

war();
