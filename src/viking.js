// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }

    }

    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {

        const Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const damage = Saxon.receiveDamage(Viking.strength)

        if (Saxon.health <= 0) {
            this.saxonArmy.pop(Saxon)
        }

        return damage
    }

    saxonAttack() {

        const Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const damage = Viking.receiveDamage(Saxon.strength)

        if (Viking.health <= 0) {
            this.vikingArmy.pop(Viking)
        }

        return damage
    }

    warAttack(attacker) {

        const Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        if (attacker === 'Viking') {
            const damage = Saxon.receiveDamage(Viking.strength)

            if (Saxon.health <= 0) {
                this.saxonArmy.pop(Saxon)
            }
            return damage

        } else if (attacker === 'Saxon') {
            const damage = Viking.receiveDamage(Saxon.strength)

            if (Viking.health <= 0) {
                this.vikingArmy.pop(Viking)
            }

            return damage

        } else {
            console.log("Please introduce either 'Viking' or 'Saxon' as an attacker")
        }
    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}


