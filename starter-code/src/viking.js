// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Soldier;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0)  {
    return this.name + ' has received ' + damage + ' points of damage'}; 

  return this.name + ' has died in act of combat';
};
Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};



// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Soldier;

Saxon.prototype.receiveDamage = function (damage) {
  console.log(damage, this.health);
  this.health -= damage;
  console.log(this.health);

  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  }

  return 'A Saxon has died in combat';
};



mySaxon = new Saxon(20, 100);
myViking = new Soldier(20, 100);
console.log(mySaxon.receiveDamage(10));
console.log(mySaxon.receiveDamage(11));
console.log(myViking.receiveDamage(11));
console.log(myViking.receiveDamage(11));

// War
function War() {}
