// Soldier
class Soldier {

    constructor(healthArg, strengthArg) {
        this.health = healthArg,
        this.strength = strengthArg
    }

    attack() {
        return this.strength
    }
    
    receiveDamage(damageArg) {
        this.health -= damageArg
    }

}

// Viking
class Viking extends Soldier {

    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg
    }

    receiveDamage(damageArg) {
        super.receiveDamage(damageArg)
        if (this.health <= 0) { return `${this.name} has died in act of combat`}
        return `${this.name} has received ${damageArg} points of damage`
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {

    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
    }

    receiveDamage(damageArg) {
        super.receiveDamage(damageArg)
        if (this.health <= 0) { return `A Saxon has died in combat`}
        return `A Saxon has received ${damageArg} points of damage`
    }   
}

// War
class War {

    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let i = Math.floor(Math.random() * this.saxonArmy.length);
        let j = Math.floor(Math.random() * this.vikingArmy.length);
        saxonArmy[i].receiveDamage(vikingArmy[j].strength);
    }
}
