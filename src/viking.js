// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damageReceived) {
        this.health = this.health - damageReceived;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damageReceived) {
        this.health -= damageReceived;
        if(this.health > 0) {
            return `${this.name} has received ${damageReceived} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damageReceived) {
        this.health -= damageReceived;
        if(this.health > 0) {
            return `A Saxon has received ${damageReceived} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {}
