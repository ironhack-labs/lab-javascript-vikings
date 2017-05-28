// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  };
  this.receiveDamage = function(damage){
    this.health -= this.damage;
    if(this.health < 0) {
      this.health = 0;
  }
};
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      return this.name + " has received " + damage +  " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      return "A saxon has received " + damage +  " points of damage";
    }
    else {
      return "A saxon has died in combat";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);


// War

function War (vikingArmy, saxonArmy) {
  this.vikingArmy = vikingArmy;
  this.saxonArmy = saxonArmy;


  this.vikingAttack = function(){
     var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
     var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
     var injuredSaxon = this.saxonArmy[randomSaxon]
                        .receiveDamage(this.vikingArmy[randomViking].strength);
     if (this.saxonArmy[randomSaxon].health <= 0){
       this.saxonArmy.splice(randomSaxon, 1);
     }
     return injuredSaxon;
   };

   this.saxonAttack = function() {
     var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
     var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
     var injuredViking = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
     if (this.vikingArmy[randomViking].health <= 0){
         this.vikingArmy.splice(randomViking, 1);
     }
     return injuredViking;
   };

  this.showStatus = function(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

//////////////////////////////////

//We define the random number generator for the stats that the vikings
//and the saxons qill have.

var randomNum = function() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
};

//We generate the viking

var vikingObject = [
  new Viking("Harald", randomNum(), randomNum()),
  new Viking("Bjorn", randomNum(), randomNum()),
  new Viking("Loki", randomNum(), randomNum()),
  new Viking("Oswald", randomNum(), randomNum()),
  new Viking("Freja", randomNum(), randomNum()),
];



//We generate the saxons here

var saxonObject = [
  new Saxon(randomNum(), randomNum()),
  new Saxon(randomNum(), randomNum()),
  new Saxon(randomNum(), randomNum()),
  new Saxon(randomNum(), randomNum()),
  new Saxon(randomNum(), randomNum()),
];



////////////////////////////////

var newWar = new War(vikingObject, saxonObject);


//Display the war + status

while (newWar.vikingArmy.length !== 0 && newWar.saxonArmy.length !== 0){

    console.log(newWar.vikingArmy);
    console.log(newWar.saxonArmy);

  if(newWar.vikingArmy.length !== 0 && newWar.saxonArmy.length !== 0){
    console.log(newWar.vikingAttack());

  }

  if(newWar.vikingArmy.length !== 0 && newWar.saxonArmy.length !== 0){
    console.log(newWar.saxonAttack());
  }

  console.log("***************************");

  console.log(newWar.showStatus());

}
