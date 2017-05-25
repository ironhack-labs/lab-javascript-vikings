// Soldier
function Soldier (health, strenght) {
  this.health = 100;
  this.strenght = 10;
  this.recieveDamage = function (damage){
  this.health = this.health - damage;
  };
  this.attack = function (){
    return Soldier.strenght;
  };
}
// Viking
function Viking (name, health, strenght) {
  this.name = name;
  Soldier.call(this, health, strenght);
  this.battlecry = function(){
    console.log("Odin Owns You All");
    } ;
  this.recieveDamage = function (damage){
    this.health = this.health - damage;
    if (Viking.health === 0){
      console.log(name + " has died in act of combat");}
    else {
      console.log(name + " has recieved " + damage + " points of damage");}
    };
  }

// Saxon
function Saxon (health, strenght) {
  Soldier.call(this, health);
  this.strenght = 7;
  this.battlecry = function(){
    console.log("Soy SAJÖOOOOOOON");
    } ;
  this.recieveDamage = function (damage){
    this.health = this.health - damage;
    if (Saxon.health === 0){
      console.log("A Saxon has died in combat");}
    else {
      console.log("A Saxon has recieved" + damage + " points of damage");}
    };
}



// War


var vikingArmy = [];
var saxonArmy = [];

function  War(){

  this.addViking = function(vikingObject){
    vikingArmy.push(vikingObject);
  };
  this.addSaxon = function(saxonObject){
    saxonArmy.push(saxonObject);
  };
  this.vikingAttack = function(){
    saxonArmy.map(recieveDamage(Viking.strenght),saxon);
    if (saxon.health === 0){
      var index = saxonArmy.slice(index, 1);
    }
    else return Saxon.recieveDamage();
  };
  this.saxonAttack = function(){
    vikingArmy.map(recieveDamage(Saxon.strenght), viking);
    if (viking.health === 0){
      var index = saxonArmy.slice(index, 1);
    }
    else return Viking.recieveDamage();
  };
  this.ShowStatus = function(){

  };
}




var Odin = new Viking("Odin");
var Saxon1 = new Saxon();
Odin.recieveDamage(Saxon1.strenght);
console.log(Odin);

//var Rulfo = new Viking("Rulfo");
//var Saxon1 = new Saxon();
//var Saxon2 = new Saxon();



//var termopilas = new War();
//termopilas.addViking(Odin);
//termopilas.addViking(Rulfo);
//termopilas.addSaxon(Saxon1);
//termopilas.addSaxon(Saxon2);
//termopilas.saxonAttack();

//console.log(saxonArmy);
//console.log(vikingArmy);
