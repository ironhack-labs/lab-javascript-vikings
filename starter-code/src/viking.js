// Soldier

//this is constructor for Soldier


function Soldier(healthArg, strengthArg) {
  this.health = healthArg; //  how much power has left.
  this.strength = strengthArg; //how much power we have to attack soldiers from opposite army.
};

//we define attack function in soldier prototype. This function will be inhereted by Viking and Saxon soldiers.
Soldier.prototype.attack = function () {
  return this.strength;
}

//we define receiveDamage function in soldier prototype. This function will be rewritten inside Viking and Saxon prototype.
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage; // soldier is attacked and we have to decrese it's health property for the damege that he received.
}


//Viking is Soldier with a name. Viking has all soldier properties (it means it has to inherit them) + its specific "name" property.
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg); //in this way we inherit properties.
  this.name = name; // and add in constructor specific property  "name"
}


Viking.prototype = Object.create(Soldier.prototype); //we have to inherit soldier's prototype.
Viking.prototype.constructor = Viking;

//we need to write method which is specific for Viking but already defined in Soldier.prototype.
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return (`${this.name} has received ${damage} points of damage`); //it reports about damage. Soldier receiveDamage doesn't return anything.
  } else {
    return (`${this.name} has died in act of combat`); //in the case of health = 0...
  }
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}


// // Saxon  

//same as Viking but it doesn't have name. Soldier's receiveDamage method has to be overwritten by specific Saxon method with the same name.
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health > 0) {
    return (`A Saxon has received ${damage} points of damage`);

  } else {
    return (`A Saxon has died in combat`);
  }

}


//BONUS
// // War

//in this steps we create objects of type War. Object has 2 properties (two empty arrays). 
//The represent army. We will fill them with Viking and Saxon soldiers.

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}


//Army arrays a re empty. We fill them with addViking method or addSaxon method. 


//addViking accepts one argument of Viking type.
War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking); // put argument in an appropriate array.
}


//addSaxon  accepts one argument of Saxon type.
War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}


//define method to attack opposite soldier.
War.prototype.vikingAttack = function () {

  var randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]; //pick random viking from vikingArmy array
  var randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]; // pick random saxon from saxonArmy array
  console.log(randomViking);
  console.log(randomSaxon);
  var result = randomSaxon.receiveDamage(randomViking.strength); //saxon recives damage which is equal to strength of randomly chosen viking soldier.
  //we call receivedDamage specific for Saxon.


  // Check if attacked soldier is still alive (health > 0). If it is dead (helth = 0), remove it from army. 
  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
  }
  return result;

}


// the same logic as in vikingAttack()

War.prototype.saxonAttack = function () {
  var randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))];
  var randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))];
  console.log(randomViking);
  console.log(randomSaxon);
  var result = randomViking.receiveDamage(randomSaxon.strength);

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);

  }
  return result;
}


//I will use it in simulation of war. It will be called if one of arrays is empty (game over)

War.prototype.showStatus = function () {
  if (this.saxonArmy.length == 0) {
    return `Vikings have won the war of the century!`;
  } else if (this.vikingArmy.length == 0) {
    return `Saxons have fought for their lives and survive another day...`;

  } else {
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}


// this function simulates war 

War.prototype.battle = function () {
  var turn = 0; // with this variable we are checking who is on turn to attack.

  //as long as one of the armies has no empty array,  do the code in while loop. 
  while (this.vikingArmy.length != 0 && this.saxonArmy.length != 0)
    if (turn == 0) {
      console.log(this.vikingAttack()); //first vikings attack
      turn++; //after attack is done, set turn on 1 and it means that Saxon attacks.
    } else {
      console.log(this.saxonAttack());
      turn--; // after attack set it again on 0 and return to while condition. tuen = 0 means that viking attacks.
    }

  console.log(this.showStatus()); //while loop is ended = it means that one of armies has no any soldier and we call then showStatus() to check which one.
}
//whit this code I was checking my code.
var myWar = new War();
myWar.addViking(new Viking("Jelena", 3, 3));
myWar.addViking(new Viking("Jelena", 4, 4));
myWar.addViking(new Viking("Jelena", 7, 7));
myWar.addViking(new Viking("Jelena", 2, 2));

myWar.addSaxon(new Saxon(5, 5));
myWar.addSaxon(new Saxon(5, 5));
myWar.addSaxon(new Saxon(5, 5));
myWar.addSaxon(new Saxon(5, 5));

console.log(myWar.battle());
console.log(myWar.vikingArmy);
console.log(myWar.saxonArmy);


// console.log(myWar);