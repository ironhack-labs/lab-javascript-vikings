// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage( damage ) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage( damage ) {
        this.health -= damage;
        if ( this.health <= 0 ) return `${this.name} has died in act of combat`;
        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage( damage ) {
        this.health -= damage;
        if ( this.health <= 0 ) return `A Saxon has died in combat`;
        return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking( vikingObj ) {
        this.vikingArmy.push(vikingObj);
    }
    
    addSaxon( saxonObj ) {
        this.saxonArmy.push(saxonObj);
    }

    showStatus() {
        if ( this.saxonArmy.length == 0 ) return `Vikings have won the war of the century!`
        if ( this.vikingArmy.length == 0 ) return `Saxons have fought for their lives and survived another day...`
        return `Vikings and Saxons are still in the thick of battle.`

    }

    vikingAttack() {
        let idxViking = Math.floor(Math.random() * this.vikingArmy.length);
        let idxSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let stillAlive = this.saxonArmy[idxSaxon].receiveDamage( this.vikingArmy[idxViking].strength );
        if ( this.saxonArmy[idxSaxon].health <= 0 ) this.saxonArmy.splice(idxSaxon, 1)
        return stillAlive;
    }

    saxonAttack() {
        let idxViking = Math.floor(Math.random() * this.vikingArmy.length);
        let idxSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let stillAlive = this.vikingArmy[idxViking].receiveDamage( this.saxonArmy[idxSaxon].strength );
        if ( this.vikingArmy[idxViking].health <= 0 ) this.vikingArmy.splice(idxViking, 1)
        return stillAlive;
    }
}
