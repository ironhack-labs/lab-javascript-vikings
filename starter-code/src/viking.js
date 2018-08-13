// Soldier
function Soldier(healthArg, strengthArg) {

        this.health = healthArg;
        this.strength = strengthArg;
        this.attack = function() {
            return(this.strength);
        };
        this.receiveDamage = function(theDamage) {
            this.health -= theDamage;
        }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.receiveDamage = function(theDamage) {

        this.health -= theDamage;

        if (this.health > 0){
            return (this.name + " has received " + theDamage + " points of damage");
        }
        else {
            return (this.name + " has died in act of combat");
        }
    }
    this.battleCry = function() {
        return ("Odin Owns You All!");
    }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon(health, strength) {

    Soldier.call(this, health, strength);

    this.receiveDamage = function(theDamage) {

        this.health -= theDamage;

        if (this.health > 0){
            return ("A Saxon has received " + theDamage + " points of damage");
        }
        else {
            return ("A Saxon has died in combat");
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (viking) {
        this.vikingArmy.push(viking);
    }
    this.addSaxon = function (saxon) {
        this.saxonArmy.push(saxon);
}
}
