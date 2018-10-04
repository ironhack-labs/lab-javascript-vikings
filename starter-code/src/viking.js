// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
    };
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;

        return this.health < damage ? this.name + " has died in act of combat" :
            this.name + " has received " + damage + " points of damage";

    }

    this.battleCry = function() {
        return "Odin Owns You All!";
    }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return "A Saxon has received " + damage + " points of damage";
        return "A Saxon has died in combat";

    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking) {
        this.vikingArmy.push(viking)
    }

    this.addSaxon = function(saxon) {
        this.saxonArmy.push(saxon)
    }

    this.vikingAttack = function() {
        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        this.saxonArmy.splice(this.saxonArmy[0])
        return "A Saxon has died in combat";
    }

    this.saxonAttack = function() {
        var attack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(0, 1);
        }
        return attack
    }

    this.showStatus = function() {
        if (this.saxonArmy <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy <= 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.vikingArmy.length === this.saxonArmy.length) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}