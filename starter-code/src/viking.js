// Soldier
function Soldier(health , strength) {
  this.health = health;
  this.strength = strength;
}
  Soldier.prototype.attack = function (){
    return this.strength;
  };
  Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
  };


// ================== Viking


function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  // this.health = health;
  // this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function (){
    return this.strength;
  };
Viking.prototype.receiveDamage = function (damage){
  this.health -= damage;
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  } else if (this.health <= 0){
    return `${this.name} has died in act of combat`;
  }
};
Viking.prototype.battleCry = function (){
    return `Odin Owns You All!`;
  };


// ================== Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function (){
    return this.strength;
  };
  Saxon.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0){
      return `A Saxon has died in combat`;
    }
  };



// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
    this.vikingArmy.push(viking);
  };

War.prototype.addSaxon = function (saxon){
    this.saxonArmy.push(saxon);
  };
  

War.prototype.vikingAttack = function (){
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let vikingAttack = randomSaxon.receiveDamage(randomViking.strength);
   if  (randomSaxon.health <= 0) {
      var saxonNumber = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(saxonNumber, 1);
  }
  return vikingAttack;
};

War.prototype.saxonAttack = function () {
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let saxonAttack = randomViking.receiveDamage(randomSaxon.strength);
  if  (randomViking.health <= 0) {
    var vikingNumber = this.vikingArmy.indexOf(randomViking);
    this.vikingArmy.splice(vikingNumber, 1);
  }
  return saxonAttack;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return `Vikings have won the war of the century!`;
  } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survive another day...`;
  } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
    return `Vikings and Saxons are still in the thick of battle.`
  }
};

//================== PRUEBAS
let war = new War();
war.addSaxon(new Saxon(50,20));
war.addSaxon(new Saxon(100,50));
war.addSaxon(new Saxon(75,40));
war.addViking(new Viking("Ragnar", 60, 100));
war.addViking(new Viking("Loki", 40, 80));
war.addViking(new Viking("Odin", 70, 50));
war.addViking(new Viking("Fulano", 70, 50));
war.vikingAttack();
war.saxonAttack();
war.vikingAttack();
war.vikingAttack();
war.showStatus();



