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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
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
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(obj) {
        this.vikingArmy.push(obj);
    }

    addSaxon(obj) {
        this.saxonArmy.push(obj);
    }

    vikingAttack() {
        let index = Math.floor(Math.random() * this.saxonArmy.length)
        let randoSaxon = this.saxonArmy[index]
        let randoViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let damage = randoSaxon.receiveDamage(randoViking.strength);
        if (randoSaxon.health <= 0) {
            this.saxonArmy.splice(index, 1);
        }
        return damage
    }

    saxonAttack() {
        let index = Math.floor(Math.random() * this.vikingArmy.length)
        let randoSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randoViking = this.vikingArmy[index]
        let damage = randoViking.receiveDamage(randoSaxon.strength);
        if (randoViking.health <= 0) {
            this.vikingArmy.splice(index, 1);
        }
        return damage
    }

    // genericAttack(attackType) {
    //     let randoSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    //     let randoViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    //     let damage = 0;
    //     if (attackType === `vikingAttack`) {
    //         damage = randoSaxon.receiveDamage(randoViking.strength);
    //         if (randoSaxon.health < 0) {
    //             this.saxonArmy.splice(randoSaxon, 1);
    //         }
    //     } else if (attackType === `saxonAttack`) {
    //         damage = randoViking.receiveDamage(randoSaxon.strength);
    //         if (randoViking.health < 0) {
    //             this.vikingArmy.splice(randoViking, 1);
    //         }
    //     }
    //     return damage
    // }
    
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
