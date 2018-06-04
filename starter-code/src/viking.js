// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}


Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}


// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat"
    }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
    var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = this.vikingArmy[randomVikingNumber];
    var randomSaxon = this.saxonArmy[randomSaxonNumber];
    var baston = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonNumber, 1);
    }
    return baston;
}
 War.prototype.saxonAttack = function () {
    var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    var randomViking = this.vikingArmy[randomVikingNumber];
    var randomSaxon = this.saxonArmy[randomSaxonNumber];
    var baston = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return baston;
 }

 War.prototype.showStatus = function () {
     if (this.saxonArmy == 0) {
         return "Vikings have won the war of the century!"
     } else if (this.vikingArmy == 0) {
         return "Saxons have fought for their lives and survive another day...";
     } else {
        return "Saxons have fought for their lives and survive another day...";
     }
}
