// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    //this.health = health;
    //this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return (this.name +" has received "+damage+" points of damage");
    } else {
        return (this.name+ " has died in act of combat");
    }
}

Viking.prototype.battleCry = function() {
    return ("Odin Owns You All!");
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0){
        return ("A Saxon has received "+damage+" points of damage");
    } else {
        return ("A Saxon has died in combat");
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
War.prototype.vikingAttack = function() {

    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length-1));
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length-1));
    var choosenSaxon = this.saxonArmy[randomSaxon];
    var choosenViking = this.vikingArmy[randomViking];
    
    //attack
    var attackResult = choosenSaxon.receiveDamage(choosenViking.strength);  
    //remove dead saxon
    if (choosenSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
    }

return attackResult;

}
War.prototype.saxonAttack = function() {

    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length-1));
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length-1));
    var choosenSaxon = this.saxonArmy[randomSaxon];
    var choosenViking = this.vikingArmy[randomViking];
    
    //attack
    var attackResult = choosenViking.receiveDamage(choosenSaxon.strength);  
    //remove dead viking
    if (choosenViking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
    }

return attackResult;

}
War.prototype.showStatus = function() {

    //one-line version

    return this.saxonArmy.length == 0 ? "Vikings have won the war of the century!" : this.vikingArmy.length == 0 ? "Saxons have fought for their lives and survive another day..." : "Vikings and Saxons are still in the thick of battle.";
    
    //alternate version

    if (this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day..."
    } else if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    } else {
        return ("Vikings and Saxons are still in the thick of battle.");
    }

}