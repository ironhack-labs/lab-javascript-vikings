function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function (damage){
    this.health = this.health - damage;
  };
}

Soldier.prototype.attack = function (){
   return this.strength;
  };


  // Viking

function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function (){
    return  "Odin Owns You All!";
  };
 }

Viking.prototype = Object.create(Soldier.prototype);

//Saxon

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function (damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in combat";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);


//INIT

var mySoldier = new Soldier(100, "Strong");
var newViking = new Viking(Rathnok, 150, "Superstrong");

console.log(mySoldier.health);

mySoldier.attack();
mySoldier.receiveDamage(75);





// Saxon


// War
function War () {}
