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
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
        // if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
        // if the Viking dies, it should return "NAME has died in act of combat"
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let result = this.saxonArmy[randomNumSaxon].receiveDamage(this.vikingArmy[randomNumViking].strength)
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0) 
        return result
    }
    
    saxonAttack() {
        let randomNumSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomNumViking = Math.floor(Math.random() * this.vikingArmy.length)
        let result = this.vikingArmy[randomNumViking].receiveDamage(this.saxonArmy[randomNumSaxon].strength)
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)
        return result
    }


    /* SUPER BONUS */

    // vikingAttack() {
    //     return this.attack(this.vikingArmy, this.saxonArmy)
    // }
    
    // saxonAttack() {
    //     return this.attack(this.saxonArmy, this.vikingArmy)
    // }

    // attack(arrAtk, arrDef) {
    //     let randomNumAtk = Math.floor(Math.random() * arrAtk.length)
    //     let randomNumDef = Math.floor(Math.random() * arrDef.length)
    //     let result = arrDef[randomNumDef].receiveDamage(arrAtk[randomNumAtk].strength)
    //     arrDef = arrDef.filter(viking => viking.health > 0)
    //     return result 
    // }

    showStatus() {
        //if the Saxon array is empty, should return "Vikings have won the war of the century!"
        // if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
        // if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle."
    }
}
