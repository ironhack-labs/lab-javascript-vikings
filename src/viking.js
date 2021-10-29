// Soldier
class Soldier {
    constructor(health, streght) {
        this.health = health;
        this.streght = streght;
        this.attack = function() {
            return this.streght
        }
        this.receiveDamage = function(damage) {
            this.health -= damage
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, streght) {
        super(health, streght);
        this.name = name;
        this.receiveDamage = function(damage) {
            this.health -= damage;
            return this.health > 0 ? `$(this.name) has received $(damage) points of damage` : `$(this.name) has died in act of combat`
        }
        this.battleCry = function() {
            return "Odin Owns You All"
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, streght) {
        super(health, streght)
        this.receiveDamage = function(damage) {
            this.health -= damage;
            return this.health > 0 ? `À Saxon has received $(damage) points of damage ` : `A Saxon has died in combat`
        }
    }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}