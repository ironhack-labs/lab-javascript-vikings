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
  this.receiveDamage = function(theDamage){
    this.health = this.health  - theDamage;
    if (this.health > 0) {
      //console.log(this.name + 'has received ' + theDamage + ' points of damage');
      return 'A Saxon' + ' has received ' + theDamage + ' points of damage';
    }
    if (this.health < 50) {
      //console.log(this.name + ' has died in act of combat')
      return 'A Saxon' + ' has died in combat'
    }
    return;
  }
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(vikingObj){
    this.vikingArmy.push(vikingObj);
    
  }
  //this.addSaxon = function(){}
  //this.vikingAttack = function(){}
  //this.saxonAttack = function(){}
  //this.showStatus = function(){}
}
