// Soldier

/*function Soldier(healthArg, strengthArg) {

    var soldier = {
        health: healthArg,
        strength: strengthArg
    };
       
    return soldier;
}
*/

function Soldier(health, strength) {

        this.health = health;
        this.strength = strength;

        
        this.attack = function() {

            return this.strength;

        }

        this.receiveDamage = function(damage) {

            this.health = this.health - damage;
            return;
        }
    }


// Viking

function Viking(name, health, strength) {

    this.name = name;
    Soldier.call(this, health, strength);

    this.attack = function() {
    //Soldier.call(this, attack())
    return this.strength;
    }

    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return name + " has received " + damage + " points of damage";
        } else {
            return name + " has died in act of combat";
        }
    }

    this.battleCry = function() {
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon() {}

// War
function War() {}
