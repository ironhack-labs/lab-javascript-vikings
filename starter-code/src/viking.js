function Soldier (healthArg, strengthArg) {
  this.health= healthArg;
  this.strength= strengthArg;
  this.attack= function (){
   return this.strength;
  };
  this.receiveDamage= function (damage){
  return this.health - damage;

  };
}

var mySoldier = new Soldier(100, "Strong");

console.log(mySoldier.health);

mySoldier.attack();
mySoldier.receiveDamage(75);

function attack() {}

// Viking
function Viking () {}

// Saxon
function Saxon () {}

// War
function War () {}
