// Soldier
function Soldier (health, strength) {
 this.health = health;
 this.strength = strength;
 }

Soldier.prototype.attack = function (){
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
function Viking (health, strength, name) {
  Soldier.call(this,health,strength);
  this.name = "Harald";
}

Viking.prototype = Object.create(Soldier.prototype);

  var myViking = new Viking (300, 150, "Harald")
// var myViking = new Soldier (150,300)


// Saxon
function Saxon () {}

// War
function War () {}
