// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    }
    
Soldier.prototype.attack = function() {
        return this.strength;
}


Soldier.prototype.receiveDamage = function(receiveDamage) {
    this.health = this.health - receiveDamage;
}
// A Viking is a Soldier with an additional property, their name. They also have a different 
// receiveDamage() method and new method, battleCry().

// Modify the Viking constructor function, have it inherit from Soldier, reimplement the 
// receiveDamage() method for Viking, and add a new battleCry() method.
// Viking
function Viking(nameArg,healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}
// both lines needed for initiating inheritance ****
//second line related to covering memory leak
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(receiveDamage) {
    this.health = this.health - receiveDamage;

    if (this.health <= 0)
    {
        return this.name + " has died in the act of combat";
    }

    return this.name + " has received " + receiveDamage + " points of damage";
}

Viking.prototype.battleCry = function() {
        return "Odin Owns You All!";

}

// Saxon
function Saxon(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Soldier;

Saxon.prototype.receiveDamage = function(receiveDamage) {
    this.health = this.health - receiveDamage;

    if (this.health > 0){
        return "A Saxon" + " has received " + receiveDamage + " points of damage";
    }
    else {
        return "A Saxon has died in combat";
    }

}

// War
function War() {}
