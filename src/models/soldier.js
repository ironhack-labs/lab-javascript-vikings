class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        /* this.health -= damage; */
        this.health = Math.max(0, this.health - damage);
    }

}

const soldier = new Soldier(100, 100);