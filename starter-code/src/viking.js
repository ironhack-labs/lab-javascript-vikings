// Soldier

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  };

  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
    this.name = name;

    this.receiveDamage = function(damage){
      this.health -= damage;
      if(this.health > 0){
        console.log (this.name +" has received "+ damage+ " points of damage");
        return this.name +" has received "+ damage+ " points of damage";
      }else{
        console.log( this.name +" has died in act of combat");
        return this.name +" has died in act of combat";
      }
    };
    this.battleCry = function(){
      return "Odin Owns You All!";
    };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health, strength){
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      console.log( "A Saxon has received " + damage + " points of damage");
      return "A Saxon has received " + damage + " points of damage";
    } else {
      console.log("A Saxon has died in combat");
      return "A Saxon has died in combat";
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];


  this.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  };
  this.saxonAttack = function(){
      var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
      var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
      var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
      if(this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy.splice(randomViking, 1);

      }
      return result;

  };
  this.vikingAttack = function(){

      var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
      var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

      var result = this.saxonArmy[randomSaxon].receiveDamage (this.vikingArmy[randomViking].strength);
      if(this.saxonArmy[randomSaxon].health <= 0){
        this.saxonArmy.splice(randomSaxon, 1);
      }
      return result;

      c

  };



  this.showStatus = function(){
    var vikingStatus = this.vikingArmy.length;
    var saxonStatus = this.saxonArmy.length;
    var msg = "";
    if(vikingStatus > 0 && saxonStatus > 0){
          msg = this.vikingArmy.length + " Vikings and " + this.saxonArmy.length + " Saxons are still in the thick of battle.";
    } else if(saxonStatus < 1){
          msg = this.vikingArmy.length + " Vikings have won the war of the century!";
    } else if(vikingStatus < 1){
          msg = this.saxonArmy.length +" Saxons have fought for their lives and survive another day...";
    }
    console.log(msg);
  };
}

var maxWar = new War();


var vikingsNames = ["Alf", "Ari", "Asbjorn", "Asgeir", "Atli", "Bersi", "BjarniÝ", "Egil", "Einar", "Erik", "Finnbogi"];
var saxonNames = ["Alb", "Bru", "Jam", "Tim", "Ben", "Jon", "Rub", "Til", "Jar", "Erik", "Fin"];

var getRandomName = function (names){return names[Math.floor(Math.random()*names.length)];};
var getRandomHealth = function(){ return Math.floor(Math.random()*50)+1;};
var getRandomStrength = function(){return Math.floor(Math.random()*20)+1;};


var genNumberOfSoldiers = function (type){
  var randomNumber = Math.floor(Math.random()*10)+1;
  for(var i = 0; i< randomNumber; i++){
    if(type === "viking"){
      maxWar.addViking(new Viking(getRandomName(vikingsNames),getRandomHealth(), getRandomStrength()));
    }else{
      maxWar.addSaxon(new Saxon(getRandomHealth(), getRandomStrength()));
    }
  }

};




function letsPlay() {
  genNumberOfSoldiers("viking");
  genNumberOfSoldiers("saxon");

  while(maxWar.vikingArmy.length !== 0 && maxWar.saxonArmy.length !== 0) {
    var turn = Math.floor(Math.random() * 2);
    //console.log("TURNO -> "+turn)
    switch (turn) {
      case 0:
        console.log("Vikingos atacan!!!!");
        maxWar.vikingAttack();
        console.log(" ");
        break;
      case 1:
        console.log("Saxons atacan!!!");
        maxWar.saxonAttack();
        console.log(" ");
        break;
    }
    //console.log("Vikings->"+maxWar.vikingArmy.length +"Saxons->"+ maxWar.saxonArmy.length )

    maxWar.showStatus();
  }
}


letsPlay();
