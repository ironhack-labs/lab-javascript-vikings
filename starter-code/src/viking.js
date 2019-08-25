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
        this.saxonArmy[i].receiveDamage(this.vikingArmy[j].strength);
        if(this.saxonArmy[i].health <= 0) {
            this.saxonArmy.splice(i,1);
            return `A Saxon has died in combat`
        }
    }

    saxonAttack() {
        let i = Math.floor(Math.random() * this.vikingArmy.length);
        let j = Math.floor(Math.random() * this.saxonArmy.length);
        this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength);
        let name = this.vikingArmy[i].name;
        if(this.vikingArmy[i].health <= 0) {
            this.vikingArmy.splice(i,1);
        }
        return `${name} has received ${this.saxonArmy[j].strength} points of damage`
    }

    showStatus() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        }
        if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survive another day...`
        }
    }


}
