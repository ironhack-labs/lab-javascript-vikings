// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damages) {
        this.health -= damages;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damages) {
        super.receiveDamage(damages);
        let message = this.health > 0 ? `${this.name} has received ${damages} points of damage` : `${this.name} has died in act of combat`;
        return message;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damages) {
        super.receiveDamage(damages);
        let message = this.health > 0 ? `A Saxon has received ${damages} points of damage` : `A Saxon has died in combat`;
        return message;
    }
}

// TA
class TA extends Soldier {
    constructor(health, strength, name) {
        super(health, strength);
        this.name = name;
    }

    attack() {
        return this.strength * 2;
    }

    receiveDamage(damages) {
        damages = damages / 2; // OK ok I'm kind with you !
        super.receiveDamage(damages);
        let message = this.health > 0 ? `A TA has received ${damages} points of damage... how childish !` : `A TA has died in combat, he didn't deserve this win !`;
        return message;
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
        this.saxonArmy.push(saxon);
    }

    pickRandom(army) {
        return Math.floor(Math.random() * Math.floor(army.length - 1));
    }

    isDead(soldier) {
        return soldier.health <= 0;
    }

    vikingAttack() {
        let idViking = this.pickRandom(this.vikingArmy);
        let viking = this.vikingArmy[idViking];
        let idSaxon = this.pickRandom(this.saxonArmy);
        let saxon = this.saxonArmy[idSaxon];

        let result = saxon.receiveDamage(viking.attack());
        if (this.isDead(saxon)) {
            this.saxonArmy.splice(idSaxon, 1);
        }
        return result;
    }

    saxonAttack() {
        let idViking = this.pickRandom(this.vikingArmy);
        let viking = this.vikingArmy[idViking];
        let idSaxon = this.pickRandom(this.saxonArmy);
        let saxon = this.saxonArmy[idSaxon];

        let result = viking.receiveDamage(saxon.attack());
        if (this.isDead(viking)) {
            this.vikingArmy.splice(idSaxon, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 1 || this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

    // No jokes ! This was too basic !
}