var _ = require('lodash');

// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;

}

Soldier.prototype.receiveDamage = function(){
    return this.strength;
  };

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
  };

// Viking
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);

  this.name = name;

}
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health>0){
      return this.name+" has received "+damage.toFixed(0)+ " points of damage";
    }
    else{
      return this.name + " has died in act of combat";
    }
  };

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  };

// Saxon
function Saxon (health,strength) {
  Soldier.call(this,health,strength);
}

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health>0){
      return "A Saxon has received "+damage.toFixed(0)+ " points of damage";
    }
    else{
      return ("A Saxon has died in act of combat");
    }
  };


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(myViking){
    this.vikingArmy.push(myViking);
  };
War.prototype.addSaxon = function(mySaxon) {
    this.saxonArmy.push(mySaxon);
  };
War.prototype.vikingAttack = function () {
    var randomViking = _.sample(this.vikingArmy);
    var randomSaxon = _.sample(this.saxonArmy);
    var result = randomSaxon.receiveDamage(randomViking.strength);
    console.log(result);
    if(result === "A Saxon has died in act of combat"){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    }
    return result + "\nViking's strength: " + randomViking.strength;

  };
War.prototype.saxonAttack = function () {
    var randomViking = _.sample(this.vikingArmy);
    var randomSaxon = _.sample(this.saxonArmy);

    var result = randomViking.receiveDamage(randomSaxon.strength);
        console.log(result);

    if(randomViking.health<=0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
    return result + "\nSaxon's strength: " + randomSaxon.strength;
  };
War.prototype.showStatus = function () {
    if(this.vikingArmy.length === 0){
      return "Saxons";
    }
    else if(this.saxonArmy.length === 0){
      return  "Vikings";
    }
    else if(this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0){
      return "Continue";
    }
  };


var times = 0;
var startWar = new War();
var keepOn = "Continue";

for(var i = 0;i<100;i++){
  var myViking = new Viking("Alex",Math.random()*200,Math.random()*150);
  var mySaxon = new Saxon(Math.random()*200,Math.random()*150);
  startWar.addViking(myViking);
  startWar.addSaxon(mySaxon);


}

while(keepOn === "Continue"){
  var random = Math.random();
  if(random<0.5){
    startWar.vikingAttack();
  }
  else{
    startWar.saxonAttack();
  }
  keepOn = startWar.showStatus();
  times++;
}
console.log("The winners of the fight are the", keepOn, "having fought", times, "times");
