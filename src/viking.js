// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength),
            this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        return "A Saxon has died in combat"
    }
}

// War
class War {
    // vikingArmy = [];
    // saxonArmy = [];
    // addViking(viking) {
    //     this.vikingArmy.push(viking);
    // }
    // addSaxon(saxon) {
    //     this.saxonArmy.push(saxon);
    // }
    // vikingAttack() {
    //     let defender = Math.floor(Math.random() * this.saxonArmy.length);
    //     console.log(defender);
    //     let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //     console.log(`attacker: ` + attacker.name);

    //     let result = this.saxonArmy[defender].receiveDamage(attacker.strength);
    //     for (i=0; i<this.saxonArmy.length; i++){
    //         if (this.saxonArmy[i].health < 1) {
    //             this.saxonArmy.splice(i, i+1);
    //         i--;
    //         }
    //     }
    //     return result;
    // }
}

// ================================
console.clear()

const thisWar = new War()
for (i = 1; i <= 10; i++) {
    thisWar.addSaxon(100, 90)
    thisWar.addViking(`Viking ${i}`, 150, 70)
}


thisWar.vikingAttack()


