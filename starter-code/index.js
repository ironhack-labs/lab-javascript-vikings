/*
SOLDIERS
    ✓ should have Object as its prototype
    1) should have a number of health
    2) should have a strength
    3) should have an attack function
    4) should have a receiveDamage function
    5) should remove the received damage from his health

  VIKINGS
    6) should be derived from Soldier
    7) should have a name
    8) should have a health
    9) should have a strength
    10) should have an attack function
    11) should have a receiveDamage function
    12) should remove the received damage from his health
    13) should return "Odin Owns You All!" when battleCry is called
    14) should return "{name} has died in act of combat" when the health is equal or lower than 0

  SAXONS
    15) should be derived from Soldier
    16) should have a health
    17) should have a strength
    18) should have an attack function
    19) should have a receiveDamage function
    20) should remove the received damage from his health
    21) should return "A Saxon has died in combat" when the health is equal or lower than 0

  WAR
    22) should have an array of Vikings
    23) should add Vikings to the army
    24) should have an array of Saxons
    25) should add saxons to the army
    26) should show the result of the saxon attack
    27) should show the result of the viking attack
    28) should has a fight function to start the combat
    29) should show show the final stats of the combat
*/

function Soldier (health, strength){
  
  this.health = health;
  this.strength = strength;
  Soldier.prototype.attack = function(){
    return this.strength;
  };
  Soldier.prototype.receiveDamage = function(enemyDamage){
    return(this.health = this.health - enemyDamage);
  };
}
function Viking(name, theHealth, theStrength){
  Soldier.call(this, theHealth, theStrength);
  this.name = name;
  this.receiveDamage = function(enemyDamage){
    return(this.health = this.health - enemyDamage);
  }
  this.attack = function(){
     return this.strength;
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor =Viking;
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
  }
  
function Saxon(theHealth, theStrength){
   Soldier.call(this, theHealth, theStrength);
  this.receiveDamage = function(enemyDamage){
    return(this.health = this.health - enemyDamage);
  }
  
  this.attack = function(){
    return this.strength;
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function war (health, strength) {
  //Step 1. create random number to determine how many saxons/vikings are pushed into their respective arrays.
  var numberOfSaxons = Math.floor(Math.random() * 100) +50;
  var numberOfVikings = Math.floor(Math.random() * 100) +50;
  
  console.log("Number of Vikings in the war: " + numberOfVikings);
  console.log("Number of Saxons in the war: " + numberOfSaxons);
  
  var saxonArray = [];
  var i = 0;
  while(i<numberOfSaxons) {
    saxonArray.push(new Saxon(10,3));
    i++;
  }
  
  var vikingArray = [];
  var j = 0;
  while(j<numberOfVikings) {
    vikingArray.push(new Viking('Jim'+j,10, 6));
    j++;
  }
  
  console.log("*** War has started ***");
  while(saxonArray.length !==0 || vikingArray.length !==0) {
    vikingArray[0].receiveDamage(saxonArray[0].attack());
    
    if(vikingArray[0].health<=0) {
       console.log("## "+ vikingArray[0].name + " has died in act of combat");
       vikingArray.shift();
    } else {console.log(vikingArray[0].name + " has received "+ saxonArray[0].attack() + " points of damage")}
    
    if(saxonArray.length ===0 || vikingArray.length ===0){
      break;
  }
  
  saxonArray[0].receiveDamage(vikingArray[0].attack());
    if(saxonArray[0].health<=0) {
      console.log("## A Saxon" + " has died in act of combat");
      saxonArray.shift();
    } else {console.log("A Saxon has received "+ saxonArray[0].attack() + " points of damage")
}

if(saxonArray.length ===0 || vikingArray.length ===0){
  break;
}

console.log("Viking health: " + vikingArray[0].health);
console.log("Saxon health: " + saxonArray[0].health);

}

if(vikingArray.length > saxonArray.length) {
  return("Vikings won the war")
} else {
  return("Saxon won the war")
}

}
war();