// Soldier
function Soldier (health, strength) {
this.health = health;
this.strength = strength;
};
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}
   

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
    Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
    return this.name +  " has died in act of combat";
    } 
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage){
    Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
    return "A Saxon has died in combat";
    } 
}

Saxon.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

// War
function War() {
    this.vikingArmy  = [];
    this.saxonArmy  = [];
}
War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
  }
War.prototype.addSaxon= function (saxon) {
    this.saxonArmy.push (saxon) ;
    
}
War.prototype.vikingAttack = function () {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    var vikingAttack = randomSaxon.receiveDamage(randomViking.strength);

    if  (randomSaxon.health < 1) {
        var saxonToRemove = this.saxonArmy.indexOf(randomSaxon);
        this.saxonArmy.splice(saxonToRemove, 1);
    }
    return vikingAttack;
};

War.prototype.saxonAttack = function () {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    var saxonAttack = randomViking.receiveDamage(randomSaxon.strength);

    if  (randomViking.health < 1) {
        var vikingToRemove = this.vikingArmy.indexOf(randomViking);
        this.vikingArmy.splice(vikingToRemove, 1);
    }
    return saxonAttack;
};

War.prototype.showStatus = function () {
    if (this.saxonArmy.length <= 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
};




