// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
  this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  this.name = nameArg;
  Soldier.call (this, healthArg, strengthArg);
  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    return this.name + " has died in act of combat";
  }
  this.battleCry = function () {
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Viking.prototype.receiveDamage = function(damage){
//   this.health -= damage;
//   if (this.health > 0) {
//     return this.name + " has received " + damage + "points of damage";
//   }
//   return this.name + " has died in act of combat";
// }

// Por qué no funciona si lo declaro fuera de la función Viking?
// Traté de hacerlo así, con prototype, pero no me funciona(battleCry tampoco si la creo fuera)
// al contrario que en las que declaré en Soldier, las cuales sí funcionan desde fuera.

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    return "A Saxon has died in combat";
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  }

  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  }

  var randomSaxon = 0;
  var randomViking = 0;
  var vikingStrength = 0;
  var saxonStrength = 0;

  this.vikingAttack = function() {
    randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    vikingStrength = this.vikingArmy[randomViking].strength;

    var result = this.saxonArmy[randomSaxon].receiveDamage (vikingStrength);
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return result;
  }

  this.saxonAttack = function() {
    randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    saxonStrength = this.saxonArmy[randomSaxon].strength;

    var result = this.vikingArmy[randomViking].receiveDamage (saxonStrength);
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return result;
  }

  this.showStatus = function() {
    var aliveSaxons = this.saxonArmy.length;
    var aliveVikings = this.vikingArmy.length;

    if (aliveSaxons == 0) {
      return "Vikings have won the war of the century!";
    }
    else if (aliveVikings == 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
