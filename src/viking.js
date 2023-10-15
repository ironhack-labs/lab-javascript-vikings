// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {

        this.health = healthValue
        this.strength = strengthValue

    }
    attack() {
        return this.strength
    }
    receiveDamage(Damage) {
        this.health -= Damage

    }

}

// Viking
class Viking extends Soldier {

    constructor(nameValue, healthValue, strengthValue,) {
        super(healthValue, strengthValue)

        this.name = nameValue

    }
    receiveDamage(Damage) {
        if (this.health > Damage) {
            this.health -= Damage;

            return `${this.name} has received ${Damage} points of damage`;

        } else {
            this.health = 0;
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(healthValue, strengthValue,) {
        super(healthValue, strengthValue)



    }
    receiveDamage(Damage) {
        if (this.health > Damage) {
            this.health -= Damage;

            return `A Saxon has received ${Damage} points of damage`;

        } else {
            this.health = 0
            return 'A Saxon has died in combat'

        }

    }
}









// WarS
class War { }
