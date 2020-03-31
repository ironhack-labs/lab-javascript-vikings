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
        super.receiveDamage(damage);
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)

    }
    vikingAttack() {
        const indexOfViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const indexOfSaxon = Math.floor(Math.random() * (this.saxonArmy.length))
        let result = this.saxonArmy[indexOfSaxon].receiveDamage(this.vikingArmy[indexOfViking].strength)
        if (this.saxonArmy[indexOfSaxon].health <= 0) {
            this.saxonArmy.splice(indexOfSaxon, 1);
        }
        return result


    }
    saxonAttack() {
        const indexOfViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const indexOfSaxon = Math.floor(Math.random() * (this.saxonArmy.length))
        let result = this.vikingArmy[indexOfViking].receiveDamage(this.saxonArmy[indexOfSaxon].strength)
        if (this.vikingArmy[indexOfViking].health <= 0) {
            this.vikingArmy.splice(indexOfViking, 1);
        }

        return result

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
    genericAttack(side) {
        const indexOfViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const indexOfSaxon = Math.floor(Math.random() * (this.saxonArmy.length))
        if (side === 'saxon') {
            let result = this.vikingArmy[indexOfViking].receiveDamage(this.saxonArmy[indexOfSaxon].strength)
            if (this.vikingArmy[indexOfViking].health <= 0) {
                this.vikingArmy.splice(indexOfViking, 1);

            }
        } else if (side === 'viking') {
            let result = this.saxonArmy[indexOfSaxon].receiveDamage(this.vikingArmy[indexOfViking].strength)
            if (this.saxonArmy[indexOfSaxon].health <= 0) {
                this.saxonArmy.splice(indexOfSaxon, 1);
            }

        }

        return result

    }
}