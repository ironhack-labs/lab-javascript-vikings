// Soldier
function Soldier(health, strength) {

    this.health = health;
    this.strength = strength;

    // Prototype methods

    Soldier.prototype.attack = function() {
        return this.strength;
    }

    Soldier.prototype.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {

    Soldier.call(this, health, strength);
    this.name = name;

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
}

Viking.prototype.battleCry = function() {
    return `Odin Owns You All!`;
}

// Saxon
function Saxon(health, strength) {

    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    if (this.health <= 0) return  `A Saxon has died in combat`;
}




// War
function War() {

    this.vikingArmy = [];
    this.saxonArmy = [];

    War.prototype.addViking = function(viking) {
        this.vikingArmy.push(viking);
    }

    War.prototype.addSaxon = function(saxon) {
        this.saxonArmy.push(saxon);
    }

    War.prototype.vikingAttack = function() {

        var random1 = Math.floor(Math.random()*this.saxonArmy.length);
        var random2 = Math.floor(Math.random()*this.vikingArmy.length)

        var randomSaxom = this.saxonArmy[random1];
        var randomViking = this.vikingArmy[random2];

        randomSaxom.receiveDamage(randomViking.strength);

        if (randomSaxom.health <= 0) {
            this.saxonArmy.splice(random1,1);
            return `A Saxon has died in combat`; 
        }

    }

    War.prototype.saxonAttack = function() {

        var random1 = Math.floor(Math.random()*this.saxonArmy.length);
        var random2 = Math.floor(Math.random()*this.vikingArmy.length)

        var randomSaxom = this.saxonArmy[random1];
        var randomViking = this.vikingArmy[random2];

        randomViking.receiveDamage(randomSaxom.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(random1,1);
            return `A Saxon has died in combat`; 
        }

        return `${randomViking.name} has received ${randomSaxom.strength} points of damage`

    }

    War.prototype.showStatus = function() {

        if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survive another day...`;
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }

    }
}
