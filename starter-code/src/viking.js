// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg,
    this.strength = strengthArg,
    this.attack = function () {return this.strength;
    },
    this.receiveDamage = function (damage) {
        this.health = this.health-damage;
    }
}

// Viking
Viking.prototype.receiveDamage = Object.create (Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (nameArg, healthArg,strengthArg) {
    this.name = nameArg;
    Soldier.call (this, healthArg, strengthArg);
    this.receiveDamage = function (damage) {
        if (healthArg > damage) {
            return console.log (this.name " has received " this.damage " points of damage");
        } else { return console.log (this.name " has died in act of combat"); }
    } 
}


// Saxon
function Saxon() {}

// War
function War() {}
