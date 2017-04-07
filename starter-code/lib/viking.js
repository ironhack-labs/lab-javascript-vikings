
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
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDammage = function(damage){
  this.health = this.health - damage;
};

function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  this.strength = this.strength + 5;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.battleCry = function(){
  console.log("Odin Owns You All!");
};

Viking.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  console.log( this.name + " has received " + damage + " points of damage");
  if(this.health<=0)
  {
    console.log( this.name + "has died in act of combat");
  }
};

function Saxon (health, strength) {
  Soldier.call(this,health,strength);
  this.strength = this.strength + 2;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
  console.log( "A Saxon has received "+ damage +" points of damage");
  if(this.health<=0)
  {
    console.log("A Saxon has died in combat");
  }
};

function War () {

  this.health = 100;
  this.strength = Math.floor(Math.random()*this.health/3);

  this.numVikings = Math.floor(Math.random()*1000);
  this.numSaxons = Math.floor(Math.random()*1000);

  this.vikingsArray=[];
  this.saxonsArray=[];

  this.vikingsFinalArray =[];
  this.saxonsFinalArray =[];

  this.vikingsArmyStrength = 0;
  this.saxonsArmyStrength = 0;


  for(var i=0;i<this.numVikings;i++){
    var viking = new Viking(i, this.health, this.strength);
    this.vikingsArmyStrength = this.vikingsArmyStrength + viking.attack();
    this.vikingsArray.push(viking);
  }

  for(i=0;i<this.numSaxons;i++){
    var saxon = new Saxon(this.health, this.strength);
    this.saxonsArmyStrength += saxon.attack();
    this.saxonsArray.push(saxon);
  }
}

War.prototype.showStatsArmies = function(){
  console.log("Viking's Army strength is " + this.vikingsArmyStrength);
  console.log("Saxon's Army strength is " + this.saxonsArmyStrength);
  console.log("There are " + this.numVikings + " viking's soldiers");
  console.log("There are " + this.numSaxons + " saxon's soldiers");
};

War.prototype.finalfight = function(){

  var strengthDiff = this.vikingsArmyStrength - this.saxonsArmyStrength;
  var soldiersDead = 0;
  var tempArray = [];

  if ( strengthDiff > 0) {
    soldiersDead = Math.floor(strengthDiff/this.health);
    for(var i=0;i<soldiersDead;i++)
    {
      this.saxonsArray[i].receiveDamage(this.health);
    }

    this.ResizeArmySaxons();

    console.log("Vikings are winners");
    console.log(soldiersDead + " saxons have dead")
  }else if(strengthDiff <0){

    soldiersDead = Math.floor(Math.abs(strengthDiff)/this.health);
    console.log(soldiersDead);
    for(var i=0;i<soldiersDead;i++)
    {
      this.vikingsArray[i].receiveDamage(this.health);
    }

    this.ResizeArmyVikings();

    console.log("Saxons are winners");
    console.log(soldiersDead + " vikings have dead")
  }else{
    console.log("Both are loosers");
  }
};

War.prototype.ResizeArmySaxons=function(){
  var arrayTemp = [];
  var j = 0;
  this.saxonsArray.forEach(function(saxon){
    if(saxon.health>0){
        arrayTemp.push(saxon);
        j++;
    }
  });
  this.saxonsArray = arrayTemp;
  this.numSaxons = this.saxonsArray.length;

};

War.prototype.ResizeArmyVikings=function(){
  var arrayTemp = [];
  var j = 0;
  this.vikingsArray.forEach(function(viking){
    if(viking.health>0){
      arrayTemp.push(viking);
      j++;
    }
  });
  this.vikingsArray = arrayTemp;
  this.numVikings = this.vikingsArray.length;

};

  var war = new War();

  war.showStatsArmies();
  war.finalfight();
  war.showStatsArmies();

 // this.vikingStat= 0;
 // this.saxonStat= 0;
 //
 // this.saxattackCal = function(){
 //   this.saxonAttack = radom;
 // }
 // this.vikattackCal = function(){
 //   this.vikingAttack = this.saxonAttack + 5;
 // }
 // this.saxonHealthCal = function (){
 //   this.saxonHealth =  radom
 //   }
 // this.vikingHealthCal = function(){
 //   this.vikingHealth = radom
 // }
 //
 // this.vikinStat = function (){
 //   this.vikingHealth -this.saxonAttack
 // }
 //
 // this.saxonStatl = function(){
 //  this.vikingHealth -this.saxonAttack
 // }
 //
 //
 // this.showStats = function(){
 //   console.log(this.vikinStats);
 //   console.log(this.saxonStats);
 // }
 }



var result = new War();

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
