// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;

        this.attack = function () {
            return this.strength;
        }

        this.receiveDamage = function (damage) {
            this.health -= damage;
        }
    
    }
}



// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;

        this.receiveDamage = function (damage) {
            this.health -= damage;
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }
    }

    this.battleCry = function () {
        return 'Odin Owns You All!';
    }

    }
    attack () {
        return this.strength;
    }
}
    


// Saxon
class Saxon extends Soldier {
    receiveDamage = function (damage) {
        this.health -= damage; 
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }
}


// War
class War {
    constructor () {
        this.addViking = function (newViking) {
            this.vikingArmy.push(newViking);
        }
        this.addSaxon = function (newSaxon) {
            this.saxonArmy.push(newSaxon);
        }
        this.vikingAttack = function () {
            const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            
            const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let result = randomSaxon.receiveDamage(randomViking.strength);

            if (randomSaxon.health <= 0) {
                const saxonIndex = this.saxonArmy.indexOf(randomSaxon);
                if (saxonIndex > -1) {
                    this.saxonArmy.splice(saxonIndex, 1);
                }
            } 
                 
            return result;
            
        }

        this.saxonAttack = function () {
            const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            
            const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            let result = randomViking.receiveDamage(randomSaxon.strength);

            if (randomViking.health <= 0) {
                const vikingIndex = this.vikingArmy.indexOf(randomViking);
                if (vikingIndex > -1) {
                    this.vikingArmy.splice(vikingIndex, 1);
                }
            } 
            return result;
            
        }

        this.showStatus = function () {
            if (this.saxonArmy.length === 0) {
                return 'Vikings have won the war of the century!';
            } else if (this.vikingArmy.length === 0) {
                return 'Saxons have fought for their lives and survived another day...';
            } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
                return 'Vikings and Saxons are still in the thick of battle.';
            }
        }

        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
}
