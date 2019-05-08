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
class Viking extends Soldier{

    constructor(name, health, strength){

    }
}

// Saxon
class Saxon {
}

// War
class War {
}
