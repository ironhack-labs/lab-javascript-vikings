// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health -= damage;
    };
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            //NAME has received DAMAGE points of damage
            return this.name + ' has received ' + damage + ' points of damage';
        } else {
            return this.name + ' has died in act of combat';
        }
    };
    this.battleCry = function() {
        return 'Odin Owns You All!';
    };
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            //A Saxon has received DAMAGE points of damage
            return 'A Saxon has received ' + damage + ' points of damage';
        } else {
            return 'A Saxon has died in combat';
        }
    };
}

// War
function War() {}

var firstSoldier = new Soldier(150, 300);
// console.log('SOLDIER', firstSoldier);

var thorViking = new Viking('Thor', 150, 300);
console.log('VIKING', thorViking);

var newSaxon = new Saxon(150, 300);
