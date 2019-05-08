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
        if (damage === null || undefined) {
            return;
        }

        this.health -= parseFloat(damage);

        //TODO esto parece que es death
        if (this.health < 0) {
            this.health = 0;
        }
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

        return this.getMensajeOnDamage(damage);


    }

    getMensajeOnDamage(damage) {
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {


    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.getMensajeOnDamage(damage);


    }

    getMensajeOnDamage(damage) {
        if (this.health === 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }



}

// War
class War {
    constructor(){

    }
}
