// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function() {
    return `Odin Owns You All!`;
  };
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.getRandom = function() {
    let vikingArmyLength = this.vikingArmy.length;
    let saxonArmyLength = this.saxonArmy.length;
    let max = vikingArmyLength > saxonArmyLength ? saxonArmyLength : vikingArmyLength;
    return Math.floor(Math.random() * max);
  };
  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function() {
    let ramdomIndex = this.getRandom();
    let randomViking = this.vikingArmy[ramdomIndex];
    let randomSaxon = this.saxonArmy[ramdomIndex];
    let result = randomSaxon.receiveDamage(randomViking.attack());
    if (result.includes('died')) {
      this.saxonArmy.splice(ramdomIndex, 1);
    }
    return result;
  };

  this.saxonAttack = function() {
    let ramdomIndex = this.getRandom();
    let randomViking = this.vikingArmy[ramdomIndex];
    let randomSaxon = this.saxonArmy[ramdomIndex];
    let result = randomViking.receiveDamage(randomSaxon.attack());
    if (result.includes('died')) {
      this.vikingArmy.splice(ramdomIndex, 1);
    }
    return result;
  };

  this.showStatus = function(){
    
    if(this.vikingArmy.length > this.saxonArmy.length){
       return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length < this.saxonArmy.length) {
       return 'Saxons have fought for their lives and survive another day...'
    } else {
       return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}
let war1 = new War();
console.log(war1.addViking(new Viking('ragna', 200, 300)));
console.log(war1.addViking(new Viking('locky', 200, 300)));
console.log(war1.addViking(new Viking('odin', 200, 300)));
console.log(war1.addViking(new Viking('laguertha', 200, 300)));
console.log(war1.addSaxon(new Saxon(200, 10)));
console.log(war1.addSaxon(new Saxon(200, 20)));
console.log(war1.addSaxon(new Saxon(200, 30)));
console.log(war1.addSaxon(new Saxon(200, 60)));
console.log(war1.vikingArmy.length, war1.saxonArmy.length);
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
////////////
