// Soldier
function Soldier (healthParam, strengthParam) {
  this.health = healthParam;
  this.strength = strengthParam;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(theDamage) {
  this.health = this.health - theDamage;
};

Viking.prototype = Object.create(Soldier.prototype);
// Viking
function Viking (name, healthParam, strengthParam) {
  Soldier.call(this, name, healthParam, strengthParam);
    this.name = 'Harald';
    this.health = healthParam;
    this.strength = strengthParam;
}

Viking.prototype.attack = function () {
  return this.strength;
};

Viking.prototype.receiveDamage = function(theDamage) {
  this.health = this.health - theDamage;
  if (theDamage < this.health) {
    return (this.name + " has received " + theDamage + " points of damage");
}
else {
  return (this.name + (" has died in act of combat"));
  }

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
  };
};


// Saxon
function Saxon () {}

// War
function War () {}




// console.log(soldier.strengthSolider());
// var mySold = new Soldier(10, 999);
//
// mySold.attack();
//////////////////

// function Animal(nameParam, ownerParam, personalityParam, doingParam) {
//   this.name = nameParam;
//   this.owner = ownerParam;
//   this.personality = personalityParam;
//   this.doing = doingParam;
// }
//
// Animal.prototype.showPetInfo = function () {
//   return "My name is " + this.name + " my owner is " + this.owner + " my personality is " + this.personality;
// };
//
// Animal.prototype.whatDoing = function () {
//   return "My name is " + this.name + " my owner is " + this.owner + " my personality is " + this.personality + " I am " + this.doing;
// };
//
// function Dog(nameParam, ownerParam, personalityParam, doingParam) {
//   Animal.call(this, nameParam, ownerParam, personalityParam, doingParam);
//   this.breed = 'Collie';
// }
//
// // Create a prototype for dog that is attached to Animal.prototype in the "chain"
// // (so you can use the functions of Animal)
// Dog.prototype = Object.create(Animal.prototype);
//
// // ^^ specific functions after this line of code ^^
//
// var myDog = new Dog('Lassy', 'That Kid', 'Heroic', 'Running');
//
// console.log(myDog.whatDoing());
