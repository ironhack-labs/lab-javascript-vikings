// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    } 
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
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
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const indexSaxon = this.saxonArmy.indexOf(randomSaxon);

        const hasToReturn = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health < 1) {
            this.saxonArmy.splice(indexSaxon,1)
        }

        return hasToReturn;

    }
    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const indexViking = this.vikingArmy.indexOf(randomViking);

        const hasToReturn = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health < 1) {
            this.vikingArmy.splice(indexViking,1)
        } 

        return hasToReturn;
    }
    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.';
        } else if (this.saxonArmy.length < 1) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length < 1) {
            return 'Saxons have fought for their lives and survived another day...';
        }
    }
}

