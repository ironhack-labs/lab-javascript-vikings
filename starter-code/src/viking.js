// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack= function (){
  return this.strength;
}
Soldier.prototype.receiveDamage= function (damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);

  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Object.defineProperty(Viking.prototype, 'constructor', { 
  value: Viking, 
  enumerable: false,
  writable: true 
});

Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  }else{
    return `${this.name} has died in act of combat`;
  }
}

Viking.prototype.battleCry = function (){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Object.defineProperty(Saxon.prototype, 'constructor', {
  value: Saxon,
  enumerable: false,
  writable: true
});

Saxon.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
  }else{
    return `A Saxon has died in combat`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking);
  return;
}

War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon);
  return;
}

War.prototype.vikingAttack = function (){
  let randomSaxon = war.randomSoldier(this.saxonArmy);
  let randomViking = war.randomSoldier(this.vikingArmy);

  let result = randomSaxon.receiveDamage(randomViking.strength);

  if ( randomSaxon.health <= 0){
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
  }

  return result;
}

War.prototype.saxonAttack = function (){
  let randomSaxon = war.randomSoldier(this.saxonArmy);
  let randomViking = war.randomSoldier(this.vikingArmy);

  let result = randomViking.receiveDamage(randomSaxon.strength);

  if ( randomViking.health <= 0){
    this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
  }

  return result;
}

War.prototype.showStatus = function (){

  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }else{
    return "Vikings and Saxons are still in the thick of battle.";
  }

}

War.prototype.randomSoldier = function (soldierArray){
  return soldierArray[Math.floor(Math.random() * soldierArray.length)];
}

//Datos de prueba
// let war = new War();
// war.addSaxon(new Saxon(50,20));
// war.addViking(new Viking("Ragnar", 50, 50));
// war.vikingAttack();