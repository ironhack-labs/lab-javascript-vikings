// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength;
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
  this.receiveDamage = function(theDamage){
    this.health = this.health  - theDamage;
   //console.log(theDamage);
    if (this.health > 50) {
      //console.log(this.name + 'has received ' + theDamage + ' points of damage');
      return this.name + ' has received ' + theDamage + ' points of damage';
    }
    if (this.health < 50) {
      //console.log(this.name + ' has died in act of combat')
      return this.name + ' has died in act of combat'
    }
    return;
  }
  this.battleCry = function(){
    return 'Odin Owns You All!';
  }
}
Viking.prototype = Object.create(Soldier.prototype);
//MDN EJEMPLPO para crear un objeto proveniente de otro --> Mime.prototype = Object.create(Person.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {}
