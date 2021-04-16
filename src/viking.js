// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(dano) {
        this.health -= dano;


    }



}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {

        super(health, strength)
        this.name = name



    }

    receiveDamage(dano) {
        this.health -= dano;
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        } else if (this.health > 0) {
            return `${this.name} has received ${dano} points of damage`;

        }


    }

    battleCry() {

        return 'Odin Owns You All!'

    }
}

// Saxon
class Saxon extends Soldier {


    constructor(health, strength) {

        super(health, strength)
    }

    receiveDamage(dano) {
        this.health -= dano;
        if (this.health === 0) {
            return `A Saxon has died in combat`;
        } else if (this.health > 0) {
            return `A Saxon has received ${dano} points of damage`;

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

        this.vikingArmy.forEach((element, i) => {

            this.vikingArmy[i].health -= this.saxonArmy[i].strength;
            if (this.vikingArmy[i].health === 0) {
                this.vikingArmy.splice(i, 1)
            }

        });

        console.log(this.vikingArmy);

    }

    saxonAttack() {

        this.saxonArmy.forEach((element, i) => {

            this.saxonArmy[i].health -= this.vikingArmy[i].strength;
            if (this.saxonArmy[i].health === 0) {
                this.saxonArmy.splice(i, 1)
            }

        });

        console.log(this.saxonArmy);

    }

}