// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function(){

    return this.strength;

  };

  this.receiveDamage = function (theDamage) {
     this.health = healthArg - theDamage;
  };
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
  this.health = health;
  this.strength = strength;

  /*this.attack = function(){
    return this.strength;
  };*/

  this.receiveDamage = function (theDamage) {
     this.health = this.health - theDamage;

     if (this.health > 0) {
       var message = this.name + " has received " + theDamage + " points of damage";
       return message;
     } else {
        var messageDie = this.name + " has died in act of combat";
       return messageDie;
     }
  };
  this.battleCry = function (){
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, healthArg, strengthArg);
  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (theDamage) {
     this.health = this.health - theDamage;

     if (this.health > 0) {
       var message = "A Saxon has received " + theDamage + " points of damage";
       return message;
     } else {
        var messageDie = "A Saxon has died in combat";
       return messageDie;
     }
  };
  this.battleCry = function (){
    return "Odin Owns You All!";
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function(saxon) {
      this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function (){
      //select random saxon and viking
      //only 1 attack
      var randomNumSaxon = Math.floor((Math.random() * this.saxonArmy.length) + 0);
      var randomNumViking = Math.floor((Math.random() * this.vikingArmy.length) + 0);

      var rtn = this.saxonArmy[randomNumSaxon].receiveDamage(this.vikingArmy[randomNumViking].strength);
      if (this.saxonArmy[randomNumSaxon].health <= 0) {
          this.saxonArmy.splice(randomNumSaxon, 1);

      }
      return rtn;

  };

  this.saxonAttack = function (){
    //select random saxon and viking
    //only 1 attack
    var randomNumSaxon = Math.floor((Math.random() * this.saxonArmy.length) + 0);
    var randomNumViking = Math.floor((Math.random() * this.vikingArmy.length) + 0);

    var rtn = this.vikingArmy[randomNumViking].receiveDamage(this.saxonArmy[randomNumSaxon].strength);
    if (this.vikingArmy[randomNumViking].health <= 0) {
        this.vikingArmy.splice(randomNumViking, 1);

    }
    return rtn;

  };
  this.showStatus = function (){
    var message;
    if(this.saxonArmy.length === 0 ) {
       message = "Vikings have won the war of the century!";
    }
    if(this.vikingArmy.length === 0 ) {
        message = "Saxons have fought for their lives and survive another day...";
    }
    if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      message = "Vikings and Saxons are still in the thick of battle.";
    }
    return message;
  };
}
function newArmies() {
    var randomNum = Math.floor((Math.random() * 10) + 0);
  console.log(randomNum);




    for (var i = 0; i < randomNum; i++) {
      var vikingName = "viking" + i;
      vikingName  = new Viking(vikingName, 100, 50);
      console.log(vikingName);
    }
}
/*var viking1 = new Viking("tomas1", 100, 50);
var viking2 = new Viking("tomas2", 100, 50);
var viking3 = new Viking("tomas3", 100, 50);
var saxon1 = new Saxon(100, 100);
var saxon2 = new Saxon(100, 100);
var saxon3 = new Saxon(100, 100);
*/
var worldWard = new War();
//worldWar.addViking(viking1);
