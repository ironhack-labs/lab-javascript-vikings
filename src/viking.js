// Soldier
class Soldier {
    
    constructor(health, strength) {
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
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
        if(this.health <= 0) return `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
        if(this.health <= 0) return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        
    }

    addViking(objViking) {
        this.vikingArmy.push(objViking);
        console.log()
    }

    addSaxon(objSaxon) {
        this.saxonArmy.push(objSaxon);
    }

    vikingAttack() {

        let randomViking1 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon1 = Math.floor(Math.random() * this.saxonArmy.length);
        let resultOfAttack = this.saxonArmy[randomSaxon1].receiveDamage(this.vikingArmy[randomViking1].strength);
        if (this.saxonArmy[randomSaxon1].health <= 0) {this.saxonArmy.pop([randomSaxon1])};
        return resultOfAttack;
    }
    saxonAttack() {

        let randomViking2 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon2 = Math.floor(Math.random() * this.saxonArmy.length);
        let resultOfAttack = this.vikingArmy[randomViking2].receiveDamage(this.saxonArmy[randomSaxon2].strength);
        if (this.vikingArmy[randomViking2].health <= 0) {this.vikingArmy.pop([randomViking2])};
        return resultOfAttack;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
        if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return 'Vikings and Saxons are still in the thick of battle.'
    }
}

