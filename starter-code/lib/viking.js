// // SOLDIER
// //------------------------------------------------------


function Soldier(health, strength) {
  this.health=health;
  this.strength=strength;
}

Soldier.prototype.attack= function(){

  return this.strength;
};

Soldier.prototype.receiveDamage= function(damage){
  this.health=this.health-damage;
  console.log("Your soldier's health is" + this.health);
};



// //FootViking
// //------------------------------------------------------

function FootViking(name,health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
}

FootViking.prototype=Object.create(Soldier.prototype);
FootViking.prototype.constructor=FootViking;

FootViking.battleCry=function(){
  console.log("Odin owns you all!");
};

FootViking.prototype.receiveDamage=function(damage){
  this.health=this.health-damage;
  if (this.health>0){
    console.log(this.name+" has received"+damage+" points of damage");
  }
  else {
    console.log(this.name +" has died in combat.");
  }
};

// //Saxon
// //------------------------------------------------------

function Saxon (health,strength) {
  Soldier.call(this,health,strength);
}
Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

Saxon.prototype.receiveDamage=function(damage){
  this.health=this.health-damage;
  if (this.health>0){
    console.log("A saxon has received "+this.damage+" points of damage");
  }
  else {
    console.log("A Saxon has died in combat.");
  }
};


// //War
// //------------------------------------------------------


function War () {
  this.vikingArmy=[];
  this.saxonArmy=[];
}

War.prototype.addViking=function(newViking){
this.vikingArmy.push(newViking);
};

War.prototype.addSaxon=function(newSaxon){
  this.saxonArmy.push(newSaxon);

};

War.prototype.chooseRandomViking=function(){
    var arrayLength= this.vikingArmy.length;
  var vikingNumber=Math.floor(Math.random()*arrayLength);
  return vikingNumber;
}

War.prototype.chooseRandomSaxon= function(){
  var arrayLength=this.saxonArmy.length;
  var randomSaxonNumber=Math.floor(Math.random()*arrayLength);
  return randomSaxonNumber;
}

War.prototype.vikingAttack=function(){
  randomSaxon=this.chooseRandomSaxon();
  randomViking=this.chooseRandomViking();
  damageCaused=this.vikingArmy[randomViking].strength;
  this.saxonArmy[randomSaxon].receiveDamage(damageCaused);
  if (this.saxonArmy[randomSaxon].health<=0) {
    this.saxonArmy.splice(randomSaxon,1);
  }
  // should return result of calling receiveDamage() of a Viking with the strength of a Saxon

};


War.prototype.saxonAttack=function(){
  randomSaxon=this.chooseRandomSaxon();
  randomViking=this.chooseRandomViking();
  damageCaused=this.saxonArmy[randomSaxon].strength;
  this.vikingArmy[randomViking].receiveDamage(damageCaused);
  if (this.vikingArmy[randomViking].health<=0) {
    this.saxonArmy.splice(randomSaxon,1);
  }
  // should return result of calling receiveDamage() of a Viking with the strength of a Saxon

};


War.prototype.showStatus=function(){
  if (this.saxonArmy.length===0){
    console.log("Vikings have wone the war of the century!");
  }
  else if (this.vikingArmy.length===0){
    console.log ("Saxons have fought for their lives and survive another day!");
  }
else {
  console.log("Vikings and Saxons are still in the thick of battle!");
}
};


// ***----------To Play a game:----------------------**

// 1) Declare war

var newWar=new War();


// 2) Create soldiers

var newViking1= new FootViking("viking1",100,100);
var newViking2= new FootViking("viking2",100,100);
var newViking3= new FootViking("viking3",100,100);
var newViking4= new FootViking("viking4",100,100);
var newViking5= new FootViking("viking5",100,100);


var newSaxon1= new Saxon (100,50);
var newSaxon2= new Saxon (100,50);
var newSaxon3= new Saxon (100,50);
var newSaxon4= new Saxon (100,50);
var newSaxon5= new Saxon (100,50);


// 2)Add soliders to both sides of the war

newWar.addViking(newViking1);
newWar.addViking(newViking2);
newWar.addViking(newViking3);
newWar.addViking(newViking4);
newWar.addViking(newViking5);

newWar.addSaxon(newSaxon1);
newWar.addSaxon(newSaxon2);
newWar.addSaxon(newSaxon3);
newWar.addSaxon(newSaxon4);
newWar.addSaxon(newSaxon5);


console.log(newWar);

var move1=prompt("You can choose to vikingAttack or saxonAttack. Make your move:");
console.log("The first move is "+ move1);

if (move1==="vikingAttack"){
  newWar.vikingAttack();
}

var move2=prompt("You can choose to vikingAttack or saxonAttack. Make your move:");
console.log("The second move is "+ move2);

if(move2==="saxonAttack"){
  newWar.saxonAttack();
}
