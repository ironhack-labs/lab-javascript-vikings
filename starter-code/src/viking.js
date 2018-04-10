// Soldier
function Soldier(health, strength){
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
};

// Test to create a new Soldier
// var newSoldier = new Soldier("10","2");
// console.log(newSoldier);

// Viking
function Viking(name, health, strength){
  Soldier.call(this, health, strength);
  this.name = name;
  // this.battlecry = "Odin Owns You All!";
  
  Viking.prototype = Object.create(Soldier.prototype);

  Viking.prototype.receiveDamage = function (damage){
    result = "";
    this.health -= damage;

    if(this.health > 0){
      return this.name + " has recieved " + damage +  " points of damage";
    } else{
      return this.name + " has died in act of combat";
    };
  };
};

  Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  };
 

  // Viking.prototype.constructor = Viking;

// Test to create a new Viking
// var newViking = new Viking("Mike", "10", "2");
// console.log(newViking); 

// // Saxon
function Saxon(health, strength){
  Soldier.call(this, health, strength);

  Saxon.prototype = Object.create(Soldier.prototype);

  Saxon.prototype.receiveDamage = function(damage){

    if(health > 0){
      this.health -= damageArg;
      return "A Saxon has recieved " + damage +  " points of damage";
    } else{
      return "A Saxon has died in combat";
    }
  }
};


Saxon.prototype.constructor = Saxon;

// // var newSaxon = new Saxon("10","2");
// // console.log(newSaxon);

// //  War
// function War(){
//   var vikingArmy = [];
//   // var saxonArmy = [];
  
//   function addViking(Viking){
//     vikingArmy.push(Viking);

//     // console.log(vikingArmy);
    
//   };

//   // addSaxon(){

//   // }

//   // vikingAttack(){

//   // }

//   // saxonAttack(){

//   // }

//   // showStatus(){

//   // }
//   addViking("Mike","15","5");
//   addViking("Tim","15","5");
//   addViking("Tom","15","5");
//   addViking("Jim","15","5");
//   addViking("Jerry","15","5");
//   addViking("Bugs","15","5");
//   console.log(vikingArmy);
// };


// War();

