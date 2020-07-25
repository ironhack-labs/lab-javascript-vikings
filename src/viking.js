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

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
        }
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
    vikingAttack() {
        const randomTeamViking = Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0;
        const randomTeamSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0;

        const playerViking = this.vikingArmy[randomTeamViking];
        const playerSaxon = this.saxonArmy[randomTeamSaxon];

        const battleAttack = playerSaxon.receiveDamage(playerViking.strength);

        if (playerSaxon.health <= 0) {
            this.saxonArmy.splice(randomTeamSaxon, 1);
        }
        return battleAttack;
    }
    saxonAttack() {
        const randomTeamViking = Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0;
        const randomTeamSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0;

        const playerViking = this.vikingArmy[randomTeamViking];
        const playerSaxon = this.saxonArmy[randomTeamSaxon];

        const battleAttack2 = playerViking.receiveDamage(playerSaxon.strength);

        if (playerViking.health <= 0) {
            this.vikingArmy.splice(randomTeamViking, 1);
        }
        return battleAttack2;
    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        else if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}



