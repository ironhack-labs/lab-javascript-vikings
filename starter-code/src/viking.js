// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        Soldier.prototype.attack = function attack() {return this.strength}
        Soldier.prototype.receiveDamage = function(damage) {this.health -= damage}
        }
    }


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health,strength);
        this.name = name;
        Viking.prototype.receiveDamage = function receiveDamage(damage) {
            this.health -= damage;
            if (this.health > 0) { 
                return `${name} has received ${damage} points of damage`;}
            if (this.health <= 0) {
                return `${name} has died in act of combat`
            }
        }
        Viking.prototype.battleCry = function battleCry() { return "Odin Owns You All!"};
    }

    }

// Saxon
class Saxon extends Soldier {
        receiveDamage = function receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
        } else {
                return "A Saxon has died in combat"
        }

        }
        }



    

// War
class War {}
