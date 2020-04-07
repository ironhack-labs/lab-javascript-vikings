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
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack() {
        if (this.saxonArmy.length === 0) {
            return this.showStatus();
        } else {
            let golpe = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
            this.saxonArmy = this.saxonArmy.filter(salud => salud.health > 0);
            return golpe;
        }

    }
    saxonAttack() {
        if (this.vikingArmy.length === 0) {
            return this.showStatus();
        } else {
            let golpe = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
            this.vikingArmy = this.vikingArmy.filter(salud => salud.health > 0);
            return golpe;
        }

    }

    attack(attacker) {
        if (attacker instanceof Viking) {
            if (this.saxonArmy.length === 0) { //Para prevenir el ataque a un array vacio
                return this.showStatus(); //Si el array esta vacio quiere decir que la guerra termino y se muestra el mensaje
            } else {
                let golpe = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
                this.saxonArmy = this.saxonArmy.filter(salud => salud.health > 0);
                return golpe;
            }
        } else if (attacker instanceof Saxon) {
            if (this.vikingArmy.length === 0) { //Para prevenir el ataque a un array vacio
                return this.showStatus(); //Si el array esta vacio quiere decir que la guerra termino y se muestra el mensaje
            } else {
                let golpe = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
                this.vikingArmy = this.vikingArmy.filter(salud => salud.health > 0);
                return golpe;
            }
        }
    }
    showStatus() {
        let saxonsWon = "Saxons have fought for their lives and survived another day...";
        let vikingsWon = "Vikings have won the war of the century!";
        let warIsStillOn = "Vikings and Saxons are still in the thick of battle.";
        if (this.vikingArmy.length === 0) {
            return saxonsWon;
        } else if (this.saxonArmy.length === 0) {
            return vikingsWon;
        }
        return warIsStillOn;
    }
}