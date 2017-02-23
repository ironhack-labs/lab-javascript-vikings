// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
function Soldier(health, strenght) {
  this.health = health;
  this.strenght = strenght;

}


Soldier.prototype.attack = function() {
  return this.strenght + 10;
};


Soldier.prototype.damageReceived = function(attacker) {
  this.health = this.health - attacker.attack();
  if (this.health <= 0) {
    this.health = "He is already dead! Stop it!";
  }
  return attacker.attack();
};

var rambo = new Soldier(200, 50);
var chuckNorris = new Soldier(2000, 500);
var bruceLee = new Soldier(600, 1800);



//
// console.log(rambo);
// console.log("rambo is attacking Chuck Norris and he does " + rambo.attack() + " damage points");
//
// console.log("Chuck Norris had " + chuckNorris.health + " and he received " + chuckNorris.damageReceived(rambo));
// console.log(chuckNorris.health);
//
// console.log("Bruce is attacking Chuck Norris and he does " + bruceLee.attack() + " damage points");
//
// console.log("Chuck Norris had " + chuckNorris.health + " and he received " + chuckNorris.damageReceived(bruceLee));
// console.log(chuckNorris.health);
//
// console.log("Bruce is attacking Chuck Norris and he does " + bruceLee.attack() + " damage points");
//
// console.log("Chuck Norris had " + chuckNorris.health + " and he received " + chuckNorris.damageReceived(bruceLee));
// console.log(chuckNorris.health);

// Viking


function Viking (health, strenght, name){
  Soldier.call(this, health, strenght);
  this.name = name;
  this.battleCry = "Odin Owns You ALL!!!";
}

var thor = new Viking(500, 500, "Thor");
var loki = new Viking(400, 400, "Loki");

Viking.prototype.attack = function() {
  return this.strenght + 40;
};

Viking.prototype.damageReceived = function(attacker) {
  console.log(this.name + " has received " + attacker.attack() + " points of damage");
  this.health = this.health - attacker.attack();
  if (this.health <= 0) {
    this.health = this.name + " is already dead! Stop it!";
  }
};

// console.log("Bruce is attacking Thor and he does " + bruceLee.attack() + " damage points");
//
// console.log(thor.damageReceived(bruceLee));
//
// console.log(thor.health);

// console.log("Thor is attacking Chuck Norris and he does " + thor.attack() + " damage points");
//
// console.log(chuckNorris.damageReceived(thor));
//
// console.log(chuckNorris.health);


// SAXONS

function Saxon (health, strenght, name){
  Soldier.call(this, health, strenght);
  this.name = name;
}

var alfred = new Saxon(550, 550, "Alfred");
var algar = new Saxon(350, 350, "Algar");

Saxon.prototype.attack = function() {
  return this.strenght + 3;
};

Saxon.prototype.damageReceived = function(attacker) {
  console.log("A " + this.name + " has received " + attacker.attack() + " points of damage");
  this.health = this.health - attacker.attack();
  if (this.health <= 0) {
    this.health = "A " + this.name + " has died in combat";
  }
};

// console.log("Alfred is attacking Chuck Norris and he does " + alfred.attack() + " damage points");
//
// console.log(chuckNorris.damageReceived(alfred));
//
// console.log(chuckNorris.health);



// WAR

var vikingArmy = [];
var saxonArmy = [];

var randomNumberViking = Math.floor((Math.random()*100) + 1);
var randomNumberSaxon = Math.floor((Math.random()*100) + 1);




function VikingArmyGenerator (){
  for (var i = 0; i < randomNumberViking; i++) {
    vikingArmy.push(new Viking(450, 470, "Son of Odin"));
  }
}

function SaxonArmyGenerator (){
  for (var i = 0; i < randomNumberSaxon; i++) {
    saxonArmy.push(new Saxon(500, 420, "Son of Saxonia"));
  }
}

VikingArmyGenerator();
SaxonArmyGenerator();

console.log("The war starts now!\nVikings have an army of " + vikingArmy.length + " sons of Odin and Saxons has an army of " + saxonArmy.length + " poor little boys");

var totalVikingStrenght = vikingArmy.length * 470;
var totalVikingHealth = vikingArmy.length * 450;

var totalSaxonStrenght = saxonArmy.length * 420;
var totalSaxonHealth = saxonArmy.length * 500;

console.log("The Viking army strenght is " + totalVikingStrenght + " points and their total health is " + totalVikingHealth + " points");
console.log("The Saxon army strenght is " + totalSaxonStrenght + " points and their total health is " + totalSaxonHealth + " points");

function SaxonsAttack(){
  var resultOfSaxons = totalSaxonStrenght - totalVikingHealth;
  if (resultOfSaxons <= 0) {
    resultOfSaxons = 0;
  }
  return resultOfSaxons;
}

var saxonAttack = SaxonsAttack();


function VikingsAttack(){
  var resultOfVikings = totalVikingStrenght - totalSaxonHealth;
  if (resultOfVikings <= 0) {
    resultOfVikings = 0;
  }
  return resultOfVikings;
}

var vikingAttack = VikingsAttack();


function finalResult (){
  if (saxonAttack > vikingAttack) {
    console.log("SAXONIA WON!!\nAfter a hard battle, the Saxon Army survived with " + saxonAttack + " points. The viking army had " + vikingAttack + " points so they ran away to Asgard.");
  }
  if (vikingAttack > saxonAttack) {
    console.log("THE VIKINGS WON, LONG LIVE TO ODIN!!\nAfter a hard battle, the Viking Army survived with " + vikingAttack + " points. The saxon army had " + saxonAttack + " points so they ran away to wherever they live.");
  }
}


finalResult();
