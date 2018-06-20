// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength;
  }
}
Soldier.prototype.receiveDamage = function (theDamage) {
  this.health -= theDamage;
}

// var soldier2 = new soldier(300, 150);
// Soldier(300, 150);
// soldier2.attack(Soldier);

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function (theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {

      return (this.name + " has received " + theDamage + " points of damage");
    } else {
      return (this.name + " has died in act of combat");
    }
  }
  this.battleCry = function () {
    return ("Odin Owns You All!");
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking.receiveDamage(Harald, 300, 150);


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  // Soldier.call(this, attack);
  this.receiveDamage = function (theDamage) {
    this.health -= theDamage;

    if (this.health > 0) {
      return ("A Saxon has received " + theDamage + " points of damage")
    } else {
      return ("A Saxon has died in combat");
    }
  }

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  
  this.addViking = function (viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  };

  // War.prototype.vikingAttack = function(){
  //   var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
  //   var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
  //   var randViking = this.vikingArmy[vikIndex]; 
  //   var randSaxon = this.saxonArmy[saxIndex];

  //   var resul = randSaxon.receiveDamge(randViking.attack())
  //   if(randSaxon.health <= 0){
  //     this.saxonArmy.splice(saxIndex, 1);
  //   }
  //   return resul;
  // }
  this.vikingAttack = function(){
    var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var randViking = this.vikingArmy[vikIndex];
    var randSaxon = this.saxonArmy[saxIndex];

    var result = randSaxon.receiveDamage(randViking.attack())
    if(randSaxon.health <=0){
        this.saxonArmy.splice(saxIndex, 1);
    }
    return result;
  }

  this.saxonAttack = function(){
    var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var randViking = this.vikingArmy[vikIndex];
    var randSaxon = this.saxonArmy[saxIndex];

    var resul = randViking.receiveDamage(randSaxon.attack())
    if(randViking.health <= 0){
      this.vikingArmy.splice(vikIndex, 1);
    }
    return resul;
  }

  this.showStatus = function(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        }
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        return "Vikings and Saxons are still in the thick of battle."
    }
  }