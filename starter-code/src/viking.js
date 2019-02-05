// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength
  }
  this.receiveDamage = function(theDamage){
    this.health = this.health  - theDamage;
    return;
  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
//MDN EJEMPLPO para crear un objeto proveniente de otro --> Mime.prototype = Object.create(Person.prototype);

// Saxon
function Saxon() {}

// War
function War() {}
