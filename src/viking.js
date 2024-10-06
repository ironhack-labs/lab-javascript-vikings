// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health
        this.strength = strength
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name
    }

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomVikingId = Math.floor(Math.random() * this.vikingArmy.length);
        const fightingViking = this.vikingArmy[randomVikingId];

        const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
        const fightingSaxon = this.saxonArmy[randomSaxonId];
        
        const damageDone = fightingSaxon.receiveDamage(fightingViking.strength);

        if (fightingSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonId, 1);
        }
        
        return damageDone;
    }

    saxonAttack() {
        const randomVikingId = Math.floor(Math.random() * this.vikingArmy.length);
        const fightingViking = this.vikingArmy[randomVikingId];

        const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
        const fightingSaxon = this.saxonArmy[randomSaxonId];
        
        const damageDone = fightingViking.receiveDamage(fightingSaxon.strength);

        if (fightingViking.health <= 0) {
            this.vikingArmy.splice(randomVikingId, 1);
        }
        
        return damageDone;
    }

    attack (atacante) {
        const randomVikingId = Math.floor(Math.random() * this.vikingArmy.length);
        const fightingViking = this.vikingArmy[randomVikingId];

        const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
        const fightingSaxon = this.saxonArmy[randomSaxonId];

        const damageDone; 

        if (atacante === "Vikingos") {
            damageDone = fightingSaxon.receiveDamage(fightingViking.strength);

            if (fightingSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxonId, 1);
            }
        } else if (atacante === "Saxons") {
            damageDone = fightingViking.receiveDamage(fightingSaxon.strength);

            if (fightingViking.health <= 0) {
                this.vikingArmy.splice(randomVikingId, 1);
            }
        }

        return damageDone;
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
